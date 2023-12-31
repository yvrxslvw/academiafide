import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';
import { IEditProfile } from 'shared/models';

interface EmailInputProps {
	data: IEditProfile;
	setData: Dispatch<SetStateAction<IEditProfile>>;
}

export const EmailInput: FC<EmailInputProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const email = event.target.value;
		setData({ ...data, email, emailError: false });
	};

	return (
		<Input
			type='email'
			label={t('Correo electrónico')}
			value={data.email}
			onChange={onChangeHandler}
			error={data.emailError}
		/>
	);
};
