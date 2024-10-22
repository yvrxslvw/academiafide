const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = () => {
	const buildOutput = path.resolve(__dirname, 'dist');
	const envFile = path.resolve(__dirname, '.env.production');
	const pkgFile = path.resolve(__dirname, 'package.json');
	const pkg = jetpack.read(pkgFile, 'json');

	jetpack.remove(buildOutput + '/.env');
	jetpack.remove(buildOutput + '/main.js');
	jetpack.remove(buildOutput + '/package.json');

	jetpack.copy(envFile, buildOutput + '/.env');
	jetpack.write(buildOutput + '/package.json', {
		name: pkg.name,
		version: pkg.version,
		description: pkg.description,
		author: pkg.author,
		private: pkg.private,
		license: pkg.license,
		scripts: {
			start: 'node main.js',
		},
		dependencies: pkg.dependencies,
	});

	const config = {
		mode: 'none',
		output: {
			path: buildOutput,
			filename: '[name].js',
		},
	};

	return config;
};
