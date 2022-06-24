import styled from 'styled-components';

export default function MakeId() {
	return (
		<MakeIdBox>
			<Makeregister>계정생성</Makeregister>
			<Alert>코인고스트는 개인 휴대전화 번호를 계정으로 사용합니다.</Alert>
		</MakeIdBox>
	);
}

const MakeIdBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: end;
	margin: 25px 0;
`;

const Makeregister = styled.div`
	font-size: 14px;
	font-weight: bold;
	color: #2b2b2b;
`;

const Alert = styled.div`
	font-size: 10px;
	color: #5c5c5c;
`;
