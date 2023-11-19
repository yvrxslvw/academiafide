import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Input } from 'shared';

interface PasswordInputProps {
	state: string;
	setState: Dispatch<SetStateAction<string>>;
}

export const PasswordInput: FC<PasswordInputProps> = ({ state, setState }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	return <Input label='Contraseña' value={state} onChange={onChangeHandler} />;
};
