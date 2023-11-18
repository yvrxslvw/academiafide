import { FC } from 'react';
import { Link, Paragraph, PublicRouterPaths } from 'shared';
import cl from './style.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
	return (
		<footer>
			<div className={cl.Container}>
				<Paragraph small color='white'>
					&#169; 2023 Academia Fide. Todos los Derechos Reservados.{' '}
					<Link to={PublicRouterPaths.TERMS_PAGE} small color='white'>
						Términos y condiciones
					</Link>
				</Paragraph>
			</div>
		</footer>
	);
};
