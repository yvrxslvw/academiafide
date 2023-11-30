import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, PublicRouterPaths, formatImageUrl, useAppDispatch, useAppSelector, useLogoutMutation } from 'shared';
import cl from './style.module.scss';
import { UserSlice } from 'app/store/models';

export const UserInfo: FC = () => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);
	const dispatch = useAppDispatch();
	const { logout } = UserSlice.actions;
	const [logoutUser] = useLogoutMutation();

	const onClickAvatarHandler = () => {
		// eslint-disable-next-line no-console
		console.info('will be account actions here');
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
			<img
				src={userInfo.image ? formatImageUrl(userInfo.image) : 'https://via.placeholder.com/600/92c952'}
				alt='Avatar'
				className={cl.UserAvatar}
				onClick={onClickAvatarHandler}
			/>
		</>
	);
};
