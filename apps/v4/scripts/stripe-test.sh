#!/bin/bash

# Stripe Test Mode Script
# This script helps you test Stripe webhooks locally

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}                    Stripe Test Mode                        ${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Check if Stripe CLI is installed
if ! command -v stripe &> /dev/null; then
    echo -e "${RED}Error: Stripe CLI is not installed.${NC}"
    echo ""
    echo "Install it with:"
    echo -e "  ${YELLOW}brew install stripe/stripe-cli/stripe${NC}"
    echo ""
    echo "Or visit: https://stripe.com/docs/stripe-cli"
    exit 1
fi

echo -e "${GREEN}✓${NC} Stripe CLI found"

# Check if logged in
if ! stripe config --list &> /dev/null; then
    echo -e "${YELLOW}You need to login to Stripe CLI first.${NC}"
    echo ""
    echo "Running: stripe login"
    stripe login
fi

echo -e "${GREEN}✓${NC} Stripe CLI authenticated"
echo ""

# Get the port from args or default to 4000
PORT=${1:-4000}
WEBHOOK_PATH="/api/stripe/webhook"
FORWARD_URL="http://localhost:${PORT}${WEBHOOK_PATH}"

echo -e "${BLUE}Configuration:${NC}"
echo -e "  Forward URL: ${FORWARD_URL}"
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

echo -e "${YELLOW}Starting webhook forwarding...${NC}"
echo -e "${YELLOW}Copy the webhook signing secret (whsec_...) to your .env file${NC}"
echo ""

# Start listening for webhooks
stripe listen --forward-to "${FORWARD_URL}"
