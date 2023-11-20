import { FC, ReactNode } from 'react';
import { Paragraph, Title } from 'shared';
import cl from './style.module.scss';

interface ItemProps {
	title: string;
	content: string;
	purchaseButton: ReactNode;
}

export const Item: FC<ItemProps> = ({ title, content, purchaseButton }) => {
	return (
		<div className={cl.ShopItem}>
			<Title className={cl.Title}>{title}</Title>
			<Paragraph className={cl.Content}>{content}</Paragraph>
			<section className={cl.ButtonBody}>{purchaseButton}</section>
		</div>
	);
};
