import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Paragraph, PublicRouterPaths } from 'shared';
import { Block } from 'entities';

export const Shop: FC = () => {
	const { t } = useTranslation();

	return (
		<Block title={t('¡Visita nuestra tienda!')}>
			<Paragraph>
				{t('En nuestra tienda encontrarás cursos de ajedrez tanto para principiantes como para ajedrecistas avanzados.')}
			</Paragraph>
			<Paragraph>{t('Visita nuestra tienda de cursos y obtén más conocimientos sobre el juego y mucho más:')}</Paragraph>
			<Link to={PublicRouterPaths.SHOP_PAGE}>{t('Comprar cursos y más')}</Link>
		</Block>
	);
};
