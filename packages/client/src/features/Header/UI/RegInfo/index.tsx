import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'shared/UI';
import { PublicRouterPaths } from 'shared/constants';

export const RegInfo: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Link to={PublicRouterPaths.LOGIN_PAGE}>{t('Iniciar sesión')}</Link>
		</>
	);
};
