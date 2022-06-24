import Link from 'next/link';

import styled from 'styled-components';

interface Props{
	isAllChecked : boolean;
}

export default function SignUpBtn({isAllChecked} : Props ) {

	return (
		<Container>
			<Button>취소</Button>
			<Link href='/signUp/register'>
            	<NextBtn isAllChecked={isAllChecked}><a>다음</a></NextBtn>
			</Link>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 32px;
`;
const Button = styled.button`
	width: 230px;
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
    margin-left: 10px;

	pointer-events:	${({ isAllChecked }) => (isAllChecked ? 'auto' : 'none')};

	background-color: ${({ isAllChecked }) =>
		isAllChecked ? '#5382eb' : '#c3d4fc'};

	color: ${({ isAllChecked }) => (isAllChecked ? '#fff' : '#909090')}; 
	
`
