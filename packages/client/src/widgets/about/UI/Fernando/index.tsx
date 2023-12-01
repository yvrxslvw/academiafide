import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph } from 'shared/UI';
import { Images } from 'shared/assets';
import { Card } from 'entities/card';

export const Fernando: FC = () => {
	const { t } = useTranslation();

	return (
		<Card title='Fernando Peralta' imageUrl={Images.FernandoImage}>
			<Paragraph>{t('- Gran Maestro Internacional;')}</Paragraph>
			<Paragraph>{t('- FIDE Trainer;')}</Paragraph>
			<Paragraph>{t('- Gran Maestro Internacional de ajedrez;')}</Paragraph>
			<Paragraph>{t('- Representante argentino en 7 Olimpiadas;')}</Paragraph>
			<Paragraph>{t('- Campeón de Argentina en dos ocasiones;')}</Paragraph>
			<Paragraph>{t('- Ganador de numerosos abiertos internacionales en Europa y América;')}</Paragraph>
			<Paragraph>
				{t('- Más de 15 años de experiencia como profesor y entrenador de ajedrez de alto rendimiento;')}
			</Paragraph>
		</Card>
	);
};
