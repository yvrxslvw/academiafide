import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { INewPost, Textarea } from 'shared';

interface TitleTextAreaProps {
	data: INewPost;
	setData: Dispatch<SetStateAction<INewPost>>;
}

export const TitleTextArea: FC<TitleTextAreaProps> = ({ data, setData }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setData({ ...data, title: event.target.value });
	};

	return <Textarea label='Publicar título' max={255} value={data.title} onChange={onChangeHandler} />;
};
