import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Loader: FC<LoaderProps> = ({ className, ...props }) => {
	return (
		<div className={cn(cl.LoaderBlock, className)} {...props}>
			<p className={cl.Label}>Cargando por favor espere...</p>
			<div className={cl.Loader} />
		</div>
	);
};
