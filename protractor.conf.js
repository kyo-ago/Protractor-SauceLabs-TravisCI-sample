exports.config = {
	capabilities: {
		'browserName': 'chrome'
	},
	sauceUser: 'SauseLabUserName',
	sauceKey: 'SauseLabAccessKey',
	specs: ['spec.js']
};
