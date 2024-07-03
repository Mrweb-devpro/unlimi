/* eslint-disable react/prop-types */
import { IoIosSearch } from "react-icons/io";

function Search({ query, setQuery }) {
  return (
    <span className=" border border-[#CDCFD4] p-2 flex gap-3 rounded-lg items-center justify-center ">
      <IoIosSearch className="text-xl text-[#9AA0A8]" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by patients..."
        className="outline-none border-none bg-transparent text-stone-600"
      />
    </span>
  );
}

export default Search;
