import Image from 'next/image';
import styled from 'styled-components';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

export default function Registerinput() {
	return (
		<>
			<CountryInput>
				<Korea>대한민국 +82</Korea>
				<Image
					src="/images/다각형2.png"
					width={18}
					height={13}
					alt="화살표"
				></Image>
			</CountryInput>
			<PhoneInput placeholder="전화번호 입력" />
			<PhoneBtn>인증번호 받기</PhoneBtn>
			<NumInput placeholder="인증번호" />
			<NumBtn>인증하기</NumBtn>
			<TitleBox>패스워드</TitleBox>
			<Position>
				<PasswordInput type="password" />
				<Icon />
			</Position>
			<TitleBox>패스워드 재확인</TitleBox>
			<Position>
				<RePasswordInput type="password" />
				<Icon />
			</Position>
			<TitleBox>닉네임</TitleBox>
			<NickNameInput />
			<NickBtn>중복확인</NickBtn>
			<TitleBox>프로필 사진(선택)</TitleBox>
			<ProfileInput />
			<PropfileBtn>사진변경</PropfileBtn>
      <RegisterBtn>가입하기</RegisterBtn>
		</>
	);
}

const CountryInput = styled.div`
	width: 100%;
	height: 50px;
	border: solid 1px #d5d5d5;
	background-color: #fff;
	padding: 16px 20px 16px 15px;
	border-radius: 3px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Korea = styled.div`
	font-size: 14px;
	color: #2b2b2b;
	font-weight: bold;
`;
const Input = styled.input`
	height: 50px;
	padding: 16px 255px 16px 15px;
	border-radius: 3px;
	border: solid 1px #d5d5d5;
	background-color: #fff;
	width: 350px;
`;
const Button = styled.button`
	width: 130px;
	height: 50px;
	padding: 16px 25px;
	border-radius: 3px;
	background-color: #6f94e9;
`;

const PhoneInput = styled(Input)`
	margin: 15px 0;
`;
const PhoneBtn = styled(Button)`
	margin: 15px 0px 15px 10px;
	font-size: 14px;
	color: #fff;
`;

const NumInput = styled(Input)``;

const NumBtn = styled(Button)`
	background-color: #c3d4fc;
	margin-left: 10px;
	font-size: 14px;
	color: #909090;
`;

const TitleBox = styled.div`
	margin-top: 32px;
	font-size: 14px;
	color: #2b2b2b;
	font-weight: bold;
`;

const Position = styled.div`
	width: 490px;
	height: 50px;
	position: relative;
	margin-bottom: 40px;
`;

const Icon = styled(AiOutlineEyeInvisible)`
	font-size: 25px;
	color: #909090;
	position: absolute;
	top: 26px;
	right: 10px;
`;

const PasswordInput = styled(Input)`
	width: 100%;
	margin-top: 15px;
`;

const RePasswordInput = styled(Input)`
	width: 100%;
	margin-top: 15px;
`;

const NickNameInput = styled(Input)`
	margin-top: 15px;
`;
const NickBtn = styled(Button)`
	background-color: #c3d4fc;
	margin-left: 10px;
	font-size: 14px;
	color: #909090;
`;

const ProfileInput = styled(NickNameInput)``;

const PropfileBtn = styled(Button)`
	margin-left: 10px;
	color: #fff;
`;

const RegisterBtn = styled.button`
  margin: 60px 0;
  height: 50px;
  padding: 16px 216px 13px;
  border-radius: 7px;
  background-color: #c3d4fc;
  text-align: center;
  color: #909090;
  font-size: 16px;
  font-weight: bold;
`