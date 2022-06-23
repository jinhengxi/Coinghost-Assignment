import Head from 'next/head';
import React from 'react';

interface Props {
	title: string;
	content: string;
}

export const HeadInfo = ({ title, content }: Props) => {
	return (
		<Head>
			<title>{title}</title>
			<meta content={content} />
		</Head>
	);
};
