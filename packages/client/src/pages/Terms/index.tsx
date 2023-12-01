import { FC, useEffect } from 'react';
import { Terms } from 'widgets/terms';

export const TermsPage: FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Terms />
		</>
	);
};
