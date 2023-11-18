import { FC } from 'react';
import { Paragraph } from 'shared';
import { MainEntities } from 'entities';

export const Actions: FC = () => {
	const { Block } = MainEntities;

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
