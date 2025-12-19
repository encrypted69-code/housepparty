#!/bin/bash
# SSL Installation Script
# Usage: bash install-ssl.sh yourdomain.com

if [ -z "$1" ]; then
  echo "Usage: bash install-ssl.sh yourdomain.com"
  exit 1
fi

DOMAIN=$1

echo "Installing SSL certificate for $DOMAIN..."

# Install Certbot
apt install certbot python3-certbot-nginx -y

# Get SSL certificate
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN --redirect

echo "✅ SSL installed for $DOMAIN"
echo "Visit: https://$DOMAIN"
