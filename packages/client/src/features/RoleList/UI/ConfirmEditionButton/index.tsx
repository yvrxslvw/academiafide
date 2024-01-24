import { FC } from 'react';
import { Button } from 'shared/UI';

interface ConfirmEditionButtonProps {
	id: number;
	tag: string;
	description: string;
}

export const ConfirmEditionButton: FC<ConfirmEditionButtonProps> = ({ id, tag, description }) => {
	const onClickHandler = () => {
		console.log('Edition', id, tag, description);
	};

	return <Button onClick={onClickHandler}>Изменить</Button>;
};
