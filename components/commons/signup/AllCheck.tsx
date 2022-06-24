import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

interface EssentialProps {
	allCheckedHandler: (
		isChecked: boolean,
	) => void;
}

export default function AllCheck({allCheckedHandler}:EssentialProps) {

	const [bChecked, setChecked] = useState(false);
	const checkHandler = (e :  any) => {
		setChecked(!bChecked);
		allCheckedHandler(!bChecked);
	};

	return (
		<>
			<AllChecking>
				<CheckImg onClick={(e) => checkHandler(e)}>
					<Image
						src={bChecked ? '/images/체크박스3.png' : '/images/체크박스.png'}
						width={20}
						height={20}
						alt="checkbox"
					></Image>
				</CheckImg>
				<AllContent>
					코인고스트 이용약관, 개인정보 처리방침, 이벤트 및 정보 안내
					수신(선택)에 모두 동의합니다.
				</AllContent>
			</AllChecking>
			<Bar />
		</>
	);
}


const AllChecking = styled.div`
	margin: 26px 0;
	display: flex;
    align-items: center;
`;

const CheckImg = styled.div`
	cursor: pointer;
`;

const AllContent = styled.div`
	font-size: 14px;
	margin-left: 8px;
	color: #2b2b2b;
	font-weight: bold;
`;

const Bar = styled.div`
	border: 0.5px solid #c6c6c6;
`;
