import { NavLink } from "react-router-dom";
import "./Nav.css";

const MainLayout = ({ children }) => {
  const navLinks = (
    <>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/about"> About </NavLink>

      <NavLink to="/contact"> Contact </NavLink>

      <NavLink to="/login"> Login </NavLink>

      <NavLink to="/register"> Register </NavLink>
    </>
  );

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="w-full max-w-[1200px] mx-auto">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1 px-2 mx-2 font-bold text-lg">
                Navbar Title
              </div>
              <div className="flex-none hidden lg:block">
                <div className="gap-5  menu menu-horizontal">
                  {/* Navbar menu content here */}
                  {navLinks}
                </div>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu gap-3 p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {navLinks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
