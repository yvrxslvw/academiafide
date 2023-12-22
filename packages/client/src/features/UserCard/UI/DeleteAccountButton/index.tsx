import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const DeleteAccountButton: FC = () => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Delete account feature');
	};

	return <button onClick={onClickHandler}>{t('Borrar cuenta')}</button>;
};
