"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getDate } from "utils/Utility";

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
  if (isMobile)
    return (
      <CarouselWrapper isMobile={isMobile} className="relative h-72">
        <Suspense>
          <SliderCarousel articles={articles} />
        </Suspense>
      </CarouselWrapper>
    );
  else
    return (
      <CarouselWrapper isMobile={isMobile} className="relative flex w-full h-[32rem] md:h-[50rem] lg:h-[55rem]">
        <Suspense>
          <GridCarousel articles={articles} isMobile={isMobile} />
        </Suspense>
      </CarouselWrapper>
    );
}

const CarouselWrapper = ({
  children,
  isMobile,
  className,
}: {
  children: React.ReactNode;
  isMobile?: boolean;
  className?: string;
}) => {
  return (
    <section className="flex w-full flex-col space-y-5 py-5">
      <div className="flex w-full items-center justify-between px-5">
        <div className="flex flex-col">
          <h2 className="truncate text-[1.15rem] md:text-[1.75rem]">
            Your briefing
          </h2>
          <p className="text-xs text-gray-600 md:text-base">{getDate()}</p>
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
            className={`object-contain ${!isMobile && "max-h-[2.5625rem] max-w-[2.5625rem] md:max-h-[5.8125rem] md:max-w-[5.8125rem]"}`}
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
      <div className={className}>{children}</div>
    </section>
  );
};
