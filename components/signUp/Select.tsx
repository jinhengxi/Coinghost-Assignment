import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

export default function Select({}) {

	const [bChecked, setChecked] = useState(false);

	return (
		<Container>
			<SelectCheck>
				<CheckImg onClick={()=>setChecked(!bChecked)}>
					<Image
						src={bChecked ? '/images/체크박스3.png' : '/images/체크박스2.png'}
						width={20}
						height={20}
						alt="checkbox"
					></Image>
				</CheckImg>
				<SelectContent>
					이벤트 및 정보 안내 수신<p>(선택)</p>
				</SelectContent>
			</SelectCheck>
			<ContentsBox>
				<p>
					네이버에서 제공하는 이벤트/혜택 등 다양한 정보를 휴대전화(네이버앱
					알림 또는 문자), 이메일로 받아 보실 수 있습니다. 일부 서비스(별도 회원
					체계로 운영하거나 네이버 가입 이후 추가 가입하여 이용하는 서비스 등)의
					경우, 개별 서비스에 대해 별도 수신 동의를 받을 수 있으며, 이때에도
					수신 동의에 대해 별도 로 안내하고 동의를 받습니다.
				</p>
			</ContentsBox>
		</Container>
	);
}

const Container = styled.div`
    margin-bottom: 40px;
`

const SelectCheck = styled.div`
	margin: 26px 0 10px 0;
	display: flex;
	align-items: center;
`;

const CheckImg = styled.div`
	cursor: pointer;
`;

const SelectContent = styled.div`
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
	padding: 10px 5px;
	border-radius: 3px;


	p {
		font-size: 10px;
		line-height: 1.5;
		letter-spacing: -0.25px;
		color: #6f7070;
	}
`;
