import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { IEditProfile } from 'shared/models';

interface LoginInputProps {
	data: IEditProfile;
	setData: Dispatch<SetStateAction<IEditProfile>>;
}

export const LoginInput: FC<LoginInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const login = event.target.value;
		setData({ ...data, login, loginError: false });
	};

	return (
		<Input
			type='text'
			label={t('Nombre de usuario')}
			value={data.login}
			onChange={onChangeHandler}
			error={data.loginError}
		/>
	);
};
