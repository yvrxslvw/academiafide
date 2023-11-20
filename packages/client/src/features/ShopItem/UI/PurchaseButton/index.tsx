import { FC } from 'react';
import { Button } from 'shared';

interface PurchaseButtonProps {
	itemName: string;
}

export const PurchaseButton: FC<PurchaseButtonProps> = ({ itemName }) => {
	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Purchase logic', itemName);
	};

	return <Button onClick={onClickHandler}>Comprar</Button>;
};
