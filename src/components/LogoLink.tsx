"use client";

import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { useNavStore } from "utils/Zustand";

export default function LogoLink() {
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
      className="flex h-full translate-y-1 cursor-pointer select-none items-center font-novante text-2xl font-semibold uppercase text-gray-500/75 no-underline md:text-4xl"
    >
      <span>The</span>
      <span className="px-1 font-semibold tracking-wider text-black">View</span>
      <span>Island</span>
    </Link>
  );
}