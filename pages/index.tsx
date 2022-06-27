import { useState } from 'react';
import TitleBar from '../components/list/TitleBar';
import Filter from '../components/list/ListTab';
import Posts from '../components/list/Posts';
import { Layout } from '../components/commons/Layout';

export default function Home() {
	const [isLikesBtn, setIsLikesBtn] = useState(false);
	const [isAllBtn, setIsAllBtn] = useState(true);

	const handleFilter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.currentTarget.id === 'likes') {
			setIsAllBtn(false);
			setIsLikesBtn(true);
		}
		if (e.currentTarget.id === 'all') {
			setIsLikesBtn(false);
			setIsAllBtn(true);
		}
		return;
	};

	return (
		<Layout>
			<TitleBar />
			<Filter onClickFilter={handleFilter} isLikesBtn={isLikesBtn} isAllBtn={isAllBtn} />
			<Posts isLikesBtn={isLikesBtn} />
		</Layout>
	);
}


