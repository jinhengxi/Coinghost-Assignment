import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import styled from 'styled-components';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRef } from 'react';

interface FormValue {
	nickname: string;
	auth: string;
	phone: string;
	password: string;
	password_confirm: string;
}

export default function Registerinput() {
  
	const {
		register,
		handleSubmit,
		watch,
    setValue,
		formState: { errors },
	} = useForm<FormValue>();

	const passwordRef = useRef<string | null>(null);
	passwordRef.current = watch('password');

	const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmitHandler)}>
			<CountryInput>
				<Korea>대한민국 +82</Korea>
				<Image
					src="/images/다각형2.png"
					width={18}
					height={13}
					alt="화살표"
				></Image>
			</CountryInput>
			<PhoneInput
				placeholder="전화번호 입력"
				{...register('phone', { required: true, minLength: 6 })}
			/>
			<PhoneBtn>인증번호 받기</PhoneBtn>
			<NumInput
				placeholder="인증번호"
				{...register('auth', { requried: true, maxLength: 10 })}
			/>
			<NumBtn>인증하기</NumBtn>
			<TitleBox>패스워드</TitleBox>
			<Position>
				<PasswordInput
					type="password"
					{...register('password', { required: true, minLength: 6 })}
				/>
				<Icon />
        {errors.password && errors.password.type === 'required' && (
				<div>패스워드를 입력해 주세요!</div>
			)}
			{errors.password && errors.password.type === 'maxLength' && (
				<div>패스워드는 최소 6이상 입니다!</div>
			)}
			</Position>
			<TitleBox>패스워드 재확인</TitleBox>
			<Position>
				<RePasswordInput
					type="password"
					{...register('password_confirm', {
						required: true,
						validate: (value) => value === passwordRef.current,
					})}
				/>
				<Icon />
			</Position>
			<TitleBox>닉네임</TitleBox>
			<NickNameInput
				{...register('nickname', { requried: true, maxLength: 10 })}
			/>
			<NickBtn>중복확인</NickBtn>
			{errors.nickname && errors.nickname.type === 'required' && (
				<div>닉네임을 입력해 주세요!</div>
			)}
			{errors.nickname && errors.nickname.type === 'maxLength' && (
				<div>닉네임은 최대 10자만 입력할 수 있습니다!</div>
			)}
			<TitleBox>프로필 사진(선택)</TitleBox>
			<ProfileInput />
			<PropfileBtn>사진변경</PropfileBtn>
			<RegisterBtn>가입하기</RegisterBtn>
		</form>
	);
}

const Container =styled.div`
  
`


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
  cursor: pointer;
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
  cursor: pointer;
`;
