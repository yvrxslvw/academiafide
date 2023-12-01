import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import { Icons } from '../../assets';
import cl from './style.module.scss';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

export const Logo: FC<LogoProps> = ({ className, ...props }) => {
	return (
		<div className={cn(cl.Logo, className)} {...props}>
			<img src={Icons.ChessFigure} className={cl.Icon} />
			<section className={cl.Title}>
				<h1 className={cl.Upper}>Academia</h1>
				<h1 className={cl.Lower}>Fide</h1>
			</section>
		</div>
	);
};
