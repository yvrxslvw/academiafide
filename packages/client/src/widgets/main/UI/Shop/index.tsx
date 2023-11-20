import { FC } from 'react';
import { Link, Paragraph, PublicRouterPaths } from 'shared';
import { Block } from 'entities';

export const Shop: FC = () => {
	return (
		<Block title='¡Visita nuestra tienda!'>
			<Paragraph>
				En nuestra tienda encontrarás cursos de ajedrez tanto para principiantes como para ajedrecistas avanzados.
			</Paragraph>
			<Paragraph>Visita nuestra tienda de cursos y obtén más conocimientos sobre el juego y mucho más:</Paragraph>
			<Link to={PublicRouterPaths.SHOP_PAGE}>Comprar cursos y más</Link>
		</Block>
	);
};
