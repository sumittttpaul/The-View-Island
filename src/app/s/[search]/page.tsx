import { getFetchUrl } from "utils/Utility";
import { redirect } from "next/navigation";
import ResultList from "components/ResultList";
import SearchFilter from "components/SearchFilter";

type props = {
  searchParams: Promise<SearchParams>;
  params: Promise<{
    search: string;
  }>;
};

export default async function Search(props: props) {
  const searchParams = await props.searchParams;
  const search = (await props.params).search;

  if (!search) redirect("/");

  const data = await fetch(getFetchUrl("api"), {
    method: "POST",
    body: JSON.stringify({ ...searchParams, q: search }),
  });
  const articles = (await data.json()) as Articles[];

  return (
    <div
      id="page-id"
      className="m-0 mx-auto flex w-full max-w-[70rem] flex-col p-0 py-5"
    >
      <SearchFilter />
      <section className="z-10 flex w-full flex-col space-y-5 bg-white px-2.5 md:space-y-7 md:px-5 md:pt-7">
        <div className="flex flex-col px-2.5 md:px-0">
          <h2 className="truncate text-[1.15rem] md:text-[1.75rem]">
            {search.toString().replaceAll("-", " ").replaceAll("%20", " ")}
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
