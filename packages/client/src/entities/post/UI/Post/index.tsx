import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import { Paragraph, Title } from 'shared';
import cl from './style.module.scss';

interface PostProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	content: string;
}

export const Post: FC<PostProps> = ({ title, content, className, ...props }) => {
	return (
		<div className={cn(cl.Post, className)} {...props}>
			<Title className={cl.Title}>{title}</Title>
			<Paragraph className={cl.Content} dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
};
