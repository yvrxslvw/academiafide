import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox } from 'shared/UI';
import { IEditProfile } from 'shared/models';

interface EmailNewsProps {
	data: IEditProfile;
	setData: Dispatch<SetStateAction<IEditProfile>>;
}

export const EmailNews: FC<EmailNewsProps> = ({ data, setData }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const email_news = event.target.checked;
		setData({ ...data, email_news });
	};

	return (
		<Checkbox
			label={t('Activar boletines informativos por correo electrónico')}
			checked={data.email_news}
			onChange={onChangeHandler}
		/>
	);
};
