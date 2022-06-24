import styled from 'styled-components';

interface Props{
	isAllChecked : boolean;
}

export default function SignUpBtn({isAllChecked} : Props ) {

	return (
		<Container>
			<Button>취소</Button>
            <NextBtn isAllChecked={isAllChecked}>다음</NextBtn>
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

const NextBtn = styled(Button)<{ isAllChecked : boolean}>`
	border: none;
    background-color: #c3d4fc;
    color: #909090;
    margin-left: 10px;

	background-color: ${({ isAllChecked }) =>
		isAllChecked ? '#5382eb' : 'c3d4f'};
	color: ${({ isAllChecked }) => (isAllChecked ? '#fff' : '#909090')};
`
