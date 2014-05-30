var argparse = require('argparse');
var prompt = require('simple-prompt');

var cfg = require('./package.json');
var supergenpass = require('./supergenpass.js');


var parser = new (require('argparse').ArgumentParser)({
	version: cfg.version,
	addHelp: true,
	description: cfg.description
});
parser.addArgument(['domain'], {help: 'Domain to generate the password for'});
parser.addArgument(['-p', '--password'], {help: 'Master password'});
var args = parser.parseArgs();


var output = function(args) {
	process.stdout.write(
		supergenpass(args.password, args.domain) + '\n'
	);
};


if (args.password) {
	output(args);
} else {
	(new prompt([{
		question: 'Master password',
		required: true
	}])).create().then(function(err, result){
		if (err) throw err;
		args.password = result.Masterpassword;
		output(args);
	});
}
