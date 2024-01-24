import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';

interface RoleDescriptionInputProps {
	description: string;
	setDescription: Dispatch<SetStateAction<string>>;
}

export const RoleDescriptionInput: FC<RoleDescriptionInputProps> = ({ description, setDescription }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setDescription(event.target.value);
	};

	return <Input label={t('Descripción del rol')} value={description} onChange={onChangeHandler} />;
};
