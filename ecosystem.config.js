module.exports = {
  apps: [{
    name: 'matwrargroup-dashboard',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/matwrargroup',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};