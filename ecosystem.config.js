module.exports = {
  apps: [{
    name: 'moonlight-fiesta',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/houseparty-new',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 4028
    }
  }]
};
