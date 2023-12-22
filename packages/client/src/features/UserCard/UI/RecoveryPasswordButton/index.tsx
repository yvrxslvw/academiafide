import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const RecoveryPasswordButton: FC = () => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Recovery password feature');
	};

	return <button onClick={onClickHandler}>{t('Restablecer la contraseña')}</button>;
};
