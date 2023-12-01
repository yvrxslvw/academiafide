import { FC, useEffect } from 'react';
import { Window } from 'widgets/login';

export const LoginPage: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Window />
		</>
	);
};
