import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Paragraph, RoleTag } from 'shared/UI';
import { IRole } from 'shared/models';
import cl from './style.module.scss';
import { useAppSelector } from 'shared/hooks';
import { isAdmin } from 'shared/utils';

interface RolesSectionProps {
	roles: IRole[];
}

export const RolesSection: FC<RolesSectionProps> = ({ roles }) => {
	const { t } = useTranslation();
	const { userInfo } = useAppSelector(state => state.user);

	return (
		<section className={cl.RolesSection}>
			<Paragraph>
				{t('Roles')}:{' '}
				{isAdmin(userInfo) && (
					<button className={cl.EditRoleButton}>
						<FontAwesomeIcon icon={faPen} />
					</button>
				)}
			</Paragraph>
			<section className={cl.RolesRow}>
				{roles.map(({ id, tag }) => (
					<RoleTag tag={tag} className={cl.RoleItem} key={id} />
				))}
			</section>
		</section>
	);
};
