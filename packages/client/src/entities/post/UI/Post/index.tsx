import { FC, HTMLAttributes, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Paragraph, Title } from 'shared';
import cl from './style.module.scss';

interface PostProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	content: string;
	image?: string;
	createdAt: string;
	actions: ReactNode;
}

export const Post: FC<PostProps> = ({ title, content, image, createdAt, actions, className, ...props }) => {
	const { t } = useTranslation();

	return (
		<div className={cn(cl.Post, className)} {...props}>
			<section className={cl.Actions}>{actions}</section>
			{image && <img className={cl.Image} src={image} alt='Post' />}
			<Title className={cl.Title}>{title}</Title>
			<Paragraph className={cl.Content} dangerouslySetInnerHTML={{ __html: content }} />
			<Paragraph className={cl.Date} small color='primary'>
				{t('Enviado a las')} {createdAt}
			</Paragraph>
		</div>
	);
};
