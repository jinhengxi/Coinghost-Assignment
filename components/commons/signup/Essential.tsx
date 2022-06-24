import styled from 'styled-components';
import Image from 'next/image';

export default function Essential() {
	return (
		<>
			{SIGN_UP.map((el) => {
				return (
					<>
						<EssentialCheck key={el.id}>
							<CheckImg>
								<Image
									src="/images/체크박스.png"
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
							<p>
								{el.content}
							</p>
						</ContentsBox>
					</>
				);
			})}
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

const SIGN_UP = [
	{
		id: 1,
		title: '코인고스트 이용약관 동의',
		content:
			'네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를  제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. 네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다. 네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습',
	},
	{
		id: 2,
		title: '월렛 이용약관 동의',
		content:
			'네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를  제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. 네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다. 네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습',
	},
	{
		id: 1,
		title: '개인정보 처리방침',
		content:
			'네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를  제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. 네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다. 네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습',
	},
];
