import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
	children: ReactNode;
	background?: string;
}

export const Layout = ({ children, background }: Props): JSX.Element => {
	return (
		<Container>
			<BarsStatus background={background} />
			{children}
		</Container>
	);
};

const Container = styled.div`
	width: 750px;
`;

const BarsStatus = styled.div<{ background?: string }>`
	width: 750px;
	height: 88px;
	background: ${({ background }) => (background ? background : '#fff')};
`;
