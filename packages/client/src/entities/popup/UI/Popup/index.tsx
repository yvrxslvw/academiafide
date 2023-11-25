import { FC } from 'react';
import cl from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

export const Popup: FC = () => {
	return (
		<div className={cl.Popup}>
			<section className={cl.Icon}>
				<FontAwesomeIcon icon={faInfo} />
			</section>
			<section className={cl.Content}>Nombre de usuario o contraseña incorrectos.</section>
			<button className={cl.CloseButton}>
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</div>
	);
};
