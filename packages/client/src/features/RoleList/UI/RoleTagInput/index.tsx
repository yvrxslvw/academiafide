import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';

interface RoleTagInputProps {
	tag: string;
	setTag: Dispatch<SetStateAction<string>>;
}

export const RoleTagInput: FC<RoleTagInputProps> = ({ tag, setTag }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTag(event.target.value);
	};

	return <Input label={t('Etiqueta de rol')} value={tag} onChange={onChangeHandler} />;
};
