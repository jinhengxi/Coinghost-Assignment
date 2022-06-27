import styled from 'styled-components';

import { DetailProps } from '../../pages/[id]';

interface Props {
	data: DetailProps;
}

export default function Content({ post }: { post: Props }) {
	return (
		<Container>
			<Contents>
				{post.data.contents}
				{/* <Image src="/images/푸름.png" width={666} height={360} alt="profile" /> */}
			</Contents>
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
