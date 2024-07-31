/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import { publicRoutesCharts, DataSYNC } from "../charts/routeChart";

import { Routes, Route } from "react-router-dom";

export default function SYNC() {
  const apiUrl = "http://127.0.0.1:5000/api/SYNC";
  return (
    <div>
      <div className="flex gap-4 p-2">
        {DataSYNC.map((props, index) => {
          return (
            <div
              key={index}
              className="text-2xl font-bold  border-2 border-red-300 rounded bg-red-300 p-1"
            >
              <Link to={props.links}>
                <h1>{props.name}</h1>
              </Link>
            </div>
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
