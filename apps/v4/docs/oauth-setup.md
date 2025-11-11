# OAuth Setup Guide

This guide will help you set up GitHub and Google OAuth authentication for your application.

## Prerequisites

- A GitHub account
- A Google Cloud Platform account
- Your application running locally (default: `http://localhost:4000`)

---

## GitHub OAuth Setup

### 1. Create a GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"New OAuth App"** or **"Register a new application"**
3. Fill in the application details:
   - **Application name**: Your app name (e.g., "Pitsi UI")
   - **Homepage URL**: `http://localhost:4000` (for local development)
   - **Authorization callback URL**: `http://localhost:4000/api/auth/callback/github`
4. Click **"Register application"**

### 2. Get your credentials

1. After creating the app, you'll see your **Client ID**
2. Click **"Generate a new client secret"** to get your **Client Secret**
3. Copy both values

### 3. Add to environment variables

Add to your `.env.local` file:

```env
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here
```

### 4. Production Setup

For production, create another OAuth app with:
- **Homepage URL**: `https://yourdomain.com`
- **Authorization callback URL**: `https://yourdomain.com/api/auth/callback/github`

---

## Google OAuth Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google+ API** (or **Google People API**)

### 2. Configure OAuth Consent Screen

1. Go to **APIs & Services > OAuth consent screen**
2. Choose **External** (for testing) or **Internal** (for organization)
3. Fill in the required information:
   - **App name**: Your app name
   - **User support email**: Your email
   - **Developer contact information**: Your email
4. Add scopes (optional, default scopes are sufficient):
   - `userinfo.email`
   - `userinfo.profile`
5. Add test users (if using External type in testing mode)
6. Click **Save and Continue**

### 3. Create OAuth Credentials

1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials > OAuth client ID**
3. Choose **Web application**
4. Fill in the details:
   - **Name**: Your app name
   - **Authorized JavaScript origins**:
     - `http://localhost:4000` (for local)
   - **Authorized redirect URIs**:
     - `http://localhost:4000/api/auth/callback/google`
5. Click **Create**

### 4. Get your credentials

1. Copy the **Client ID** and **Client Secret**

### 5. Add to environment variables

Add to your `.env.local` file:

```env
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```

### 6. Production Setup

For production:
- Add your production domain to **Authorized JavaScript origins**: `https://yourdomain.com`
- Add your production callback to **Authorized redirect URIs**: `https://yourdomain.com/api/auth/callback/google`

---

## Environment Variables Summary

Your `.env.local` file should contain:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:4000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/pitsi_ui

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
```

---

## Testing

1. Restart your development server:
   ```bash
   pnpm dev
   ```

2. Navigate to `/signin` or `/signup`

3. Click on **"Login with GitHub"** or **"Login with Google"**

4. You should be redirected to the provider's authorization page

5. After authorization, you'll be redirected back to `/blocks`

---

## Troubleshooting

### GitHub OAuth Issues

- **Error: "redirect_uri_mismatch"**
  - Make sure your callback URL in GitHub settings matches exactly: `http://localhost:4000/api/auth/callback/github`
  - Check that `NEXT_PUBLIC_APP_URL` is set correctly

### Google OAuth Issues

- **Error: "redirect_uri_mismatch"**
  - Verify your authorized redirect URIs in Google Cloud Console
  - Make sure you've added: `http://localhost:4000/api/auth/callback/google`

- **Error: "Access blocked: This app's request is invalid"**
  - Make sure you've completed the OAuth consent screen configuration
  - Add your email as a test user if using External type

- **Error: "403: access_denied"**
  - Your app is in testing mode and the user is not added as a test user
  - Add the user's email to test users in OAuth consent screen

### General Issues

- **Providers not working**
  - Make sure environment variables are set (check `.env.local`)
  - Restart the dev server after adding environment variables
  - Check browser console for errors
  - Verify that `NEXT_PUBLIC_APP_URL` matches your current URL

- **Database errors**
  - Make sure your database is running
  - Verify that the `account` table exists in your database schema
  - Better-auth should automatically create the necessary tables

---

## Security Notes

- **Never commit** your `.env.local` file to version control
- Use different OAuth credentials for development and production
- Keep your client secrets secure
- Rotate secrets regularly in production
- Use environment-specific callback URLs

---

## Additional Resources

- [Better Auth Documentation](https://better-auth.com/docs)
- [GitHub OAuth Documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
