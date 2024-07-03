/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./Logo";
import { BsBellFill } from "react-icons/bs";
import Search from "./Search";

function Nav({query, setQuery}) {
  return (
    <nav className="flex justify-between px-4 py-3 bg-white">
      <div className="flex gap-10 items-center justify-center">
        <Logo />
        <Search query={query} setQuery={setQuery} />
      </div>
      <div className="flex gap-3 items-center justify-center">
        <button className="text-[#9B9FAB] bg-stone-200 p-1.5 rounded-full after:absolute after:bg-red-500 after:w-1.5 after:h-1.5 after:rounded-full after:top-1.5 after:right-1.5 relative after:border after:border-white ">
          <BsBellFill />
        </button>
        <img src="./user-demo.svg" alt="An Image of you" />
        <span className="flex items-center justify-center gap-2">
          <p className="text-md">Deko</p>
          <button className="">
            <IoIosArrowDown className="text-stone-400" />
          </button>
        </span>
      </div>
    </nav>
  );
}

export default Nav;
