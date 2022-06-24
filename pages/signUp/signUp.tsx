import styled from 'styled-components';
import SignUpHead from '../../components/commons/signup/SignUpHead';
import AllCheck from '../../components/commons/signup/AllCheck';
import Essential from '../../components/commons/signup/Essential';
import Select from '../../components/commons/signup/Select';
import SignUpBtn from '../../components/commons/signup/SignUpBtn';
import Footer from '../../components/commons/signup/Footer';

export default function signUp() {
	return (
    <Header>
        <ALL/>
        <Essential/>
        <Select/>
        <SignUpBtn/>
        <Footer/>
    </Header>
    )
}

const Header = styled(SignUpHead)``;

const ALL = styled(AllCheck)``;








