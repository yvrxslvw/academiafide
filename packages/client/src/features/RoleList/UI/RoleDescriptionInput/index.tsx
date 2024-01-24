import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Input } from 'shared/UI';

interface RoleDescriptionInputProps {
	description: string;
	setDescription: Dispatch<SetStateAction<string>>;
}

export const RoleDescriptionInput: FC<RoleDescriptionInputProps> = ({ description, setDescription }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setDescription(event.target.value);
	};

	return <Input label='Описание роли' value={description} onChange={onChangeHandler} />;
};
