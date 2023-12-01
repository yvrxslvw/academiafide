import { FC, ReactNode } from 'react';
import { Paragraph, Title } from 'shared/UI';
import cl from './style.module.scss';

interface ItemProps {
	title: string;
	description: string;
	imageUrl?: string;
	purchaseButton: ReactNode;
	actionsDropdown: ReactNode;
}

export const Item: FC<ItemProps> = ({ imageUrl, title, description, purchaseButton, actionsDropdown }) => {
	return (
		<div className={cl.ShopItem}>
			{imageUrl ? <img src={imageUrl} alt='ShopItem' className={cl.ItemImage} /> : <span />}
			<section className={cl.Info}>
				<Title className={cl.Title}>{title}</Title>
				<Paragraph className={cl.Content}>{description}</Paragraph>
				<section className={cl.ButtonBody}>{purchaseButton}</section>
				<section className={cl.Actions}>{actionsDropdown}</section>
			</section>
		</div>
	);
};
