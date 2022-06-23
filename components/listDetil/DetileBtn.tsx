import React from 'react';
import styled from 'styled-components';

export default function DetileBtn() {
	return (
		<Container>
			<ListBtn>목록</ListBtn>
			<CopyBtn>URL 복사</CopyBtn>
		</Container>
	);
}

const Container = styled.div`
	margin: 30px 42px;
	display: flex;
	justify-content: space-between;
`;

const ListBtn = styled.button`
	width: 100px;
	height: 50px;
	border-radius: 15px;
	background-color: #5382eb;
	color: #ffffff;
	font-size: 26px;
	padding: 11px 24px 10px 25px;
`;

const CopyBtn = styled(ListBtn)`
	width: 155px;
`;
