import { FC, AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import cn from 'classnames';
import cl from './style.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
	to: string;
	small?: boolean;
}

export const Link: FC<LinkProps> = ({ small, children, className, ...props }) => {
	return (
		<RouterLink className={cn(cl.Link, className, { [cl.Small]: small })} {...props}>
			{children}
		</RouterLink>
	);
};
