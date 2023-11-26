import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Drawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(true);
  const [screenSize, setScreenSize] = useState(0);
  let path = location.pathname;
  //choose the screen size

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    // Callback untuk dijalankan saat ukuran layar berubah
    const handleResize = () => {
      // Jika ukuran layar lebih besar dari batas tertentu, buka drawer
      if (window.innerWidth >= 768) {
        setDrawerOpen(true);
      } else {
        // Jika ukuran layar kurang dari batas tertentu, tutup drawer
        setDrawerOpen(false);
      }
    };

    // Tambahkan event listener untuk mengikuti perubahan ukuran layar
    window.addEventListener("resize", handleResize);

    // Panggil handleResize untuk menetapkan nilai awal
    handleResize();

    // Bersihkan event listener saat komponen dibongkar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Tombol untuk membuka dan menutup drawer pada layar kecil */}
      <div
        className={`flex items-center px-3 py-6 justify-between lg:hidden ${
          isDrawerOpen ? "hidden" : "block"
        }`}
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-900"
        >
          <span className="text-orange-600">Dev</span>challenges.io
        </h5>
        <button className="" type="button" onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Drawer Navigation */}
      <div
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-60 dark:bg-gray-800 rounded-e-3xl lg:block ${
          isDrawerOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
        aria-labelledby="drawer-navigation-label"
      >
        {/* Tombol untuk menutup drawer pada layar kecil */}
        <button
          type="button"
          onClick={toggleDrawer}
          className="lg:hidden text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <Link to="/">
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-400"
          >
            <span className="text-orange-400">Dev</span>challenges.io
          </h5>
        </Link>
        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li className={path == "/button" ? "bg-gray-700 rounded-lg" : ""}>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                to="/button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Button</span>
              </Link>
            </li>
            <li className={path == "/input" ? "bg-gray-700 rounded-lg" : ""}>
              <Link
                className="flex focus:bg-gray-700 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                to="/input"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>

                <span className="flex-1 ms-3 whitespace-nowrap">Input</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Drawer;
