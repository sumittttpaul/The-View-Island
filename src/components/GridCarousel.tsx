import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { getDate, formattedTitle } from "utils/Utility";

export default function GridCarousel({ articles }: Carousel) {
  return (
    <div className="grid h-[32rem] w-full grid-cols-2 gap-2.5 px-2.5 md:h-[50rem] md:grid-cols-3 md:px-5 lg:h-[55rem] xl:grid-cols-4">
      {/* 1 */}
      <div className="col-span-2 flex h-full w-full flex-col space-y-2.5">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl">
          <Image
            fill
            src={articles[0].urlToImage ?? ""}
            alt={articles[0].title ?? ""}
            className="object-cover"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col">
            <div className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-gray-100 from-55% to-80% px-5 pb-5 md:from-45% md:to-70% 2xl:px-12 2xl:pb-11">
              <Link
                href={articles[0].url ?? ""}
                className="line-clamp-3 text-ellipsis text-pretty text-2xl md:decoration-[rgb(255,40,40)] md:decoration-2 underline-offset-[0.6rem] md:text-4xl md:leading-[3.5rem] md:hover:underline 2xl:text-5xl 2xl:leading-[4rem]"
              >
                <span className="select-none bg-[rgb(255,40,40)] px-2 text-white">
                  {articles[0].title?.split(" ")[0]}
                </span>
                <span>{formattedTitle(articles[0].title)}</span>
              </Link>
              <p className="my-4 line-clamp-4 text-ellipsis text-pretty text-sm text-gray-700 sm:line-clamp-3 sm:leading-7 md:text-base 2xl:line-clamp-2">
                {articles[0].description}
              </p>
              <h6 className="flex items-center truncate text-xs text-gray-700 md:text-sm">
                <ClockIcon className="mr-2 h-5 w-5 md:mr-2.5 md:h-6 md:w-6" />
                <span>
                  {getDate(
                    articles[0].publishedAt?.slice(0, 10).replace(" ", "-"),
                  )}
                </span>
                {articles[0].author && articles[0].author.length > 0 && (
                  <>
                    <span className="mx-2">•</span>
                    <span className="font-semibold">{articles[0].author}</span>
                  </>
                )}
              </h6>
            </div>
          </div>
        </div>
        <div className="flex h-[25%] w-full space-x-2.5">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl">
            <Image
              fill
              src={articles[1].urlToImage ?? ""}
              alt={articles[1].title ?? ""}
              className="object-cover blur-2xl"
            />
            <div className="absolute left-0 top-0 flex h-full w-full flex-col">
              <div className="flex h-full w-full flex-col justify-between bg-gray-100 p-2.5 md:p-5">
                <Link
                  href={articles[1].url ?? ""}
                  className="line-clamp-3 text-ellipsis text-pretty text-sm decoration-[rgb(175,90,255)] decoration-2 underline-offset-[0.25rem] md:hover:underline md:text-xl lg:text-2xl"
                >
                  <span className="select-none bg-[rgb(175,90,255)] px-2 text-white">
                    {articles[1].title?.split(" ")[0]}
                  </span>
                  <span>{formattedTitle(articles[1].title)}</span>
                </Link>
                <h6 className="mt-2.5 flex items-center truncate text-xs text-gray-700 md:text-sm 2xl:mt-3">
                  <ClockIcon className="mr-2.5 hidden h-6 w-6 md:block" />
                  <span>
                    {getDate(
                      articles[1].publishedAt?.slice(0, 10).replace(" ", "-"),
                    )}
                  </span>
                  {articles[1].author && articles[1].author.length > 0 && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="font-semibold">
                        {articles[1].author}
                      </span>
                    </>
                  )}
                </h6>
              </div>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl">
            <Image
              fill
              src={articles[2].urlToImage ?? ""}
              alt={articles[2].title ?? ""}
              className="object-cover blur-2xl"
            />
            <div className="absolute left-0 top-0 flex h-full w-full flex-col">
              <div className="flex h-full w-full flex-col justify-between bg-gray-100 p-2.5 md:p-5">
                <Link
                  href={articles[2].url ?? ""}
                  className="line-clamp-3 text-ellipsis text-pretty text-sm decoration-[rgb(35,180,144)] decoration-2 underline-offset-[0.25rem] md:hover:underline md:text-xl lg:text-2xl"
                >
                  <span className="select-none bg-[rgb(35,180,144)] px-2 text-white">
                    {articles[2].title?.split(" ")[0]}
                  </span>
                  <span>{formattedTitle(articles[2].title)}</span>
                </Link>
                <h6 className="mt-2.5 flex items-center truncate text-xs text-gray-700 md:text-sm 2xl:mt-3">
                  <ClockIcon className="mr-2.5 hidden h-6 w-6 md:block" />
                  <span>
                    {getDate(
                      articles[2].publishedAt?.slice(0, 10).replace(" ", "-"),
                    )}
                  </span>
                  {articles[1].author && articles[1].author.length > 0 && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="font-semibold">
                        {articles[1].author}
                      </span>
                    </>
                  )}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="hidden h-full w-full flex-col space-y-2.5 md:flex">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl">
          <Image
            fill
            src={articles[3].urlToImage ?? ""}
            alt={articles[3].title ?? ""}
            className="object-cover"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col">
            <div className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-gray-100 from-45% to-70% p-5">
              <Link
                href={articles[3].url ?? ""}
                className="line-clamp-4 text-ellipsis text-pretty text-2xl leading-[2rem] decoration-[rgb(41,141,255)] decoration-2 underline-offset-[0.45rem] md:hover:underline lg:line-clamp-3 lg:text-3xl lg:leading-[2.75rem] 2xl:text-4xl 2xl:leading-[3rem]"
              >
                <span className="select-none bg-[rgb(41,141,255)] px-2 text-white">
                  {articles[3].title?.split(" ")[0]}
                </span>
                <span>{formattedTitle(articles[0].title)}</span>
              </Link>
              <h6 className="mt-4 flex items-center truncate text-sm text-gray-700">
                <ClockIcon className="mr-2.5 h-6 w-6" />
                <span>
                  {getDate(
                    articles[3].publishedAt?.slice(0, 10).replace(" ", "-"),
                  )}
                </span>
                {articles[3].author && articles[3].author.length > 0 && (
                  <>
                    <span className="mx-2">•</span>
                    <span className="font-semibold">{articles[3].author}</span>
                  </>
                )}
              </h6>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col space-y-2.5">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl">
            <Image
              fill
              src={articles[4].urlToImage ?? ""}
              alt={articles[4].title ?? ""}
              className="object-cover blur-2xl"
            />
            <div className="absolute left-0 top-0 flex h-full w-full flex-col">
              <div className="flex h-full w-full flex-col justify-between bg-gray-100 p-5">
                <div className="flex w-full flex-col">
                  <Link
                    href={articles[4].url ?? ""}
                    className="line-clamp-1 text-ellipsis text-pretty text-lg leading-[2rem] decoration-[rgb(238,47,174)] decoration-2 underline-offset-[0.25rem] md:hover:underline xl:text-xl xl:leading-[2.75rem] 2xl:text-2xl"
                  >
                    <span className="select-none bg-[rgb(238,47,174)] px-2 text-white">
                      {articles[4].title?.split(" ")[0]}
                    </span>
                    <span>{formattedTitle(articles[4].title)}</span>
                  </Link>
                  <p className="my-1 line-clamp-2 text-ellipsis text-pretty text-gray-700 xl:line-clamp-2 xl:text-base">
                    {articles[0].description}
                  </p>
                </div>
                <h6 className="mt-3 flex items-center truncate text-sm text-gray-700">
                  <ClockIcon className="mr-2.5 h-6 w-6" />
                  <span>
                    {getDate(
                      articles[4].publishedAt?.slice(0, 10).replace(" ", "-"),
                    )}
                  </span>
                  {articles[4].author && articles[4].author.length > 0 && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="font-semibold">
                        {articles[4].author}
                      </span>
                    </>
                  )}
                </h6>
              </div>
            </div>
          </div>
          <div className="flex h-[40%] w-full space-x-2.5">
            <Link
              href={""}
              className="flex h-full w-full items-center justify-center rounded-xl bg-red-200/75 md:rounded-2xl"
            >
              <Image
                height={40}
                width={40}
                src="/images/youtube.png"
                alt="youtube logo"
                className="scale-[0.7] object-contain lg:scale-[0.8] xl:scale-[0.9] 2xl:scale-100"
              />
            </Link>
            <Link
              href={""}
              className="flex h-full w-full items-center justify-center rounded-xl bg-blue-200/75 md:rounded-2xl"
            >
              <Image
                height={40}
                width={40}
                src="/images/telegram.png"
                alt="telegram logo"
                className="scale-[0.7] object-contain lg:scale-[0.8] xl:scale-[0.9] 2xl:scale-100"
              />
            </Link>
            <Link
              href={""}
              className="flex h-full w-full items-center justify-center rounded-xl bg-green-200/75 md:rounded-2xl"
            >
              <Image
                height={40}
                width={40}
                src="/images/whatsapp.png"
                alt="whatsapp logo"
                className="scale-[0.7] object-contain lg:scale-[0.8] xl:scale-[0.9] 2xl:scale-100"
              />
            </Link>
            <Link
              href={""}
              className="flex h-full w-full items-center justify-center rounded-xl bg-gray-100 md:rounded-2xl"
            >
              <Image
                height={30}
                width={30}
                src="/images/twitter.png"
                alt="twitter logo"
                className="scale-[0.7] object-contain lg:scale-[0.8] xl:scale-[0.9] 2xl:scale-100"
              />
            </Link>
          </div>
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl">
            <Image
              fill
              src={articles[5].urlToImage ?? ""}
              alt={articles[5].title ?? ""}
              className="object-cover blur-2xl"
            />
            <div className="absolute left-0 top-0 flex h-full w-full flex-col">
              <div className="flex h-full w-full flex-col justify-between bg-gray-100 p-5">
                <Link
                  href={articles[5].url ?? ""}
                  className="line-clamp-3 text-ellipsis text-pretty text-xl decoration-[rgb(236,155,48)] decoration-2 underline-offset-[0.25rem] md:hover:underline lg:text-2xl"
                >
                  <span className="select-none bg-[rgb(236,155,48)] px-2 text-white">
                    {articles[5].title?.split(" ")[0]}
                  </span>
                  <span>{formattedTitle(articles[6].title)}</span>
                </Link>
                <h6 className="mt-2.5 flex items-center truncate text-sm text-gray-700 2xl:mt-3">
                  <ClockIcon className="mr-2.5 h-6 w-6" />
                  <span>
                    {getDate(
                      articles[5].publishedAt?.slice(0, 10).replace(" ", "-"),
                    )}
                  </span>
                  {articles[5].author && articles[5].author.length > 0 && (
                    <>
                      <span className="mx-2">•</span>
                      <span className="font-semibold">
                        {articles[5].author}
                      </span>
                    </>
                  )}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="hidden h-full w-full flex-col space-y-2.5 xl:flex">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl">
          <Image
            fill
            src={articles[6].urlToImage ?? ""}
            alt={articles[6].title ?? ""}
            className="object-cover blur-2xl"
          />
          <div className="absolute left-0 top-0 flex h-full w-full flex-col">
            <div className="flex h-full w-full flex-col justify-between bg-gray-100 p-5">
              <div className="flex h-full w-full flex-col">
                <Link
                  href={articles[6].url ?? ""}
                  className="line-clamp-4 text-ellipsis text-pretty text-3xl leading-[2.5rem] decoration-[rgb(29,148,55)] decoration-2 underline-offset-[0.45rem] md:hover:underline 2xl:line-clamp-3 2xl:text-4xl 2xl:leading-[3rem]"
                >
                  <span className="select-none bg-[rgb(29,148,55)] px-2 text-white">
                    {articles[6].title?.split(" ")[0]}
                  </span>
                  <span>{formattedTitle(articles[0].title)}</span>
                </Link>
                <p className="my-4 line-clamp-6 text-ellipsis text-pretty text-base leading-7 text-gray-700 2xl:line-clamp-5">
                  {articles[0].description}
                </p>
              </div>
              <h6 className="flex items-center truncate text-sm text-gray-700">
                <ClockIcon className="mr-2.5 h-6 w-6" />
                <span>
                  {getDate(
                    articles[6].publishedAt?.slice(0, 10).replace(" ", "-"),
                  )}
                </span>
                {articles[6].author && articles[6].author.length > 0 && (
                  <>
                    <span className="mx-2">•</span>
                    <span className="font-semibold">{articles[6].author}</span>
                  </>
                )}
              </h6>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col space-y-2.5">
          <div className="flex h-full w-full space-x-2.5">
            <div className="flex h-full w-full flex-col items-start justify-between rounded-xl bg-green-200/75 py-5 pl-5 md:rounded-2xl">
              <span className="flex w-full justify-between pr-5">
                <span className="text-sm font-semibold text-green-700 2xl:text-base">
                  Increasing
                </span>
                <ArrowTrendingUpIcon className="h-5 w-5 stroke-[0.2rem] text-green-600 2xl:h-6 2xl:w-6" />
              </span>

              <h6 className="flex flex-col 2xl:flex-row 2xl:items-end">
                <span className="text-3xl font-semibold 2xl:text-4xl">
                  5.2%
                </span>
                <span className="lg text-gray-500 2xl:ml-2 2xl:text-xl">
                  0.9715
                </span>
              </h6>
              <p className="flex items-end">
                <span className="text-xl 2xl:text-2xl">INR</span>
                <span className="ml-2 text-lg text-gray-500 2xl:text-xl">
                  / USD
                </span>
              </p>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-between rounded-xl bg-yellow-200/75 py-5 pl-5 md:rounded-2xl">
              <span className="flex w-full justify-between pr-5">
                <span className="text-sm font-semibold text-yellow-700 2xl:text-base">
                  Increasing
                </span>
                <ArrowTrendingUpIcon className="h-5 w-5 stroke-[0.2rem] text-yellow-600 2xl:h-6 2xl:w-6" />
              </span>
              <h6 className="flex flex-col 2xl:flex-row 2xl:items-end">
                <span className="text-3xl font-semibold 2xl:text-4xl">
                  3.8%
                </span>
                <span className="lg text-gray-500 2xl:ml-2 2xl:text-xl">
                  0.9715
                </span>
              </h6>
              <p className="flex items-end">
                <span className="text-xl 2xl:text-2xl">UMA</span>
                <span className="ml-2 text-lg text-gray-500 2xl:text-xl">
                  / USD
                </span>
              </p>
            </div>
          </div>
          <div className="flex h-full w-full space-x-2.5">
            <div className="flex h-full w-full flex-col items-start justify-between rounded-xl bg-blue-200/75 py-5 pl-5 md:rounded-2xl">
              <span className="flex w-full justify-between pr-5">
                <span className="text-sm font-semibold text-blue-700 2xl:text-base">
                  Increasing
                </span>
                <ArrowTrendingUpIcon className="h-5 w-5 stroke-[0.2rem] text-blue-600 2xl:h-6 2xl:w-6" />
              </span>

              <h6 className="flex flex-col 2xl:flex-row 2xl:items-end">
                <span className="text-3xl font-semibold 2xl:text-4xl">
                  7.1%
                </span>
                <span className="lg text-gray-500 2xl:ml-2 2xl:text-xl">
                  0.9715
                </span>
              </h6>
              <p className="flex items-end">
                <span className="text-xl 2xl:text-2xl">INR</span>
                <span className="ml-2 text-lg text-gray-500 2xl:text-xl">
                  / USD
                </span>
              </p>
            </div>
            <div className="flex h-full w-full flex-col items-start justify-between rounded-xl bg-red-200/75 py-5 pl-5 md:rounded-2xl">
              <span className="flex w-full justify-between pr-5">
                <span className="text-sm font-semibold text-red-700 2xl:text-base">
                  Decreasing
                </span>
                <ArrowTrendingDownIcon className="h-5 w-5 stroke-[0.2rem] text-red-600 2xl:h-6 2xl:w-6" />
              </span>
              <h6 className="flex flex-col 2xl:flex-row 2xl:items-end">
                <span className="text-3xl font-semibold 2xl:text-4xl">
                  4.4%
                </span>
                <span className="lg text-gray-500 2xl:ml-2 2xl:text-xl">
                  0.9715
                </span>
              </h6>
              <p className="flex items-end">
                <span className="text-xl 2xl:text-2xl">BRICK</span>
                <span className="ml-2 text-lg text-gray-500 2xl:text-xl">
                  / USD
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
