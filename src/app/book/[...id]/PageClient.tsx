"use client";
import React from "react";
import "github-markdown-css";

type PageClientProps = {
  content: any;
  frontmatter: any;
};

const PageClient = ({ content, frontmatter }: PageClientProps) => {
  return (
    <div className="markdown-body">
      <h1>{frontmatter?.title}</h1>
      <span>{frontmatter?.date}</span>
      {content}
    </div>
  );
};

export default PageClient;
