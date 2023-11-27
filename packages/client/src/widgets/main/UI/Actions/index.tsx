import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Paragraph, PublicRouterPaths } from 'shared';
import { Block } from 'entities';

export const Actions: FC = () => {
	const { t } = useTranslation();

	return (
		<Block title={t('¿Que estamos haciendo?')} grey>
			<Paragraph>
				{t(
					'Impartimos clases tanto online como presenciales, organizamos torneos de ajedrez, vendemos cursos de ajedrez para todos los niveles, también organizamos nuestros propios seminarios y preparamos a jugadores de todos los niveles para los próximos torneos.',
				)}
			</Paragraph>
			<Paragraph>
				{t('Y además, te recomendamos que conozcas más sobre nuestro equipo y quiénes somos en el mundo del ajedrez:')}
			</Paragraph>
			<Link to={PublicRouterPaths.ABOUT_PAGE}>{t('Quiénes somos y qué hacemos')}</Link>
		</Block>
	);
};
