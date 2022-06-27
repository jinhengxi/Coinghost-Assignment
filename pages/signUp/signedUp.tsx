import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export default function signedUp() {
	return (
		<Container>
			<Image
				src="/images/코인고스트_로고.png"
				width={390}
				height={67}
				alt="logo"
			/>
			<Alert>계정 및 Wallet 생성 완료!</Alert>
			<Image src="/images/유령.png" width={180} height={313} alt="ghost" />
			<Link href="/">
				<MainBtn>
					<a>메인페이지로 이동</a>
				</MainBtn>
			</Link>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
`;

const Alert = styled.div`
	margin: 30px 0 110px 0;
	font-size: 16px;
	color: #6f94e9;
`;

const MainBtn = styled.div`
	width: 390px;
	height: 50px;
	margin-top: 93px;
	padding: 16px 134px 13px;
	border-radius: 7px;
	background-color: #6f94e9;
	font-size: 16px;
	color: #fff;
	cursor: pointer;
`;
