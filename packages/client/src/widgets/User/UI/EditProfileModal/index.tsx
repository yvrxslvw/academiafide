import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageInput, LoginInput } from 'features/EditProfile';
import { Button, Checkbox, Input, Modal } from 'shared/UI';
import { UserInfo } from 'shared/api';
import { IEditProfile } from 'shared/models';
import cl from './style.module.scss';

interface EditProfileModalProps {
	userInfo: UserInfo;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const EditProfileModal: FC<EditProfileModalProps> = ({ userInfo, shown, setShown }) => {
	const { t } = useTranslation();
	const [data, setData] = useState<IEditProfile>({
		image: {} as File,
		login: userInfo.login,
		password: '',
		email: userInfo.email || '',
		email_news: userInfo.email_news,
	});

	return (
		<Modal title={t('Editando perfil')} shown={shown} setShown={setShown} className={cl.ModalWindow}>
			<ImageInput data={data} setData={setData} />
			<LoginInput data={data} setData={setData} />
			<Input type='email' label={t('Correo electrónico')} value={userInfo.email || ''} />
			{userInfo.email && !userInfo.email_confirmed && (
				<section>
					<Button>{t('Confirmar correo electrónico')}</Button>
				</section>
			)}
			<Input type='password' label={t('Nueva contraseña')} />
			{userInfo.email && userInfo.email_confirmed && (
				<Checkbox
					label={t('Activar/desactivar boletines informativos por correo electrónico')}
					checked={userInfo.email_news}
				/>
			)}
			<section className={cl.ButtonBody}>
				<Button>{t('Aplicar')}</Button>
			</section>
		</Modal>
	);
};
