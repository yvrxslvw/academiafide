import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './style.module.scss';

interface EditButtonProps {}

export const EditButton: FC<EditButtonProps> = () => {
	const { t } = useTranslation();

	return <button className={cl.EditButton}>{t('Editar')}</button>;
};
