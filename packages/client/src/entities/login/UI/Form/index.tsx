import { FC, FormEvent, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Link, PublicRouterPaths } from 'shared';
import cl from './style.module.scss';

interface FormProps {
	loginInput: ReactNode;
	passwordInput: ReactNode;
	nextButton: ReactNode;
}

export const Form: FC<FormProps> = ({ loginInput, passwordInput, nextButton }) => {
	const { t } = useTranslation();

	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmitHandler} className={cl.Form}>
			<section className={cl.Item}>{loginInput}</section>
			<section className={cl.Item}>{passwordInput}</section>
			<section className={cl.Item}>
				<Link to={PublicRouterPaths.RECOVERY_PAGE}>{t('¿Olvidaste tu contraseña?')}</Link>
			</section>
			<section className={cl.Item}>
				<Link to={PublicRouterPaths.LOGUP_PAGE}>{t('¿No tienes una cuenta?')}</Link>
			</section>
			<section className={cn(cl.Item, cl.ButtonBody)}>{nextButton}</section>
		</form>
	);
};
