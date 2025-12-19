#!/bin/bash
# Moonlight Fiesta Deployment - houseparty.sbs
# Run these commands on your VPS

echo "Starting deployment for houseparty.sbs..."
echo ""

# Step 1: Run setup
echo "Step 1: Setting up Node.js, PM2, Nginx..."
bash setup.sh

echo ""
echo "Waiting 5 seconds..."
sleep 5

# Step 2: Configure Nginx
echo "Step 2: Configuring Nginx for houseparty.sbs..."
bash configure-nginx.sh houseparty.sbs

echo ""
echo "Waiting 5 seconds..."
sleep 5

# Step 3: Install SSL
echo "Step 3: Installing SSL certificate..."
bash install-ssl.sh houseparty.sbs

echo ""
echo "================================"
echo "✅ Deployment Complete!"
echo "================================"
echo ""
echo "Your website is now live at:"
echo "  https://houseparty.sbs"
echo "  https://www.houseparty.sbs"
echo ""
echo "Useful commands:"
echo "  pm2 status              - Check app status"
echo "  pm2 logs moonlight-fiesta - View logs"
echo "  pm2 restart moonlight-fiesta - Restart app"
echo ""
