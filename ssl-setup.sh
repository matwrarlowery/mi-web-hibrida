#!/bin/bash

# SSL Setup for app.matwrargroup.com
echo "Setting up SSL for app.matwrargroup.com..."

# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d app.matwrargroup.com

# Auto-renewal setup
sudo crontab -l | { cat; echo "0 12 * * * /usr/bin/certbot renew --quiet"; } | sudo crontab -

echo "SSL setup completed!"