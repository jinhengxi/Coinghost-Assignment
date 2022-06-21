import styled from 'styled-components';
import TitleBar from '../components/list/TitleBar';
import Filter from '../components/list/Filter';
import Posts from '../components/list/Posts';
import Header from '../components/list/Header';
import { useState } from 'react';

export default function Home() {

const [filterLikes, setFilterLikes] = useState(true);

const FilterButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
};

return (
    <Container>
        <Header/>
        <TitleBar/>
        <Filter/>
        <Posts/>
    </Container>
);
}

const Container = styled.div`
  width: 750px;
  height: 2903px;
  padding: 0 0 184.8px;
  background-color: #eeee;
`
