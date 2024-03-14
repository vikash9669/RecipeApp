import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
 
  const { categoriesData: { categories = [] } = {} } = useSelector(
    (state) => state.recipes
  );

  const handleCloseDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-4");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          className="btn btn-square btn-ghost drawer-button"
          htmlFor="my-drawer-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
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
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-80 min-h-full bg-white ">
          {/* Sidebar content here */}
          <div className="float-end px-4">
            <label className="btn btn-circle btn-outline" htmlFor="my-drawer-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
          </div>
          <div className="mt-12">
            {categories &&
              categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/meals/${category.strCategory}`}
                  className="h-8 my-2 w-full flex text-black pl-8  border-b-2 "
                  onClick={handleCloseDrawer}
                >
                  {category.strCategory}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
