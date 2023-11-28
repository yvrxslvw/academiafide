import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, isAdmin, useAppSelector } from 'shared';

interface AddNewButtonProps {
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export const AddNewButton: FC<AddNewButtonProps> = ({ setIsModalShown }) => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);

	const onClickHandler = () => {
		setIsModalShown(true);
	};

	if (!isAdmin(userInfo)) return null;
	else return <Button onClick={onClickHandler}>{t('Añadir un nuevo producto')}</Button>;
};
