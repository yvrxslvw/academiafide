import { Block } from 'entities';
import { FC } from 'react';
import { Link, Paragraph } from 'shared';

// ! To change link
export const Actions: FC = () => {
	return (
		<Block title='¿Que estamos haciendo?' grey>
			<Paragraph>
				Impartimos clases tanto online como presenciales, organizamos torneos de ajedrez, vendemos cursos de ajedrez
				para todos los niveles, también organizamos nuestros propios seminarios y preparamos a jugadores de todos los
				niveles para los próximos torneos.
			</Paragraph>
			<Paragraph>
				Y además, te recomendamos que conozcas más sobre nuestro equipo y quiénes somos en el mundo del ajedrez:
			</Paragraph>
			<Link to='/'>Quiénes somos y qué hacemos</Link>
		</Block>
	);
};
