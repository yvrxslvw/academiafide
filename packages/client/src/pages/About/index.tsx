import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Block } from 'entities/block';
import { Adrian, Alejo, Data, Experience, Fernando, History } from 'widgets/about';

export const AboutPage: FC = () => {
	const { t } = useTranslation();

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
