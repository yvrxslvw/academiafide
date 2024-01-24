import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { usePopup } from 'processes/Popup';
import { useAppSelector } from 'shared/hooks';
import { useAddRoleMutation, useRemoveRoleMutation } from 'shared/api';
import cl from './style.module.scss';

interface RoleButtonProps {
	isExist: boolean;
	tag: string;
	refetch: () => void;
}

export const RoleButton: FC<RoleButtonProps> = ({ isExist, tag, refetch }) => {
	const { userInfo } = useAppSelector(state => state.user);
	const [addRole, { isSuccess: addRoleIsSuccess, isError: addRoleIsError, isLoading: addRoleIsLoading }] =
		useAddRoleMutation();
	const [removeRole, { isSuccess: removeRoleIsSuccess, isError: removeRoleIsError, isLoading: removeRoleIsLoading }] =
		useRemoveRoleMutation();
	const { createPopup } = usePopup();
	const { t } = useTranslation();

	const onClickHandler = () => {
		if (!isExist) addRole({ userId: userInfo.id, roleTag: tag });
		else removeRole({ userId: userInfo.id, roleTag: tag });
	};

	useEffect(() => {
		if (addRoleIsSuccess) {
			refetch();
			createPopup('Роль успешно добавлена.');
		}
	}, [addRoleIsSuccess]);

	useEffect(() => {
		if (removeRoleIsSuccess) {
			refetch();
			createPopup('Роль успешно удалена.');
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
			{isExist ? 'Удалить' : 'Добавить'}
		</button>
	);
};
