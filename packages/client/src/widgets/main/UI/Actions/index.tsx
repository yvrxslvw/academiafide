import { FC } from 'react';
import { Paragraph } from 'shared';
import { MainBlockEntities } from 'entities';

export const Actions: FC = () => {
	const { Block } = MainBlockEntities;

	return (
		<Block title='¿Que estamos haciendo?' grey>
			<Paragraph>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem illum temporibus ipsam sapiente
				debitis, provident dolor architecto, minima rerum sint doloremque totam harum, enim qui nihil tempora officia
				quo.
			</Paragraph>
			<Paragraph>some text blablabla...</Paragraph>
		</Block>
	);
};
