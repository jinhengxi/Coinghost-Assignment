import styled from 'styled-components';
import TitleBar from '../components/list/TitleBar';
import Filter from '../components/list/Filter';
import Posts from '../components/list/Posts';
import Header from '../components/list/Header';
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
		<Container>
			<Header />
			<TitleBar />
			<Filter handleFilter={handleFilter} likesBtn={likesBtn} allBtn={allBtn} />
			<Posts likesBtn={likesBtn}/>
		</Container>
	);
}

const Container = styled.div`
	width: 750px;
`;
