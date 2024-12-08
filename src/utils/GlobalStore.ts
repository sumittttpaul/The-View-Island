export type ArticlesType = {
  author: string | undefined;
  content: string | undefined;
  source: {
    id: string;
    name: string;
  };
  title: string | undefined;
  description: string | undefined;
  url: string | undefined;
  urlToImage: string | undefined;
  publishedAt: string | undefined;
};
