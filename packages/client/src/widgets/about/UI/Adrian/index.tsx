import { FC } from 'react';
import { Images, Paragraph } from 'shared';
import { Card } from 'entities';

export const Adrian: FC = () => {
	return (
		<Card title='Adrián Randazzo' imageUrl={Images.AdrianImage}>
			<Paragraph>- Fundador y Maestro FIDE;</Paragraph>
			<Paragraph>- FIDE Trainer ejecutivo;</Paragraph>
			<Paragraph>- Entrenador y Maestro de la Federación Internacional de Ajedrez;</Paragraph>
			<Paragraph>- Mas de 20 años de experiencia en el trabajo como entrenador y profesor de Ajedrez.</Paragraph>
		</Card>
	);
};
