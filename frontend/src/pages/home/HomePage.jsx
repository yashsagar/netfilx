import { Search, LogOut, Menu } from "lucide-react";
import { useState } from "react";

const MainPage = () => {
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const handelNavigation = () => {
    setIsShowNavbar((prevState) => !prevState);
  };
  return (
    <div className="bg-black min-h-screen ">
      <nav className="h-16 main-wrapper-absolute pt-3 md:pt-5 z-20">
        <ul className="flex gap-2 md:gap-4 items-center w-full ">
          <li className="cursor-pointer ml-auto">
            <Search />
          </li>
          <li className=" size-6 md:size-8 rounded-sm overflow-hidden cursor-pointer">
            <img className="w-full h-full" src="/avatar1.png" />
          </li>
          <li className="cursor-pointer ">
            <LogOut />
          </li>
          <li className={`cursor-pointer xs:hidden`} onClick={handelNavigation}>
            <Menu />
          </li>
        </ul>
      </nav>

      {isShowNavbar && (
        <div className="absolute left-2 right-2 top-16  pl-4 pr-2  ">
          <ul className="border border-gray-600/50 p-2 ml-2 space-y-3 text-slate-300 rounded pb-4">
            <li className="cursor-pointer hover:underline">Movie</li>
            <li className="cursor-pointer hover:underline">Tv Shows</li>
            <li className="cursor-pointer hover:underline">Search History</li>
          </ul>
        </div>
      )}

      <section className="pt-20">test</section>
    </div>
  );
};
export default MainPage;
