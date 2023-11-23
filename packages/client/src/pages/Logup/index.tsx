import { FC, useEffect } from 'react';
import { LogupWidgets } from 'widgets';

export const LogupPage: FC = () => {
	const { Window } = LogupWidgets;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Window />
		</>
	);
};
