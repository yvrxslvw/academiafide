import { createBrowserRouter } from 'react-router-dom';
import { MainPage } from './main';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: '/*',
		element: <h1>Error message</h1>,
	},
]);
