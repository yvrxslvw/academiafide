import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/UI';

interface CodeInputProps {
	code: string;
	setCode: Dispatch<SetStateAction<string>>;
}

export const CodeInput: FC<CodeInputProps> = ({ code, setCode }) => {
	const { t } = useTranslation();

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const code = event.target.value;
		setCode(code);
	};

	return <Input label={t('Código de confirmación')} value={code} onChange={onChangeHandler} />;
};
