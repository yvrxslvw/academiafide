import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Paragraph, PublicRouterPaths } from 'shared';
import { Block } from 'entities';

export const News: FC = () => {
	const { t } = useTranslation();

	return (
		<Block title={t('Últimas noticias')}>
			<Paragraph>
				{t(
					'Siga nuestras noticias, cambios y actualidad, y también infórmese sobre los cursos disponibles actualmente directamente en nuestro sitio web:',
				)}
			</Paragraph>
			<Link to={PublicRouterPaths.NEWS_PAGE}>{t('Últimas noticias, cursos, etc.')}</Link>
		</Block>
	);
};
