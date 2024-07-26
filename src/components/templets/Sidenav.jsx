import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10 overflow-hidden">
      <h1 className="text-2xl text-white font-black">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="text-2xl uppercase ">Sky Tv</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-5">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1 >
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-shining-fill mr-2"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-tv-2-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-team-fill mr-2"></i>
          Popule
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-5">
        <h1 className="text-white font-semibold text-xl whitespace-nowrap mt-10 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-information-fill mr-2"></i>
          About SKY
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="ri-customer-service-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
