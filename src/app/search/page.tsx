import { getFetchUrl } from "utils/getFetchUrl";
import { redirect } from "next/navigation";

type props = {
  searchParams: Promise<SearchParams>;
};

export default async function Search(props: props) {
  const searchParams = await props.searchParams;
  const search = await searchParams?.q;

  if (!search) redirect("/");
  // const data = await fetch(
  //   `https://newsapi.org/v2/everything?q=india&from=2024-12-07&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`,
  // );
  const data = await fetch(getFetchUrl("api"), {
    method: "POST",
    body: JSON.stringify({ ...searchParams, q: search }),
  });
  const articles = (await data.json()) as Articles[];

  return (
    <div className="m-0 flex w-full flex-col p-0">
      <div className="w-ful flex flex-col p-5">
        {articles.map((data, i) => {
          if (data.title == "[Removed]" || data.description == null) return;
          return (
            <span key={i} className="text-wrap text-sm font-normal">
              - {data.title}
            </span>
          );
        })}
      </div>
    </div>
  );
}
