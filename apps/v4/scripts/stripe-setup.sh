#!/bin/bash

# Stripe Setup & Test Script
# Automatically configures webhook secret and starts forwarding

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(dirname "$SCRIPT_DIR")"
ENV_FILE="$APP_DIR/.env.local"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}                 Stripe Setup & Test                        ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check if Stripe CLI is installed
if ! command -v stripe &> /dev/null; then
    echo -e "${RED}Error: Stripe CLI is not installed.${NC}"
    echo ""
    echo "Install it with:"
    echo -e "  ${YELLOW}brew install stripe/stripe-cli/stripe${NC}"
    exit 1
fi

echo -e "${GREEN}✓${NC} Stripe CLI found"

# Check if logged in
if ! stripe config --list &> /dev/null 2>&1; then
    echo -e "${YELLOW}Logging in to Stripe...${NC}"
    stripe login
fi

echo -e "${GREEN}✓${NC} Stripe CLI authenticated"

# Get port
PORT=${1:-4000}
WEBHOOK_URL="http://localhost:${PORT}/api/stripe/webhook"

echo ""
echo -e "${CYAN}Setting up webhook forwarding to: ${WEBHOOK_URL}${NC}"
echo ""

# Create a temporary file for webhook output
TEMP_FILE=$(mktemp)

# Start stripe listen in background to get the webhook secret
echo -e "${YELLOW}Getting webhook signing secret...${NC}"

# Run stripe listen briefly to get the secret
timeout 5s stripe listen --forward-to "$WEBHOOK_URL" 2>&1 | tee "$TEMP_FILE" &
STRIPE_PID=$!

# Wait a moment for the secret to appear
sleep 3

# Kill the background process
kill $STRIPE_PID 2>/dev/null || true

# Extract the webhook secret
WEBHOOK_SECRET=$(grep -o 'whsec_[a-zA-Z0-9]*' "$TEMP_FILE" | head -1)
rm -f "$TEMP_FILE"

if [ -z "$WEBHOOK_SECRET" ]; then
    echo -e "${RED}Could not extract webhook secret. Getting it another way...${NC}"
    # Try using stripe listen --print-secret
    WEBHOOK_SECRET=$(stripe listen --print-secret 2>/dev/null || echo "")
fi

if [ -z "$WEBHOOK_SECRET" ]; then
    echo -e "${RED}Failed to get webhook secret.${NC}"
    echo "Please run 'stripe listen' manually and copy the whsec_... value to .env.local"
    exit 1
fi

echo -e "${GREEN}✓${NC} Got webhook secret: ${WEBHOOK_SECRET:0:20}..."

# Update .env.local with the webhook secret
if [ -f "$ENV_FILE" ]; then
    # Check if STRIPE_WEBHOOK_SECRET exists
    if grep -q "^STRIPE_WEBHOOK_SECRET=" "$ENV_FILE"; then
        # Update existing value
        if [[ "$OSTYPE" == "darwin"* ]]; then
            sed -i '' "s|^STRIPE_WEBHOOK_SECRET=.*|STRIPE_WEBHOOK_SECRET=$WEBHOOK_SECRET|" "$ENV_FILE"
        else
            sed -i "s|^STRIPE_WEBHOOK_SECRET=.*|STRIPE_WEBHOOK_SECRET=$WEBHOOK_SECRET|" "$ENV_FILE"
        fi
        echo -e "${GREEN}✓${NC} Updated STRIPE_WEBHOOK_SECRET in .env.local"
    else
        # Add new line
        echo "STRIPE_WEBHOOK_SECRET=$WEBHOOK_SECRET" >> "$ENV_FILE"
        echo -e "${GREEN}✓${NC} Added STRIPE_WEBHOOK_SECRET to .env.local"
    fi
else
    echo -e "${RED}Warning: .env.local not found at $ENV_FILE${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}                     Test Card Numbers                      ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  ${GREEN}4242 4242 4242 4242${NC}  →  Success"
echo -e "  ${YELLOW}4000 0000 0000 3220${NC}  →  3D Secure"
echo -e "  ${RED}4000 0000 0000 9995${NC}  →  Declined (insufficient funds)"
echo -e "  ${RED}4000 0000 0000 0002${NC}  →  Declined (generic)"
echo ""
echo -e "  Expiry: Any future date (e.g., 12/34)"
echo -e "  CVC: Any 3 digits (e.g., 123)"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}Setup complete!${NC}"
echo ""
echo -e "${YELLOW}Now starting webhook forwarding...${NC}"
echo -e "${CYAN}Press Ctrl+C to stop${NC}"
echo ""

# Start the actual webhook forwarding
exec stripe listen --forward-to "$WEBHOOK_URL"
