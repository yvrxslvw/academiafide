import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { IEditProfile } from 'shared/models';

interface NewPasswordInputProps {
	data: IEditProfile;
	setData: Dispatch<SetStateAction<IEditProfile>>;
}

export const NewPasswordInput: FC<NewPasswordInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const password = event.target.value;
		setData({ ...data, password });
	};

	return <Input type='password' label={t('Nueva contraseña')} value={data.password} onChange={onChangeHandler} />;
};
