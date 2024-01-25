import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Paragraph } from 'shared/UI';
import { PublicRouterPaths } from 'shared/constants';
import cl from './style.module.scss';
import { EnglishButton, RussianButton, SpanishButton } from 'features/Footer';

interface FooterProps {
	isCookieShown: boolean;
}

export const Footer: FC<FooterProps> = ({ isCookieShown }) => {
	const { t } = useTranslation();

	return (
		<footer>
			<div className={cl.Container}>
				<Paragraph small color='white'>
					&#169; {new Date().getFullYear()} Academia Fide. {t('Todos los Derechos Reservados.')}{' '}
					<Link to={PublicRouterPaths.TERMS_PAGE} small color='white'>
						{t('Términos y condiciones')}
					</Link>
				</Paragraph>
				<nav>
					<Paragraph small color='white'>
						{t('Idioma del sitio web')}
					</Paragraph>
					<SpanishButton />
					<EnglishButton />
					<RussianButton />
				</nav>
			</div>
			{isCookieShown && <div className={cl.CookieVoid} />}
		</footer>
	);
};
