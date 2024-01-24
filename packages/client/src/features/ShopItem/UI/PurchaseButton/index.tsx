import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/UI';
import { PublicRouterPaths } from 'shared/constants';

// import { OnApproveData } from '@paypal/paypal-js';
// import { PayPalButtons, PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';
// import { API_URL, PAYPAL_CLIENT_ID } from 'shared/constants';
// import axios from 'axios';

// const initialOptions: ReactPayPalScriptOptions = {
// 	clientId: PAYPAL_CLIENT_ID,
// 	currency: 'EUR',
// };

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

	// const createOrder = async () => {
	// 	const response = await axios.post<{ id: string; status: string }>(API_URL + '/api/orders/create', {
	// 		id: itemId,
	// 		email: 'yvrxslvv@gmail.com',
	// 	});
	// 	return response.data.id;
	// };

	// const onApprove = async (data: OnApproveData) => {
	// 	await axios.post(API_URL + `/api/orders/capture/${data.orderID}`);
	// };

	// return (
	// 	<PayPalScriptProvider options={initialOptions}>
	// 		<PayPalButtons
	// 			style={{
	// 				layout: 'horizontal',
	// 				label: 'buynow',
	// 				color: 'black',
	// 				tagline: false,
	// 				shape: 'pill',
	// 				height: 55,
	// 				disableMaxWidth: true,
	// 			}}
	// 			createOrder={createOrder}
	// 			onApprove={onApprove}
	// 		/>
	// 	</PayPalScriptProvider>
	// );
};
