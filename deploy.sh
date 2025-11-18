#!/bin/bash

# Deployment script for Ubuntu AWS server
echo "Starting deployment of MatwrarGroup Dashboard..."

# Update system packages
sudo apt update

# Install Node.js and npm if not installed
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install PM2 globally if not installed
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
fi

# Create project directory
sudo mkdir -p /var/www/matwrargroup
sudo chown -R $USER:$USER /var/www/matwrargroup

# Copy project files (assuming you're running this from project directory)
cp -r . /var/www/matwrargroup/

# Navigate to project directory
cd /var/www/matwrargroup

# Install dependencies
npm install --legacy-peer-deps

# Build the project
npm run build

# Start with PM2
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup

echo "Deployment completed! Dashboard should be running on port 3000"
echo "Access your dashboard at: http://your-server-ip:3000"