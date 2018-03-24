# ArmA Mission Builder

## Configuration File

### General Settings

```json
general: {
	"production": false,
	"verbose": false
}
```

* `production`
	- You can specify if your next build should be production ready which will minify specific files to reduce your mission size. You can modify what files are minified per mission config.
* `verbose`
	- You can choose to see all the files be compressed and packed as it happens, or just see a progress bar alone.

### Mission Object

There can be multiple mission object specified to mass pack missions or mods.

```json
{
	"name": {
		"prefix": "",
		"random": true
	},
	"source": "",
	"destinations": [],
	"suffix": "",
	"compression": []
}
```

* `name`
	- `prefix`
		- The prefix is added at the start of the file name.
	- `random`
		- Random allows you to add a timestamp to the file name for better handling in ArmA during restarts and version archiving.
* `source`
	- This is the path to the folder you want compiled.
* `destinations`
	- You can specify multiple destinations for the final "pbo" to be coppied into.
* `suffix`
	- The suffix is typically the mission map shorthand, ie `.altis` or `.tanoa`.
* `compression`
	- You can specify your own list of files to be minified in production builds.

# License
Copyright 2018 Ibex Development Solutions LTD

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
