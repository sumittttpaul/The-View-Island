"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const SliderCarousel = dynamic<Carousel>(() => import("./SliderCarousel"), {
  ssr: false,
});

const GridCarousel = dynamic<Carousel>(() => import("./GridCarousel"), {
  ssr: false,
});

type props = {
  articles: Articles[];
  isMobile: boolean;
};

export default function Carousel({ articles, isMobile }: props) {
  const content = [
    articles[20],
    articles[33],
    articles[65],
    articles[32],
    articles[76],
    articles[64],
    articles[5],
  ];
  if (isMobile)
    return (
      <CarouselWrapper isMobile={isMobile}>
        <SliderCarousel articles={content} />
      </CarouselWrapper>
    );
  else
    return (
      <CarouselWrapper isMobile={isMobile}>
        <GridCarousel articles={content} isMobile={isMobile} />
      </CarouselWrapper>
    );
}

const CarouselWrapper = ({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile?: boolean;
}) => {
  const newDate = (data?: string) => {
    const date = new Date(data ?? new Date());
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
    return formattedDate;
  };

  return (
    <section className="flex w-full flex-col space-y-5 py-5">
      <div className="flex w-full items-center justify-between px-5">
        <div className="flex flex-col">
          <h2 className="truncate text-[1.15rem] md:text-[1.75rem]">
            Your briefing
          </h2>
          <p className="text-xs md:text-base">{newDate()}</p>
        </div>
        <Link
          href={"https://www.google.com/search?q=weather"}
          className="flex items-center space-x-1 rounded-2xl md:items-start md:space-x-2.5 md:px-5"
        >
          <Image
            height={isMobile ? 41 : 93}
            width={isMobile ? 41 : 93}
            src="/images/weather.png"
            alt="weather logo"
            className="object-contain"
          />
          <div className="flex md:flex-col">
            <span className="hidden text-xs font-medium text-gray-500 md:block md:text-sm">
              Chhattisgarh
            </span>
            <span className="text-base font-medium md:text-2xl md:font-semibold">
              21°C
            </span>
            <span className="hidden text-[0.65rem] font-medium text-blue-550 md:block md:text-xs">
              weather.com
            </span>
          </div>
        </Link>
      </div>
      {children}
    </section>
  );
};
