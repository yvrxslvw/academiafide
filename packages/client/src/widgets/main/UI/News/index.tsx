import { FC } from 'react';
import { MainBlockEntities } from 'entities';
import { PostFeatures } from 'features';
import cl from './style.module.scss';

export const News: FC = () => {
	const { Block } = MainBlockEntities;
	const { ShowMoreButton } = PostFeatures;

	return (
		<Block title='Últimas noticias'>
			<section className={cl.ShowMoreButton}>
				<ShowMoreButton />
			</section>
		</Block>
	);
};
