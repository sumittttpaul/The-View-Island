import { ClockIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";

export default function SliderCarousel({ articles }: Carousel) {
  const newDate = (data?: string) => {
    const date = new Date(data ?? new Date());
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
    return formattedDate;
  };

  const getBgColors = (index: number) => {
    if (index === 0) return "bg-[rgb(41,141,255)]";
    if (index === 1) return "bg-[rgb(255,40,40)]";
    if (index === 2) return "bg-[rgb(175,90,255)]";
    if (index === 3) return "bg-[rgb(35,180,144)]";
    if (index === 4) return "bg-[rgb(238,47,174)]";
    if (index === 5) return "bg-[rgb(236,155,48)]";
    if (index === 6) return "bg-[rgb(29,148,55)]";
  };

  const formattedTitle = (title?: string) => {
    return title?.substring(title?.split(" ")[0].length);
  };

  return (
    <div className="relative space-y-2">
      <Swiper
        loop
        spaceBetween={10}
        slidesPerView={1.1}
        style={{ paddingLeft: 10, paddingRight: 10 }}
        className="h-72"
      >
        {articles.map((data, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-200/75"
            >
              <Image
                fill
                src={data.urlToImage ?? ""}
                alt={data.title ?? ""}
                className="object-cover"
              />
              <div className="absolute left-0 top-0 flex h-full w-full flex-col">
                <div className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-gray-100 from-55% to-80% px-5 pb-5">
                  <Link
                    href={data.url ?? ""}
                    className="line-clamp-2 text-ellipsis text-pretty text-xl"
                  >
                    <span
                      className={`select-none ${getBgColors(index)} px-2 text-white`}
                    >
                      {data.title?.split(" ")[0]}
                    </span>
                    <span>{formattedTitle(data.title)}</span>
                  </Link>
                  <p className="my-3 line-clamp-2 text-ellipsis text-pretty text-sm text-gray-700">
                    {data.description}
                  </p>
                  <h6 className="flex items-center truncate text-xs text-gray-700">
                    <ClockIcon className="mr-2 h-5 w-5" />
                    <span>
                      {newDate(
                        data.publishedAt?.slice(0, 10).replace(" ", "-"),
                      )}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="font-semibold">{data.author}</span>
                  </h6>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
