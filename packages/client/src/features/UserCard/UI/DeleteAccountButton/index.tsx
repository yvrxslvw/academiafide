import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/hooks';
import { isAdmin } from 'shared/utils';

interface DeleteAccountButtonProps {
	userId: number;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const DeleteAccountButton: FC<DeleteAccountButtonProps> = ({ userId, setModalShown }) => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);

	if (!isAdmin(userInfo) || userInfo.id === userId) return null;

	const onClickHandler = () => {
		setModalShown(true);
	};

	return <button onClick={onClickHandler}>{t('Borrar cuenta')}</button>;
};
