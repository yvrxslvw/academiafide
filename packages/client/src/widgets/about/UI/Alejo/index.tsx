import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Images, Paragraph } from 'shared';
import { Card } from 'entities';

export const Alejo: FC = () => {
	const { t } = useTranslation();

	return (
		<Card title='Alejo de Dovitiis' imageUrl={Images.AlejoImage}>
			<Paragraph>{t('- Maestro Internacional y FIDE Trainer (FIDE).')}</Paragraph>
		</Card>
	);
};
