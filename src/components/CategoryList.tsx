import Link from "next/link";
import Image from "next/image";
import { getDate } from "utils/Utility";
import ListButton from "components/ListButton";

export default function CategoryList({
  articles,
  heading,
  isMobile,
}: Carousel & { heading: string; isMobile: boolean }) {
  return (
    <div className="h-full w-full items-center justify-center rounded-xl bg-gray-100 p-2.5">
      <div className="flex pt-2 sm:pt-0">
        <ListButton heading={heading} />
      </div>
      <div className="flex w-full pt-4 md:px-2.5 md:pt-2.5">
        <span className="flex h-0.5 w-full bg-gray-200" />
      </div>
      <ul className="flex w-full flex-col space-y-4 pb-2.5 pt-4 md:px-2.5">
        {articles.slice(0, 3).map((data, idx) => {
          return (
            <>
              <li key={idx} className="flex w-full flex-col">
                <div className="flex w-full space-x-5">
                  <div className="flex w-full flex-col">
                    <h6 className="text-[0.8rem] font-semibold text-gray-400 md:text-base">
                      {data?.source?.name ?? ""}
                    </h6>
                    <Link
                      href={data.url ?? ""}
                      className="line-clamp-3 h-[4rem] md:h-[5.5rem] text-ellipsis text-[0.9rem] md:text-lg md:hover:underline md:hover:underline-offset-2"
                    >
                      {data.title ?? ""}
                    </Link>
                  </div>
                  <Image
                    height={isMobile ? 100 : 125}
                    width={isMobile ? 100 : 125}
                    src={data.urlToImage ?? ""}
                    alt={data.title ?? ""}
                    className="rounded-xl object-cover"
                  />
                </div>
                <h6 className="flex items-center truncate pt-5 text-xs text-gray-700 md:text-sm">
                  <span>
                    {getDate(data.publishedAt?.slice(0, 10).replace(" ", "-"))}
                  </span>
                  {data.author && data.author.length > 0 && (
                    <>
                      <span className="mx-1 md:mx-2">•</span>
                      <span className="font-semibold">{data.author ?? ""}</span>
                    </>
                  )}
                </h6>
              </li>
              {idx < 2 && (
                <li key={idx + 5} className="flex w-full md:px-2.5">
                  <span className="flex h-0.5 w-full bg-gray-200" />
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}
