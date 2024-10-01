export enum eCategory {
  Book = 0,
  Movie = 1,
}

export type ContentType = {
  category: eCategory;
  title: string;
  fileUrl: string;
};

export type CategoryType = {
  name: string;
};

export const contentDic: Record<number, ContentType> = {
  0: {
    category: eCategory.Book,
    title: "오브젝트 리뷰",
    fileUrl: "/book/1",
  },
};
export const categoryDic: Record<eCategory, CategoryType> = {
  [eCategory.Book]: {
    name: "서적",
  },
  [eCategory.Movie]: {
    name: "영화",
  },
};
