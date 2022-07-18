import type {
	GetStaticProps,
	GetStaticPaths,
	InferGetStaticPropsType,
} from 'next';
import { useEffect } from 'react';

import { Layout } from '../components/commons/Layout';
import { API } from '../utils/fetcher';
import Header from '../components/listDetil/Header';
import UserInfo from '../components/listDetil/UserInfo';
import Content from '../components/listDetil/Content';
import DetaileBtn from '../components/listDetil/DetaileBtn';
import Banner from '../components/listDetil/Banner';
import Chat from '../components/listDetil/Chat';
import PreNexBtn from '../components/listDetil/PreNexBtn';
import Footer from '../components/listDetil/Footer';

import { useSetRecoilState } from 'recoil';
import { blogStore } from '../utils/recoilStart';


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

export default function Detail({
	post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
const blog = useSetRecoilState(blogStore);

useEffect(() => {
	blog(post);
}, [blog, post]);

	return (
		<Layout background="#5382eb">
			<Header />
			<UserInfo />
			<Content />
			<DetaileBtn />
			<Banner />
			<Chat />
			<PreNexBtn />
			<Footer />
		</Layout>
	);
}
