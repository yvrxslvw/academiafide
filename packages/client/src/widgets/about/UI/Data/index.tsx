import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph } from 'shared';
import { Block } from 'entities';

export const Data: FC = () => {
	const { t } = useTranslation();
	
	return (
		<Block title={t('Algunos datos')} grey>
			<Paragraph>
				{t('- Dictamos clases magistrales online a cargo de reconocidos jugadores internacionales titulados;')}
			</Paragraph>
			<br />
			<Paragraph>
				{t('- Participaron en nuestras clases y seminarios alumnos de Argentina, Bolivia, Chile, Colombia, Ecuador, España, México, Paraguay, Perú y Uruguay;')}
			</Paragraph>
			<br />
			<Paragraph>{t('- Se otorgaron 89 títulos oficiales de FIDE;')}</Paragraph>
			<br />
			<Paragraph>
				{t('- Capacitamos de manera continuada durante todo el año lectivo a más de 160 docentes de establecimientos educativos primarios, secundarios y universitarios.')}
			</Paragraph>
		</Block>
	);
};
