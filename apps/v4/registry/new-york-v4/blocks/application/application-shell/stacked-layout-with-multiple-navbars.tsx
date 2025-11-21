export default function StackedLayoutWithMultipleNavbars() {
  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="relative px-8">
          {/*header*/}
          <nav className="absolute left-0 z-50 w-full px-8 lg:relative lg:px-0">
            <div className="flex flex-col items-center justify-between gap-1 py-6 sm:gap-6 lg:flex-row">
              <div className="flex w-full items-center justify-between lg:w-auto">
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
                  className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none lg:hidden dark:hover:bg-gray-700"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                </button>
              </div>
              <div
                id="mobile-navbar"
                className="hidden w-full flex-1 flex-row rounded-xl bg-white py-4 shadow-sm lg:flex lg:bg-transparent lg:py-0 lg:shadow-none dark:bg-gray-700 dark:lg:bg-transparent"
              >
                <ul className="flex flex-col gap-2 text-center lg:ml-auto lg:flex-row xl:gap-4">
                  <li>
                    <a
                      href="#"
                      className="rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-500 ease-in-out"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-gray-500"
                    >
                      Employees
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-gray-500"
                    >
                      Attendances
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-gray-500"
                    >
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-gray-500"
                    >
                      Leaves
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-gray-500"
                    >
                      Payroll
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="rounded-full bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-gray-500"
                    >
                      Document
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="flex items-center justify-between py-3.5 pt-[100px] lg:pt-0">
            <div className="block">
              <h6 className="mb-1.5 text-sm font-semibold whitespace-nowrap text-gray-900 sm:text-lg dark:text-white">
                Welcome back,
                <span className="text-base font-semibold text-indigo-600 sm:text-lg">
                  Ronald!
                </span>
              </h6>
              <p className="text-xs font-medium text-gray-900 dark:text-white">
                Home
              </p>
            </div>
            <div className="hidden flex-row items-center gap-1 sm:flex sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="relative w-max p-3"></div>
                <p className="font-normal text-gray-200 dark:text-gray-700">
                  |
                </p>
                <button className="flex h-8 w-8 items-center justify-center p-3 sm:h-11 sm:w-11"></button>
              </div>
              <button className="group flex items-center gap-1.5 rounded-full border border-solid border-gray-300 bg-gray-50 px-2 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 md:pr-5 md:pl-3.5 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
                <span className="max-md:hidden">Attendance</span>
              </button>
              <button className="group flex items-center gap-1.5 rounded-full border border-solid border-indigo-600 bg-indigo-600 px-2 py-2 text-sm font-medium whitespace-nowrap text-white transition-all duration-300 hover:border-indigo-700 hover:bg-indigo-700 md:pr-5 md:pl-3.5">
                <span className="max-lg:hidden">Add Employee</span>
              </button>
            </div>
            <div className="flex items-center gap-2 sm:hidden">
              <div className="relative w-max">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="relative z-10 h-8 w-8 cursor-pointer bg-transparent outline-0 transition-all duration-300 focus-within:w-44 focus-within:rounded-md focus-within:border focus-within:border-gray-200 focus-within:pl-3 sm:h-11 sm:w-11"
                />
              </div>
              <div className="dropdown relative inline-flex">
                <button
                  data-target="dropdown-default"
                  className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-2 rounded-md p-0.5 text-center text-sm font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-100"
                ></button>
                <div
                  id="dropdown-default"
                  className="dropdown-menu absolute top-full right-2 mt-2 hidden w-44 rounded-xl bg-white shadow-lg"
                  aria-labelledby="dropdown-default"
                >
                  <ul className="flex flex-col gap-2.5 px-3 py-2">
                    <li className="flex items-center justify-start gap-1.5">
                      <button className="group flex items-center gap-1.5 rounded-lg border border-solid border-gray-300 bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 md:pr-5 md:pl-3.5"></button>
                      <span className="text-sm font-medium text-gray-700">
                        Notification
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-1.5">
                      <button className="group flex items-center gap-1.5 rounded-lg border border-solid border-gray-300 bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 md:pr-5 md:pl-3.5"></button>
                      <span className="text-sm font-medium text-gray-700">
                        Attendance
                      </span>
                    </li>
                    <li className="flex items-center justify-start gap-1.5">
                      <button className="group flex items-center gap-1.5 rounded-lg border border-solid border-indigo-600 bg-indigo-600 px-2 py-2 text-sm font-medium whitespace-nowrap text-white transition-all duration-300 hover:border-indigo-700 hover:bg-indigo-700 md:pr-5 md:pl-3.5"></button>
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
          <div className="grid-cols-12 gap-6 lg:grid">
            <div className="col-span-12 lg:col-span-9">
              <div className="my-6 rounded-2xl bg-white p-4">
                <div className="h-[350px] rounded-xl border border-gray-200 md:h-[400px] lg:h-[670px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1712309277.png"
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="my-6 rounded-2xl bg-white p-4">
                <div className="h-[350px] rounded-xl border border-gray-200 md:h-[400px] lg:h-[670px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1712309277.png"
                    alt="image"
                    className="h-full w-full object-cover"
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
  )
}
