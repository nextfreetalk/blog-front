import { Metadata } from 'next';
import { compileMDX } from "next-mdx-remote/rsc";
import Client from './Client';

export async function generateMetadata(): Promise<Metadata> {
  const res = await fetch("/book/오브젝트.md");
  const markdown = await res.text();

  const { frontmatter } = await compileMDX({
    source: markdown,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    title: frontmatter?.title,
    description: frontmatter?.desc,
  };
}

export default function Page() {

  return (
    <>
      <Client/>
    </>
  );
}
