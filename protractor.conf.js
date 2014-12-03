exports.config = {
  capabilities: {
    'tunnel-identifier' : process.env.TRAVIS_JOB_NUMBER,
    'browserName': 'internet explorer',
    'proxy' : {
      'proxyType' : 'direct'
    }
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  specs: ['spec.js']
};
