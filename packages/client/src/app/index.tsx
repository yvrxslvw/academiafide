import { FC } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'pages';
import { setupStore } from './store';
import '@styles';

const store = setupStore();

export const App: FC = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
};
