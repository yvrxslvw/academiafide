import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';

interface PurchaseButtonProps {
	itemId: number;
}

export const PurchaseButton: FC<PurchaseButtonProps> = ({ itemId }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Purchase logic', itemId);
	};

	return <Button onClick={onClickHandler}>{t('Comprar')}</Button>;
};
