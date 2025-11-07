export default function AppplicationShellWithBackground() {
  return (
    <div className="relative bg-indigo-600 dark:bg-gray-900">
      {/*header*/}
      <nav className="py-3.5 px-6 bg-indigo-600 dark:bg-gray-900 border-b border-solid border-indigo-400 dark:border-gray-700 fixed w-full top-0 z-20">
        <div className="flex items-center justify-between gap-1 sm:gap-6 lg:flex-row flex-col">
          <div className="flex justify-between items-center lg:w-auto w-full">
            <a href="#" className="block">
              <img
                src="https://pagedone.io/asset/uploads/1712310504.png"
                alt="Pagedone logo image"
              />
            </a>
            <button
              id="navbar-toggle"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            id="mobile-navbar"
            className="hidden lg:flex flex-row w-full flex-1 shadow-sm lg:shadow-none lg:bg-transparent rounded-xl py-4 lg:py-0"
          >
            <ul className="text-center flex lg:flex-row flex-col xl:gap-1 gap-2 lg:ml-auto lg:flex lg:bg-indigo-500 dark:bg-transparent items-center p-1 rounded-xl">
              <li>
                <a
                  href="#"
                  className="py-2 px-5 flex justify-center bg-white transition-all duration-500 ease-in-out text-xs text-gray-900 font-semibold rounded-lg"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-5  bg-transparent transition-all duration-500 ease-in-out text-xs text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg flex justify-center"
                >
                  Employees
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-5  bg-transparent transition-all duration-500 ease-in-out text-xs text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg flex justify-center"
                >
                  Attendances
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-5  bg-transparent transition-all duration-500 ease-in-out text-xs text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg flex justify-center"
                >
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-5  bg-transparent transition-all duration-500 ease-in-out text-xs text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg flex justify-center"
                >
                  Leaves
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-5  bg-transparent transition-all duration-500 ease-in-out text-xs text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg flex justify-center"
                >
                  Payroll
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-5  bg-transparent transition-all duration-500 ease-in-out text-xs text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg flex justify-center"
                >
                  Document
                </a>
              </li>
            </ul>
            <div className="text-center lg:flex  items-center gap-1  sm:gap-4 lg:ml-auto">
              <div className="flex items-center gap-1 sm:gap-2 lg:justify-start justify-center">
                <div className="relative w-max p-3"></div>
                <p className="text-indigo-400 dark:text-gray-700 font-normal">
                  |
                </p>
                <button className="w-8 sm:w-11 h-8 sm:h-11 flex items-center justify-center p-3"></button>
              </div>
              <button className="group py-2 px-2 lg:pr-5 lg:pl-3.5 lg:mx-0 mx-auto flex items-center whitespace-nowrap gap-1.5 font-medium text-sm text-indigo-600 border border-solid  bg-indigo-50 rounded-lg transition-all duration-300 hover:bg-indigo-100 hover:border-indigo-700">
                <span className="max-lg:hidden">Add Employee</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/*main content*/}
      <div className="py-3.5 px-8 lg:mt-[72px] mt-[68px] ">
        <div className="block max-lg:pl-6">
          <h6 className="text-sm sm:text-lg font-semibold text-white whitespace-nowrap mb-1.5">
            Welcome back,
            <span className="text-white text-base sm:text-lg font-semibold">
              Ronald!
            </span>
          </h6>
          <p className="text-xs font-medium text-white">Home</p>
        </div>
      </div>
      <div className=" p-4 ">
        <div className="rounded-2xl bg-white overflow-hidden p-8">
          <div className="border border-gray-200 rounded-2xl">
            <img
              src="https://pagedone.io/asset/uploads/1712309277.png"
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
