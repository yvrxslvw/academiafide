import { FC } from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from 'pages';
import { setupStore } from './store';
import '@styles';

const store = setupStore();

export const App: FC = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};
