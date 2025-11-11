# Vercel Environment Variables Setup

## Required Environment Variables for Deployment

To deploy this application to Vercel, you need to configure the following environment variables in your Vercel project settings.

### 1. App Configuration

```bash
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
# or your custom domain: https://www.pitsiui.com
```

### 2. Database

```bash
DATABASE_URL=postgresql://user:password@host:port/database
# Use your Railway public connection string
# Format: postgresql://postgres:PASSWORD@HOSTNAME.proxy.rlwy.net:PORT/railway
```

### 3. Authentication

```bash
# Better Auth
BETTER_AUTH_SECRET=your-secret-key
BETTER_AUTH_URL=https://your-domain.vercel.app

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Stripe (Optional - only if using payments)

```bash
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_PRIVATE_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 5. Other (Optional)

```bash
NEXT_PUBLIC_LOGO_DEV_TOKEN=your-logo-dev-token
NEXT_SECRET_LOGO_DEV_TOKEN=your-secret-logo-dev-token
PLAYWRIGHT_MCP_EXTENSION_TOKEN=your-playwright-token
```

---

## How to Add Environment Variables in Vercel

### Method 1: Via Vercel Dashboard

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - Enter the **Key** (e.g., `DATABASE_URL`)
   - Enter the **Value** (e.g., your database connection string)
   - Select which environments to apply to (Production, Preview, Development)
5. Click **Save**

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Link your project
vercel link

# Add environment variables
vercel env add DATABASE_URL
vercel env add BETTER_AUTH_SECRET
vercel env add GITHUB_CLIENT_ID
# ... add all required variables
```

### Method 3: Using `.env` Import (Recommended)

1. Create a `.env.production` file locally with all your production environment variables
2. Go to Vercel Dashboard → Settings → Environment Variables
3. Click **Import .env** button
4. Upload your `.env.production` file
5. Select the environments (Production, Preview, Development)

---

## Important Notes

### OAuth Callback URLs

Make sure to update your OAuth provider callback URLs:

**GitHub OAuth App:**
- Go to: https://github.com/settings/developers
- Update Authorization callback URL to: `https://your-domain.vercel.app/api/auth/callback/github`

**Google OAuth App:**
- Go to: https://console.cloud.google.com/apis/credentials
- Update Authorized redirect URIs to: `https://your-domain.vercel.app/api/auth/callback/google`

### Database Connection

- Use the **public** Railway connection string (with `.proxy.rlwy.net`), not the internal one
- Railway's internal hostnames (`postgres.railway.internal`) only work within Railway's network

### Better Auth Secret

Generate a secure random secret for `BETTER_AUTH_SECRET`:

```bash
# Generate a secure random secret
openssl rand -base64 32
```

---

## After Setting Environment Variables

1. **Redeploy** your application for the changes to take effect
2. Go to Deployments tab
3. Click on the latest deployment
4. Click **Redeploy** button

Or trigger a new deployment by pushing to your git branch.

---

## Troubleshooting

### Build Fails with "DATABASE_URL is not set"
- Make sure DATABASE_URL is set in Vercel environment variables
- The database connection is now lazy-loaded and won't connect during build

### OAuth not working
- Verify callback URLs in GitHub/Google match your Vercel domain
- Check that CLIENT_ID and CLIENT_SECRET are correctly set in Vercel

### Stripe errors
- If not using Stripe, these warnings are safe to ignore
- If using Stripe, make sure all three variables are set (PUBLISHABLE_KEY, PRIVATE_KEY, WEBHOOK_SECRET)
