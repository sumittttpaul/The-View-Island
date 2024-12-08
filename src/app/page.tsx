import Carousel from "components/Carousel";
import { getFetchUrl } from "utils/getFetchUrl";

type props = {
  searchParams: Promise<SearchParams>;
};

export default async function Home(props: props) {
  const searchParams = await props.searchParams;
  const viewport = searchParams.viewport ?? ("desktop" as string);
  const isMobile = viewport === "mobile" ? true : false;
  // const data = await fetch(
  //   `https://newsapi.org/v2/everything?q=india&from=2024-12-07&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`,
  // );
  const data = await fetch(getFetchUrl("api"), {
    method: "POST",
    body: JSON.stringify({ ...searchParams, q: "latest" }),
  });
  const articles = (await data.json()) as Articles[];

  return (
    <div
      id="page-id"
      className="m-0 mx-auto flex w-full max-w-[110rem] flex-col p-0"
    >
      {/* <div className="w-full flex flex-col p-5">
        {articles.map((data, i) => {
          if (data.title == "[Removed]" || data.description == null) return;
          return (
            <span key={i} className="text-wrap text-sm font-normal">
              - {data.title}
            </span>
          );
        })}
      </div> */}
      <Carousel articles={articles} isMobile={isMobile} />
    </div>
  );
}
