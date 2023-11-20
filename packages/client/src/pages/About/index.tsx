import { Block } from 'entities';
import { FC } from 'react';
import { AboutWidgets } from 'widgets';

export const AboutPage: FC = () => {
	const { History, Experience, Data, Adrian, Fernando } = AboutWidgets;

	return (
		<>
			<History />
			<Experience />
			<Data />
			<Block title='Conoce nuestro equipo'>
				<Adrian />
				<br />
				<Fernando />
			</Block>
		</>
	);
};
