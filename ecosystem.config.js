module.exports = {
  apps: [
    {
      name: 'llama',
      cwd: '/var/www/llama',
      script: '/var/www/api-prodf/venv/bin/python3',
      args: '-m uvicorn backend.main:app --host 0.0.0.0 --port 8005',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
