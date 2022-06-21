import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

interface FilterChange {
    changFilter : boolean;
}

export default function Filter()  {

const [changFilter, setChangefilter] = useState(false)

return (
    <FilterContainer>
        <WriteBox>
            글쓰기
            <div>
                <Image src='/images/글쓰기_아이콘.png' width={32} height={32} alt='writeIcon'/>
            </div>
        </WriteBox>
        <ContentFilter>
            <AllFilterBtn 
            onClick={()=>setChangefilter(false)}
            changFilter={changFilter}
            >
            전체글
            </AllFilterBtn>
            <PopularFilterBtn 
            onClick={()=>setChangefilter(true)}
            changFilter={changFilter}
            >
            인기글
            </PopularFilterBtn>
        </ContentFilter>
    </FilterContainer>
);
}

const FilterContainer = styled.div`
    width: 666px;
    display:flex;
    justify-content: space-between;
    padding: 15px 0px;
    margin: auto;
    border-bottom: 4px solid #5382eb;
`

const WriteBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
    width: 157px;
    height: 53px;
    border-radius: 26px;
    font-size: 26px;
    text-align: center;
    background-color: #5382eb;
    color: #fff;

    div {
    margin-left: 13px;
    }
`

const ContentFilter = styled.div`
    width: 250px;
    height: 65px;
    border-radius: 32px;
    background-color: #f0f6fd;
    display: flex;
    align-items: center;
`
const AllFilterBtn = styled.div<FilterChange>`
    width: 116px;
    height: 53px;
    margin: 6px 0 6px 8px;
    padding: 13px 20px;
    border-radius: 26px;
    text-align: center;
    font-size: 26px;
    cursor: pointer;
    
    background-color: ${({changFilter})=>changFilter? 'transparent' : '#5382eb'};
    color: ${({changFilter})=>changFilter? '#909090' : '#fff'};
`

const PopularFilterBtn = styled.div<FilterChange>`
    width: 116px;
    height: 53px;
    margin: 6px 8px;
    padding: 13px 20px;
    border-radius: 26px;
    font-size: 26px;
    text-align: center;
    cursor: pointer;

    background-color: ${({changFilter})=>changFilter? '#5382eb' : 'transparent'};
    color: ${({changFilter})=>changFilter? '#fff' : '#909090'};
    

`
