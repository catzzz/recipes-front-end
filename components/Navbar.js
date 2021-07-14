import Link from "next/link";

const Navbar = () => {
  return (
    <div className="md:col-span-1">
      <nav>
        <div>
          <h1 className="font-bold uppercase p-4 border-b border-gray-200">
            <Link href="/">
              <a className="">Bee&apos;s ecipes</a>
            </Link>
          </h1>
        </div>
        <ul>
          <li>
            <Link href="#">
              <a>
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <span>About</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <span>Contact</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
