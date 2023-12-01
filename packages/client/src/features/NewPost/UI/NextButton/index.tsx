import { FC, Dispatch, SetStateAction, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';
import { useCreatePostMutation } from 'shared/api';
import { INewPost } from 'shared/models';
import { usePopup } from 'processes/Popup';

interface NextButtonProps {
	data: INewPost;
	setData: Dispatch<SetStateAction<INewPost>>;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const NextButton: FC<NextButtonProps> = ({ data, setData, refetch, setIsModalShown }) => {
	const { t } = useTranslation();
	const [createPost, { data: fetchData, error: fetchError, isLoading }] = useCreatePostMutation();
	const { createPopup } = usePopup();

	const onClickHandler = async () => {
		setData({ ...data, titleError: false, contentError: false });
		const formData = new FormData();
		if (data.title.length < 3) {
			createPopup(t('El título debe tener al menos 3 caracteres.'));
			setData({ ...data, titleError: true });
			return;
		}
		if (data.content.length < 3) {
			createPopup(t('El contenido debe tener al menos 3 caracteres.'));
			setData({ ...data, contentError: true });
			return;
		}

		formData.append('title', data.title);
		formData.append('content', data.content);
		if (data.image) formData.append('image', data.image);

		await createPost(formData);
	};

	useEffect(() => {
		if (fetchData) {
			setIsModalShown(false);
			refetch();
			setData({ title: '', titleError: false, content: '', contentError: false, image: {} as File });
			createPopup(t('Creado con éxito.'));
		}
	}, [fetchData]);

	useEffect(() => {
		if (fetchError) {
			createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		}
	}, [fetchError]);

	return (
		<Button onClick={onClickHandler} loading={isLoading}>
			{t('Siguiente')}
		</Button>
	);
};
