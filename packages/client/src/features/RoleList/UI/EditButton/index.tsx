import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './style.module.scss';

interface EditButtonProps {
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const EditButton: FC<EditButtonProps> = ({ setModalShown }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		setModalShown(true);
	};

	return (
		<button className={cl.EditButton} onClick={onClickHandler}>
			{t('Editar')}
		</button>
	);
};
