import { FC, useEffect } from 'react';
import { Window } from 'widgets/logup';

export const LogupPage: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Window />
		</>
	);
};
