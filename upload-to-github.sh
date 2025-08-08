#!/bin/bash

# Script to upload test files to GitHub repository sajebulan/addroles

echo "🚀 Uploading test files to GitHub repository sajebulan/addroles"

# Initialize git repository if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📋 Adding all test files..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Add Playwright test suite for Jehan app role management

- AddRole.spec.ts: Test for creating Supervisor role with permissions
- AddUser.spec.ts: Test for adding users to roles  
- validateUser.spec.ts: Comprehensive validation of user permissions and CRUD operations
- Updated role name from Beyonce to Supervisor throughout test suite
- Includes package.json, playwright.config.ts and other project files"

# Add remote repository
echo "🔗 Adding remote repository..."
git remote add origin https://github.com/sajebulan/addroles.git

# Push to main branch
echo "⬆️ Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Upload complete! Check your repository at: https://github.com/sajebulan/addroles"
