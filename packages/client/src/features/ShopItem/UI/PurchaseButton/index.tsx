import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/UI';
import { PublicRouterPaths } from 'shared/constants';
import { useAppSelector } from 'shared/hooks';

interface PurchaseButtonProps {
	itemId: number;
	setErrorModalShown: Dispatch<SetStateAction<boolean>>;
}

export const PurchaseButton: FC<PurchaseButtonProps> = ({ itemId, setErrorModalShown }) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { userInfo } = useAppSelector(state => state.user);

	const onClickHandler = () => {
		if (!userInfo.email || !userInfo.email_confirmed) return setErrorModalShown(true);
		navigate(PublicRouterPaths.SHOP_PAGE + `/${itemId}`);
	};

	return <Button onClick={onClickHandler}>{t('Comprar')}</Button>;
};
