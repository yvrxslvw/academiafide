import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Input } from 'shared';

interface PasswordConfirmInputProps {
	state: string;
	setState: Dispatch<SetStateAction<string>>;
}

export const PasswordConfirmInput: FC<PasswordConfirmInputProps> = ({ state, setState }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	return <Input label='Confirmación de contraseña' type='password' value={state} onChange={onChangeHandler} />;
};
