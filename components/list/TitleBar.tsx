import styled from 'styled-components';
import Image from 'next/image';


export default function TitleBar(){

return (
    <TitleBarContainer>
        <TitleBox>
            <Image src='/images/햄버거.png' width={50} height={37} alt='menu'/>
            <LogoTitle>블로고</LogoTitle>
            <Image src='/images/검색창_돋보기.png' width={39} height={39} alt='search'/>
        </TitleBox>
        <Image src='/images/채굴안내배너.png' alt='banner' width={750} height={170}/>
    </TitleBarContainer>
);
}

const TitleBarContainer = styled.div`
    width: 750px;
`

const TitleBox = styled.div`
    margin: 22px 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoTitle = styled.p`
    font-family: SpoqaHanSansNeo;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #5382eb;
`;
