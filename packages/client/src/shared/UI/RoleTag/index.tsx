import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface RoleTagProps extends HTMLAttributes<HTMLDivElement> {
	tag: string;
}

export const RoleTag: FC<RoleTagProps> = ({ tag, className }) => {
	return (
		<div className={cn(cl.RoleTag, className)}>
			<p>{tag}</p>
		</div>
	);
};
