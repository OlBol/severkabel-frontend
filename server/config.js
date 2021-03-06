module.exports = {
  appName: process.env.APP_NAME,
  __DEV__: process.env.NODE_ENV.toLowerCase() !== 'production',
  port: parseInt( process.env.PORT, 10 ),
  staticFolder: process.env.STATIC_FOLDER,
  sessionSecret: process.env.SESSION_SECRET,
  levels: JSON.parse( process.env.LEVELS ),
  cacheTTL: parseInt( process.env.CACHE_TTL, 10 ),

  // apiProjectId: process.env.API_PROJECTID,
  // apiDataset: process.env.API_DATASET,
  apiToken: process.env.API_TOKEN,
  automake: !!process.env.AUTOMAKE,
  livereload: !!process.env.LIVERELOAD,
  logLevel: process.env.LOG_LEVEL.toLowerCase(),
  langs: JSON.parse( process.env.LANGS ),
};
