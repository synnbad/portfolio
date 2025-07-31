#!/bin/bash

# Portfolio Deployment Script
echo "🚀 Deploying Portfolio to GitHub Pages..."

# Test build locally first
echo "📦 Testing build..."
npm run build:client

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Add all changes
    git add .
    
    # Commit with timestamp
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    git commit -m "Update portfolio - $TIMESTAMP"
    
    # Push to GitHub (this triggers automatic deployment)
    git push origin main
    
    echo "✅ Pushed to GitHub!"
    echo "🌐 Your site will be live at: https://synnbad.github.io/Portfolio-20Website/"
    echo "⏱️  Deployment usually takes 2-3 minutes"
else
    echo "❌ Build failed! Please fix errors before deploying."
fi
