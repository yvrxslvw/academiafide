import { FC } from 'react';
import { Link, Logo, Paragraph } from 'shared';
import cl from './style.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
	return (
		<header>
			<div className={cl.Container}>
				<Link to='/' className={cl.LogoLink}>
					<Logo />
				</Link>
				<Paragraph small>will be account info here</Paragraph>
			</div>
		</header>
	);
};
