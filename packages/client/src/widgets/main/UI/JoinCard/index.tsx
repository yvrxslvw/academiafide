import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph } from 'shared/UI';
import { Images } from 'shared/assets';
import { Card } from 'entities/card';
import { JoinButton } from 'features/JoinCard';
import cl from './style.module.scss';

export const JoinCard: FC = () => {
	const { t } = useTranslation();

	return (
		<div className={cl.Container}>
			<Card title={t('¡Únete hoy!')} imageUrl={Images.cardImage}>
				<div className={cl.Content}>
					<section>
						<Paragraph>
							{t('Academia Fide enseña y prepara a jugadores avanzados para torneos y competiciones de ajedrez.')}
						</Paragraph>
						<Paragraph>
							{t(
								'También organizamos grandes seminarios en nombre de grandes maestros para el mejor avance en el ajedrez.',
							)}
						</Paragraph>
						<Paragraph>
							{t('Impartimos cursos de ajedrez individuales y grupales tanto presenciales como online.')}
						</Paragraph>
					</section>
					<section className={cl.ButtonBody}>
						<JoinButton />
					</section>
				</div>
			</Card>
		</div>
	);
};
