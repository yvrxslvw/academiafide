import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const UsersButton: FC = () => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Users feature');
	};

	return <button onClick={onClickHandler}>{t('Gestión de usuarios')}</button>;
};
