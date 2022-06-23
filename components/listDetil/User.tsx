import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FiMoreVertical } from "react-icons/fi";

export default function User() {
	return (
		<Container>
			<Title>제목입니다. 크기는 33px입니다.</Title>
			<ProfileBox>
				<Image src="/images/detail.png" width={80} height={80} alt="profile" />
				<ProfileInfo>
					<NickName>👻코드민</NickName>
					<Date>2021.10.12 18:22</Date>
					<Views>조회수 134</Views>
				</ProfileInfo>
				<Vertical>
					<VeticalIcon/>
				</Vertical>
			</ProfileBox>
			<Bar />
		</Container>
	);
}

const Container = styled.div`
	margin: 0 42px;
	font-weight: 500;
`;

const Title = styled.p`
	font-size: 33px;
	margin: 43px 0;
`;

const ProfileBox = styled.div`
	display: flex;
    align-items: center;
    justify-content: center;
	height: 80px;

	img {
		border-radius: 50%;
	}
`;

const ProfileInfo = styled.div`
	margin-left: 22px;
    flex: 1;
`;

const NickName = styled.div`
	font-size: 30px;
	margin-top: 5px;
	margin-bottom: 15px;
`;

const Date = styled.span`
	font-size: 24px;
	color: #6f7070;
	margin-right: 15px;
`;

const Views = styled.span`
	font-size: 24px;
	color: #6f7070;
	padding-top: 30px;
    line-height: 1.2;
    letter-spacing: -0.6px;
`;

const Vertical = styled.div`
	display: flex;
	margin: 25px 0 0 245px;
`;

const VeticalIcon = styled(FiMoreVertical)`
	font-size: 35px;
	color: #909090
`


const Bar = styled.div`
	width: 666px;
	border: 0.5px solid #5382eb;
	margin: 25px 0;
`;
