import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, PublicRouterPaths } from 'shared';

export const JoinButton: FC = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const onClickHandler = () => {
		navigate(PublicRouterPaths.LOGUP_PAGE);
	};

	return <Button onClick={onClickHandler}>{t('Unirse')}</Button>;
};
