# Deployment Guide - La Asthetic Website

This guide will help you deploy your Angular application to free hosting platforms.

## Option 1: Vercel (Recommended - Easiest)

Vercel offers free hosting with automatic deployments from Git.

### Steps:

1. **Create a GitHub account** (if you don't have one):
   - Go to https://github.com
   - Sign up for a free account

2. **Install Git** (if not installed):
   - Download from: https://git-scm.com/download/win
   - Install with default settings

3. **Initialize Git and push to GitHub**:
   ```bash
   cd "c:\Users\Public\Dermat Website"
   git init
   git add .
   git commit -m "Initial commit - La Asthetic website"
   ```
   
   Then create a new repository on GitHub and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy on Vercel**:
   - Go to https://vercel.com
   - Sign up with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Angular and use the `vercel.json` config
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

**Your site URL will be:** `https://your-project-name.vercel.app`

---

## Option 2: Netlify

Netlify is another excellent free hosting option.

### Steps:

1. **Follow steps 1-3 from Vercel** (create GitHub repo)

2. **Deploy on Netlify**:
   - Go to https://www.netlify.com
   - Sign up with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"
   - Your site will be live in ~2 minutes!

**Your site URL will be:** `https://your-project-name.netlify.app`

---

## Option 3: Firebase Hosting

Firebase offers free hosting with a custom domain option.

### Steps:

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase**:
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `dist/aesthetic-dermatology/browser`
   - Configure as single-page app: **Yes**
   - Set up automatic builds: **No** (or Yes if using GitHub)

4. **Build and Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

**Your site URL will be:** `https://your-project-id.web.app`

---

## Option 4: GitHub Pages (Free but requires setup)

1. **Install angular-cli-ghpages**:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. **Build for production**:
   ```bash
   npm run build -- --base-href=/your-repo-name/
   ```

3. **Deploy**:
   ```bash
   npx angular-cli-ghpages --dir=dist/aesthetic-dermatology/browser
   ```

---

## Quick Deploy Commands

### Build the project locally first:
```bash
npm install
npm run build
```

The built files will be in: `dist/aesthetic-dermatology/browser`

---

## Recommended: Vercel or Netlify

Both Vercel and Netlify are the easiest options because:
- ✅ Free forever
- ✅ Automatic deployments from GitHub
- ✅ Custom domain support
- ✅ HTTPS included
- ✅ Fast CDN
- ✅ Zero configuration needed (we've already set it up!)

Just connect your GitHub repo and deploy!

---

## Troubleshooting

**Build fails?**
- Make sure all dependencies are installed: `npm install`
- Check that Node.js version is 18+ or 20+

**Routes not working?**
- The `vercel.json` and `netlify.toml` files include redirect rules for Angular routing
- Make sure these files are in your repository root

**Need help?**
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com
