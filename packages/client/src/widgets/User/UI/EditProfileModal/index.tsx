import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ApplyButton, EmailInput, EmailNews, ImageInput, LoginInput, NewPasswordInput } from 'features/EditProfile';
import { Button, Modal } from 'shared/UI';
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
		image: null,
		login: userInfo.login,
		loginError: false,
		password: '',
		passwordError: false,
		email: userInfo.email || '',
		emailError: false,
		email_news: userInfo.email_news,
	});

	return (
		<Modal title={t('Editando perfil')} shown={shown} setShown={setShown} className={cl.ModalWindow}>
			<ImageInput data={data} setData={setData} />
			<LoginInput data={data} setData={setData} />
			<EmailInput data={data} setData={setData} />
			{userInfo.email && !userInfo.email_confirmed && (
				<section>
					<Button>{t('Confirmar correo electrónico')}</Button>
				</section>
			)}
			<NewPasswordInput data={data} setData={setData} />
			{userInfo.email && userInfo.email_confirmed && <EmailNews data={data} setData={setData} />}
			<section className={cl.ButtonBody}>
				<ApplyButton userInfo={userInfo} data={data} setData={setData} setModalShown={setShown} />
			</section>
		</Modal>
	);
};
