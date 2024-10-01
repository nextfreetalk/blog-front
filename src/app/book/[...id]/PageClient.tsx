"use client";
import React from "react";
import "github-markdown-css";

type PageClientProps = {
  content: any;
  contentInfo: any;
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const PageClient = ({ content, contentInfo }: PageClientProps) => {
  console.log("contentInfo : ", contentInfo);
  return (
    <div className="markdown-body">
      <h1>{contentInfo?.title}</h1>
      <span>{formatDate(contentInfo?.date)}</span>
      {content}
    </div>
  );
};

export default PageClient;
