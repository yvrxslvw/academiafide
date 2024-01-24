import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';

interface ConfirmEditionButtonProps {
	id: number;
	tag: string;
	description: string;
}

export const ConfirmEditionButton: FC<ConfirmEditionButtonProps> = ({ id, tag, description }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		console.log('Edition', id, tag, description);
	};

	return <Button onClick={onClickHandler}>{t('Editar')}</Button>;
};
