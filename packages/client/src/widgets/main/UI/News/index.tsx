import { FC } from 'react';
import { MainBlockEntities, PostsEntities } from 'entities';

export const News: FC = () => {
	const { Block } = MainBlockEntities;
	const { LatestPost } = PostsEntities;

	return (
		<Block title='Últimas noticias'>
			<LatestPost content={<></>} showMoreButton={<></>} />
		</Block>
	);
};
