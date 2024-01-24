import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './style.module.scss';

interface DeleteButtonProps {
	id: number;
	setModalShown: Dispatch<SetStateAction<boolean>>;
	setDeletionId: Dispatch<SetStateAction<number>>;
}

export const DeleteButton: FC<DeleteButtonProps> = ({ id, setModalShown, setDeletionId }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		setModalShown(true);
		setDeletionId(id);
	};

	return (
		<button className={cl.DeleteButton} onClick={onClickHandler}>
			{t('Eliminar')}
		</button>
	);
};
