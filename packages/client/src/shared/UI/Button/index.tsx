import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface ButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, className, loading, ...props }) => {
	return (
		<button className={cn(cl.Button, className, { [cl.Loading]: loading })} disabled={loading} {...props}>
			{loading && <div className={cl.Loader}></div>}
			{children}
		</button>
	);
};
