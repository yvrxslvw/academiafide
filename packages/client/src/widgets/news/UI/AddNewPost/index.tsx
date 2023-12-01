import { FC, Dispatch, SetStateAction, useState } from 'react';
import { INewPost } from 'shared/models';
import { CreatePostModal } from 'entities/post';
import { ContentTextArea, ImageFileInput, NextButton, TitleTextArea } from 'features/NewPost';

interface AddNewPostProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
}

export const AddNewPost: FC<AddNewPostProps> = ({ isModalShown, setIsModalShown, refetch }) => {
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
