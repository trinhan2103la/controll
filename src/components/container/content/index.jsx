/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { publicRoutes } from "./pages/route";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Content = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className="flex-grow">
      <div className="flex justify-between bg-red-200 h-[58px] ">
        <button className="text-2xl border-none" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="flex p-2 items-center">
          <p className="pr-2 text-xl">
            <span>Admin</span>
          </p>
          <FontAwesomeIcon icon={faCircleUser} className="text-xl" />
        </div>
      </div>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.Component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
};

export default Content;
