import { FC } from 'react';
// import { useTranslation } from 'react-i18next';
import { OnApproveData } from '@paypal/paypal-js';
import { PayPalButtons, PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';
import { API_URL, PAYPAL_CLIENT_ID } from 'shared/constants';
import axios from 'axios';

const initialOptions: ReactPayPalScriptOptions = {
	clientId: PAYPAL_CLIENT_ID,
	currency: 'EUR',
};

interface PurchaseButtonProps {
	itemId: number;
}

export const PurchaseButton: FC<PurchaseButtonProps> = ({ itemId }) => {
	// const { t } = useTranslation();

	// const onClickHandler = () => {};

	// return <Button onClick={onClickHandler}>{t('Comprar')}</Button>;

	const createOrder = async () => {
		const response = await axios.post<{ id: string; status: string }>(API_URL + '/api/orders/create', {
			id: itemId,
			email: 'yvrxslvv@gmail.com',
		});
		return response.data.id;
	};

	const onApprove = async (data: OnApproveData) => {
		const response = await axios.post(API_URL + `/api/orders/capture/${data.orderID}`);
		const name = response.data.payer.name.given_name;
		alert(`Transaction completed by ${name}`);
	};

	return (
		<PayPalScriptProvider options={initialOptions}>
			<PayPalButtons
				style={{
					layout: 'horizontal',
					label: 'buynow',
					color: 'black',
					tagline: false,
					shape: 'pill',
					height: 55,
					disableMaxWidth: true,
				}}
				createOrder={createOrder}
				onApprove={onApprove}
			/>
		</PayPalScriptProvider>
	);
};
