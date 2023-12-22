import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const EditAccountButton: FC = () => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Edit account feature');
	};

	return <button onClick={onClickHandler}>{t('Editar cuenta')}</button>;
};
