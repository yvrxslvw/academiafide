import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IRole } from 'shared/models';
import cl from './style.module.scss';

interface RoleRowProps {
	role: IRole;
}

export const RoleRow: FC<RoleRowProps> = ({ role }) => {
	const { t } = useTranslation();

	if (role.tag === 'USER' || role.tag === 'ADMIN') return null;

	return (
		<div className={cl.RoleRow}>
			<p>
				ID {role.id}: {role.description}
			</p>
			<section className={cl.ButtonSection}>
				<button className={cl.EditButton}>{t('Editar')}</button>
				<button className={cl.DeleteButton}>{t('Eliminar')}</button>
			</section>
		</div>
	);
};
