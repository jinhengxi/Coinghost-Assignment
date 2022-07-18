import { useEffect, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import styled from 'styled-components';

import PostList from './PostList';
import { PostProps } from './PostList';
import { fetcher, API } from '../../utils/fetcher';

interface FetchData {
	data: PostProps;
}

interface LikeProps{
	isLikesBtn : boolean
}

export default function Posts({ isLikesBtn }: LikeProps) {
	const [target, setTarget] = useState<HTMLButtonElement | null | undefined>(
		null,
	);
	const getKey = (pageIndex: number, previousPageData: any) => {
		if (previousPageData && !previousPageData.data.length) return null;
		let orderBy = '';
		if (isLikesBtn) {
			orderBy = '&orderBy=likes';
		}
		return `${API.BLOGS}?&page=${pageIndex + 1}&limit=10${orderBy}`;
	};

	const { data, setSize } = useSWRInfinite<FetchData>(getKey, fetcher);
	const posts = data ? data.map((data) => data?.data).flat() : [];

	const onIntersect: IntersectionObserverCallback = ([entry]) => {
		if (entry.isIntersecting) {
			setSize((p) => p + 1);
		}
	};
	
	useEffect(() => {
		if (!target) return;
		const observer = new IntersectionObserver(onIntersect, {
			threshold: 0.5,
		});
		observer.observe(target);
		return () => observer && observer.disconnect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, target]);

	return (
		<>
			{posts?.map((posts) => {
				return <PostList key={posts.id} {...posts} />;
			})}
			<TargetElement ref={setTarget} />
		</>
	);
}

const TargetElement = styled.button`
	width: 100%;
	height: 100px;
`;