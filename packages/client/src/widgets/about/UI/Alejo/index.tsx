import { FC } from 'react';
import { Images, Paragraph } from 'shared';
import { Card } from 'entities';

export const Alejo: FC = () => {
	return (
		<Card title='Alejo de Dovitiis' imageUrl={Images.AlejoImage}>
			<Paragraph>- Maestro Internacional y FIDE Trainer (FIDE).</Paragraph>
		</Card>
	);
};
