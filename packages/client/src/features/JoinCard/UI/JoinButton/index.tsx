import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/UI';
import { PublicRouterPaths } from 'shared/constants';
import { useAppSelector } from 'shared/hooks';

export const JoinButton: FC = () => {
	const navigate = useNavigate();
	const { isLogged, userInfo } = useAppSelector(state => state.user);
	const { t } = useTranslation();

	const onClickHandler = () => {
		navigate(isLogged ? PublicRouterPaths.USERS_PAGE + `/${userInfo.login}` : PublicRouterPaths.LOGUP_PAGE);
	};

	return <Button onClick={onClickHandler}>{t('Unirse')}</Button>;
};
