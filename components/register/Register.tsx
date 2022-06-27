import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRef, useState } from 'react';

interface FormValue {
	nickname: string;
	auth: string;
	phone: string;
	password: string;
	password_confirm: string;
}

export default function Register() {
	const [authData, setAuthData] = useState(false);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<FormValue>();

	const passwordRef = useRef<string | null>(null);
	passwordRef.current = watch('password');

	const onClickHandler: SubmitHandler<FormValue> = (data) => {
		if(!authData){
			alert('전화번호 인증을 해주세요')
			return;
		}else{
			console.log(data);
		}
	};

	const postRegister = () => {
		const postPhone = {
			phone: watch('phone'),
		};
		fetch('/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postPhone),
		})
			.then((res) => res.json())
			.then((data) => alert(data?.data.message));
	};

	const postAuth = () => {
		const postPhone = {
			auth: watch('auth'),
		};
		fetch('/api/auth', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postPhone),
		})
			.then((res) => res.json())
			.then((data) => {
				if(data.data.message === true){
					setAuthData(data.data.message)
					alert('인증 성공')
				}else{
					alert(data.data.message);
				}
			});
	};

	
	return (
		<Container>
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
				{...register('phone', { required: true, minLength: 10 })}
			/>
			<PhoneBtn onClick={postRegister} authData={authData}>
				인증번호 받기
			</PhoneBtn>
			{errors.phone && errors.phone.type === 'required' && (
				<p>전화번호를 입력해 주세요.</p>
			)}
			{errors.phone && errors.phone.type === 'minLength' && (
				<p>형식에 맞지 않는 번호입니다.</p>
			)}
			<NumInput
				placeholder="인증번호"
				{...register('auth', { required: true, maxLength: 8 })}
			/>
			<NumBtn onClick={postAuth} authData={watch('auth')}>인증하기</NumBtn>
			{errors.auth && errors.auth.type === 'required' && (
				<p>인증번호를 입력해 주세요.</p>
			)}
			{errors.auth && errors.auth.type === 'maxLength' && (
				<p>인증번호가 틀렸습니다. 다시 시도해 주세요.</p>
			)}
			<TitleBox>패스워드</TitleBox>
			<Position>
				<PasswordInput
					type="password"
					{...register('password', {
						required: true,
						minLength: 8,
					})}
				/>
				<Icon />
				{errors.password && errors.password.type === 'required' && (
					<p>패스워드를 입력해 주세요.</p>
				)}
				{errors.password && errors.password.type === 'minLength' && (
					<p>패스워드는 8자 이상 입력해 주세요.</p>
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
				{errors.password_confirm && errors.password_confirm.type === 'required' && (
					<p>패스워드가 일치하지 않습니다.</p>
				)}
				{errors.password_confirm &&
					errors.password_confirm.type === 'validate' && (
						<p>패스워드가 일치하지 않습니다.</p>
					)}
			</Position>
			<TitleBox>닉네임</TitleBox>
			<NickNameInput
				{...register('nickname', { required: true, maxLength: 8 })}
			/>
			<NickBtn check={watch('nickname')}>중복확인</NickBtn>
			{errors.nickname && errors.nickname.type === 'required' && (
				<p>닉네임을 입력해 주세요.</p>
			)}
			{errors.nickname && errors.nickname.type === 'maxLength' && (
				<p>닉네임은 최대 8자만 입력할 수 있습니다</p>
			)}
			<TitleBox>프로필 사진(선택)</TitleBox>
			<ProfileInput />
			<PropfileBtn>사진변경</PropfileBtn>
				<RegisterBtn onClick={handleSubmit(onClickHandler)} isValid={isValid&&authData}>
					<Link href='/signUp/signedUp'>
						<a>가입하기</a>
					</Link>
				</RegisterBtn>
		</Container>
	);
}

const Container = styled.div`
	p {
		color: #f01a1a;
		margin: 5px 0;
		font-size: 10px;
	}
`;

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
	padding: 16px 200px 16px 15px;
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
	margin-top: 15px;
`;
const PhoneBtn = styled(Button)<{authData : boolean}>`
	margin: 15px 0px 0px 10px;
	font-size: 14px;
	color: #fff;

	pointer-events: ${({ authData }) => (!authData ? 'block' : 'none')};
	cursor: ${({ authData }) => (!authData ? 'pointer' : 'none')};
	background-color: ${({ authData }) => (!authData ? '#5382eb' : '#c3d4fc')};
	color: ${({ authData }) => (!authData ? '#fff' : '#909090')};
`;

const NumInput = styled(Input)`
	margin-top: 15px;
`;

const NumBtn = styled(Button)<{authData : string}>`
	background-color: #c3d4fc;
	margin-left: 10px;
	font-size: 14px;
	color: #909090;

	pointer-events: ${({ authData }) => (authData ? 'block' : 'none')};
	cursor: ${({ authData }) => (authData ? 'pointer' : 'none')};
	background-color: ${({ authData }) => (authData ? '#5382eb' : '#c3d4fc')};
	color: ${({ authData }) => (authData ? '#fff' : '#909090')};

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
const NickBtn = styled(Button)<{check:string}>`
	background-color: #c3d4fc;
	margin-left: 10px;
	font-size: 14px;
	color: #909090;

	pointer-events: ${({ check }) => (check ? 'block' : 'none')};
	cursor: ${({ check }) => (check ? 'pointer' : 'none')};
	background-color: ${({ check }) => (check ? '#5382eb' : '#c3d4fc')};
	color: ${({ check }) => (check ? '#fff' : '#909090')};
`;

const ProfileInput = styled(NickNameInput)``;

const PropfileBtn = styled(Button)`
	margin-left: 10px;
	color: #fff;
`;

const RegisterBtn = styled.button<{ isValid: boolean }>`
	margin: 60px 0;
	height: 50px;
	padding: 16px 216px 13px;
	border-radius: 7px;
	text-align: center;
	font-size: 16px;
	font-weight: bold;

	cursor: ${({ isValid }) => (isValid ? 'pointer' : 'defualt')};
	background-color: ${({ isValid }) => (isValid ? '#5382eb' : '#c3d4fc')};
	color: ${({ isValid }) => (isValid ? '#fff' : '#909090')};

	a{
		pointer-events: ${({ isValid }) => (isValid ? 'block' : 'none')};
	}

`;
