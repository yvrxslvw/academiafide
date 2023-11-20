import { FC } from 'react';
import { Images, Paragraph } from 'shared';
import { Card } from 'entities';

export const Adrian: FC = () => {
	return (
		<Card title='Adrián Randazzo' imageUrl={Images.AdrianImage}>
			<Paragraph>- Fundador y Maestro FIDE;</Paragraph>
			<br />
			<Paragraph>- FIDE Trainer ejecutivo;</Paragraph>
			<br />
			<Paragraph>- Entrenador y Maestro de la Federación Internacional de Ajedrez;</Paragraph>
			<br />
			<Paragraph>- Mas de 20 años de experiencia en el trabajo como entrenador y profesor de Ajedrez.</Paragraph>
		</Card>
	);
};
