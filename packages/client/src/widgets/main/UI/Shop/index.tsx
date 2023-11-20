import { Block } from 'entities';
import { FC } from 'react';
import { Link, Paragraph } from 'shared';

// ! To change link
export const Shop: FC = () => {
	return (
		<Block title='¡Visita nuestra tienda!'>
			<Paragraph>
				En nuestra tienda encontrarás cursos de ajedrez tanto para principiantes como para ajedrecistas avanzados.
			</Paragraph>
			<Paragraph>Visita nuestra tienda de cursos y obtén más conocimientos sobre el juego y mucho más:</Paragraph>
			<Link to='/'>Comprar cursos y más</Link>
		</Block>
	);
};
