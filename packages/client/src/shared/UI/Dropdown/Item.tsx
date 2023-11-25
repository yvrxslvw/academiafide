import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface ItemProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {}

export const Item: FC<ItemProps> = ({ children, className, ...props }) => {
	return (
		<button className={cn(cl.Item, className)} {...props}>
			{children}
		</button>
	);
};
