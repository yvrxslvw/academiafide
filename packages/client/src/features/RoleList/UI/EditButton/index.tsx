import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './style.module.scss';

interface EditButtonProps {
	id: number;
	setModalShown: Dispatch<SetStateAction<boolean>>;
	setEditionId: Dispatch<SetStateAction<number>>;
}

export const EditButton: FC<EditButtonProps> = ({ id, setModalShown, setEditionId }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		setModalShown(true);
		setEditionId(id);
	};

	return (
		<button className={cl.EditButton} onClick={onClickHandler}>
			{t('Editar')}
		</button>
	);
};
