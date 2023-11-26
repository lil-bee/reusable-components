import Drawer from "./drawer";
import { Outlet } from "react-router";
function Layout() {
  let path = location.pathname.split("/")[1];
  return (
    <>
      <div>
        <Drawer />
        <div className="lg:ml-72 ml-0  flex-col flex items-center  lg:items-start lg:justify-start mx-auto relative ">
          <h1 className="my-9 text-5xl font-semibold">
            {path ? path : "Home"}
          </h1>
          <div>
            <Outlet />
          </div>
          <div className="relative">
            <p className="text-slate-500   bottom--3 mt-16">
              created by{" "}
              <a
                className="underline font-semibold"
                href="https://github.com/lil-bee"
                target="_blank"
              >
                lilbee
              </a>{" "}
              - devChallenges.io
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
