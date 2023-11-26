import { Dispatch, FC, SetStateAction } from 'react';
import { Button, isAdmin, useAppSelector } from 'shared';

interface AddNewButtonProps {
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
}

export const AddNewButton: FC<AddNewButtonProps> = ({ setIsModalShown }) => {
	const { userInfo } = useAppSelector(state => state.user);

	const onClickHandler = () => {
		setIsModalShown(true);
	};

	if (!isAdmin(userInfo)) return null;
	else return <Button onClick={onClickHandler}>Añadir un nuevo producto</Button>;
};
