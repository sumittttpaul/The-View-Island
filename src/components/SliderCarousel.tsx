import { ClockIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { getDate, formattedTitle } from "utils/Utility";

const AllColors = [
  "bg-[rgb(41,141,255)]",
  "bg-[rgb(255,40,40)]",
  "bg-[rgb(175,90,255)]",
  "bg-[rgb(35,180,144)]",
  "bg-[rgb(238,47,174)]",
  "bg-[rgb(236,155,48)]",
  "bg-[rgb(29,148,55)]",
];

export default function SliderCarousel({ articles }: Carousel) {
  const getBgColors = () =>
    AllColors[Math.floor(Math.random() * AllColors.length)];

  return (
    <div className="relative space-y-2">
      <Swiper
        loop
        spaceBetween={10}
        slidesPerView={1.1}
        style={{ paddingLeft: 10, paddingRight: 10 }}
        className="h-72"
      >
        {articles.slice(0, 10).map((data, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-100"
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
                      className={`select-none ${getBgColors()} px-2 text-white`}
                    >
                      {data.title?.split(" ")[0]}
                    </span>
                    <span>{formattedTitle(data.title)}</span>
                  </Link>
                  <p className="my-3 line-clamp-2 text-ellipsis text-pretty text-[0.8125rem] text-gray-700">
                    {data.description}
                  </p>
                  <h6 className="flex items-center truncate text-xs text-gray-700">
                    <ClockIcon className="mr-2 h-5 w-5" />
                    <span>
                      {getDate(
                        data.publishedAt?.slice(0, 10).replace(" ", "-"),
                      )}
                    </span>
                    {data.author && data.author.length > 0 && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="font-semibold">{data.author}</span>
                      </>
                    )}
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
