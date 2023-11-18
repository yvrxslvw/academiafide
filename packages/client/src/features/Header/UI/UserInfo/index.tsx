import { FC } from 'react';
import { Link, PublicRouterPaths, useAppSelector } from 'shared';
import cl from './style.module.scss';

export const UserInfo: FC = () => {
	const { userInfo } = useAppSelector(state => state.user);

	const onClickAvatarHandler = () => {
		// eslint-disable-next-line no-console
		console.info('will be account actions here');
	};

	return (
		<>
			<Link to={PublicRouterPaths.MAIN_PAGE}>
				Cerrar sesión
			</Link>
			<img src={userInfo.avatarUrl} alt='Avatar' className={cl.UserAvatar} onClick={onClickAvatarHandler} />
		</>
	);
};
