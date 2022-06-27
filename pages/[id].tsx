import type { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';

import { Layout } from '../components/commons/Layout';
import { API } from '../utils/fetcher';
import Header from '../components/listDetil/Header';
import UserInfo from '../components/listDetil/UserInfo';
import Content from '../components/listDetil/Content';
import DetileBtn from '../components/listDetil/BackList';
import Banner from '../components/listDetil/Banner';
import Chat from '../components/listDetil/Chat';
import PreNexBtn from '../components/listDetil/PreNexBtn';
import Footer from '../components/listDetil/Footer';

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${API.BLOGS}`);
	const post = await res.json();
	const posts = post.data.data;
	const paths = posts.map((post: { id: number }) => ({
		params: { id: post.id.toString() },
	}));
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await fetch(`${API.BLOGS}/${params?.id}`);
	const post = await res.json();
	return { props: { post } };
};

//중복, 하나로 관리
export interface DetailProps {
	id: number;
	title: string;
	contents: string;
	creator: { nickName: string };
	createdAt: string;
	defaultThumbnail: { url: string };
	likes: number;
	comments: number;
	views: number;
}

//data 전역관리
export default function detail({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout background="#5382eb">
			<Header />
			<UserInfo post={post.data} />
			<Content post={post.data}/>
			<DetileBtn />
			<Banner />
			<Chat post={post.data}/>
			<PreNexBtn post={post.data}/>
			<Footer />
		</Layout>
	);
}


