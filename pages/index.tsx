import styled from 'styled-components';
import Title from './components/Title';
import Filter from './components/Filter';
import Posts from './components/Posts';


export default function Home() {



  return (
    <Container>
      <BarsStatus>
        <Cellular/>
        <Wifi/>
        <Capacity/>
      </BarsStatus>
      <Title/>
      <Banner src='images/채굴안내배너.png'/>
      <Filter/>
      <Bar/>
      <Posts/>
    </Container>
  );
}

const Container = styled.div`
  width: 750px;
  height: 2903px;
  padding: 0 0 184.8px;
  background-color: #eeee;
`
const BarsStatus = styled.div`
  width: 749px;
  height: 88px;
  margin: 0 0 16px 1px;
  padding: 34.7px 27.7px 30.7px 588px;
  display: flex;
`

const Cellular = styled.div`
  width: 34px;
  height: 21.3px;
  margin: 0.7px 10px 0.7px 0;
  background-color: #000;
`

const Wifi = styled.div`
  width: 30.7px;
  height: 22px;
  margin: 0 10px 0.7px;
  background-color: #000;
`
const Capacity = styled.div`
    width: 36px;
    height: 14.7px;
    border-radius: 1.3px;
    background-color: #000;
`
const Banner = styled.img`
  
`
const Bar = styled.div`
  width: 666px;
  height: 4px;
  margin: 14px 42px 23px;
  background-color: #5382eb;
`