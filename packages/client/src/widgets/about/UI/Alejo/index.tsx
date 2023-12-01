import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph } from 'shared/UI';
import { Images } from 'shared/assets';
import { Card } from 'entities/card';

export const Alejo: FC = () => {
	const { t } = useTranslation();

	return (
		<Card title='Alejo de Dovitiis' imageUrl={Images.AlejoImage}>
			<Paragraph>{t('- Maestro Internacional y FIDE Trainer (FIDE).')}</Paragraph>
		</Card>
	);
};
