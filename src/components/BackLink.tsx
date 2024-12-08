"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useNavStore } from "utils/Zustand";

export default function BackLink() {
  const { setNumber, setWidth, setLeft } = useNavStore();
  const NotMobileScreen = useMediaQuery("(min-width:768px)");

  const handleClick = () => {
    const ScrollContainer = document.getElementById("nav-container");
    const ViewPortContainer =
      document.getElementById("parent-container")?.clientWidth;

    const idx = 0;

    const CurrentButtonLeft = document
      .getElementById(`nav-button-id-${idx}`)
      ?.getBoundingClientRect()?.left;
    const CurrentButton = document.getElementById(`nav-button-id-${idx}`);

    if (
      CurrentButtonLeft &&
      ScrollContainer &&
      ViewPortContainer &&
      CurrentButton
    ) {
      setNumber(idx);
      setWidth(CurrentButton.clientWidth);
      setLeft(CurrentButton.offsetLeft);
      if (
        CurrentButtonLeft + (NotMobileScreen ? 100 : 70) >
        ViewPortContainer
      ) {
        ScrollContainer.scrollBy({
          left:
            CurrentButtonLeft +
            CurrentButton.clientWidth +
            (NotMobileScreen ? 125 : 80) -
            ViewPortContainer -
            ScrollContainer.scrollLeft,
          behavior: "smooth",
        });
      }
      if (CurrentButtonLeft - (NotMobileScreen ? 100 : 70) < 0) {
        ScrollContainer.scrollBy({
          left: CurrentButtonLeft - (NotMobileScreen ? 100 : 70),
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <Link
      href="/"
      onClick={handleClick}
      className="flex -translate-x-2.5 scale-100 items-center space-x-2.5 p-2.5 text-blue-550 transition-all duration-200 ease-in-out md:hover:translate-x-0 md:hover:bg-gray-100 md:active:scale-90"
    >
      <ChevronLeftIcon className="h-4 w-4 stroke-[3] md:h-5 md:w-5" />
      <span className="text-xs font-semibold md:text-base">Back to home</span>
    </Link>
  );
}
