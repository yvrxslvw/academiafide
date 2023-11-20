import { FC } from 'react';
import { AboutWidgets } from 'widgets';

export const AboutPage: FC = () => {
	const { History, Experience } = AboutWidgets;

	return (
		<>
			<History />
			<Experience />
		</>
	);
};
