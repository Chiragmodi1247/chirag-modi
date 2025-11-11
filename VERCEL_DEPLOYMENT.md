# Deploying to Vercel

## ✅ Yes, it will work perfectly on Vercel!

Vercel serves files over HTTP, so all the `fetch()` requests in `data-loader.js` will work correctly. The portfolio will automatically load all your data from the JSON files.

## Quick Deployment Steps

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd /Users/chiragmodi/Desktop/Personal\ Workspace/Personal\ Projects/chirag-modi
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No** (for first time)
   - Project name? (Press Enter for default)
   - Directory? **Public** (IMPORTANT: Set this to `Public`)

### Option 2: GitHub Integration (Easier)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - **Root Directory**: Set to `Public`
   - Click "Deploy"

### Option 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop the `Public` folder
3. Wait for deployment

## Important Configuration

The `vercel.json` file is already configured to:
- Serve files from the `Public` directory
- Handle routing correctly
- Make JSON data files accessible

## After Deployment

1. Your site will be live at: `https://your-project-name.vercel.app`
2. All JSON data will load automatically
3. Dark mode will work
4. All features will function normally

## Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `chiragmodi.vercel.app` or your own domain)

## Troubleshooting

### If data doesn't load:
- Check browser console (F12) for errors
- Verify JSON files are in the `Public/data/` folder
- Make sure `vercel.json` root directory is set to `Public`

### If routes don't work:
- The `vercel.json` file handles routing
- All requests are routed to the `Public` folder

## Benefits of Vercel

✅ **Fast CDN**: Global content delivery  
✅ **Automatic HTTPS**: Secure by default  
✅ **Auto-deployments**: Deploy on every git push  
✅ **Free tier**: Perfect for portfolios  
✅ **Custom domains**: Easy domain setup  

## Testing Before Deployment

You can test locally using:
```bash
cd Public
python3 -m http.server 8000
```
Then visit: http://localhost:8000

This simulates how it will work on Vercel!

