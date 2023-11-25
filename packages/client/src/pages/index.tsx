import { FC, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppSelector, useGetUserInfoMutation } from 'shared';
import { Layout } from 'widgets';
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
	const [loginUser] = useGetUserInfoMutation();
	const { isLogged } = useAppSelector(state => state.user);

	useEffect(() => {
		loginUser();
	}, []);

	return <RouterProvider router={isLogged ? PrivateRouter : PublicRouter} />;
};
