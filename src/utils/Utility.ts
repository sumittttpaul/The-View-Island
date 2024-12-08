export const Categories = [
  "Home",
  "For You",
  "Following",
  "News Showcase",
  "India",
  "World",
  "Local",
  "Business",
  "Technology",
  "Entertainment",
  "Sports",
  "Science",
  "Health",
];

export const formattedTitle = (title?: string) =>
  title?.substring(title?.split(" ")[0].length);

export const getFetchUrl = (route: string) =>
  `${
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL!
      : "http://localhost:3000"
  }/${route}`;

export const getDate = (data?: string) => {
  const date = new Date(data ?? new Date());
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
  return formattedDate;
};

export const validArticles = async (
  articles: Articles[],
  limit: number = 7, // Number of valid articles to return
  concurrency: number = 10, // Number of parallel validations
): Promise<Articles[]> => {
  const validateImage = async (
    url?: string,
    timeout: number = 5000,
  ): Promise<boolean> => {
    if (!url) return false;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        method: "HEAD",
        signal: controller.signal,
      });
      const contentType = response.headers.get("Content-Type") || "";
      return response.ok && contentType.startsWith("image/");
    } catch {
      return false;
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const results: Articles[] = [];
  const queue = [...articles];
  const pool: Promise<void>[] = [];

  const processNext = async () => {
    if (results.length >= limit || queue.length === 0) return;

    const article = queue.shift();
    if (!article) return;

    const isValid = await validateImage(article.urlToImage);
    if (
      isValid &&
      article.title !== "[Removed]" &&
      article.description !== null &&
      article.publishedAt !== null
    ) {
      results.push(article);
    }

    if (results.length >= limit) return;
    await processNext();
  };

  for (let i = 0; i < concurrency; i++) {
    pool.push(processNext());
  }

  await Promise.all(pool);
  return results.slice(0, limit);
};
