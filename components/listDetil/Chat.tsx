import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { DetailProps } from '../../pages/[id]';

interface Props {
	data: DetailProps;
}

export default function Chat({ post }: { post: Props }) {
	return (
		<Container>
			<ChatBox>
				<Post>댓글</Post>
				<PostIconBox>
					<Image src="/images/heart.png" width={39} height={39} alt="heart" />
					<div className="number">{post.data.likes}</div>
					<Image src="/images/댓글.png" width={36} height={36} alt="chat" />
					<div className="number">{post.data.comments}</div>
				</PostIconBox>
			</ChatBox>
			<PostBox>
				<NickName>{post.data.creator.nickName}</NickName>
				<PlaceHold>※ 댓글에 답글이 달렸을 시 수정/삭제가 불가합니다.</PlaceHold>
				<PostBtn>등록</PostBtn>
			</PostBox>
			<ChatArea>
				<Image src="/images/무플아이콘.png" width={88} height={88} alt="chat" />
				<FirstChat>
					댓글이 없습니다.
					<br />첫 댓글을 작성해 보세요
				</FirstChat>
			</ChatArea>
		</Container>
	);
}

const Container = styled.div`
	margin: 30px 42px;
`;

const ChatBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

const Post = styled.p`
	font-size: 31px;
	font-weight: bold;
	color: #2b2b2b;
`;
const PostIconBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	.number {
		font-size: 32px;
		color: #5382eb;
		margin-left: 13px;

		&:nth-child(2) {
			margin-right: 26px;
		}
	}
`;

const PostBox = styled.div`
	width: 100%;
	height: 225px;
	border-radius: 15px;
	border: solid 1px #6f94e9;
	padding: 22px 21px 17px 25px;
`;

const NickName = styled.div`
	font-size: 28px;
	letter-spacing: -0.7px;
	color: #2b2b2b;
`;

const PlaceHold = styled.div`
	margin-top: 14px;
	color: #bfbfbf;
	font-size: 26px;
	letter-spacing: -0.65px;
	line-height: 1.15;
`;

const PostBtn = styled.button`
	width: 93px;
	height: 53px;
	margin: 60px 0 0 530px;
	padding: 12px 24px 11px 25px;
	border-radius: 15px;
	background-color: #909090;
	font-size: 24px;
	letter-spacing: -0.6px;
	color: #ffffff;
`;

const ChatArea = styled.div`
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const FirstChat = styled.div`
	font-size: 26px;
	text-align: center;
	line-height: 1.15;
	letter-spacing: -0.65px;
	color: #d9e0e9;
	margin-top: 24px;
`;
