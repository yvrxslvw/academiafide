import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph } from 'shared/UI';
import { Images } from 'shared/assets';
import { Card } from 'entities/card';

export const Adrian: FC = () => {
	const { t } = useTranslation();

	return (
		<Card title='Adrián Randazzo' imageUrl={Images.AdrianImage}>
			<Paragraph>{t('- Fundador y Maestro FIDE;')}</Paragraph>
			<Paragraph>{t('- FIDE Trainer ejecutivo;')}</Paragraph>
			<Paragraph>{t('- Entrenador y Maestro de la Federación Internacional de Ajedrez;')}</Paragraph>
			<Paragraph>{t('- Mas de 20 años de experiencia en el trabajo como entrenador y profesor de Ajedrez.')}</Paragraph>
		</Card>
	);
};
