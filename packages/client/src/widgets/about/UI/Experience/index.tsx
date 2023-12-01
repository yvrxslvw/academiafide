import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Paragraph } from 'shared/UI';
import { Block } from 'entities/block';

export const Experience: FC = () => {
	const { t } = useTranslation();

	return (
		<Block title={t('Nuestra experencia como Academia')}>
			<Paragraph>
				{t(
					'A pesar de nuestra corta existencia Academia FIDE es muy activa. Hemos tenido oportunidad de organizar numerosos seminarios que otorgaron títulos reconocidos por la Academia tanto de manera presencial como online. Trabajamos durante todo el año lectivo escolar capacitando profesores de diferentes instituciones educativas, brindándoles un programa de trabajo y un seguimiento continuo en sus actividades.',
				)}
			</Paragraph>
		</Block>
	);
};
