import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Checkbox, Link, PublicRouterPaths } from 'shared';
import cl from './style.module.scss';

interface TermsCheckboxProps {
	state: boolean;
	setState: Dispatch<SetStateAction<boolean>>;
}

const CheckboxLabel: FC = () => {
	return (
		<>
			Acepto los{' '}
			<Link to={PublicRouterPaths.TERMS_PAGE} target='_blank' className={cl.TermsLink}>
				términos
			</Link>{' '}
			de uso de este Servicio
		</>
	);
};

export const TermsCheckbox: FC<TermsCheckboxProps> = ({ state, setState }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.checked);
	};

	return <Checkbox label={<CheckboxLabel />} checked={state} onChange={onChangeHandler} />;
};
