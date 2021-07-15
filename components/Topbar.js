import Search from "./Search";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="flex justify-center md:justify-between pb-2 w-full">
      <Search />
      <Link href="#">
        <a className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-gray-100 transition ease-out duration-500">
          Log in
        </a>
      </Link>

    </div>
  );
};

export default Topbar;
