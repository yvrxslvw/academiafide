import { FC } from 'react';
import { Link, Paragraph, PublicRouterPaths } from 'shared';
import { MainEntities } from 'entities';

export const News: FC = () => {
	const { Block } = MainEntities;

	return (
		<Block title='Últimas noticias'>
			<Paragraph>
				Siga nuestras noticias, cambios y actualidad, y también infórmese sobre los cursos disponibles actualmente
				directamente en nuestro sitio web:
			</Paragraph>
			<Link to={PublicRouterPaths.NEWS_PAGE}>Últimas noticias, cursos, etc.</Link>
		</Block>
	);
};
