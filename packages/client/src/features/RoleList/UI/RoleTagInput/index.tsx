import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Input } from 'shared/UI';

interface RoleTagInputProps {
	tag: string;
	setTag: Dispatch<SetStateAction<string>>;
}

export const RoleTagInput: FC<RoleTagInputProps> = ({ tag, setTag }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTag(event.target.value);
	};

	return <Input label='Тэг роли' value={tag} onChange={onChangeHandler} />;
};
