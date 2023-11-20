import { FC } from 'react';
import { Paragraph } from 'shared';
import { Block } from 'entities';

export const History: FC = () => {
	return (
		<Block title='Nuestra breve historia' grey>
			<Paragraph>
				Después de muchos años como entrenadores el MF y FT Adrián Randazzo y el GM y FT Fernando Peralta decidimos
				juntar esfuerzos en un proyecto que nos permitiera transmitir de manera óptima nuestros conocimientos y
				experiencia. La visión Adrián con una larga experiencia como entrenador y educador docente se complementa con la
				de Fernando, entrenador de alta competencia y jugador profesional.
			</Paragraph>
			<br />
			<Paragraph>
				En marzo de 2016, la Academia aprobó el funcionamiento de la “Academia FIDE Comandante Luis Piedra Buena”, la
				primera Academia oficial reconocida por la Federación Internacional de Ajedrez en toda Latinoamérica.
			</Paragraph>
			<br />
			<Paragraph>
				Esto nos permitió contar con las herramientas adecuadas para formar y entrenar jugadores así como capacitar
				educadores, siempre con contenidos, formas de trabajo y títulos habilitantes con reconocimiento internacional.
			</Paragraph>
		</Block>
	);
};
