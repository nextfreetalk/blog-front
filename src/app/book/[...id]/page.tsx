import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import "github-markdown-css";
import PageClient from "./PageClient"; // Import the client-side component

const Page = async () => {
  const res = await fetch(
    "http://localhost:3000/api/content?filename=book/오브젝트.md",
  );
  const data = await res.json();
  const { content, frontmatter }: { content: any; frontmatter: any } =
    await compileMDX({
      source: data.data,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
    });

  console.log("design : ", content);
  console.log("jsonLD : ", frontmatter?.structuredData);

  return (
    <>
      <title>{frontmatter?.title}</title>
      <meta name="description" content={frontmatter?.desc} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: frontmatter?.structuredData,
        }}
      />
      <PageClient content={content} frontmatter={frontmatter} />
    </>
  );
};

export default Page;
