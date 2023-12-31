import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
	ApplyButton,
	ConfirmEmailButton,
	EmailInput,
	EmailNews,
	ImageInput,
	LoginInput,
	NewPasswordInput,
} from 'features/EditProfile';
import { Modal } from 'shared/UI';
import { UserInfo } from 'shared/api';
import { IEditProfile } from 'shared/models';
import cl from './style.module.scss';

interface EditProfileModalProps {
	userInfo: UserInfo;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
	setShownConfirmEmailModal: Dispatch<SetStateAction<boolean>>;
	isSelf: boolean;
}

export const EditProfileModal: FC<EditProfileModalProps> = ({
	userInfo,
	shown,
	setShown,
	setShownConfirmEmailModal,
	isSelf,
}) => {
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

	useEffect(() => {
		setData({
			image: null,
			login: userInfo.login,
			loginError: false,
			password: '',
			passwordError: false,
			email: userInfo.email || '',
			emailError: false,
			email_news: userInfo.email_news,
		});
	}, [userInfo]);

	return (
		<Modal title={t('Editando perfil')} shown={shown} setShown={setShown} className={cl.ModalWindow}>
			<ImageInput data={data} setData={setData} />
			<LoginInput data={data} setData={setData} />
			<EmailInput data={data} setData={setData} />
			{isSelf && userInfo.email && !userInfo.email_confirmed && (
				<section>
					<ConfirmEmailButton email={userInfo.email} setShownConfirmEmailModal={setShownConfirmEmailModal} />
				</section>
			)}
			<NewPasswordInput data={data} setData={setData} />
			{isSelf && userInfo.email && userInfo.email_confirmed && <EmailNews data={data} setData={setData} />}
			<section className={cl.ButtonBody}>
				<ApplyButton userInfo={userInfo} data={data} setData={setData} setModalShown={setShown} isSelf={isSelf} />
			</section>
		</Modal>
	);
};
