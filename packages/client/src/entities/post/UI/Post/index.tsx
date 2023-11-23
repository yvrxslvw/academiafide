import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';
import { Paragraph, Title, formatDate, formatImageUrl } from 'shared';
import cl from './style.module.scss';

interface PostProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	content: string;
	image?: string;
	createdAt: string;
}

export const Post: FC<PostProps> = ({ title, content, image, createdAt, className, ...props }) => {
	return (
		<div className={cn(cl.Post, className)} {...props}>
			{image && <img className={cl.Image} src={formatImageUrl(image)} alt='Post' />}
			<Title className={cl.Title}>{title}</Title>
			<Paragraph className={cl.Content} dangerouslySetInnerHTML={{ __html: content }} />
			<Paragraph className={cl.Date} small color='primary'>
				Enviado a las {formatDate(createdAt)}
			</Paragraph>
		</div>
	);
};
