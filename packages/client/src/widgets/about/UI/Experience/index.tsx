import { FC } from 'react';
import { Paragraph } from 'shared';
import { Block } from 'entities';

export const Experience: FC = () => {
	return (
		<Block title='Nuestra experencia como Academia'>
			<Paragraph>
				A pesar de nuestra corta existencia Academia FIDE es muy activa. Hemos tenido oportunidad de organizar numerosos
				seminarios que otorgaron títulos reconocidos por la Academia tanto de manera presencial como online. Trabajamos
				durante todo el año lectivo escolar capacitando profesores de diferentes instituciones educativas, brindándoles
				un programa de trabajo y un seguimiento continuo en sus actividades.
			</Paragraph>
		</Block>
	);
};
