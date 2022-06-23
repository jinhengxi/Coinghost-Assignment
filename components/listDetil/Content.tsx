import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function Content() {
	return (
		<Container>
			<Contents>
				유저가 글 쓸 때 뭐 따로 설정한거 없으면
				<br />
				그냥 Spoqa Sans Neo 레귤러 25px로 나오게 해주세요.
				<Image src="/images/푸름.png" width={666} height={360} alt="profile" />
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
