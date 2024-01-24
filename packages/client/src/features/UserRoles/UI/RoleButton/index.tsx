/* eslint-disable no-console */ // !
import { FC } from 'react';
import cn from 'classnames';
import cl from './style.module.scss';

interface RoleButtonProps {
	isExist: boolean;
}

export const RoleButton: FC<RoleButtonProps> = ({ isExist }) => {
	const onClickHandler = () => {
		if (isExist) console.log('Remove');
		else console.log('Add');
	};

	return (
		<button onClick={onClickHandler} className={cn(cl.RoleButton, { [cl.Remove]: isExist })}>
			{isExist ? 'Удалить' : 'Добавить'}
		</button>
	);
};
