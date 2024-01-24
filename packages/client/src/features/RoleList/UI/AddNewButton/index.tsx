import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';

interface AddNewButtonProps {
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const AddNewButton: FC<AddNewButtonProps> = ({ setModalShown }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		setModalShown(true);
	};

	return <Button onClick={onClickHandler}>{t('Agregar')}</Button>;
};
