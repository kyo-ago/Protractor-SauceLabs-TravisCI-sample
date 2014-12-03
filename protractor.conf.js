exports.config = {
  capabilities: {
    'tunnel-identifier' : process.env.TRAVIS_JOB_NUMBER,
    'browserName': 'chrome',
    capabilities: {
      'proxy': {
        'proxyType': 'manual',
        'httpProxy': 'localhost:8087'
      }
    }
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  specs: ['spec.js']
};
