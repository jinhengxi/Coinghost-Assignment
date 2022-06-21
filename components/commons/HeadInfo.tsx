import Head from 'next/head';
import React from 'react'

export const HeadInfo = ({title, content}: 
  {title: string, content: string}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta content={content}/>
    </Head>
  )
}
