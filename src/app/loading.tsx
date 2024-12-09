"use client";

import Skeleton from "@mui/material/Skeleton";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Loading() {
  const NotMobileScreen = useMediaQuery("(min-width:768px)");
  return (
    <div className="mx-auto flex w-full max-w-[110rem] flex-col space-y-5 px-2.5 pt-5 md:space-y-7 md:px-5 md:pt-10">
      <div className="flex w-full justify-between">
        <Skeleton
          height={NotMobileScreen ? 75 : 60}
          variant="rectangular"
          className="w-[150px] rounded-xl md:w-[200px] md:rounded-2xl"
        />
        <Skeleton
          height={NotMobileScreen ? 75 : 60}
          variant="rectangular"
          className="w-[150px] rounded-xl md:w-[200px] md:rounded-2xl"
        />
      </div>
      <div className="flex w-full flex-col">
        <Skeleton
          height={880}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
      </div>
      <div className="flex w-full justify-between pt-5">
        <Skeleton
          height={NotMobileScreen ? 75 : 60}
          variant="rectangular"
          className="w-[150px] rounded-xl md:w-[200px] md:rounded-2xl"
        />
      </div>
      <div className="flex w-full flex-col">
        <Skeleton
          height={880}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
      </div>
    </div>
  );
}
