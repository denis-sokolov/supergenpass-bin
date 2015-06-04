# API usage

[![Code Climate](https://codeclimate.com/github/denis-sokolov/supergenpass-bin/badges/gpa.svg)](https://codeclimate.com/github/denis-sokolov/supergenpass-bin)
[![bitHound Score](https://app.bithound.io/denis-sokolov/supergenpass-bin/badges/score.svg)](http://app.bithound.io/denis-sokolov/supergenpass-bin)
[![Codacy Badge](https://www.codacy.com/project/badge/9ad98d7c03284ae189f3497c7010b556)](https://www.codacy.com/app/denis_2849/supergenpass-bin)
[![Dependency Status](https://gemnasium.com/denis-sokolov/supergenpass-bin.svg)](https://gemnasium.com/denis-sokolov/supergenpass-bin)

```js
var supergenpass = require('supergenpass');

var generatedPassword = supergenpass(masterPassword, URI);
```

See the full API on the [supergenpass-lib page](https://github.com/chriszarate/supergenpass-lib/blob/master/README.md#usage).

# Command line usage

```bash
$ supergenpass -p masterpassword uri
jbAMiW94YH

$ supergenpass -h
usage: supergenpass [-h] [-v] [-l LENGTH] [-m {md5,sha512}]
                    [-p PASSWORD] [--keepSubdomains] [--secret SECRET]
                    domain

SuperGenPass for command line and Node.js modules

Positional arguments:
  domain                Domain to generate the password for

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -l LENGTH, --length LENGTH
                        Length of the generated password
  -m {md5,sha512}, --method {md5,sha512}
                        Hash function to use
  -p PASSWORD, --password PASSWORD
                        Master password
  --keepSubdomains      Do not perform subdomain removal
  --secret SECRET       Additional secret password
```
