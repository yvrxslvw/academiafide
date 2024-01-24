import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { usePopup } from 'processes/Popup';
import { useAddRoleMutation, useRemoveRoleMutation } from 'shared/api';
import cl from './style.module.scss';

interface RoleButtonProps {
	isExist: boolean;
	tag: string;
	userId: number;
	refetch: () => void;
}

export const RoleButton: FC<RoleButtonProps> = ({ isExist, tag, userId, refetch }) => {
	const [addRole, { isSuccess: addRoleIsSuccess, isError: addRoleIsError, isLoading: addRoleIsLoading }] =
		useAddRoleMutation();
	const [removeRole, { isSuccess: removeRoleIsSuccess, isError: removeRoleIsError, isLoading: removeRoleIsLoading }] =
		useRemoveRoleMutation();
	const { createPopup } = usePopup();
	const { t } = useTranslation();

	const onClickHandler = () => {
		if (!isExist) addRole({ userId, roleTag: tag });
		else removeRole({ userId, roleTag: tag });
	};

	useEffect(() => {
		if (addRoleIsSuccess) {
			refetch();
			createPopup(t('El rol se ha agregado exitosamente.'));
		}
	}, [addRoleIsSuccess]);

	useEffect(() => {
		if (removeRoleIsSuccess) {
			refetch();
			createPopup(t('El rol se ha eliminado exitosamente.'));
		}
	}, [removeRoleIsSuccess]);

	useEffect(() => {
		if (addRoleIsError) {
			createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		}
	}, [addRoleIsError]);

	useEffect(() => {
		if (removeRoleIsError) {
			createPopup(t('Se produjo un error inesperado... Vuelva a intentarlo más tarde.'));
		}
	}, [removeRoleIsError]);

	return (
		<button
			onClick={onClickHandler}
			className={cn(cl.RoleButton, {
				[cl.Remove]: isExist,
			})}
			disabled={addRoleIsLoading || removeRoleIsLoading}
		>
			{isExist ? t('Eliminar') : t('Agregar')}
		</button>
	);
};
