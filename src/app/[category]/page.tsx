import { redirect } from "next/navigation";
import { getFetchUrl } from "utils/getFetchUrl";

type props = {
  searchParams: Promise<SearchParams>;
  params: Promise<{
    category: string;
  }>;
};

export default async function Category(props: props) {
  const searchParams = await props.searchParams;
  const category = (await props.params).category;

  if (!category) redirect("/");
  if (category === "Home") redirect("/");
  // const data = await fetch(
  //   `https://newsapi.org/v2/everything?q=india&from=2024-12-07&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`,
  // );
  const data = await fetch(getFetchUrl("api"), {
    method: "POST",
    body: JSON.stringify({ ...searchParams, q: category }),
  });
  const articles = (await data.json()) as Articles[];

  return (
    <div id="page-id" className="m-0 flex w-full flex-col p-0">
      <div className="w-ful flex flex-col p-5">
        {articles.map((data, i) => {
          if (data.title == "[Removed]" || data.description == null) return;
          return (
            <span key={i} className="text-wrap text-sm font-normal">
              - {data.title?.replaceAll("-", " ")}
            </span>
          );
        })}
      </div>
    </div>
  );
}
