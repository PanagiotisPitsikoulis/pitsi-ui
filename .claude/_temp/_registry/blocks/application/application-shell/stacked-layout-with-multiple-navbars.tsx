export default function StackedLayoutWithMultipleNavbars() {
  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900 ">
        <div className="relative px-8 ">
          {/*header*/}
          <nav className=" z-50 left-0 w-full lg:relative absolute px-8 lg:px-0">
            <div className="flex items-center justify-between gap-1 sm:gap-6 py-6 lg:flex-row flex-col ">
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
                className="hidden lg:flex flex-row w-full flex-1 lg:bg-transparent bg-white dark:lg:bg-transparent dark:bg-gray-700 shadow-sm lg:shadow-none rounded-xl py-4 lg:py-0"
              >
                <ul className="text-center flex lg:flex-row flex-col xl:gap-4 gap-2 lg:ml-auto ">
                  <li>
                    <a
                      href="#"
                      className="py-1.5 px-3 bg-indigo-600 transition-all duration-500 ease-in-out text-xs text-white font-semibold rounded-full"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-full"
                    >
                      Employees
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-full"
                    >
                      Attendances
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-full"
                    >
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-full"
                    >
                      Leaves
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-full"
                    >
                      Payroll
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-1.5 px-3 bg-transparent transition-all duration-500 ease-in-out text-xs text-gray-500 dark:text-gray-500 hover:bg-indigo-600 hover:text-white font-semibold rounded-full"
                    >
                      Document
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex justify-between items-center py-3.5 lg:pt-0 pt-[100px]">
            <div className="block ">
              <h6 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white  whitespace-nowrap mb-1.5">
                Welcome back,
                <span className="text-indigo-600 text-base sm:text-lg font-semibold">
                  Ronald!
                </span>
              </h6>
              <p className="text-xs font-medium text-gray-900 dark:text-white">
                Home
              </p>
            </div>
            <div className="hidden sm:flex flex-row items-center gap-1  sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="relative w-max p-3"></div>
                <p className="text-gray-200 dark:text-gray-700 font-normal">
                  |
                </p>
                <button className="w-8 sm:w-11 h-8 sm:h-11 flex items-center justify-center p-3"></button>
              </div>
              <button className="group py-2 px-2 md:pr-5 md:pl-3.5 flex items-center gap-1.5 font-medium text-sm text-gray-900 dark:text-white border border-solid border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-full transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900">
                <span className="max-md:hidden">Attendance</span>
              </button>
              <button className="group py-2 px-2 md:pr-5 md:pl-3.5 flex items-center whitespace-nowrap gap-1.5 font-medium text-sm text-white border border-solid border-indigo-600 bg-indigo-600 rounded-full transition-all duration-300 hover:bg-indigo-700 hover:border-indigo-700">
                <span className="max-lg:hidden">Add Employee</span>
              </button>
            </div>
            <div className="flex items-center gap-2 sm:hidden">
              <div className="relative w-max">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="w-8 sm:w-11 h-8 sm:h-11 outline-0 cursor-pointer bg-transparent relative z-10 transition-all duration-300 focus-within:border focus-within:border-gray-200 focus-within:w-44 focus-within:rounded-md focus-within:pl-3"
                />
              </div>
              <div className="dropdown relative inline-flex">
                <button
                  data-target="dropdown-default"
                  className="dropdown-toggle inline-flex justify-center items-center gap-2 p-0.5 text-sm text-white rounded-md cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-100"
                ></button>
                <div
                  id="dropdown-default"
                  className="dropdown-menu rounded-xl shadow-lg bg-white absolute right-2 top-full w-44 mt-2 hidden"
                  aria-labelledby="dropdown-default"
                >
                  <ul className="py-2 flex flex-col gap-2.5 px-3">
                    <li className="flex items-center justify-start gap-1.5">
                      <button className="group py-2 px-2 md:pr-5  md:pl-3.5 flex items-center gap-1.5 font-medium text-sm text-gray-500 border border-solid border-gray-300 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900"></button>
                      <span className="text-sm font-medium text-gray-700">
                        Notification
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-1.5">
                      <button className="group py-2 px-2 md:pr-5 md:pl-3.5 flex items-center gap-1.5 font-medium text-sm text-gray-500 border border-solid border-gray-300 bg-gray-50 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:text-gray-900"></button>
                      <span className="text-sm font-medium text-gray-700">
                        Attendance
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-1.5">
                      <button className="group py-2 px-2 md:pr-5 md:pl-3.5 flex items-center whitespace-nowrap gap-1.5 font-medium text-sm text-white border border-solid border-indigo-600 bg-indigo-600 rounded-lg transition-all duration-300 hover:bg-indigo-700 hover:border-indigo-700"></button>
                      <span className="text-sm font-medium text-gray-700">
                        Add Employee
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*main content*/}
          <div className="lg:grid  grid-cols-12 gap-6 ">
            <div className="col-span-12 lg:col-span-9">
              <div className="p-4  bg-white my-6 rounded-2xl">
                <div className="border-gray-200 border rounded-xl  lg:h-[670px] md:h-[400px] h-[350px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1712309277.png"
                    alt="image"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="p-4  bg-white my-6 rounded-2xl">
                <div className="border-gray-200 border rounded-xl lg:h-[670px] md:h-[400px] h-[350px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1712309277.png"
                    alt="image"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      document.addEventListener("DOMContentLoaded", function () {"{"}
      const navbarToggle = document.getElementById('navbar-toggle'); const
      mobileNavbar = document.getElementById('mobile-navbar');
      navbarToggle.addEventListener('click', function () {"{"}
      mobileNavbar.classList.toggle('hidden');
      {"}"});
      {"}"});
    </div>
  );
}
