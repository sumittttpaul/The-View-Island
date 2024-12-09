"use client";

import Skeleton from "@mui/material/Skeleton";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Loading() {
  const NotMobileScreen = useMediaQuery("(min-width:768px)");
  return (
    <div className="mx-auto flex w-full max-w-[70rem] flex-col space-y-5 px-2.5 pt-5 md:mt-2.5 md:space-y-7 md:px-5 md:pt-10">
      <Skeleton
        height={NotMobileScreen ? 75 : 60}
        variant="rectangular"
        className="w-[150px] rounded-xl md:w-[200px] md:rounded-2xl"
      />
      <div className="flex w-full flex-col space-y-2.5 md:space-y-5">
        <Skeleton
          height={334}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
        <Skeleton
          height={334}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
        <Skeleton
          height={334}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
        <Skeleton
          height={334}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
        <Skeleton
          height={334}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
        <Skeleton
          height={334}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
        <Skeleton
          height={334}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
        <Skeleton
          height={334}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
        <Skeleton
          height={334}
          variant="rectangular"
          className="w-full rounded-xl md:rounded-2xl"
        />
      </div>
    </div>
  );
}
