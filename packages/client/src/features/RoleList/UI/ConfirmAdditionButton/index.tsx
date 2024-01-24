import { FC } from 'react';
import { Button } from 'shared/UI';

interface ConfirmAdditionButtonProps {
	tag: string;
	description: string;
}

export const ConfirmAdditionButton: FC<ConfirmAdditionButtonProps> = ({ tag, description }) => {
	const onClickHandler = () => {
		console.log('Addition', tag, description);
	};

	return <Button onClick={onClickHandler}>Добавить</Button>;
};
