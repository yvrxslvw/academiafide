import { FC } from 'react';
import { Paragraph } from 'shared';
import { MainBlockEntities } from 'entities';

export const Shop: FC = () => {
	const { Block } = MainBlockEntities;

	return (
		<Block title='¡Visita nuestra tienda!'>
			<Paragraph>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae omnis, magni aperiam quam eius alias ex
				reiciendis tempora, tenetur, quod vitae veritatis dolorem pariatur similique? Maiores cupiditate reiciendis
				quibusdam aliquam.
			</Paragraph>
			<Paragraph>some text blablabla...</Paragraph>
		</Block>
	);
};
