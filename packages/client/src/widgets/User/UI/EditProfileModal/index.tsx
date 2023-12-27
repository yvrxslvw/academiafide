import { Dispatch, FC, SetStateAction } from 'react';
import { Button, Checkbox, FileInput, Input, Modal } from 'shared/UI';
import { UserInfo } from 'shared/api';
import cl from './style.module.scss';

interface EditProfileModalProps {
	userInfo: UserInfo;
	shown: boolean;
	setShown: Dispatch<SetStateAction<boolean>>;
}

export const EditProfileModal: FC<EditProfileModalProps> = ({ userInfo, shown, setShown }) => {
	return (
		<Modal title='Редактирование профиля' shown={shown} setShown={setShown} className={cl.ModalWindow}>
			<FileInput label='Изображение профиля' accept='image/png, image/jpeg' />
			<Input type='text' label='Логин' value={userInfo.login} />
			<Input type='email' label='Адрес эл.почты' value={userInfo.email} />
			{userInfo.email && !userInfo.email_confirmed && (
				<section>
					<Button>Подтвердить почту</Button>
				</section>
			)}
			<Input type='password' label='Новый пароль' />
			{userInfo.email && userInfo.email_confirmed && (
				<Checkbox label='Включить/выключить рассылку новостей на почту' checked={userInfo.email_news} />
			)}
			<section className={cl.ButtonBody}>
				<Button>Применить</Button>
			</section>
		</Modal>
	);
};
