import { FC, ReactNode } from 'react';
import { Images, Paragraph, Title } from 'shared';
import cl from './style.module.scss';

interface CardProps {
	joinButton: ReactNode;
}

export const Card: FC<CardProps> = ({ joinButton }) => {
	return (
		<div className={cl.JoinCard}>
			<div className={cl.Container}>
				<div className={cl.Row}>
					<section>
						<Title className={cl.Title}>¡Únete hoy!</Title>
						<Paragraph className={cl.Item}>
							La Academia Fide enseña y prepara a jugadores avanzados para torneos y competiciones de ajedrez.
						</Paragraph>
						<Paragraph className={cl.Item}>
							También organizamos grandes seminarios en nombre de grandes maestros para el mejor avance en el ajedrez.
						</Paragraph>
						<Paragraph className={cl.Item}>
							Impartimos cursos de ajedrez individuales y grupales tanto presenciales como online.
						</Paragraph>
					</section>
					<section className={cl.Button}>{joinButton}</section>
				</div>
				<div className={cl.Row}>
					<img src={Images.cardImage} alt='Card' />
				</div>
			</div>
		</div>
	);
};
