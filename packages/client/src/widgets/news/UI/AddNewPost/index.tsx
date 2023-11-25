import { FC, Dispatch, SetStateAction, useState } from 'react';
import { PostEntities } from 'entities';
import { NewPostFeatures } from 'features';
import { INewPost } from 'shared';

interface AddNewPostProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const AddNewPost: FC<AddNewPostProps> = ({ isModalShown, setIsModalShown, refetch }) => {
	const { CreatePostModal } = PostEntities;
	const { TitleTextArea, ContentTextArea, ImageFileInput, NextButton } = NewPostFeatures;
	const [data, setData] = useState<INewPost>({
		title: '',
		titleError: false,
		content: '',
		contentError: false,
		image: null,
	});

	return (
		<CreatePostModal
			modalShown={isModalShown}
			setModalShown={setIsModalShown}
			titleTextArea={<TitleTextArea data={data} setData={setData} />}
			contentTextArea={<ContentTextArea data={data} setData={setData} />}
			imageFileInput={<ImageFileInput data={data} setData={setData} />}
			nextButton={<NextButton data={data} setData={setData} refetch={refetch} setIsModalShown={setIsModalShown} />}
		/>
	);
};
