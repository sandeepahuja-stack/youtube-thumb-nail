module.exports = {
  apps: [
    {
      name: 'youtubeThubnailDownloadFrontend',
      script: 'npm run start --port 3001',
      
      env: {
       "NODE_ENV": "production",
      },
    }, {
      name: 'youtubeThubnailDownloadBackend',
      script: 'node core.js',

      env: {
       "NODE_ENV": "production",
      },
    },
    // optionally a second project
],};
