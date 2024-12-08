import {
  Cog6ToothIcon,
  BellIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import SearchBox from "components/SearchBox";
import NavBar from "components/NavBar";
import LogoLink from "./LogoLink";

export default function Header() {
  return (
    <header className="flex w-full flex-col">
      <div className="grid w-full grid-flow-col grid-rows-2 items-center justify-between px-2 md:flex md:space-x-5 md:px-2.5 md:pt-2.5">
        <LogoLink />
        <SearchBox />
        <div className="flex items-center justify-end">
          <button
            title="help"
            type="button"
            className="hidden h-12 w-12 min-w-12 items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:bg-gray-400/20 active:scale-90 md:flex"
          >
            <QuestionMarkCircleIcon className="stroke-1.5 pointer-events-none h-6 min-h-5 w-6 min-w-6 stroke-gray-800 font-bold text-gray-800" />
          </button>
          <button
            title="settings"
            type="button"
            className="hidden h-12 w-12 min-w-12 items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:bg-gray-400/20 active:scale-90 md:flex"
          >
            <Cog6ToothIcon className="stroke-1.5 pointer-events-none h-6 min-h-5 w-6 min-w-6 stroke-gray-800 font-bold text-gray-800" />
          </button>
          <button
            title="notifications"
            type="button"
            className="flex h-9 w-9 min-w-9 items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:bg-gray-400/20 active:scale-90 md:h-12 md:w-12 md:min-w-12"
          >
            <BellIcon className="stroke-1.5 pointer-events-none h-6 min-h-5 w-6 min-w-6 stroke-gray-800 font-bold text-gray-800" />
            <span className="pointer-events-none relative z-10 -ml-3 -mt-4 flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
            </span>
          </button>
          <button
            title="user profile"
            type="button"
            className="ml-4 flex h-9 w-9 min-w-9 items-center justify-center rounded-full transition-all duration-200 ease-in-out hover:bg-gray-400/20 active:scale-90 md:ml-2 md:h-12 md:w-12 md:min-w-12"
          >
            <Image
              height={40}
              width={40}
              src="/images/sumit.png"
              alt="user-profile"
              className="object-fit rounded-full object-cover"
            />
          </button>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
