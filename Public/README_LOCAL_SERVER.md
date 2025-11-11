# Running the Portfolio Locally

## Important: Use a Local Server

This portfolio uses JavaScript to load data from JSON files. **Browsers block file:// protocol requests for security reasons**, so you need to run a local server.

## Quick Start Options

### Option 1: Python (Recommended - Easiest)
```bash
cd Public
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Option 2: Node.js (if you have it)
```bash
cd Public
npx http-server -p 8000
```
Then open: http://localhost:8000

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: PHP (if installed)
```bash
cd Public
php -S localhost:8000
```
Then open: http://localhost:8000

## Why This is Needed

The portfolio dynamically loads content from JSON files in the `data/` folder. Browsers block these requests when opening HTML files directly (file:// protocol) for security reasons.

## Troubleshooting

If you see old data:
1. **Hard refresh** the page: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Clear browser cache**
3. **Check browser console** (F12) for any errors
4. Make sure you're using a local server, not opening the file directly

## Production Deployment

For production (Firebase, Netlify, Vercel, etc.), the site will work automatically as these platforms serve files over HTTP.

