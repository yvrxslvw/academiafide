import { FC } from 'react';
import { Button } from 'shared';

interface PurchaseButtonProps {
	itemId: number;
}

export const PurchaseButton: FC<PurchaseButtonProps> = ({ itemId }) => {
	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Purchase logic', itemId);
	};

	return <Button onClick={onClickHandler}>Comprar</Button>;
};
