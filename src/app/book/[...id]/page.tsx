'use client'
import React, { useEffect, useState } from 'react';
import 'github-markdown-css';
import dynamic from 'next/dynamic';
import { compileMDX } from 'next-mdx-remote/rsc';

type Props = {
}

const page = (props: Props) => {
	const [data, setData] = useState<any>({ content: null, frontmatter: null });

	useEffect(() => {
		const init = async () => {
			const res = await fetch('/book/오브젝트.md')
			const markdown = await res.text();

			const { content, frontmatter } = await compileMDX({
				source: markdown,
				options: {
					parseFrontmatter: true,
					mdxOptions: {
						remarkPlugins: [],
						rehypePlugins: []
					}
				}
			});
			console.log("frontmatter", frontmatter)
			setData({ content, frontmatter });
		}
		init();
	}, [])
	return (
		<>
			<title>{data.frontmatter?.title}</title>
			<meta name="description" content={data.frontmatter?.desc} />
			<div className="markdown-body">
				<h1>{data.frontmatter?.title}</h1>
				<span>{data.frontmatter?.date}</span>
				{data.content}

			</div>
		</>
	);
};

export default page;