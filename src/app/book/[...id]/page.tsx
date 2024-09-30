import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import "github-markdown-css";
import PageClient from "./PageClient"; // Import the client-side component

const Page = async () => {
  const res = await fetch("http://localhost:3000/api/content?filename=book/오브젝트.md");
  const data  = await res.json();
  const { content, frontmatter } = await compileMDX({
    source: data.data,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
  });

  console.log("design : ",content);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: "oh",
    },
    datePublished: "2024-09-28",
    reviewBody: frontmatter?.desc,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    itemReviewed: {
      "@type": "Book",
      name: "오브젝트",
      author: {
        "@type": "Person",
        name: "조영호",
      },
      isbn: "9791158391409",
      publisher: {
        "@type": "Organization",
        name: "위키북스",
      },
      datePublished: "2019-06-17",
    },
  };

  return (
    <>
      <title>{frontmatter?.title}</title>
      <meta name="description" content={frontmatter?.desc} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageClient content={content} frontmatter={frontmatter} />
    </>
  );
};

export default Page;
