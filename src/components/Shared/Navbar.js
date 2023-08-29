import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


const Navbar = () => {
  const {data:session} = useSession();
  console.log(session);
  return (
    <div className="navbar bg-base-200 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-none w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Product</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Category</summary>
                <ul className="p-2 bg-base-200 w-42 rounded-none">
                  <li>
                    <Link href="/categories/Processor">CPU/Processor</Link>
                  </li>
                  <li>
                    <Link href="/categories/Motherboard">Motherboard</Link>
                  </li>
                  <li>
                    <Link href="/categories/RAM">RAM</Link>
                  </li>
                  <li>
                    <Link href="/categories/Power Supply Unit">
                      Power Supply Unit
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/Storage Device">
                      Storage Device
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories/Monitor">Monitor</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/build" className="btn btn-outline btn-accent  btn-sm text-white">
                build pc
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          PC Builder
        </Link>
      </div>
      {/* Desktop View */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Product</Link>
          </li>

          <li tabIndex={0} className="z-10">
            <details>
              <summary>Category</summary>
              <ul className="p-2 bg-base-200 w-42 rounded-none">
                <li>
                  <Link href="/categories/Processor">CPU/Processor</Link>
                </li>
                <li>
                  <Link href="/categories/Motherboard">Motherboard</Link>
                </li>
                <li>
                  <Link href="/categories/RAM">RAM</Link>
                </li>
                <li>
                  <Link href="/categories/Power Supply Unit">
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href="/categories/Storage Device">Storage Device</Link>
                </li>
                <li>
                  <Link href="/categories/Monitor">Monitor</Link>
                </li>
              </ul>
            </details>
          </li>

            <Link href="/build" className="btn btn-outline btn-success btn-sm text-white">
              build pc
            </Link>
          
        </ul>
      </div>
      <div className="navbar-end">
        {session?.user?.email ?<button onClick={() => signOut ()} className="btn btn-outline btn-sm btn-success text-white">Log Out</button>
        :<Link href='/login' className="btn btn-outline btn-sm btn-success text-white">Signin</Link>}
      </div>
    </div>
  );
};

export default Navbar;
