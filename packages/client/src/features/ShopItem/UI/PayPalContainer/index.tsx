import { FC } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { OnApproveData } from '@paypal/paypal-js';
import { PayPalButtons, PayPalScriptProvider, ReactPayPalScriptOptions } from '@paypal/react-paypal-js';
import { API_URL, PAYPAL_CLIENT_ID, PublicRouterPaths } from 'shared/constants';
import { usePopup } from 'processes/Popup';
import { useNavigate } from 'react-router-dom';

const initialOptions: ReactPayPalScriptOptions = {
	clientId: PAYPAL_CLIENT_ID,
	currency: 'EUR',
};

interface PayPalContainerProps {
	id: number;
	email: string;
}

export const PayPalContainer: FC<PayPalContainerProps> = ({ id, email }) => {
	const { t } = useTranslation();
	const { createPopup } = usePopup();
	const navigate = useNavigate();

	const onCreateOrderHandler = async () => {
		const response = await axios.post<{ id: string; status: string }>(API_URL + '/api/orders/create', {
			id,
			email,
		});
		return response.data.id;
	};

	const onApproveHandler = async (data: OnApproveData) => {
		const response = await axios.post(API_URL + `/api/orders/capture/${data.orderID}`);
		navigate(PublicRouterPaths.SHOP_PAGE);
		if (response.data.status !== 'COMPLETED') {
			createPopup(t('La transacción fue cancelada.'));
		} else {
			// * Gratitude window
		}
	};

	const onErrorHandler = (error: Record<string, unknown>) => {
		navigate(PublicRouterPaths.SHOP_PAGE);
		createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		// eslint-disable-next-line no-console
		console.error(error);
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
				onError={onErrorHandler}
			/>
		</PayPalScriptProvider>
	);
};
