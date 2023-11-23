import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Button, isErrorFromBackend, useLogupMutation } from 'shared';
import { LogupModels } from 'entities';

interface NextButtonProps {
	logupData: LogupModels.LogupData;
	setLogupData: Dispatch<SetStateAction<LogupModels.LogupData>>;
}

export const NextButton: FC<NextButtonProps> = ({ logupData, setLogupData }) => {
	const [fetchLogup, { data, error }] = useLogupMutation();

	const onClickHandler = async () => {
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

		await fetchLogup({ login, password });
		// todo: navigate to the user account
	};

	useEffect(() => {
		if (data) window.localStorage.setItem('accessToken', data.token);
	}, [data]);

	useEffect(() => {
		if (isErrorFromBackend(error) && error.data.statusCode === 403) {
			// todo: login already taken error popup
			setLogupData({ ...logupData, loginError: true });
		} else {
			// todo: unexpected error popup
		}
	}, [error]);

	return (
		<Button type='submit' onClick={onClickHandler}>
			Siguente
		</Button>
	);
};
