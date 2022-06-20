import styled from 'styled-components';



export default function Posts() {

return (
    <PostContainer>
        <Postimg src='images/profile.png'/>
        <Post>
            <PostContent>제목 한줄일때 닉넴하고 제목 간격 25px, 두줄일때 6px</PostContent>
            <PostInfoContainer>
                <InfoNick>닉네임</InfoNick>
                <InfoTime>시간</InfoTime>
                <LikeIcon src='images/heart.png'/>
                <LikeNum>0</LikeNum>
                <PostIcon src='images/댓글.png'/>
                <PostNum>0</PostNum>
            </PostInfoContainer>
        </Post>
    </PostContainer>
);
}

const PostContainer = styled.div`
    width: 666px;
    margin : 23.8px auto;
    border-bottom : 0.5px solid #ccc;
    display: flex;
`
const Postimg = styled.img`
    width: 131px;
    height: 102px;
    margin-bottom: 23px;
    border-radius: 5px;
`
const Post = styled.div`
`

const PostContent = styled.span`
    width: 516px;
    height: 64px;
    margin: 23px 42px 6px 19px;
    font-family: SpoqaHanSansNeo;
    font-size: 26px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.23;
    letter-spacing: -0.65px;
    text-align: left;
    color: #2b2b2b;
`

const PostInfoContainer = styled.div`
    display: flex;
`
const InfoNick = styled.span`
    width: 65px;
    height: 30px;
    margin: 8px 19px 23.8px;
    font-family: SpoqaHanSansNeo;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: -0.6px;
    text-align: left;
    color: #5382eb;
`

const InfoTime = styled.span`
    width: 76px;
    height: 30px;
    margin: 8px 106px 23.8px 19px;
    font-family: SpoqaHanSansNeo;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: -0.6px;
    text-align: left;
    color: #6f7070;
`

const LikeIcon = styled.img`
    width: 30px;
    height: 30px;
    margin: 7px 12px 24.8px 0;
    object-fit: contain;
`
const LikeNum = styled.span`
    width: 15px;
    height: 32px;
    margin: 6px 15px 23.8px 0;
    font-family: SpoqaHanSansNeo;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.65px;
    text-align: right;
    color: #5382eb;
`

const PostIcon = styled.img`
    width: 28px;
    height: 28px;
    margin: 8px 12px 25.8px 30px;
    object-fit: contain;
`
const PostNum = styled.span`
    width: 15px;
    height: 32px;
    margin: 6px 42px 23.8px 7px;
    font-family: SpoqaHanSansNeo;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.65px;
    text-align: right;
    color: #5382eb;
`