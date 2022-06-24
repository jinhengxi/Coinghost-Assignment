import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
	children: ReactNode;
}
import Image from 'next/image';

export default function SignUpHead( { children } :Props ):JSX.Element {
	return (
		<Container>
			<Header>
				<Image
					src="/images/코인고스트_로고.png"
					width={390}
					height={67}
					alt="menu"
				/>
				<HeaderContent>코인고스트 계정 및 Wallet을 생성합니다.</HeaderContent>
			</Header>
			<ContentsBox>
				{children}
			</ContentsBox>
		</Container>
	);
}

const Container = styled.div`
	width: 750px;
`;

const ContentsBox = styled.div`
    width: 490px;
    margin: auto;
`

const Header = styled.div`
	height: 190px;
	border-bottom: 1px solid #5382eb;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const HeaderContent = styled.div`
	font-size: 16px;
	color: #6f94e9;
	margin-top: 30px;
`;
