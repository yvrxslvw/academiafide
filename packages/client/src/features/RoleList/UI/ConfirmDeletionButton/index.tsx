import { FC } from 'react';
import { Button } from 'shared/UI';

interface ConfirmDeletionButtonProps {
	id: number;
}

export const ConfirmDeletionButton: FC<ConfirmDeletionButtonProps> = ({ id }) => {
	const onClickHandler = () => {
		console.log('Deletion', id);
	};

	return <Button onClick={onClickHandler}>Удалить</Button>;
};
