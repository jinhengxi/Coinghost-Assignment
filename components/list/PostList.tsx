import styled from 'styled-components';
import Image from 'next/image';


export interface DataType {
    id: number;
    title: string;
    creator: { nickName: string };
    createdAt: string;
    defaultThumbnail: { url: string };
    likes: number;
    comments: number;
}


export default function PostList({ data  } : {data : DataType}) {

const postTime = (value: string) => {
    const today = new Date();
    const timeValue = new Date(value);
    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
        return `${betweenTime}분전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
    }
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
        return `${betweenTimeDay}일전`;
    }

    return `${Math.floor(betweenTimeDay / 365)}년전`;
};

return (
    <Container key={data.id}>
        <PostFlex >
            <ImgWrap>
                <Image src={data.defaultThumbnail.url} width={130} height={100} alt='thumbnail'/>
            </ImgWrap>
            <Post>
                <PostContent>{data.title}</PostContent>
                <PostFlex>
                    <PostInfoContainer>
                        <InfoNick>{data.creator.nickName}</InfoNick>
                        <InfoTime>{postTime(data.createdAt)}</InfoTime>
                    </PostInfoContainer>
                    <PostInfoContainer>
                        <ImgWrap>
                            <Image src='/images/heart.png' width={30} height={30} alt='heart'/>
                        </ImgWrap>
                        <LikeNum>{data.likes}</LikeNum>
                        <ImgWrap>
                            <Image src='/images/댓글.png' width={28} height={27} alt='chat'/>
                        </ImgWrap>
                        <LikeNum>{data.comments}</LikeNum>
                    </PostInfoContainer>
                </PostFlex>
            </Post>
        </PostFlex>
    </Container>
);
}

const Container = styled.div`
    width: 666px;
    padding: 23px 0;
    border-bottom : 0.5px solid #ccc;
    font-size: 20px;
    margin: auto;
`
const PostFlex= styled.div`
    display: flex;
    justify-content: space-between;

    &:nth-child(1) {
    height: 100px;
    }
`

const ImgWrap = styled.div`
    img{
        border-radius: 5px;
    }
`

const Post = styled.div`
    margin-left: 20px;
`

const PostContent = styled.span`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 510px;
    height: 64px;
    line-height: 32px;
    font-size: 26px;
    font-weight: 500;
    color: #2b2b2b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
    word-break : break-word;
`

const PostInfoContainer = styled.div`
    display: flex;
    margin-top: 8px;
`

const InfoNick = styled.span`
    width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: no-wrap;
    font-size: 24px;
    letter-spacing: -0.6px;
    margin-right: 19px;
    color: #5382eb;
    
`

const InfoTime = styled.span`
    font-size: 24px;
    letter-spacing: -0.6px;
    color: #6f7070;
`

const LikeNum = styled.span`
    font-size: 26px;
    color: #5382eb;
    margin: 0 20px;
`