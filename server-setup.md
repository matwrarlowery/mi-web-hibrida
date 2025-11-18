# MatwrarGroup Dashboard - Ubuntu AWS Server Setup

## Prerequisites
- Ubuntu 20.04+ AWS EC2 instance
- SSH access to the server
- Domain name (optional)

## Deployment Steps

### 1. Connect to your AWS server
```bash
ssh -i your-key.pem ubuntu@your-server-ip
```

### 2. Upload project files
```bash
# From your local machine
scp -i your-key.pem -r /path/to/project ubuntu@your-server-ip:~/
```

### 3. Run deployment script
```bash
chmod +x deploy.sh
./deploy.sh
```

### 4. Configure Nginx (Optional - for domain setup)
```bash
sudo apt install nginx
sudo cp nginx.conf /etc/nginx/sites-available/matwrargroup
sudo ln -s /etc/nginx/sites-available/matwrargroup /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. Configure AWS Security Group
- Open port 3000 for direct access
- Open port 80 for HTTP (if using Nginx)
- Open port 443 for HTTPS (if using SSL)

## Management Commands

### PM2 Commands
```bash
pm2 status                 # Check status
pm2 restart matwrargroup-dashboard  # Restart app
pm2 logs matwrargroup-dashboard     # View logs
pm2 stop matwrargroup-dashboard     # Stop app
```

### Update Deployment
```bash
cd /var/www/matwrargroup
git pull origin main       # If using git
npm install --legacy-peer-deps
npm run build
pm2 restart matwrargroup-dashboard
```

## Access URLs
- Production: https://app.matwrargroup.com
- Direct access: http://your-server-ip:3000