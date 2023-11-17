import { FC } from 'react';
import { MainBlockEntities } from 'entities';
import { Paragraph } from 'shared';

export const News: FC = () => {
	const { Block } = MainBlockEntities;

	return (
		<Block title='Últimas noticias'>
			<Paragraph>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum corrupti praesentium voluptas numquam eius
				debitis a ducimus ab, unde mollitia officia soluta vitae et voluptatem autem odit nobis, architecto vero.
			</Paragraph>
			<Paragraph>some text blablabla...</Paragraph>
		</Block>
	);
};
