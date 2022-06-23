import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FiMoreVertical } from "react-icons/fi";
import { DetailProps } from '../../pages/[id]';

interface Props {
	data: DetailProps;
}

export default function User({ post }: { post: Props }) {

	const timeCut = (value: string) =>{
		return value.replace('T', ' ').substring(0, 16)
	}

	return (
		<Container>
			<Title>{post.data.title}</Title>
			<ProfileBox>
				<Image src="/images/detail.png" width={80} height={80} alt="profile" />
				<ProfileInfo>
					<NickName>{post.data.creator.nickName}</NickName>
					<Date>{timeCut(post.data.createdAt)}</Date>
					<Views>조회수 {post.data.views}</Views>
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
	margin: 25px 0 0 220px;
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
