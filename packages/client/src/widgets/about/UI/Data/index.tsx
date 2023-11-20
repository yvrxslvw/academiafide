import { FC } from 'react';
import { Paragraph } from 'shared';
import { Block } from 'entities';

export const Data: FC = () => {
	return (
		<Block title='Algunos datos' grey>
			<Paragraph>
				- Dictamos clases magistrales online a cargo de reconocidos jugadores internacionales titulados;
			</Paragraph>
			<br />
			<Paragraph>
				- Participaron en nuestras clases y seminarios alumnos de Argentina, Bolivia, Chile, Colombia, Ecuador, España,
				México, Paraguay, Perú y Uruguay;
			</Paragraph>
			<br />
			<Paragraph>- Se otorgaron 89 títulos oficiales de FIDE;</Paragraph>
			<br />
			<Paragraph>
				- Capacitamos de manera continuada durante todo el año lectivo a más de 160 docentes de establecimientos
				educativos primarios, secundarios y universitarios.
			</Paragraph>
		</Block>
	);
};
