import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Input } from 'shared';

interface LoginInputProps {
	state: string;
	setState: Dispatch<SetStateAction<string>>;
}

export const LoginInput: FC<LoginInputProps> = ({ state, setState }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	};

	return (
		<Input
			label='Nombre de usuario'
			type='text'
			placeholder='Escribe tu nombre de usuario'
			value={state}
			onChange={onChangeHandler}
		/>
	);
};