import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';

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