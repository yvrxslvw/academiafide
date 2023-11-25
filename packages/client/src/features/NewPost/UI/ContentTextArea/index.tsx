import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { INewPost, Textarea } from 'shared';

interface ContentTextAreaProps {
	data: INewPost;
	setData: Dispatch<SetStateAction<INewPost>>;
}

export const ContentTextArea: FC<ContentTextAreaProps> = ({ data, setData }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setData({ ...data, content: event.target.value });
	};

	return <Textarea label='Publicar contenido' max={65535} value={data.content} onChange={onChangeHandler} />;
};
