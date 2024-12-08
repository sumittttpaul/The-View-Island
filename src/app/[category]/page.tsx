import ResultList from "components/ResultList";
import { redirect } from "next/navigation";
import { getFetchUrl } from "utils/Utility";

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

  const data = await fetch(getFetchUrl("api"), {
    method: "POST",
    body: JSON.stringify({ ...searchParams, q: category }),
  });
  const articles = (await data.json()) as Articles[];

  return (
    <div
      id="page-id"
      className="m-0 mx-auto flex w-full max-w-[70rem] flex-col p-0 py-5"
    >
      <section className="flex w-full flex-col space-y-5 px-2.5 md:space-y-7 md:px-5 md:pt-7">
        <div className="flex flex-col px-2.5 md:px-0">
          <h2 className="truncate text-[1.15rem] md:text-[1.75rem]">
            {category.toString().replaceAll("-", " ").replaceAll("%20", " ")}
          </h2>
          <p className="flex items-center space-x-1 truncate text-xs text-gray-600 md:text-base">
            {articles.length} results found
          </p>
        </div>
        <ResultList articles={articles} />
      </section>
    </div>
  );
}
