#!/bin/bash
# Moonlight Fiesta - VPS Setup Script
# Run this on your VPS: bash setup.sh

set -e

echo "================================"
echo "Moonlight Fiesta - VPS Setup"
echo "================================"
echo ""

# Update system
echo "📦 Updating system packages..."
apt update && apt upgrade -y

# Install Node.js 18
echo "📦 Installing Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Verify Node installation
echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"

# Install PM2
echo "📦 Installing PM2..."
npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
apt install nginx -y

# Create application directory
echo "📁 Creating application directory..."
mkdir -p /var/www/moonlight-fiesta
cd /var/www/moonlight-fiesta

# Extract application files
echo "📦 Extracting application..."
tar -xzf /tmp/moonlight-fiesta.tar.gz
rm /tmp/moonlight-fiesta.tar.gz

# Install dependencies
echo "📦 Installing Node.js dependencies..."
npm install --production

# Start application with PM2
echo "🚀 Starting application..."
pm2 delete moonlight-fiesta 2>/dev/null || true
pm2 start npm --name "moonlight-fiesta" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
env PATH=$PATH:/usr/bin pm2 startup systemd -u root --hp /root

echo ""
echo "================================"
echo "✅ Setup Complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Configure your domain DNS to point to: 159.195.84.250"
echo "2. Run: bash configure-nginx.sh yourdomain.com"
echo "3. Run: bash install-ssl.sh yourdomain.com"
echo ""
echo "Check application status:"
echo "  pm2 status"
echo "  pm2 logs moonlight-fiesta"
echo ""
