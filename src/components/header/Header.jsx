/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Header = () => {
  const Data = [
    {
      title: "IP",
      link: "/",
    },
    {
      title: "VC",
      link: "/vc/homeChart",
    },
    {
      title: "TDH",
      link: "/tdh/homeChart",
    },
    {
      title: "SYNC",
      link: "/sync/homeChart",
    },
  ];

  return (
    <div className="flex bg-sea justify-between items-center ">
      <div className="flex text-2xl gap-2 px-2 text-light">
        <h1 className="font-bold ">finepro</h1>
      </div>
      <div className="flex ">
        {Data.map((props, index) => {
          return (
            <Link key={index} to={props.link}>
              <div className="text-light font-bold text-2xl px-4 py-2 hover:bg-blue-950 hover:text-light h-full">
                <h1>{props.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
