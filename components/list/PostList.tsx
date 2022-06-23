import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export interface PostProps {
	id: number;
	title: string;
	creator: { nickName: string };
	createdAt: string;
	defaultThumbnail: { url: string };
	likes: number;
	comments: number;
}

interface Props {
	posts: PostProps;
}

export default function PostList({ posts }: Props) {
	const postTime = (value: string) => {
		const today = new Date();
		const timeValue = new Date(value);
		const betweenTime: any = Math.floor(
			(today.getTime() - timeValue.getTime()) / 1000 / 60,
		);
		const betweenTimeHour = Math.floor(betweenTime / 60);
		const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
		const betweenTimeMonth = Math.floor(betweenTime / 60 / 24 / 30);
		let answer = '';
		switch (betweenTime) {
			case betweenTime < 1:
				answer = '방금전';
				break;
			case betweenTime < 60:
				answer = `${betweenTime}분전`;
				break;
			case betweenTimeHour < 24:
				answer = `${betweenTimeHour}시간전`;
				break;
			case betweenTimeDay < 365:
				answer = `${betweenTimeDay}일전`;
				break;
			case betweenTimeMonth < 12:
				answer = `${betweenTimeMonth}달전`;
				break;
			default:
				answer = `${Math.floor(betweenTimeDay / 365)}년전`;
		}
		return answer;
	};

	return (
		<Link href="/[id]" as={`/${posts.id}`}>
			<Container key={posts.id}>
				<PostFlex>
					<ImgWrap>
						<Image
							src={posts.defaultThumbnail.url}
							width={130}
							height={100}
							alt="thumbnail"
						/>
					</ImgWrap>
					<Post>
						<PostContent>{posts.title}</PostContent>
						<PostFlex>
							<PostInfoContainer>
								<InfoNick>{posts.creator?.nickName}</InfoNick>
								<InfoTime>{postTime(posts.createdAt)}</InfoTime>
							</PostInfoContainer>
							<PostInfoContainer>
								<ImgWrap>
									<Image
										src="/images/heart.png"
										width={30}
										height={30}
										alt="heart"
									/>
								</ImgWrap>
								<LikeNum>{posts.likes}</LikeNum>
								<ImgWrap>
									<Image
										src="/images/댓글.png"
										width={28}
										height={27}
										alt="chat"
									/>
								</ImgWrap>
								<LikeNum>{posts.comments}</LikeNum>
							</PostInfoContainer>
						</PostFlex>
					</Post>
				</PostFlex>
			</Container>
		</Link>
	);
}

const Container = styled.div`
	width: 666px;
	padding: 23px 0;
	border-bottom: 0.5px solid #ccc;
	font-size: 20px;
	margin: auto;
`;
const PostFlex = styled.div`
	display: flex;
	justify-content: space-between;

	&:nth-child(1) {
		height: 100px;
	}
`;

const ImgWrap = styled.div`
	cursor: pointer;
	img {
		border-radius: 5px;
	}
`;

const Post = styled.div`
	margin-left: 20px;
`;

const PostContent = styled.span`
	cursor: pointer;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	width: 510px;
	height: 64px;
	line-height: 32px;
	font-size: 26px;
	font-weight: 500;
	color: #2b2b2b;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: wrap;
	word-break: break-word;
`;

const PostInfoContainer = styled.div`
	display: flex;
	margin-top: 8px;
`;

const InfoNick = styled.span`
	width: 90px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: no-wrap;
	font-size: 24px;
	letter-spacing: -0.6px;
	color: #5382eb;
	cursor: pointer;
`;

const InfoTime = styled.span`
	font-size: 24px;
	letter-spacing: -0.6px;
	color: #6f7070;
`;

const LikeNum = styled.span`
	font-size: 26px;
	color: #5382eb;
	margin: 0 20px;
`;
