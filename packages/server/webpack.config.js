const path = require('path');
const jetpack = require('fs-jetpack');

module.exports = () => {
	const buildOutput = path.resolve(__dirname, 'dist');
	const envFile = path.resolve(__dirname, '.env.production');
	const pkgFile = path.resolve(__dirname, 'package.json');
	const pkg = jetpack.read(pkgFile, 'json');
	const isDev = process.env.APP_MODE === 'development';

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
		mode: isDev ? 'development' : 'production',
		output: {
			path: buildOutput,
			filename: '[name].js',
		},
	};

	return config;
};
