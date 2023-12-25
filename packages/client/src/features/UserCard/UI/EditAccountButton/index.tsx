import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/hooks';
import { isAdmin } from 'shared/utils';

interface EditAccountButtonProps {
	accountLogin: string;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const EditAccountButton: FC<EditAccountButtonProps> = ({ accountLogin, setModalShown }) => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);

	const onClickHandler = () => {
		setModalShown(true);
	};

	if (!isAdmin(userInfo) && userInfo.login !== accountLogin) return null;

	return <button onClick={onClickHandler}>{t('Editar cuenta')}</button>;
};
