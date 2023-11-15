import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import { Title } from 'shared';
import cl from './style.module.scss';

interface BlockProps extends PropsWithChildren {
	title: string;
	grey?: boolean;
}

export const Block: FC<BlockProps> = ({ grey, title, children }) => {
	return (
		<div className={cn(cl.Block, { [cl.grey]: grey })}>
			<div className={cl.Container}>
				<Title>{title}</Title>
				{children}
			</div>
		</div>
	);
};
