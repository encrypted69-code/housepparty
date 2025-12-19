#!/bin/bash

# VPS Deployment Script for Moonlight Fiesta
# Update these variables with your VPS details
VPS_USER="your-username"
VPS_HOST="your-vps-ip"
VPS_PATH="/var/www/moonlight-fiesta"

echo "Building production bundle..."
npm run build

echo "Creating deployment package..."
tar -czf moonlight-fiesta.tar.gz \
  .next \
  public \
  package.json \
  package-lock.json \
  next.config.mjs \
  --exclude=node_modules

echo "Uploading to VPS..."
scp moonlight-fiesta.tar.gz $VPS_USER@$VPS_HOST:/tmp/

echo "Deploying on VPS..."
ssh $VPS_USER@$VPS_HOST << 'ENDSSH'
cd /var/www
sudo mkdir -p moonlight-fiesta
sudo chown -R $USER:$USER moonlight-fiesta
cd moonlight-fiesta

# Extract files
tar -xzf /tmp/moonlight-fiesta.tar.gz
rm /tmp/moonlight-fiesta.tar.gz

# Install dependencies
npm ci --only=production

# Restart application
pm2 delete moonlight-fiesta 2>/dev/null || true
pm2 start npm --name "moonlight-fiesta" -- start
pm2 save
pm2 startup

echo "Deployment complete!"
ENDSSH

echo "Cleaning up..."
rm moonlight-fiesta.tar.gz

echo "✅ Deployment finished!"
