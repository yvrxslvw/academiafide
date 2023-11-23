import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Button, useLogupMutation } from 'shared';
import { LogupModels } from 'entities';

interface NextButtonProps {
	logupData: LogupModels.LogupData;
	setLogupData: Dispatch<SetStateAction<LogupModels.LogupData>>;
}

export const NextButton: FC<NextButtonProps> = ({ logupData, setLogupData }) => {
	const [logup, { data }] = useLogupMutation();

	const onClickHandler = () => {
		setLogupData({ ...logupData, loginError: false, passwordError: false, passwordConfirmError: false });
		const { login, password, passwordConfirm, terms } = logupData;
		const loginRegex = /^(?=.*[a-z])[a-z0-9.]{3,24}$/;
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[0-9!@#$%^&*()_+\-=/\\[\]?.,;:'"{}<>|])[a-zA-Z0-9!@#$%^&*()_+\-=/\\[\]?.,;:'"{}<>|]{3,}/;

		if (login.search(loginRegex) === -1) {
			// todo: shop popup
			setLogupData({ ...logupData, loginError: true });
			return;
		}
		if (password.search(passwordRegex) === -1) {
			// todo: show popup
			setLogupData({ ...logupData, passwordError: true });
			return;
		}
		if (!passwordConfirm || passwordConfirm !== password) {
			// todo: show popup
			setLogupData({ ...logupData, passwordConfirmError: true });
			return;
		}
		if (!terms) {
			// todo: show popup
			return;
		}

		logup({ login, password });
	};

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log(data?.token);
	}, [data]);

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
