import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react';
import { INewPost, IPost } from 'shared/models';
import { EditPostModal } from 'entities/post';
import { ContentTextArea, ImageFileInput, NextButton, TitleTextArea } from 'features/EditPost';

interface EditPostProps {
	isModalShown: boolean;
	setIsModalShown: Dispatch<SetStateAction<boolean>>;
	refetch: () => void;
	post: IPost | undefined;
}

export const EditPost: FC<EditPostProps> = ({ isModalShown, setIsModalShown, refetch, post }) => {
	const [data, setData] = useState<INewPost>({
		title: '',
		titleError: false,
		content: '',
		contentError: false,
		image: null,
	});

	useEffect(() => {
		if (post) {
			setData({
				title: post.title,
				content: post.content,
				image: null,
				titleError: false,
				contentError: false,
			});
		}
	}, [isModalShown]);

	return (
		<EditPostModal
			modalShown={isModalShown}
			setModalShown={setIsModalShown}
			titleTextArea={<TitleTextArea data={data} setData={setData} />}
			contentTextArea={<ContentTextArea data={data} setData={setData} />}
			imageFileInput={<ImageFileInput data={data} setData={setData} />}
			nextButton={
				<NextButton
					data={data}
					setData={setData}
					refetch={refetch}
					setIsModalShown={setIsModalShown}
					postId={post?.id}
				/>
			}
		/>
	);
};
