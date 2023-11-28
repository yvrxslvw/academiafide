import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Block } from 'entities';
import { AboutWidgets } from 'widgets';

export const AboutPage: FC = () => {
	const { t } = useTranslation();
	const { History, Experience, Data, Adrian, Fernando, Alejo } = AboutWidgets;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<History />
			<Experience />
			<Data />
			<Block title={t('Conoce nuestro equipo')}>
				<Adrian />
				<br />
				<Fernando />
				<br />
				<Alejo />
			</Block>
		</>
	);
};
