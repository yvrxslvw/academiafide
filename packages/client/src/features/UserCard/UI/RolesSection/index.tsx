import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Paragraph, RoleTag } from 'shared/UI';
import { IRole } from 'shared/models';
import cl from './style.module.scss';

interface RolesSectionProps {
	roles: IRole[];
}

export const RolesSection: FC<RolesSectionProps> = ({ roles }) => {
	const { t } = useTranslation();

	return (
		<section className={cl.RolesSection}>
			<Paragraph>
				{t('Roles')}:{' '}
				<button className={cl.EditRoleButton}>
					<FontAwesomeIcon icon={faPen} />
				</button>
			</Paragraph>
			<section className={cl.RolesRow}>
				{roles.map(({ id, tag }) => (
					<RoleTag tag={tag} className={cl.RoleItem} key={id} />
				))}
			</section>
		</section>
	);
};
