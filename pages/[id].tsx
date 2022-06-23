import type { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';

import { Layout } from '../components/commons/Layout';
import { API } from '../utils/fetcher';
import Title from '../components/listDetil/Title';
import User from '../components/listDetil/User';
import Content from '../components/listDetil/Content';
import DetileBtn from '../components/listDetil/DetileBtn';
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

export default function detail({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Layout background="#5382eb">
			<Title />
			<User post={post.data} />
			<Content post={post.data}/>
			<DetileBtn />
			<Banner />
			<Chat post={post.data}/>
			<PreNexBtn post={post.data}/>
			<Footer />
		</Layout>
	);
}


