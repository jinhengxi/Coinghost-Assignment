import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

export default function Footer() {
	return (
		<Container>
			<Image
				src="/images/코인고스트.png"
				width={200}
				height={35}
				alt="footerlogo"
			/>
		</Container>
	);
}

const Container = styled.div`
	height: 100px;
	background-color: #f0f6fd;
	display: flex;
	align-items: center;
	justify-content: center;
`;
