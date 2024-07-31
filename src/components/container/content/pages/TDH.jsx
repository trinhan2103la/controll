/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { publicRoutesCharts, DataTDH } from "../charts/routeChart";

import { Routes, Route } from "react-router-dom";

export default function TDH() {
  const apiUrl = "http://127.0.0.1:5000/api/TDH";
  return (
    <div>
      <div className="flex gap-4 p-2">
        {DataTDH.map((props, index) => {
          return (
            <Link key={index} to={props.links}>
              <button className="text-2xl font-bold  border-2 border-red-300  bg-red-300 ">
                {props.name}
              </button>
            </Link>
          );
        })}
      </div>
      <div className="w-full">
        <Routes>
          {publicRoutesCharts.map((route, index) => {
            const Pages = route.Component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Pages apiUrl={apiUrl} />}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}
