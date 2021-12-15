const PROXY_CONFIG = [
  {
    context: ['/api/auth/signin'],
    target: 'http://localhost:3000',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  },
];

module.exports = PROXY_CONFIG;
