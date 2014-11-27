exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  specs: ['spec.js']
};
