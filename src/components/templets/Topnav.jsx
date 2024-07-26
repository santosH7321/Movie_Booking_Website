import { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center">
      <i className="text-2xl cursor-pointer text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i 
          onClick={() => setQuery("")} 
          className="text-zinc-400 text-2xl cursor-pointer ri-close-line">
        </i>
      )}

      <div className="absolute w-[50%] h-[50vh] bg-zinc-200 top-[90%] overflow-auto">
        <Link className="font-semibold hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
        <Link className="font-semibold hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
        <Link className="font-semibold hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
        <Link className="font-semibold hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
        <Link className="font-semibold hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
