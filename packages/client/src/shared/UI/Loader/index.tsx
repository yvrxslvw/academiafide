import { FC, HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cl from './style.module.scss';

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Loader: FC<LoaderProps> = ({ className, ...props }) => {
	const { t } = useTranslation();

	return (
		<div className={cn(cl.LoaderBlock, className)} {...props}>
			<p className={cl.Label}>{t('Cargando por favor espere...')}</p>
			<div className={cl.Loader} />
		</div>
	);
};
