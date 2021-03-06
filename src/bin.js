#!/usr/bin/env node
var argparse = require('argparse');
var prompt = require('pw');

var cfg = require('../package.json');
var supergenpass = require('./index.js');


var parser = new argparse.ArgumentParser({
	version: cfg.version,
	addHelp: true,
	description: cfg.description
});
parser.addArgument(['domain'], {help: 'Domain to generate the password for'});
parser.addArgument(['-l', '--length'], {
	defaultValue: 10,
	help: 'Length of the generated password',
	type: 'int'
});
parser.addArgument(['-m', '--method'], {
	choices: ['md5', 'sha512'],
	defaultValue: 'md5',
	help: 'Hash function to use',
	type: 'string'
});
parser.addArgument(['-p', '--password'], {help: 'Master password'});
parser.addArgument(['--keepSubdomains'], {
	action: 'storeTrue',
	default: false,
	help: 'Do not perform subdomain removal'
});
parser.addArgument(['--secret'], {
	defaultValue: '',
	help: 'Additional secret password'
});
var args = parser.parseArgs();


var output = function(args) {
	supergenpass(args.password, args.domain, {
		length: args.length,
		method: args.method,
		removeSubdomains: !args.keepSubdomains,
		secret: args.secret
	}, function(generated){
		process.stdout.write(generated + '\n');
	});
};


if (args.password) {
	output(args);
} else {
	process.stderr.write('Master password: ');
	prompt('', function(password){
		if (!password.length) process.exit(1);
		args.password = password;
		output(args);
	});
}
