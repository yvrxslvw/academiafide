import { FC, ReactNode } from 'react';
import { Paragraph, Title } from 'shared/UI';
import { Icons } from 'shared/assets';
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
			<section className={cl.ImageSection}>
				{imageUrl ? (
					<img src={imageUrl} alt='ShopItem' className={cl.ItemImage} />
				) : (
					<img src={Icons.ChessFigure} alt='Shop item' className={cl.NoImage} />
				)}
			</section>
			<section className={cl.Info}>
				<Title className={cl.Title}>{title}</Title>
				<Paragraph className={cl.Content}>{description}</Paragraph>
				<section className={cl.ButtonBody}>{purchaseButton}</section>
				<section className={cl.Actions}>{actionsDropdown}</section>
			</section>
		</div>
	);
};
