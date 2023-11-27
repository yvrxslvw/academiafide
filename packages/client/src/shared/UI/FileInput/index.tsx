import { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import cl from './style.module.scss';

interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export const FileInput: FC<FileInputProps> = ({ label, className, onChange, ...props }) => {
	const { t } = useTranslation();
	const [inputId] = useState(uuidv4());
	const [files, setFiles] = useState('');

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const inputFiles = event.target.files;

		if (inputFiles) {
			for (const file of inputFiles) {
				setFiles(file.name);
			}
		}
		if (onChange) onChange(event);
	};

	return (
		<div className={cn(cl.FileInputBlock, className)}>
			<p className={cl.Title}>{label}:</p>
			<label htmlFor={inputId} className={cl.Label}>
				{t('Subir archivo')}
			</label>
			<input id={inputId} type='file' className={cl.Input} onChange={onChangeHandler} {...props} />
			<p className={cl.FileList}>{files}</p>
		</div>
	);
};
