import { FC, Dispatch, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, useDeletePostMutation } from 'shared';
import { usePopup } from 'entities';

interface ConfirmButtonProps {
	postId: number | undefined;
	refetch: () => void;
	setModalShown: Dispatch<SetStateAction<boolean>>;
}

export const ConfirmButton: FC<ConfirmButtonProps> = ({ postId, refetch, setModalShown }) => {
	const { t } = useTranslation();
	const [deletePost, { data, error, isLoading }] = useDeletePostMutation();
	const { createPopup } = usePopup();

	const onClickHandler = async () => {
		if (!postId) return createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		await deletePost(postId);
	};

	useEffect(() => {
		if (data) {
			refetch();
			setModalShown(false);
			createPopup(t('Eliminado con éxito.'));
		}
	}, [data]);

	useEffect(() => {
		if (error) {
			createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		}
	}, [error]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Confirmar')}
		</Button>
	);
};
