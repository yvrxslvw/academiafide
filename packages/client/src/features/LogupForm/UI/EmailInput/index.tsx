import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Input } from 'shared';

interface EmailInputProps {
	state: string;
	setState: Dispatch<SetStateAction<string>>;
}

export const EmailInput: FC<EmailInputProps> = ({ state, setState }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	return <Input label='Dirección de correo electrónico' value={state} onChange={onChangeHandler} />;
};
