import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Paragraph } from 'shared/UI';
import { PublicRouterPaths } from 'shared/constants';
import cl from './style.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
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
			</div>
		</footer>
	);
};
