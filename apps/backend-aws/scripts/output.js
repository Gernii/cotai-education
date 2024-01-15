function handler(data, _serverless, _options) {
	console.log('Stack Output: ');
	console.log('---');
	Object.entries(data).forEach(([key, value]) => {
		console.log(`\x1b[37m${key}\x1b[0m: \x1b[34m${value}\x1b[0m`);
	});
	console.log('---');
}

module.exports = { handler };
