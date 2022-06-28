import styled from 'styled-components';
import { blogStore } from '../../utils/recoilStart';
import { useRecoilValue } from 'recoil';

export default function Content() {
	const posts = useRecoilValue(blogStore);
	const { contents } = posts.data.data;

	return (
		<Container>
			<Contents>{contents}</Contents>
		</Container>
	);
}

const Container = styled.div`
	margin: 0 42px;
`;

const Contents = styled.div`
	margin: 25px 0;
	font-size: 26px;
	line-height: 1.7;
	color: #2b2b2b;
`;
