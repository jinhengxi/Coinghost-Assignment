import TitleBar from '../components/list/TitleBar';
import Filter from '../components/list/ListTab';
import Posts from '../components/list/Posts';
import { Layout } from '../components/commons/Layout';
import { useState } from 'react';

export default function Home() {
	const [likesBtn, setLikesBtn] = useState(false);
	const [allBtn, setAllBtn] = useState(true);

	const handleFilter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.currentTarget.id === 'likes') {
			setAllBtn(false);
			setLikesBtn(true);
		}
		if (e.currentTarget.id === 'all') {
			setLikesBtn(false);
			setAllBtn(true);
		}
		return;
	};

	return (
		<Layout>
			<TitleBar />
			<Filter handleFilter={handleFilter} likesBtn={likesBtn} allBtn={allBtn} />
			<Posts likesBtn={likesBtn} />
		</Layout>
	);
}


