import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './style.module.scss';

interface DeleteButtonProps {}

export const DeleteButton: FC<DeleteButtonProps> = () => {
	const { t } = useTranslation();

	return <button className={cl.DeleteButton}>{t('Eliminar')}</button>;
};
