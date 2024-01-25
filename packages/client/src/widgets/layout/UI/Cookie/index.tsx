import { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import cl from './style.module.scss';

interface CookieProps {
	isCookieShown: boolean;
	setIsCookieShown: Dispatch<SetStateAction<boolean>>;
}

export const Cookie: FC<CookieProps> = ({ isCookieShown, setIsCookieShown }) => {
	const { t } = useTranslation();

	if (!isCookieShown) return null;

	const onClickHandler = () => {
		document.cookie = 'cookieAccepted=true; SameSite=Lax; expires=' + new Date(9999, 0, 1);
		setIsCookieShown(false);
	};

	return (
		<div className={cl.Cookie}>
			<p>
				{t(
					'Este sitio web utiliza cookies para garantizar la máxima comodidad y confort a los usuarios al utilizar este recurso.',
				)}
			</p>
			<section className={cl.ButtonSection}>
				<button onClick={onClickHandler}>{t('Aceptar')}</button>
			</section>
		</div>
	);
};
