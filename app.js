const config = require('./config.json');
const gulp = require('gulp');
const pbo = require('gulp-armapbo');
const multiDest = require('gulp-multi-dest');

console.log(`
	__/\\\\\\\\\\\\\\\\\\\\\\__/\\\\\\\\\\\\\\\\\\\\\\\\________/\\\\\\\\\\\\\\\\\\\\\\___
	 _\\/////\\\\\\///__\\/\\\\\\////////\\\\\\____/\\\\\\/////////\\\\\\_
	  _____\\/\\\\\\_____\\/\\\\\\______\\//\\\\\\__\\//\\\\\\______\\///__
	   _____\\/\\\\\\_____\\/\\\\\\_______\\/\\\\\\___\\////\\\\\\_________
	    _____\\/\\\\\\_____\\/\\\\\\_______\\/\\\\\\______\\////\\\\\\______
	     _____\\/\\\\\\_____\\/\\\\\\_______\\/\\\\\\_________\\////\\\\\\___
	      _____\\/\\\\\\_____\\/\\\\\\_______/\\\\\\___/\\\\\\______\\//\\\\\\__
	       __/\\\\\\\\\\\\\\\\\\\\\\_\\/\\\\\\\\\\\\\\\\\\\\\\\\/___\\///\\\\\\\\\\\\\\\\\\\\\\/___
	        _\\///////////__\\////////////_______\\///////////_____
`);

config.missions.forEach(mission => {
	build(mission);
});

function build (mission) {
	let name = `${mission.name.prefix}${mission.name.random ? Date.now() : ''}`;
	if (!mission.files.length) mission.files = ['**/*.sqf', 'mission.sqm', 'description.ext'];
	gulp.src(`${mission.source}/**/*`).pipe(
		pbo.pack({
			fileName: `${name}${mission.suffix}.pbo`,
			compress: config.general.production ? mission.compression : [],
			verbose: config.general.verbose
		})
	).pipe(
			multiDest(mission.destinations)
	);
}
