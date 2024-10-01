import styles from "./page.module.css";

export const metadata = {
  title: "FreeTalk Blog",
  description: "프론트엔드 수치 비교 플로그",
  // 여기서 메타 태그 추가
  other: {
    "google-site-verification": "X6YdZHrWhdKJWPCUe0LrZY93FkFf9X1SvQIsrNgwt38",
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main></main>
      <footer></footer>
    </div>
  );
}
