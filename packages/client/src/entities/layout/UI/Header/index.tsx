import { FC, ReactNode } from 'react';
import { Link, Logo, PublicRouterPaths } from 'shared';
import cl from './style.module.scss';

interface HeaderProps {
	userBlock: ReactNode;
}

export const Header: FC<HeaderProps> = ({ userBlock }) => {
	return (
		<header>
			<div className={cl.Container}>
				<Link to={PublicRouterPaths.MAIN_PAGE} className={cl.LogoLink}>
					<Logo />
				</Link>
				<section className={cl.UserBlock}>{userBlock}</section>
			</div>
		</header>
	);
};
