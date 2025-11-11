# Fixing Vercel Node.js Version Error

## The Problem
Vercel is trying to use Node.js 14.x, but it needs 18.x (or you can disable Node.js entirely since this is a static site).

## Solution 1: Update Project Settings (Easiest)

1. Go to your Vercel project dashboard
2. Click on **Settings**
3. Go to **General** → **Node.js Version**
4. Select **18.x** (or **20.x**)
5. Save and redeploy

## Solution 2: Use the Updated Configuration

I've updated `vercel.json` and created a minimal `package.json` that specifies Node 18.x.

**Just commit and push:**
```bash
git add vercel.json package.json
git commit -m "Fix Vercel Node.js version"
git push
```

Vercel will automatically redeploy with the correct settings.

## Solution 3: Disable Node.js (Since it's a static site)

Since this is a **pure static site** (no build process needed), you can:

1. Go to Vercel project **Settings**
2. **General** → **Node.js Version**
3. Select **"No Node.js"** or **"Other"**
4. Save

This tells Vercel it's just static files, no Node.js needed.

## Recommended Approach

**Use Solution 1 or 2** - Set Node.js to 18.x or 20.x. Even though you don't need it, it won't hurt and Vercel will be happy.

The `package.json` I created specifies Node 18.x, so Vercel will use that automatically.

## After Fixing

Once you update the settings or push the new files:
1. Vercel will automatically redeploy
2. The build should succeed
3. Your site will be live!

