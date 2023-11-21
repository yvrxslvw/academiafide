import { FC } from 'react';
import { Paragraph } from 'shared';
import cl from './style.module.scss';
import { Block } from 'entities';

export const Contacts: FC = () => {
	return (
		<Block title='¿Tiene usted alguna pregunta? ¡Contáctenos!' grey>
			<Paragraph>
				¡Puede contactarnos de la forma que más le convenga y hacer la pregunta que le interese en cualquier momento!
			</Paragraph>
			<br />
			<Paragraph>
				Teléfono{' '}
				<a href='tel:+34722369868' className={cl.Link}>
					+34 722 369 868
				</a>
			</Paragraph>
			<br />
			<Paragraph>
				Correo electrónico{' '}
				<a href='mailto:fideacademia@gmail.com' className={cl.Link}>
					fideacademia@gmail.com
				</a>
			</Paragraph>
			<br />
			<Paragraph>
				Facebook{' '}
				<a href='https://www.facebook.com/academiafide' target='_blank' rel='noreferrer' className={cl.Link}>
					https://www.facebook.com/academiafide
				</a>
			</Paragraph>
			<br />
			<Paragraph>
				Twitter{' '}
				<a href='https://twitter.com/academia_fide' target='_blank' rel='noreferrer' className={cl.Link}>
					https://twitter.com/academia_fide
				</a>
			</Paragraph>
			<br />
			<Paragraph>
				Instagram{' '}
				<a href='https://www.instagram.com/fideacademia' target='_blank' rel='noreferrer' className={cl.Link}>
					https://www.instagram.com/fideacademia
				</a>
			</Paragraph>
		</Block>
	);
};
