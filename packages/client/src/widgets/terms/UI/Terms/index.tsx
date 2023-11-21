import { FC } from 'react';
import { Paragraph, Title } from 'shared';
import cl from './style.module.scss';

export const Terms: FC = () => {
	return (
		<div className={cl.Container}>
			<Title className={cl.Title}>Términos y condiciones</Title>
			<Paragraph className={cl.Item}>
				Todos los derechos de autor de este recurso web www.academiafide.com (en adelante, el sitio web), así como de
				las lecciones en video, los materiales en video y las sesiones personales con entrenadores, están registrados y
				son propiedad de la organización Academia FIDE.
			</Paragraph>
			<Paragraph className={cl.Item}>
				Bajo estos derechos, no puede copiar/distribuir para uso personal los tutoriales en video y los videos que se
				venden en este sitio web. También está prohibido copiar/utilizar para fines personales el diseño y contenido del
				sitio web.
			</Paragraph>
			<Paragraph className={cl.Item}>
				La categoría de precio para cada lección de video o material de video, así como para los cursos para cada nivel,
				se indica de antemano en la página de la tienda del sitio web.
			</Paragraph>
			<Paragraph className={cl.Item}>
				Al comprar lecciones personales con entrenadores de la FIDE, el precio y las condiciones se negocian por
				adelantado.
			</Paragraph>
			<Paragraph className={cl.Item}>
				Si el visitante del sitio web (en lo sucesivo, el cliente) no recibió el material de video como tal, entonces
				tiene derecho a recuperar el dinero gastado en la compra de cualquier material.
			</Paragraph>
			<Paragraph className={cl.Item}>
				La calidad de la enseñanza en lecciones personales, en materiales de video, en lecciones de video y en
				seminarios no está sujeta a apelación.
			</Paragraph>
		</div>
	);
};
