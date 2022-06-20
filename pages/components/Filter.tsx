import styled from 'styled-components';

export default function Filter() {

return (
    <FilterContainer>
        <WriteBox>
            <Write src='images/글쓰기.png'/>
            <WriteIcon src='images/글쓰기_아이콘.png'/>
        </WriteBox>
        <ContentFilter>
            <AllFilter>
                <AllIcon src='images/전체글.png'/>
            </AllFilter>
            <PopularIcon  src='images/인기글.png'/>
        </ContentFilter>
    </FilterContainer>
);
}

const FilterContainer = styled.div`
    display:flex;   
`

const WriteBox = styled.div`
    width: 157px;
    height: 53px;
    margin: 22px 77px 20px 42px;
    padding: 10px 18px 10px 22px;
    border-radius: 26.5px;
    background-color: #5382eb;
`

const Write = styled.img`
    width: 72px;
    height: 32px;
    margin: 1px 13px 0 0;
    object-fit: contain;
    font-family: SpoqaHanSansNeo;
    font-size: 26px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
`

const WriteIcon = styled.img`
    width: 32px;
    height: 32px;
    margin: 0 0 1px 13px;
    object-fit: contain;
`

const ContentFilter = styled.div`
    width: 250px;
    height: 65px;
    margin: 16px 42px 14px 20px;
    padding: 6px 30px 6px 8px;
    border-radius: 32.5px;
    background-color: #f0f6fd;
    display: flex;
`
const AllFilter = styled.div`
    width: 116px;
    height: 53px;
    margin: 0 24px 0 0;
    padding: 11px 22px 10px;
    border-radius: 26.5px;
    background-color: #5382eb;
`

const AllIcon = styled.img`
    width: 72px;
    height: 32px;
    object-fit: contain;
    font-family: SpoqaHanSansNeo;
    font-size: 26px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
`

const PopularIcon = styled.img`
    width: 72px;
    height: 32px;
    margin: 11px 0 10px 24px;
    object-fit: contain;
    font-family: SpoqaHanSansNeo;
    font-size: 26px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #909090;
`