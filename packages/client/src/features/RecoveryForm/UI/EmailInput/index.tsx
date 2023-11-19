import { ChangeEvent, Dispatch, FC, InputHTMLAttributes, SetStateAction } from 'react';
import { Input } from 'shared';

interface EmailInputProps extends InputHTMLAttributes<HTMLInputElement> {
	state: string;
	setState: Dispatch<SetStateAction<string>>;
}

export const EmailInput: FC<EmailInputProps> = ({ state, setState }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	return <Input label='Dirección de correo electrónico' type='email' value={state} onChange={onChangeHandler} />;
};
