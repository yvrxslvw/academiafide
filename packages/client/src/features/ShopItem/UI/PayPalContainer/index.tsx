import { FC } from 'react';
import axios from 'axios';
import { OnApproveData } from '@paypal/paypal-js';
import { PayPalButtons, PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';
import { API_URL, PAYPAL_CLIENT_ID } from 'shared/constants';

const initialOptions: ReactPayPalScriptOptions = {
	clientId: PAYPAL_CLIENT_ID,
	currency: 'EUR',
};

interface PayPalContainerProps {
	id: number;
	email: string;
}

export const PayPalContainer: FC<PayPalContainerProps> = ({ id, email }) => {
	const onCreateOrderHandler = async () => {
		const response = await axios.post<{ id: string; status: string }>(API_URL + '/api/orders/create', {
			id,
			email,
		});
		return response.data.id;
	};

	const onApproveHandler = async (data: OnApproveData) => {
		await axios.post(API_URL + `/api/orders/capture/${data.orderID}`);
	};

	return (
		<PayPalScriptProvider options={initialOptions}>
			<PayPalButtons
				style={{
					layout: 'vertical',
					label: 'buynow',
					color: 'black',
					shape: 'pill',
					height: 55,
					disableMaxWidth: true,
				}}
				createOrder={onCreateOrderHandler}
				onApprove={onApproveHandler}
			/>
		</PayPalScriptProvider>
	);
};
