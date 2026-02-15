# Deploy La Asthetic Website on Netlify

Follow these steps to put your site live on Netlify (free).

---

## Step 1: Put your code on GitHub

Netlify deploys from a Git repository. If your project is not on GitHub yet:

1. **Install Git** (if needed)**  
   - Download: https://git-scm.com/download/win  
   - Run the installer (defaults are fine).

2. **Create a GitHub account** (if needed)**  
   - Go to https://github.com and sign up.

3. **Create a new repository on GitHub**  
   - Click **New** (or **+** → **New repository**).  
   - Name it (e.g. `la-asthetic-website`).  
   - Leave it empty (no README, no .gitignore).  
   - Click **Create repository**.

4. **Push your project to GitHub**  
   In PowerShell or Command Prompt, run (replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name):

   ```powershell
   cd "c:\Users\Public\Dermat Website"
   git init
   git add .
   git commit -m "Initial commit - La Asthetic website"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

   If asked, sign in to GitHub (browser or token).

---

## Step 2: Sign up / log in to Netlify

1. Go to **https://www.netlify.com**
2. Click **Sign up** or **Log in**.
3. Choose **Sign up with GitHub** (or **Log in with GitHub**).
4. Authorize Netlify to access your GitHub account.

---

## Step 3: Create a new site from GitHub

1. In the Netlify dashboard, click **Add new site** → **Import an existing project**.
2. Under **Connect to Git provider**, click **GitHub**.
3. If asked, authorize Netlify to access your GitHub repositories.
4. In **Import from GitHub**, find and select your repository (e.g. `la-asthetic-website`).
5. Click **Import**.

---

## Step 4: Check build settings

Netlify will read your `netlify.toml` and fill in:

- **Build command:** `npm run build`
- **Publish directory:** `dist/aesthetic-dermatology/browser`

If those are already set, leave them as is. If not, enter them manually.

Then click **Deploy site** (or **Deploy [your-repo]**).

---

## Step 5: Wait for the build

- Netlify will install dependencies, run `npm run build`, and deploy.
- This usually takes 1–3 minutes.
- When it’s done, you’ll see **Published** and a live URL like:

  **https://something-random-123.netlify.app**

---

## Step 6: Open your site

- Click the live URL to open your La Asthetic site.
- You can change the site name under **Site configuration** → **Domain management** → **Edit site name** (e.g. `la-asthetic.netlify.app`).

---

## Summary

| Step | Action |
|------|--------|
| 1 | Put project on GitHub (git init, add, commit, remote, push) |
| 2 | Sign up / log in at netlify.com with GitHub |
| 3 | Add new site → Import from GitHub → Select your repo |
| 4 | Confirm build command and publish directory, then Deploy |
| 5 | Wait for build to finish and open the given URL |

---

## After deployment

- **Updates:** Push new commits to the `main` branch on GitHub; Netlify will automatically rebuild and deploy.
- **Custom domain:** In Netlify: **Site configuration** → **Domain management** → **Add custom domain**.
- **Build logs:** **Deploys** → click a deploy → **Deploy log** to see errors if a build fails.

Your `netlify.toml` already configures build, publish folder, redirects for Angular routing, and cache headers.
