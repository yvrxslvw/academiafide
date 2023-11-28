import i18n from 'i18next';
import ReactDOM from 'react-dom/client';
import { initReactI18next } from 'react-i18next';
import { App } from 'app';
import resources from './languageSchema.json';

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found.');

i18n.use(initReactI18next).init({
	resources,
	lng: 'es',
	fallbackLng: ['es', 'en', 'ru'],
	interpolation: {
		escapeValue: false,
	},
});

ReactDOM.createRoot(root).render(<App />);
