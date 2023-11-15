import { FC, AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import cn from 'classnames';
import cl from './style.module.scss';

type LinkColor = 'primary' | 'black' | 'white';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
	to: string;
	small?: boolean;
	color?: LinkColor;
}

export const Link: FC<LinkProps> = ({ small, color, children, className, ...props }) => {
	return (
		<RouterLink className={cn(cl.Link, className, { [cl.Small]: small }, cl[color ?? 'primary'])} {...props}>
			{children}
		</RouterLink>
	);
};
