import { FC, useEffect } from 'react';
import { TermsWidgets } from 'widgets';

export const TermsPage: FC = () => {
	const { Terms } = TermsWidgets;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Terms />
		</>
	);
};
