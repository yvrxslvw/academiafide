import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from 'shared/models';
import { API_URL, PublicRouterPaths } from 'shared/constants';
import { Icons } from 'shared/assets';
import { RoleTag } from 'shared/UI';
import cl from './style.module.scss';

interface UserRowProps {
	user: IUser;
}

export const UserRow: FC<UserRowProps> = ({ user }) => {
	const navigate = useNavigate();

	const onClickHandler = () => {
		navigate(PublicRouterPaths.USERS_PAGE + `/${user.login}`);
	};

	return (
		<div className={cl.UserRow} onClick={onClickHandler}>
			<section className={cl.ImageSection}>
				<img src={user.image ? API_URL + `/${user.image}` : Icons.ChessFigure} alt='user' />
			</section>
			<p>{user.login}</p>
			<section className={cl.RolesSection}>
				{user.roles.map(({ id, tag, description }) => (
					<RoleTag key={id} tag={tag} description={description} />
				))}
			</section>
		</div>
	);
};
