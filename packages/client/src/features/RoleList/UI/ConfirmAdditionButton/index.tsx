import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';

interface ConfirmAdditionButtonProps {
	tag: string;
	description: string;
}

export const ConfirmAdditionButton: FC<ConfirmAdditionButtonProps> = ({ tag, description }) => {
	const { t } = useTranslation();

	const onClickHandler = () => {
		console.log('Addition', tag, description);
	};

	return <Button onClick={onClickHandler}>{t('Agregar')}</Button>;
};
