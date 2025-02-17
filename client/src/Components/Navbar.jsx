import { Link } from "react-router-dom";

import { AppSidebar } from "./Sidebar";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <div className="lg:max-h-15 border-b border-gray-400 lg:max-w-screen flex items-center justify-between px-5 py-4">
      {/* Logo */}
      <div>
        <Link to="/">
          <h1 className="text-2xl font-bold md:text-xl lg:text-3xl md:font-bold">
            CareerSphere
          </h1>
        </Link>
      </div>

      {/* Search Bar (Visible on larger screens) */}
      {/* <div className="border w-[10rem] lg:w-[20rem] lg:px-6 py-2 hidden rounded-full md:flex items-center">
        <span className="lg:mr-2">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search Jobs"
          className="outline-none bg-transparent"
        />
      </div> */}

      {/* Navigation Links (Visible on larger screens) */}
      <div className="hidden md:flex gap-10 lg:text-lg">
        <Link to="/remote">
          <h1>Remote Jobs</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
        <Link to="/login">
          <h1>Login</h1>
        </Link>
      </div>

      {/* Sidebar Trigger (Visible on smaller screens) */}
      <div className="md:hidden">
        <AppSidebar />
        <SidebarTrigger />
      </div>
    </div>
  );
};

export default Navbar;
