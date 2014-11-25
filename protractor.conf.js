exports.config = {
  capabilities: {
    'tunnel-identifier' : process.env.TRAVIS_JOB_NUMBER,
    'build' : process.env.TRAVIS_BUILD_NUMBER,
    'name' : 'build' + process.env.TRAVIS_BUILD_NUMBER,
    'browserName': 'chrome'
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  specs: ['spec.js']
};
