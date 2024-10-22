import { FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppSelector } from 'shared/hooks';
import { Layout } from 'widgets/layout';
import { useRefresh } from 'processes/Auth';
import { PrivateRoutes, PublicRoutes } from './routes';

const PublicRouter = createBrowserRouter([
	{
		element: <Layout />,
		children: PublicRoutes,
	},
]);

const PrivateRouter = createBrowserRouter([
	{
		element: <Layout />,
		children: PrivateRoutes,
	},
]);

export const AppRouter: FC = () => {
	const { isLogged } = useAppSelector(state => state.user);
	useRefresh();

	return <RouterProvider router={isLogged ? PrivateRouter : PublicRouter} />;
};
