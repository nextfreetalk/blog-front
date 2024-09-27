import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "FreeTalk Blog",
  description: "프론트엔드 기술 수치 비교 블로그",
  // 여기서 메타 태그 추가
  other: {
    "google-site-verification": "X6YdZHrWhdKJWPCUe0LrZY93FkFf9X1SvQIsrNgwt38",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansKr.className}`}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}
