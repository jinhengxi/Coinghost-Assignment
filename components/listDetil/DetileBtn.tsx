import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

//name수정, 링크 스타일드 컴포넌트

export default function DetileBtn() {
	return (
		<Container>
			<Link href="/">
				<ListBtn>목록</ListBtn>
			</Link>
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
	cursor: pointer;
`;

const CopyBtn = styled(ListBtn)`
	width: 155px;
`;
