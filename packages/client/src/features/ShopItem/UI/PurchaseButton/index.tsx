import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/UI';
import { PublicRouterPaths } from 'shared/constants';

interface PurchaseButtonProps {
	itemId: number;
}

export const PurchaseButton: FC<PurchaseButtonProps> = ({ itemId }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const onClickHandler = () => {
		navigate(PublicRouterPaths.SHOP_PAGE + `/${itemId}`);
	};

	return <Button onClick={onClickHandler}>{t('Comprar')}</Button>;
};
