import { useEffect, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import styled from 'styled-components';
import PostList from './PostList';
import { PostProps } from './PostList';
import { fetcher, API } from '../../utils/fetcher';


interface Porps {
	data: PostProps;
}

export default function Posts({ likesBtn }: { likesBtn: boolean }) {
	const [target, setTarget] = useState<HTMLButtonElement | null | undefined>(
		null,
	);
	const getKey = (pageIndex: number, previousPageData: any) => {
		if (previousPageData && !previousPageData.data) return null;
		let orderBy = '';
		if (likesBtn) {
			orderBy = '&orderBy=likes';
		}
		return `${API.BLOGS}?&page=${pageIndex + 1}&limit=10${orderBy}`;
	};

	const { data, setSize } = useSWRInfinite<Porps>(getKey, fetcher);
	const posts = data ? data.map((data) => data?.data).flat() : [];

	useEffect(() => {
		if (!target) return;
		const observer = new IntersectionObserver(onIntersect, {
			threshold: 0.5,
		});
		observer.observe(target);
		return () => observer && observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, target]);

	const onIntersect: IntersectionObserverCallback = ([entry]) => {
		if (entry.isIntersecting) {
			setSize((p) => p + 1);
		}
	};

	return (
		<>
			{posts?.map((posts) => {
				return <PostList key={posts.id} posts={posts} />;
			})}
			<TargetElement ref={setTarget} />
		</>
	);
}

const TargetElement = styled.button`
	width: 100%;
	height: 100px;
`;