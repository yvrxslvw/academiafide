import { FC } from 'react';
import { Button, isAdmin, useAppSelector } from 'shared';

interface AddNewButtonProps {

}

export const AddNewButton: FC<AddNewButtonProps> = () => {
	const { userInfo } = useAppSelector(state => state.user);

	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log('add new');
	};

	if (!isAdmin(userInfo)) return null;
	else return <Button onClick={onClickHandler}>Añadir un nuevo producto</Button>;
};
