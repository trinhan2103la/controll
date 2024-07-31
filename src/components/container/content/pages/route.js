import SYNC from "./SYNC";
import TDH from "./TDH";
import IP from "./IP";
import VC from "./VC";

export const publicRoutes = [
  { path: "/sync/*", Component: SYNC },
  { path: "/tdh/*", Component: TDH },
  { path: "/vc/*", Component: VC },
  { path: "/", Component: IP },
];
