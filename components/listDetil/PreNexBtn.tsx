import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface PlusProps {
	nextID: number;
	nextTitle: string;
	nextCreatedAt: string;
	previousID: number;
	previousTitle: string;
	previousCreatedAt: string;
}

export default function PreNexBtn({ post }: { post: PlusProps }) {
	const timeCut = (value: string) => {
		return value.replace('T', ' ').substring(0, 16);
	};
	return (
		<Container>
			<Link href="/[id]" as={`${post.previousID}`}>
			<Button>
				<Image src="/images/다각형1.png" width={20} height={15} alt="profile" />
				<PrePost>이전글</PrePost>
				<PreTitle>{post.previousTitle}</PreTitle>
				<Date>{timeCut(post.previousCreatedAt)}</Date>
			</Button>
			</Link>
			<Link href="/[id]" as={`${post.nextID}`}>
				<NextBtn>
					<Image
						src="/images/다각형2.png"
						width={20}
						height={15}
						alt="profile"
					/>
					<PrePost>다음글</PrePost>
					<PreTitle>{post.nextTitle}</PreTitle>
					<Date>{timeCut(post.nextCreatedAt)}</Date>
				</NextBtn>
			</Link>
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
	cursor: pointer;
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
	width: 330px;
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
