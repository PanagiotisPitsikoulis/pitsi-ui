export default function AlternateStyleOfApplicationShell() {
  return (
    <div className="relative px-8 bg-gray-50 pb-4">
      {/*header*/}
      <div className="py-6">
        <nav className=" py-3.5 px-4 rounded-2xl border border-solid border-gray-200 dark:border-transparent  z-20 top-0  bg-white  dark:bg-gray-900 w-full">
          <div className="flex items-center justify-between gap-1 sm:gap-6 lg:flex-row flex-col ">
            <div className="flex justify-between items-center lg:w-auto w-full">
              <a href="#" className="block">
                <img
                  src="https://pagedone.io/asset/uploads/1701235273.png"
                  alt="Pagedone logo image"
                  className="block dark:hidden"
                />
                <img
                  src="https://pagedone.io/asset/uploads/1712310504.png"
                  alt="Pagedone logo image"
                  className="hidden dark:block"
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
              className="hidden lg:flex flex-row w-full flex-1 lg:bg-transparent rounded-xl py-4 lg:py-0"
            >
              <ul className="text-center flex lg:flex-row flex-col xl:gap-1 gap-2 lg:ml-auto lg:flex items-center">
                <li>
                  <a
                    href="#"
                    className="py-1.5 px-3 bg-indigo-600 transition-all duration-500 ease-in-out text-xs text-white font-semibold rounded-md"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                  >
                    Employees
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                  >
                    Attendances
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                  >
                    Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                  >
                    Leaves
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                  >
                    Payroll
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-md"
                  >
                    Document
                  </a>
                </li>
              </ul>
              <div className="text-center lg:flex  items-center gap-1  sm:gap-4 lg:ml-auto">
                <div className="flex items-center gap-1 sm:gap-2 lg:justify-start justify-center">
                  <div className="relative w-max p-3"></div>
                  <p className="text-gray-200 dark:text-gray-700 font-normal">
                    |
                  </p>
                  <button className="w-8 sm:w-11 h-8 sm:h-11 flex items-center justify-center p-3"></button>
                </div>
                <button className="group py-2 px-2 lg:pr-5 lg:pl-3.5 lg:mx-0 mx-auto flex items-center whitespace-nowrap gap-1.5 font-medium text-sm text-white border border-solid border-indigo-600 bg-indigo-600 rounded-lg transition-all duration-300 hover:bg-indigo-700 hover:border-indigo-700">
                  <span className="max-lg:hidden">Add Employee</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/*main content*/}
      <div className="w-full p-4  bg-white mb-8 rounded-2xl">
        <div className="mb-6">
          <div className="block max-lg:pl-6">
            <h6 className="text-sm sm:text-lg font-semibold text-gray-900  whitespace-nowrap mb-1.5">
              Welcome back,
              <span className="text-indigo-600 text-base sm:text-lg font-semibold">
                Ronald!
              </span>
            </h6>
            <p className="text-xs font-medium text-gray-900 ">Home</p>
          </div>
        </div>
        <div className="border-gray-200 border rounded-xl h-[630px]">
          <img
            src="https://pagedone.io/asset/uploads/1712309277.png"
            alt="image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
