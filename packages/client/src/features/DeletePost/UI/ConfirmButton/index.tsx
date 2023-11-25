import { FC, Dispatch, SetStateAction } from 'react';
import { Button } from 'shared';

interface ConfirmButtonProps {
	postId: number | undefined;
	refetch: () => void;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const ConfirmButton: FC<ConfirmButtonProps> = ({ postId, refetch, setModalShown }) => {
	const onClickHandler = () => {
		// eslint-disable-next-line no-console
		console.log(postId);
		refetch();
		setModalShown(false);
	};

	return <Button onClick={onClickHandler}>Confirmar</Button>;
};
