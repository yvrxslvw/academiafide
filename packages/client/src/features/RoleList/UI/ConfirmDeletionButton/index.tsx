import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';

interface ConfirmDeletionButtonProps {
	id: number;
}

export const ConfirmDeletionButton: FC<ConfirmDeletionButtonProps> = ({ id }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		console.log('Deletion', id);
	};

	return <Button onClick={onClickHandler}>{t('Eliminar')}</Button>;
};
