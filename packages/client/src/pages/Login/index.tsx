import { FC, useEffect } from 'react';
import { LoginWidgets } from 'widgets';

export const LoginPage: FC = () => {
	const { Window } = LoginWidgets;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Window />
		</>
	);
};
