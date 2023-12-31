import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface RoleTagProps extends HTMLAttributes<HTMLDivElement> {
	tag: string;
	description: string;
}

export const RoleTag: FC<RoleTagProps> = ({ tag, description, className }) => {
	return (
		<div className={cn(cl.RoleTag, className)} title={description}>
			<p>{tag}</p>
		</div>
	);
};
