import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';
import { useAppSelector } from 'shared/hooks';
import { isAdmin } from 'shared/utils';

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
