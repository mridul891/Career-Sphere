import { Link } from "react-router-dom";
import SearchIcon from "../icons/SearchIcon";
import { AppSidebar } from "./Sidebar";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <div className="lg:max-h-15 lg:max-w-screen flex items-center justify-between px-5 py-4">
      <div>
        <h1 className="text-2xl font-bold md:text-xl lg:text-3xl md:font-bold">
          Career Sphere
        </h1>
      </div>
      <div className="border w-[20rem] px-6 py-2 hidden rounded-full md:flex items-center">
        <span className="mr-2">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Search Jobs"
          className="outline-none bg-black "
        />
      </div>
      <div className="hidden md:flex gap-10 lg:text-2xl ">
        <Link to="/remote">
          <h1>Remote Jobs</h1>
        </Link>
        <Link to="/remote">
          <h1>Blog</h1>
        </Link><Link to="/remote">
          <h1>About</h1>
        </Link>
      </div>

      <div className="md:hidden  ">
        <AppSidebar />
        <SidebarTrigger />
      </div>
    </div>
  );
};

export default Navbar;
