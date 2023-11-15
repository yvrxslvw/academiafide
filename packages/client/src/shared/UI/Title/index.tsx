import { FC, PropsWithChildren, HTMLAttributes } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface TitleProps extends PropsWithChildren, HTMLAttributes<HTMLHeadingElement> {}

export const Title: FC<TitleProps> = ({ children, className, ...props }) => {
	return (
		<h2 className={cn(cl.Title, className)} {...props}>
			{children}
		</h2>
	);
};
