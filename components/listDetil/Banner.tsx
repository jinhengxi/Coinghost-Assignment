import Image from 'next/image';
import styled from 'styled-components';

export default function Banner() {
  return (
    <Container>
        <Image src="/images/글하단.png" width={666} height={130} alt='next'/>
    </Container>
  )
}

const Container = styled.div`
    margin: 0 42px;
`