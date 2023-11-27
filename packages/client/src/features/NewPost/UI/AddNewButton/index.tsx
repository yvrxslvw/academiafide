import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, isAdmin, useAppSelector } from 'shared';

interface AddNewButtonProps {
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const AddNewButton: FC<AddNewButtonProps> = ({ setModalShown }) => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);

	const onClickHandler = () => {
		setModalShown(true);
	};

	if (!isAdmin(userInfo)) return null;
	else return <Button onClick={onClickHandler}>{t('Agregar nueva publicación')}</Button>;
};
