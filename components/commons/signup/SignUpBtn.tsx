import styled from 'styled-components';

export default function SignUpBtn() {
	return (
		<Container>
			<Button>취소</Button>
            <NextBtn>다음</NextBtn>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 32px;
`;
const Button = styled.button`
	width: 240px;
	height: 50px;
    font-size: 16px;
    font-weight: bold;
	border-radius: 7px;
	border: solid 1px #d5d5d5;
	background-color: #fff;
    cursor: pointer;
`;

const NextBtn = styled(Button)`
    background-color: #c3d4fc;
    color: #909090;
    margin-left: 10px;
`
