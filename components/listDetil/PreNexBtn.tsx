import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function PreNexBtn() {
	return (
		<Container>
			<Button>
				<Image src="/images/다각형1.png" width={20} height={15} alt="profile" />
				<PrePost>이전글</PrePost>
				<PreTitle>이전글로 이동하게 해주세요</PreTitle>
				<Date>2021.10.12</Date>
			</Button>
			<NextBtn>
				<Image src="/images/다각형2.png" width={20} height={15} alt="profile" />
				<PrePost>다음글</PrePost>
				<PreTitle>다음글로 이동하게 해주세요 이전글 없으면</PreTitle>
				<Date>2021.10.12</Date>
			</NextBtn>
		</Container>
	);
}

const Container = styled.div`
	margin: 40px 42px;
`;
const Button = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;
const PrePost = styled.div`
	font-size: 22px;
	letter-spacing: -0.55px;
	margin: 0 22px;
	color: #6f7070;
`;
const PreTitle = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	width: 400px;
	font-size: 22px;
	letter-spacing: -0.55px;
	margin: 0 22px;
	color: #6f7070;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: no-wrap;
`;

const Date = styled.div`
	font-size: 22px;
	letter-spacing: -0.55px;
	color: #6f7070;
`;

const NextBtn = styled(Button)`
	padding-top: 19px;
	border-top: 1px solid #d5d5d5;
`;
