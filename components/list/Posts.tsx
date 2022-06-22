import { fetcher } from '../../utils/fetcher';
import PostList from './PostList';
import useSWRInfinite from 'swr/infinite';
import { useEffect } from 'react';
import { PostProps } from './PostList';

interface Porps {
	data: PostProps;
}

export default function Posts({ likesBtn }: { likesBtn: boolean }) {
	const getKey = (pageIndex: number, previousPageData: any) => {
		let orderBy = '';
		if (previousPageData && !previousPageData.data) return null;
		if (likesBtn) {
			orderBy = '&orderBy=likes';
		}
		return `https://api.dev.coinghost.com/blogs?&page=${
			pageIndex + 1
		}&limit=10${orderBy}`;
	};

	function handleScroll() {
		if (
			document.documentElement.scrollTop + window.innerHeight >=
			document.documentElement.scrollHeight
		) {
			setSize((p) => p + 1);
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const { data, setSize, size } = useSWRInfinite<Porps>(getKey, fetcher);
	const posts = data ? data.map((data) => data?.data).flat() : [];

    console.log(window.innerHeight)

	return (
		<>
			{posts?.map((posts) => {
				return <PostList key={posts.id} posts={posts} />;
			})}
		</>
	);
}
