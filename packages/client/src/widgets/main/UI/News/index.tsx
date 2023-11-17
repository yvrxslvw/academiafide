import { FC } from 'react';
import { MainBlockEntities, PostEntities } from 'entities';

export const News: FC = () => {
	const { Block } = MainBlockEntities;
	const { LatestPost } = PostEntities;

	return (
		<Block title='Últimas noticias'>
			<LatestPost content={<></>} showMoreButton={<></>} />
		</Block>
	);
};
