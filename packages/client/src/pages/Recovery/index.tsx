import { FC, useEffect } from 'react';
import { Window } from 'widgets/recovery';

export const RecoveryPage: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Window />
		</>
	);
};
