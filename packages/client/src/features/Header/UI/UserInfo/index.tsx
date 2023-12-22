import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { useLogoutMutation } from 'shared/api';
import { PublicRouterPaths } from 'shared/constants';
import { Link } from 'shared/UI';
import { formatImageUrl } from 'shared/utils';
import { UserSlice } from 'app/store/models';
import cl from './style.module.scss';
import { Icons } from 'shared/assets';

export const UserInfo: FC = () => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();
	const { logout } = UserSlice.actions;
	const [logoutUser] = useLogoutMutation();
	const navigate = useNavigate();

	const onClickAvatarHandler = () => {
		navigate(PublicRouterPaths.USERS_PAGE + `/${userInfo.login}`);
	};

	const onClickLogoutHandler = async () => {
		await logoutUser();
		dispatch(logout());
		window.localStorage.removeItem('accessToken');
	};

	return (
		<>
			<Link to={PublicRouterPaths.MAIN_PAGE} onClick={onClickLogoutHandler}>
				{t('Cerrar sesión')}
			</Link>
			<section className={cl.UserAvatar}>
				<img
					src={userInfo.image ? formatImageUrl(userInfo.image) : Icons.ChessFigure}
					alt='Avatar'
					onClick={onClickAvatarHandler}
				/>
			</section>
		</>
	);
};
