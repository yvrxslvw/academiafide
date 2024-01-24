import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './style.module.scss';

interface DeleteButtonProps {
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const DeleteButton: FC<DeleteButtonProps> = ({ setModalShown }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		setModalShown(true);
	};

	return (
		<button className={cl.DeleteButton} onClick={onClickHandler}>
			{t('Eliminar')}
		</button>
	);
};
