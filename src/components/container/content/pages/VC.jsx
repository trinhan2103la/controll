/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { publicRoutesCharts, DataVC } from "../charts/routeChart";

import { Routes, Route } from "react-router-dom";

export default function VC() {
  const apiUrl = "http://127.0.0.1:5000/api/VC";
  return (
    <div>
      <div className="flex gap-4 p-2">
        {DataVC.map((props, index) => {
          return (
            <Link key={index} to={props.links}>
              <button className="font-bold text-2xl bg-sea text-light">
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
