import React from 'react';
import { Layout } from '../components/commons/Layout';
import Title from '../components/listDetil/Title';
import User from '../components/listDetil/User';
import Content from '../components/listDetil/Content';
import DetileBtn from '../components/listDetil/DetileBtn';
import Banner from '../components/listDetil/Banner';
import Chat from '../components/listDetil/Chat';
import PreNexBtn from '../components/listDetil/PreNexBtn';
import Footer from '../components/listDetil/Footer';

export default function detail() {
	return (
		<Layout background="#5382eb">
			<Title />
			<User />
			<Content />
			<DetileBtn />
      <Banner/>
      <Chat/>
      <PreNexBtn/>
      <Footer/>
		</Layout>
	);
}
