import { Dispatch, FC, SetStateAction } from 'react';
import { Button } from 'shared';
import { LogupModels } from 'entities';

interface NextButtonProps {
	data: LogupModels.LogupData;
	setData: Dispatch<SetStateAction<LogupModels.LogupData>>;
}

export const NextButton: FC<NextButtonProps> = ({ data, setData }) => {
	const onClickHandler = () => {
		setData({ ...data, loginError: false, passwordError: false, passwordConfirmError: false });
		const { login, password, passwordConfirm, terms } = data;
		const loginRegex = /^(?=.*[a-z])[a-z0-9.]{3,24}$/;
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[0-9!@#$%^&*()_+\-=/\\[\]?.,;:'"{}<>|])[a-zA-Z0-9!@#$%^&*()_+\-=/\\[\]?.,;:'"{}<>|]{3,}/;

		if (login.search(loginRegex) === -1) {
			// todo: shop popup
			setData({ ...data, loginError: true });
			return;
		}
		if (password.search(passwordRegex) === -1) {
			// todo: show popup
			setData({ ...data, passwordError: true });
			return;
		}
		if (!passwordConfirm || passwordConfirm !== password) {
			// todo: show popup
			setData({ ...data, passwordConfirmError: true });
			return;
		}
		if (!terms) {
			// todo: show popup
			return;
		}
	};

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
