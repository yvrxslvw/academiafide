import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Input } from 'shared';
import { LogupModels } from 'entities';

interface PasswordConfirmInputProps {
	data: LogupModels.LogupData;
	setData: Dispatch<SetStateAction<LogupModels.LogupData>>;
}

export const PasswordConfirmInput: FC<PasswordConfirmInputProps> = ({ data, setData }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, passwordConfirm: event.target.value, passwordConfirmError: false });
	};

	return (
		<Input
			label='Confirmación de contraseña'
			type='password'
			value={data.passwordConfirm}
			onChange={onChangeHandler}
			error={data.passwordConfirmError}
		/>
	);
};
