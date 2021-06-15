module.exports = {
  apps: [
    {
      name: 'youtubeVideoDownloadFrontend',
      script: 'npm run start --port 3003',
      
      env: {
       "NODE_ENV": "production",
      },
    }, {
      name: 'youtubeVideoDownloadBackend',
      script: 'node core.js',

      env: {
       "NODE_ENV": "production",
      },
    },
    // optionally a second project
],};
