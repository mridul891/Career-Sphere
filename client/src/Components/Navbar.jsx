import { Link } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import { AppSidebar } from "./Sidebar";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <div className="lg:max-h-15 border-b border-gray-100 lg:max-w-screen flex items-center justify-between px-5 py-4">
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold md:text-xl lg:text-3xl md:font-bold">
          Career Sphere
        </h1>
      </div>

      {/* Search Bar (Visible on larger screens) */}
      <div className="border w-[20rem] px-6 py-2 hidden rounded-full md:flex items-center">
        <span className="mr-2">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search Jobs"
          className="outline-none bg-black"
        />
      </div>

      {/* Navigation Links (Visible on larger screens) */}
      <div className="hidden md:flex gap-10 lg:text-2xl">
        <Link to="/remote">
          <h1>Remote Jobs</h1>
        </Link>
        <Link to="/blog">
          <h1>Blog</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
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
