import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import Link from "next/link";


export default function title() {
  return (
    <TitleBox>
      <Link href="/">
        <span className='next'>
          <Image src="/images/next.png" width={34} height={34} alt='next'/>
        </span>
      </Link>
      <span className='logo'>
        <Image src="/images/logo.png" width={318} height={54.7} alt='next'/>
      </span>
    </TitleBox>
  )
}


const TitleBox = styled.div`
  width: 100%;
  height: 93px;
  background-color: #5382eb;

  .next{
    margin-left: 42px;
  }

  .logo{
    margin-left: 140px;
  }
`
