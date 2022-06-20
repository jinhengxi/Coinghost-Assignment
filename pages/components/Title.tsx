import styled from 'styled-components';



export default function Title() {

return (
    <TitleBox>
        <MenuBtn src='images/햄버거.png'/>
        <LogoTitle>블로고</LogoTitle>
        <SearchBtn src='images/검색창_돋보기.png'/>
    </TitleBox>
);
}

const TitleBox = styled.div`
    height: 98px;
    width: 658px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MenuBtn = styled.img`
    width: 50px;
    height: 37px;
    object-fit: contain;
`;

const LogoTitle = styled.p`
    width: 110px;
    height: 50px;
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

const SearchBtn = styled.img`
    width: 50px;
    height: 37px;
    object-fit: contain;
`