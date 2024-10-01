export enum eCategory {
  Book = 0,
  Movie = 1,
}

export type ContentType = {
  id: number;
  category: eCategory;
  title: string;
  description: string;
  fileUrl: string;
  date: Date;
};

export type CategoryType = {
  name: string;
  url: string;
};

export const contentDic: Record<number, ContentType> = {
  1: {
    id: 1,
    category: eCategory.Book,
    title: "오브젝트 책 리뷰 | 조용호",
    description:
      "오브젝트 책을 읽고 느낀 점을 적어둔 글, 객체지향의 원리에 대해서 이해할 수 있던 책, 구현 대상을 제시해서 구현한 뒤 문제를 해결해 나가는 방식으로 설명한다.",
    fileUrl: "contents/book/오브젝트.md",
    date: new Date(2024, 10, 1),
  },
};
export const categoryDic: Record<eCategory, CategoryType> = {
  [eCategory.Book]: {
    name: "서적",
    url: "book",
  },
  [eCategory.Movie]: {
    name: "영화",
    url: "movie",
  },
};
