import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';

interface AddNewButtonProps {}

export const AddNewButton: FC<AddNewButtonProps> = () => {
	const { t } = useTranslation();

	return <Button>{t('Agregar')}</Button>;
};
