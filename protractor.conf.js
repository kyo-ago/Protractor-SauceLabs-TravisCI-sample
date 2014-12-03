exports.config = {
  capabilities: {
    'tunnel-identifier' : process.env.TRAVIS_JOB_NUMBER,
    'browserName': 'chrome',
    'proxy' : {
      'proxyType' : 'direct'
    }
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  specs: ['spec.js']
};
