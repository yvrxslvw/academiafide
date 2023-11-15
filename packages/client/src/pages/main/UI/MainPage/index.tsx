import { FC } from 'react';
import { Button, Link, Logo, Paragraph, Title } from 'shared';

export const MainPage: FC = () => {
	return (
		<>
			<h3>Hello chess!</h3>
			<Logo />
			<Link to='/testings'>Cerrar sesión</Link>
			<Link to='/testings' small>
				Cerrar sesión small
			</Link>
			<Button>Click</Button>
			<Title>Title</Title>
			<Paragraph>Paragraph</Paragraph>
			<Paragraph small>Paragraph small</Paragraph>
		</>
	);
};
