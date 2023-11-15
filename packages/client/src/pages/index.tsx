import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from './main';
import { Layout } from 'widgets';

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/*',
				element: <h1>Error message</h1>,
			},
			{
				path: '/',
				element: <MainPage />,
			},
		],
	},
]);
