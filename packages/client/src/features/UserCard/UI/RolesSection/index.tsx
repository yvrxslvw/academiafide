import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Paragraph, RoleTag } from 'shared/UI';
import { useAppSelector } from 'shared/hooks';
import cl from './style.module.scss';

interface RolesSectionProps {
	username: string;
}

export const RolesSection: FC<RolesSectionProps> = ({ username }) => {
	const { userInfo } = useAppSelector(state => state.user); // !

	return (
		<section className={cl.RolesSection}>
			<Paragraph>
				Roles:{' '}
				<button className={cl.EditRoleButton}>
					<FontAwesomeIcon icon={faPen} />
				</button>
			</Paragraph>
			<section className={cl.RolesRow}>
				{userInfo.roles.map(({ id, tag }) => (
					<RoleTag tag={tag} className={cl.RoleItem} key={id} />
				))}
			</section>
		</section>
	);
};
