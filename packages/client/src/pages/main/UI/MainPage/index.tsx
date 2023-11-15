import { FC } from 'react';
import { Link, Logo } from 'shared';

export const MainPage: FC = () => {
	return (
		<>
			<h3>Hello chess!</h3>
			<Logo />
			<Link to='/testings'>Cerrar sesión</Link>
		</>
	);
};
