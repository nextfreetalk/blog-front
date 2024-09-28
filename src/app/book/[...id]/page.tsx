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

	console.log("data : ", data);

	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Review",
		"author": {
			"@type": "Person",
			"name": "oh"
		},
		"datePublished": "2024-09-28",
		"reviewBody": data.frontmatter?.desc,
		"reviewRating": {
			"@type": "Rating",
			"ratingValue": "5",
			"bestRating": "5"
		},
		"itemReviewed": {
			"@type": "Book",
			"name": "오브젝트",
			"author": {
				"@type": "Person",
				"name": "조영호"
			},
			"isbn": "9791158391409",
			"publisher": {
				"@type": "Organization",
				"name": "위키북스"
			},
			"datePublished": "2019-06-17"
		}
	};


	return (
		<>
			<title>{data.frontmatter?.title}</title>
			<meta name="description" content={data.frontmatter?.desc} />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<div className="markdown-body">
				<h1>{data.frontmatter?.title}</h1>
				<span>{data.frontmatter?.date}</span>
				{data.content}
			</div>
		</>
	);
};

export default page;