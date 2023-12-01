import { FC, PropsWithChildren, HTMLAttributes } from 'react';
import cn from 'classnames';
import { Title } from 'shared/UI';
import cl from './style.module.scss';

interface CardProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
	title: string;
	imageUrl?: string;
}

export const Card: FC<CardProps> = ({ title, imageUrl, className, children, ...props }) => {
	return (
		<div className={cn(cl.JoinCard, className)} {...props}>
			<div className={cl.Container}>
				<div className={cn(cl.Row, cl.FirstRow)}>
					<section>
						<Title className={cl.Title}>{title}</Title>
					</section>
					{children}
				</div>
				{imageUrl && (
					<div className={cn(cl.Row, cl.SecondRow)}>
						<img src={imageUrl} alt='Card' />
					</div>
				)}
			</div>
		</div>
	);
};
