import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const RolesButton: FC = () => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Roles feature');
	};

	return <button onClick={onClickHandler}>{t('Gestión de roles')}</button>;
};
