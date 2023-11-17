import { FC } from 'react';
import { MainBlockEntities, PostEntities } from 'entities';
import { PostFeatures } from 'features';

export const News: FC = () => {
	const { Block } = MainBlockEntities;
	const { LatestPost } = PostEntities;
	const { ShowMoreButton } = PostFeatures;

	return (
		<Block title='Últimas noticias'>
			<LatestPost
				content={<>Hi, I am the latest post among non-existent posts!</>}
				showMoreButton={<ShowMoreButton />}
			/>
		</Block>
	);
};
