import Carousel from "components/Carousel";
import { Categories, getFetchUrl } from "utils/Utility";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import CategoryList from "components/CategoryList";

type props = {
  searchParams: Promise<SearchParams>;
};

export default async function Home(props: props) {
  const searchParams = await props.searchParams;
  const viewport = searchParams.viewport ?? ("desktop" as string);
  const sortBy = searchParams.sortBy ?? ("Relevancy" as string);
  const language = searchParams.language ?? ("English" as string);
  const isMobile = viewport === "mobile" ? true : false;
  const time =
    searchParams.time ?? new Date().toISOString().slice(0, 10).toString();

  const data = await fetch(getFetchUrl("api"), {
    method: "POST",
    body: JSON.stringify({
      sortBy: sortBy,
      time: time,
      language: language,
      viewport: viewport,
      q: "latest",
    }),
  });

  const articles = (await data.json()) as Articles[];

  return (
    <div
      id="page-id"
      className="m-0 mx-auto flex w-full max-w-[110rem] flex-col p-0"
    >
      <Carousel articles={articles} isMobile={isMobile} />
      <section className="flex w-full flex-col space-y-5 px-2.5 md:space-y-7 md:px-5 md:pt-7">
        <div className="flex flex-col px-2.5 md:px-0">
          <h2 className="truncate text-[1.15rem] md:text-[1.75rem]">
            Hot Topics
          </h2>
          <p className="flex items-center space-x-1 truncate text-xs text-gray-600 md:text-base">
            <span>Recommended based on latest trends</span>
            <QuestionMarkCircleIcon className="h-4 w-4 text-gray-600 md:h-5 md:w-5" />
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <CategoryList
            isMobile={isMobile}
            articles={articles}
            heading={Categories[4]}
          />
          <CategoryList
            isMobile={isMobile}
            articles={articles}
            heading={Categories[5]}
          />
          <CategoryList
            isMobile={isMobile}
            articles={articles}
            heading={Categories[6]}
          />
          <CategoryList
            isMobile={isMobile}
            articles={articles}
            heading={Categories[7]}
          />
          <CategoryList
            isMobile={isMobile}
            articles={articles}
            heading={Categories[8]}
          />
          <CategoryList
            isMobile={isMobile}
            articles={articles}
            heading={Categories[9]}
          />
        </div>
      </section>
      <section className="flex w-full items-center justify-center space-x-1 py-7">
        <Link
          href="https://sumitttpaul.vercel.app/"
          className="flex items-center space-x-1 rounded-xl bg-gray-100 p-2.5 shadow-lg transition-colors duration-200 ease-in-out md:space-x-2.5 md:p-5 md:hover:bg-gray-200"
        >
          <Image
            height={40}
            width={40}
            src="/images/sumit.png"
            alt="user-profile"
            className="object-fit scale-[0.8] rounded-full object-cover md:scale-100"
          />
          <p className="flex flex-col pr-2 text-xs font-semibold md:text-base">
            <span>Design by Sumeet Kumar Paul</span>
            <span className="text-[0.7rem] text-blue-550 md:text-[0.85rem]">
              Visit my portfolio
            </span>
          </p>
        </Link>
      </section>
    </div>
  );
}
