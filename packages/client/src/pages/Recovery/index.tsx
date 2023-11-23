import { FC, useEffect } from 'react';
import { RecoveryWidgets } from 'widgets';

export const RecoveryPage: FC = () => {
	const { Window } = RecoveryWidgets;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Window />
		</>
	);
};
