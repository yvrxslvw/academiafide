import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph, Images } from 'shared';
import { Card } from 'entities';
import { JoinCardFeatures } from 'features';
import cl from './style.module.scss';

export const JoinCard: FC = () => {
	const { JoinButton } = JoinCardFeatures;
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
