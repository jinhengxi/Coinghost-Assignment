import styled from 'styled-components';

export default function Footer() {
	return (
		<Container>
			<Contents>
				<span>이용약관</span>
				<span>개인정보 처리방침</span>
				<span>백서 바로가기</span>
				<span>공지사항</span>
			</Contents>
			<Logo>coinghost@coinghost.com</Logo>
		</Container>
	);
}

const Container = styled.div`
	margin: auto;
	font-size: 13px;
	color: #acacac;
`;
const Contents = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	span:nth-child(n + 2) {
		margin-left: 20px;
	}
`;

const Logo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0 25px 0;
`;
