"use client";

import Skeleton from "@mui/material/Skeleton";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Loading() {
  const NotMobileScreen = useMediaQuery("(min-width:768px)");
  return (
    <div className="mx-auto flex w-full max-w-[110rem] flex-col space-y-2.5 px-2.5 pt-5 md:space-y-7 md:px-5 md:pt-10">
      <div className="flex w-full justify-between">
        <Skeleton
          height={NotMobileScreen ? 75 : 55}
          variant="rectangular"
          className="w-[125px] rounded-lg md:w-[200px] md:rounded-2xl"
        />
        <Skeleton
          height={NotMobileScreen ? 75 : 60}
          variant="rectangular"
          className="w-[125px] rounded-lg md:w-[200px] md:rounded-2xl"
        />
      </div>
      <div className="flex w-full flex-col">
        <Skeleton
          height={NotMobileScreen ? 880 : 288}
          variant="rectangular"
          className="w-full rounded-lg md:rounded-2xl"
        />
      </div>
      <div className="flex w-full justify-between pb-1 pt-1 md:pb-0 md:pt-5">
        <Skeleton
          height={NotMobileScreen ? 75 : 55}
          variant="rectangular"
          className="w-[125px] rounded-lg md:w-[200px] md:rounded-2xl"
        />
      </div>
      <div className="flex w-full flex-col">
        <Skeleton
          height={NotMobileScreen ? 880 : 520}
          variant="rectangular"
          className="w-full rounded-lg md:rounded-2xl"
        />
      </div>
      <div className="flex w-full justify-between pb-1 pt-1 md:pb-0 md:pt-5">
        <Skeleton
          height={NotMobileScreen ? 75 : 55}
          variant="rectangular"
          className="w-[125px] rounded-lg md:w-[200px] md:rounded-2xl"
        />
      </div>
      <div className="flex w-full flex-col">
        <Skeleton
          height={NotMobileScreen ? 880 : 520}
          variant="rectangular"
          className="w-full rounded-lg md:rounded-2xl"
        />
      </div>
      <div className="flex w-full justify-between pb-1 pt-1 md:pb-0 md:pt-5">
        <Skeleton
          height={NotMobileScreen ? 75 : 55}
          variant="rectangular"
          className="w-[125px] rounded-lg md:w-[200px] md:rounded-2xl"
        />
      </div>
      <div className="flex w-full flex-col">
        <Skeleton
          height={NotMobileScreen ? 880 : 520}
          variant="rectangular"
          className="w-full rounded-lg md:rounded-2xl"
        />
      </div>
    </div>
  );
}
