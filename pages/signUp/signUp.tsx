import styled from 'styled-components';
import SignUpHead from '../../components/commons/signup/SignUpHead';
import AllCheck from '../../components/commons/signup/AllCheck';
import Essential from '../../components/commons/signup/Essential';
import Select from '../../components/commons/signup/Select';
import SignUpBtn from '../../components/commons/signup/SignUpBtn';
import Footer from '../../components/commons/signup/Footer';
import { useState } from 'react';

export interface Props {
	id: number;
	title: string;
	content: string;
}

export default function SignUp() {
	const [checkedItems, setCheckedItems] = useState(new Set());

	const checkedItemHandler = (id: number, isChecked: boolean) => {
		if (isChecked) {
			checkedItems.add(id);
			setCheckedItems(checkedItems);
		} else if (!isChecked && checkedItems.has(id)) {
			checkedItems.delete(id);
			setCheckedItems(checkedItems);
		}
	};


	const [isAllChecked, setIsAllChecked] = useState(false);
	const allCheckedHandler = (isChecked : boolean) => {
		if (isChecked) {
			setCheckedItems(new Set(SIGN_UP.map(({ id }) => id)));
			setIsAllChecked(true);
		} else {
			checkedItems.clear();
			// setCheckedItems(setCheckedItems);
			setIsAllChecked(false);
		}
	};
    



	return (
		<Header>
			<AllCheck allCheckedHandler={allCheckedHandler}/>
			{SIGN_UP.map((el) => (
				<Essential
					el={el}
					key={el.id}
					checkedItemHandler={checkedItemHandler}
                    isAllChecked={isAllChecked}
				/>
			))}
			<Select />
			<SignUpBtn />
			<Footer />
		</Header>
	);
}

const Header = styled(SignUpHead)``;

const ALL = styled(AllCheck)``;

const SIGN_UP: Props[] = [
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
		id: 3,
		title: '개인정보 처리방침',
		content:
			'네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를  제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. 네이버 서비스를 이용하시거나 네이버 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다. 네이버 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 네이버 서비스의 이용과 관련하여 네이버 서비스를 제공하는 네이버 주식회사(이하 ‘네이버’)와 이를 이용하는 네이버 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습',
	},
];
