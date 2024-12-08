"use client";

import { useMediaQuery } from "@mui/material";
import { useRouter, useParams, usePathname } from "next/navigation";
import { useEffect } from "react";
import { Categories } from "utils/Utility";
import { MotionSpan } from "utils/Motion";
import { useNavStore } from "utils/Zustand";

export default function NavBar() {
  const { Number, Width, Left, setNumber, setWidth, setLeft } = useNavStore();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();

  const { category } = params;

  const NotMobileScreen = useMediaQuery("(min-width:768px)");

  const variants = {
    initial: { width: 0, left: 0 },
    animate: { width: Width, left: Left },
  };

  const onClick = (idx: number) => () => {
    if (Number != idx) {
      const PrevButtonWidth = document.getElementById(
        `nav-button-id-${Number}`,
      )?.offsetWidth;
      const PrevButtonLeft = document.getElementById(
        `nav-button-id-${Number}`,
      )?.offsetLeft;
      const NewButtonWidth = document.getElementById(
        `nav-button-id-${idx}`,
      )?.offsetWidth;
      const NewButtonLeft = document.getElementById(
        `nav-button-id-${idx}`,
      )?.offsetLeft;
      const NewButtonViewPortLeft = document
        .getElementById(`nav-button-id-${idx}`)
        ?.getBoundingClientRect()?.left;
      const ViewPortContainer =
        document.getElementById("parent-container")?.clientWidth;
      const ScrollContainer = document.getElementById("nav-container");
      //
      const Search = document.getElementById(`nav-button-id-${idx}`)?.innerText;

      if (
        PrevButtonWidth &&
        NewButtonWidth &&
        PrevButtonLeft &&
        NewButtonLeft &&
        ScrollContainer &&
        NewButtonViewPortLeft &&
        ViewPortContainer &&
        Search
      ) {
        if (
          NewButtonViewPortLeft +
            NewButtonWidth +
            (NotMobileScreen ? 100 : 70) >
          ViewPortContainer
        ) {
          ScrollContainer.scrollBy({
            left:
              NewButtonLeft +
              NewButtonWidth +
              (NotMobileScreen ? 125 : 80) -
              ViewPortContainer -
              ScrollContainer.scrollLeft,
            behavior: "smooth",
          });
        }
        if (NewButtonViewPortLeft - (NotMobileScreen ? 100 : 70) < 0) {
          ScrollContainer.scrollBy({
            left: NewButtonViewPortLeft - (NotMobileScreen ? 100 : 70),
            behavior: "smooth",
          });
        }
        if (Number < idx) {
          setLeft(PrevButtonLeft + PrevButtonWidth / 2);
          setWidth(
            NewButtonWidth / 2 +
              NewButtonLeft -
              PrevButtonLeft -
              PrevButtonWidth / 2,
          );
        }
        if (Number > idx) {
          setLeft(NewButtonLeft + NewButtonWidth / 2);
          setWidth(
            PrevButtonLeft -
              NewButtonLeft +
              PrevButtonWidth / 2 -
              NewButtonWidth / 2,
          );
        }
        setNumber(idx);
        router.push(`/${Search.replace(" ", "-")}`);
      }
    }
  };

  const onAnimationComplete = () => {
    const ButtonWidth = document.getElementById(
      `nav-button-id-${Number}`,
    )?.offsetWidth;
    const ButtonLeft = document.getElementById(
      `nav-button-id-${Number}`,
    )?.offsetLeft;
    if (
      ButtonWidth &&
      ButtonLeft &&
      ButtonLeft != Left &&
      ButtonWidth != Width
    ) {
      setLeft(ButtonLeft);
      setWidth(ButtonWidth);
    }
  };

  useEffect(() => {
    const ScrollContainer = document.getElementById("nav-container");
    const ViewPortContainer =
      document.getElementById("parent-container")?.clientWidth;

    if (category) {
      const idx = Categories.indexOf(category.toString().replaceAll("-", " "));
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
    } else {
      const firstButton = document.getElementById(`nav-button-id-${0}`);
      if (firstButton) {
        setNumber(0);
        setWidth(firstButton.clientWidth);
        setLeft(firstButton.offsetLeft);
      }
    }

    //

    const container = document.getElementById("nav-container");
    const navBar = document.getElementById("parent-container");
    const page = document.getElementById("page-id");

    const properties = { passive: true };

    if (container && navBar && page) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) return;
        container.scrollBy({
          left:
            e.deltaY < 0
              ? -container.clientWidth * 0.25
              : container.clientWidth * 0.25,
          behavior: "smooth",
        });
      };
      const onMouseEnter = () => {
        if (document.body.clientWidth > 768) {
          document.body.style.overflow = "hidden";
          document.body.style.paddingRight = "8px";
          if (window.scrollY > 57) navBar.style.paddingRight = "8px";
        }
      };
      const onMouseExit = () => {
        if (document.body.clientWidth > 768) {
          document.body.style.overflow = "auto";
          document.body.style.paddingRight = "0px";
          navBar.style.paddingRight = "0px";
        }
      };
      const stickNav = () => {
        if (document.body.clientWidth > 768) {
          if (window.scrollY > 57) {
            navBar.style.position = "fixed";
            page.style.paddingTop = "57px";
          } else {
            navBar.style.position = "relative";
            page.style.paddingTop = "0px";
          }
        } else {
          if (window.scrollY > 104) {
            navBar.style.position = "fixed";
            page.style.paddingTop = "54px";
          } else {
            navBar.style.position = "relative";
            page.style.paddingTop = "0px";
          }
        }
      };

      container.addEventListener("wheel", onWheel, properties);
      container.addEventListener("mouseenter", onMouseEnter, properties);
      container.addEventListener("mouseleave", onMouseExit, properties);
      window.addEventListener("scroll", stickNav, properties);
      return () => {
        container.removeEventListener("wheel", onWheel);
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseExit);
        window.removeEventListener("scroll", stickNav);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (pathname !== "/search")
    return (
      <nav
        id="parent-container"
        className="z-20 flex w-full flex-col bg-white pt-[1.5rem] md:pt-[1.75]"
      >
        <div
          id="nav-container"
          className="hide-scrollbar relative mx-auto flex w-full max-w-[110rem] overflow-x-scroll"
        >
          <ul className="flex space-x-6 px-4 text-xs md:space-x-9 md:px-5 md:text-sm">
            {Categories.slice(0, 4).map((data, i) => {
              return (
                <li
                  key={i}
                  onClick={onClick(i)}
                  id={`nav-button-id-${i}`}
                  className={`${Number === i ? "text-blue-550" : NotMobileScreen ? "text-black/60 hover:text-black" : "text-black/60"} cursor-pointer select-none whitespace-nowrap font-semibold transition-colors duration-300 ease-in-out`}
                >
                  {data}
                </li>
              );
            })}
            <li className="mx-10 mb-2 h-5 min-h-5 w-0.5 min-w-0.5 bg-gray-200 md:mb-2.5" />
            {Categories.slice(4, Categories.length).map((data, i) => {
              return (
                <li
                  key={i + 4}
                  id={`nav-button-id-${i + 4}`}
                  onClick={onClick(i + 4)}
                  className={`${Number === i + 4 ? "text-blue-550" : NotMobileScreen ? "text-black/60 hover:text-black" : "text-black/60"} cursor-pointer select-none whitespace-nowrap font-semibold transition-colors duration-300 ease-in-out`}
                >
                  {data}
                </li>
              );
            })}
          </ul>
          <MotionSpan
            animate="animate"
            initial="initial"
            variants={variants}
            onAnimationComplete={onAnimationComplete}
            transition={{ type: "twin", duration: 0.1 }}
            className="absolute bottom-0 z-10 h-[0.2rem] rounded-t-full bg-blue-550 md:h-1"
          />
        </div>
        <span className="-mt-[0.05rem] h-[0.1rem] w-full bg-gray-200 md:h-0.5" />
      </nav>
    );
}
