import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
	id: number;
	title: string;
	content: string;
}

interface EssentialProps {
	el: Props;
	checkedItemHandler: (
		id: number,
	) => void;
	isAllChecked: boolean;
}

export default function Essential({ el, checkedItemHandler, isAllChecked }: EssentialProps) {
	const [bChecked, setChecked] = useState(false);

	const checkHandler = () => {
		setChecked(!bChecked);
		checkedItemHandler(el.id);
	};
	const allCheckHandler = () => setChecked(isAllChecked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => allCheckHandler(), [isAllChecked]);



	return (
		<>
			<EssentialCheck key={el.id}>
				<CheckImg onClick={checkHandler}>
					<Image
						src={bChecked ? '/images/체크박스3.png' : '/images/체크박스2.png'}
						width={20}
						height={20}
						alt="checkbox"
					></Image>
				</CheckImg>
				<EssentialContent>
					{el.title} <p>(필수)</p>
				</EssentialContent>
			</EssentialCheck>
			<ContentsBox>
				<p>{el.content}</p> 
			</ContentsBox>
		</>
	);
}

const EssentialCheck = styled.div`
	margin: 26px 0 10px 0;
	display: flex;
	align-items: center;
`;

const CheckImg = styled.div`
	cursor: pointer;
`;

const EssentialContent = styled.div`
	font-size: 14px;
	margin-left: 8px;
	color: #2b2b2b;
	font-weight: bold;
	display: flex;

	p {
		margin-left: 5px;
		color: #6f94e9;
	}
`;

const ContentsBox = styled.div`
	height: 110px;
	padding: 10px 5px;
	border-radius: 3px;
	border: solid 1px #d5d5d5;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 3px;
	}

	&::-webkit-scrollbar-thumb {
		background: #b2c3ea;
		border-radius: 1.5px;
	}

	p {
		font-size: 10px;
		line-height: 1.5;
		letter-spacing: -0.25px;
		color: #6f7070;
	}
`;
