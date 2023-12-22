import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/hooks';
import { isAdmin } from 'shared/utils';

interface EditAccountButtonProps {
	accountLogin: string;
}

export const EditAccountButton: FC<EditAccountButtonProps> = ({ accountLogin }) => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);

	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Edit account feature');
	};

	if (!isAdmin(userInfo) && userInfo.login !== accountLogin) return null;

	return <button onClick={onClickHandler}>{t('Editar cuenta')}</button>;
};
