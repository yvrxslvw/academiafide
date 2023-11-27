import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { Checkbox, Link, PublicRouterPaths } from 'shared';
import { LogupModels } from 'entities';
import cl from './style.module.scss';

interface TermsCheckboxProps {
	data: LogupModels.LogupData;
	setData: Dispatch<SetStateAction<LogupModels.LogupData>>;
}

const CheckboxLabel: FC = () => {
	const { t } = useTranslation();

	return (
		<>
			{t('Acepto los')}{' '}
			<Link to={PublicRouterPaths.TERMS_PAGE} target='_blank' className={cl.TermsLink}>
				{t('términos')}
			</Link>{' '}
			{t('de uso de este Servicio')}
		</>
	);
};

export const TermsCheckbox: FC<TermsCheckboxProps> = ({ data, setData }) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, terms: event.target.checked });
	};

	return <Checkbox label={<CheckboxLabel />} checked={data.terms} onChange={onChangeHandler} />;
};
