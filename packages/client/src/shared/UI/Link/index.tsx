import { FC, AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import cn from 'classnames';
import cl from './style.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
	to: string;
}

export const Link: FC<LinkProps> = ({ children, className, ...props }) => {
	return (
		<RouterLink className={cn(cl.Link, className)} {...props}>
			{children}
		</RouterLink>
	);
};
