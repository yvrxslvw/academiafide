import { FC } from 'react';
import { Card } from 'entities';
import { Images, Paragraph } from 'shared';

export const Fernando: FC = () => {
	return (
		<Card title='Fernando Peralta' imageUrl={Images.FernandoImage}>
			<Paragraph>- Gran Maestro Internacional;</Paragraph>
			<Paragraph>- FIDE Trainer;</Paragraph>
			<Paragraph>- Gran Maestro Internacional de ajedrez;</Paragraph>
			<Paragraph>- Representante argentino en 7 Olimpiadas;</Paragraph>
			<Paragraph>- Campeón de Argentina en dos ocasiones;</Paragraph>
			<Paragraph>- Ganador de numerosos abiertos internacionales en Europa y América;</Paragraph>
			<Paragraph>- Más de 15 años de experiencia como profesor y entrenador de ajedrez de alto rendimiento;</Paragraph>
		</Card>
	);
};
