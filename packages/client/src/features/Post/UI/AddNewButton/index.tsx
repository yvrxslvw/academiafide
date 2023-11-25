import { Dispatch, FC, SetStateAction } from 'react';
import { Button, isAdmin, useAppSelector } from 'shared';

interface AddNewButtonProps {
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const AddNewButton: FC<AddNewButtonProps> = ({ setModalShown }) => {
	const { userInfo } = useAppSelector(state => state.user);

	const onClickHandler = () => {
		setModalShown(true);
	};

	if (!isAdmin(userInfo)) return null;
	else return <Button onClick={onClickHandler}>Agregar nueva publicación</Button>;
};
