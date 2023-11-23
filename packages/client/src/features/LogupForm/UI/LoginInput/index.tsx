import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Input } from 'shared';
import { LogupModels } from 'entities';

interface LoginInputProps {
	data: LogupModels.LogupData;
	setData: Dispatch<SetStateAction<LogupModels.LogupData>>;
}

export const LoginInput: FC<LoginInputProps> = ({ data, setData }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, login: event.target.value, loginError: false });
	};

	return <Input label='Nombre de usario' value={data.login} onChange={onChangeHandler} error={data.loginError} />;
};
