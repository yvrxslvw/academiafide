import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			shared: '/src/shared',
			entities: '/src/entities',
			features: '/src/features',
			widgets: '/src/widgets',
			pages: '/src/pages',
			'processes': '/src/processes',
			app: '/src/app',
			'@styles': '/src/shared/styles/index.scss',
		},
	},
	build: {
		chunkSizeWarningLimit: 1024,
	},
});
