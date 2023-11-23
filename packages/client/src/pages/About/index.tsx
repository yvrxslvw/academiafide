import { FC, useEffect } from 'react';
import { Block } from 'entities';
import { AboutWidgets } from 'widgets';

export const AboutPage: FC = () => {
	const { History, Experience, Data, Adrian, Fernando, Alejo } = AboutWidgets;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<History />
			<Experience />
			<Data />
			<Block title='Conoce nuestro equipo'>
				<Adrian />
				<br />
				<Fernando />
				<br />
				<Alejo />
			</Block>
		</>
	);
};
