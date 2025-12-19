# Moonlight Fiesta - VPS Deployment Guide

## Quick Deployment Steps:

### 1. Initial VPS Setup (One-time)

```bash
# SSH into your VPS
ssh root@your-vps-ip

# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y

# Create application directory
sudo mkdir -p /var/www/moonlight-fiesta
sudo chown -R $USER:$USER /var/www/moonlight-fiesta
```

### 2. Deploy Your Application

**Option A: Manual Deployment**

```bash
# On your local machine - create deployment package
npm run build
tar -czf moonlight-fiesta.tar.gz .next public package.json package-lock.json next.config.mjs

# Upload to VPS
scp moonlight-fiesta.tar.gz user@your-vps-ip:/tmp/

# On VPS - extract and setup
ssh user@your-vps-ip
cd /var/www/moonlight-fiesta
tar -xzf /tmp/moonlight-fiesta.tar.gz
npm ci --only=production

# Start with PM2
pm2 start npm --name "moonlight-fiesta" -- start
pm2 save
pm2 startup
```

**Option B: Using Git (Recommended)**

```bash
# On VPS
cd /var/www/moonlight-fiesta
git clone https://github.com/your-repo/moonlight-fiesta.git .
npm install
npm run build
pm2 start npm --name "moonlight-fiesta" -- start
pm2 save
pm2 startup
```

### 3. Configure Nginx

```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/moonlight-fiesta
```

Paste this configuration (replace yourdomain.com):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;
    client_max_body_size 10M;
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/moonlight-fiesta /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Point Your Domain

In your domain registrar (GoDaddy, Namecheap, etc.):

**A Record:**
- Host: `@`
- Value: `your-vps-ip`
- TTL: 3600

**A Record (www):**
- Host: `www`
- Value: `your-vps-ip`
- TTL: 3600

### 5. Setup SSL Certificate (Free with Let's Encrypt)

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is setup automatically
# Test renewal: sudo certbot renew --dry-run
```

### 6. Verify Deployment

```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs moonlight-fiesta

# Check Nginx status
sudo systemctl status nginx

# Check if site is accessible
curl http://localhost:3000
```

## Future Updates

To update your site:

```bash
# On VPS
cd /var/www/moonlight-fiesta

# If using Git
git pull
npm install
npm run build
pm2 restart moonlight-fiesta

# If using manual upload
# Upload new tar.gz, extract, and:
npm ci --only=production
npm run build
pm2 restart moonlight-fiesta
```

## Useful PM2 Commands

```bash
pm2 status                    # Check status
pm2 logs moonlight-fiesta     # View logs
pm2 restart moonlight-fiesta  # Restart app
pm2 stop moonlight-fiesta     # Stop app
pm2 delete moonlight-fiesta   # Remove from PM2
pm2 monit                     # Monitor CPU/Memory
```

## Troubleshooting

**Port already in use:**
```bash
sudo lsof -i :3000
sudo kill -9 <PID>
```

**Nginx not working:**
```bash
sudo nginx -t                 # Test configuration
sudo systemctl status nginx   # Check status
sudo tail -f /var/log/nginx/error.log  # Check errors
```

**Application not starting:**
```bash
pm2 logs moonlight-fiesta --lines 100
```

## For Razorpay Account

Once deployed:
1. ✅ Your website will be live at https://yourdomain.com
2. ✅ SSL certificate installed
3. ✅ Professional domain
4. ✅ Ready to submit to Razorpay

Visit Razorpay: https://dashboard.razorpay.com/signup
- Use your live website URL
- Provide business details
- Submit KYC documents
