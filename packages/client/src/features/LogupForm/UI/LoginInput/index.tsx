import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { LogupData } from 'entities/logup';

interface LoginInputProps {
	data: LogupData;
	setData: Dispatch<SetStateAction<LogupData>>;
}

export const LoginInput: FC<LoginInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, login: event.target.value, loginError: false });
	};

	return <Input label={t('Nombre de usuario')} value={data.login} onChange={onChangeHandler} error={data.loginError} />;
};
