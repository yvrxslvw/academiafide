import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/hooks';
import { isAdmin } from 'shared/utils';

interface RecoveryPasswordButtonProps {
	accountLogin: string;
}

export const RecoveryPasswordButton: FC<RecoveryPasswordButtonProps> = ({ accountLogin }) => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);

	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('Recovery password feature');
	};

	if (!isAdmin(userInfo) || userInfo.login === accountLogin) return null;

	return <button onClick={onClickHandler}>{t('Restablecer la contraseña')}</button>;
};
