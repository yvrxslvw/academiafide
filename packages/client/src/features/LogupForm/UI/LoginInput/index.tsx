import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared';
import { LogupModels } from 'entities';

interface LoginInputProps {
	data: LogupModels.LogupData;
	setData: Dispatch<SetStateAction<LogupModels.LogupData>>;
}

export const LoginInput: FC<LoginInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, login: event.target.value, loginError: false });
	};

	return <Input label={t('Nombre de usuario')} value={data.login} onChange={onChangeHandler} error={data.loginError} />;
};
