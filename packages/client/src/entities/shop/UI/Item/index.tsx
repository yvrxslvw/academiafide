import { FC, ReactNode } from 'react';
import { Paragraph, Title } from 'shared';
import cl from './style.module.scss';

interface ItemProps {
	title: string;
	description: string;
	imageUrl?: string;
	purchaseButton: ReactNode;
}

export const Item: FC<ItemProps> = ({ imageUrl, title, description, purchaseButton }) => {
	return (
		<div className={cl.ShopItem}>
			{imageUrl && <img src={imageUrl} alt='ShopItem' className={cl.ItemImage} />}
			<Title className={cl.Title}>{title}</Title>
			<Paragraph className={cl.Content}>{description}</Paragraph>
			<section className={cl.ButtonBody}>{purchaseButton}</section>
		</div>
	);
};
