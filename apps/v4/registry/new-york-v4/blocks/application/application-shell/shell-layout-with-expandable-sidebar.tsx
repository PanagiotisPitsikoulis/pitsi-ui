export default function ShellLayoutWithExpandableSidebar() {
  return (
    <div id="main" className="group relative dark:bg-gray-900">
      <div className="invisible fixed z-10 block h-full w-full bg-black/70 opacity-0 transition-all duration-500 ease-in-out group-[.backdrop]:visible group-[.backdrop]:opacity-100 lg:hidden" />
      <aside
        id="sidemenu"
        className="group absolute left-0 z-10 flex min-h-screen flex-shrink-0 -translate-x-full flex-col border-r border-gray-200 bg-white transition-all duration-500 ease-in-out group-[.is-open]:w-64 group-[.is-open]:translate-x-0 max-sm:w-full lg:fixed lg:w-16 lg:translate-x-0 dark:border-gray-800 dark:bg-gray-900"
      >
        {/*Sidebar Header*/}
        <div className="mx-3 flex flex-shrink-0 items-center justify-between gap-4 border-b border-gray-200 px-0 py-6 group-[.is-open]:flex-row dark:border-gray-800">
          <a href="#"></a>
          <button
            id="navbar-toggle"
            className="absolute right-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 lg:-right-3 dark:bg-gray-700"
          ></button>
        </div>
        {/*Sidebar Links*/}
        <nav className="mx-3 flex-1 overflow-hidden overflow-y-auto pt-6 group-[.is-open]:mx-3">
          <h5 className="py-2 pl-1 text-xs font-medium text-gray-400 uppercase">
            MENU
          </h5>
          <ul className="flex flex-col gap-1.5 overflow-hidden">
            <li>
              <a
                href="#"
                className="flex items-center justify-start gap-3 rounded-lg bg-gray-50 stroke-indigo-600 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-900 group-[.is-open]:justify-start group-[.is-open]:px-2 dark:bg-gray-700 dark:stroke-white dark:text-white"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="Employees.html"
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-gray-50 hover:stroke-indigo-600 hover:text-gray-900 active:bg-gray-50 dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Employees
                </span>
              </a>
            </li>
            <li>
              <a
                href="Attendances.html"
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-gray-50 hover:stroke-indigo-600 hover:text-gray-900 active:bg-gray-50 dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Attendances
                </span>
              </a>
            </li>
            <li>
              <a
                href="calendar.html"
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-gray-50 hover:fill-indigo-600 hover:stroke-indigo-600 hover:text-gray-900 active:bg-gray-50 dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Calendar
                </span>
              </a>
            </li>
            <li>
              <a
                href="leaves.html"
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-gray-50 hover:stroke-indigo-600 hover:text-gray-900 active:bg-gray-50 dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Leaves
                </span>
              </a>
            </li>
            <li>
              <a
                href="payroll.html"
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-gray-50 hover:stroke-indigo-600 hover:text-gray-900 active:bg-gray-50 dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Payroll
                </span>
              </a>
            </li>
            <li>
              <a
                href="Documents.html"
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-gray-50 hover:stroke-indigo-600 hover:text-gray-900 active:bg-gray-50 dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Documents
                </span>
              </a>
            </li>
            {/* Sidebar Links... */}
          </ul>
        </nav>
        {/*Sidebar Footer*/}
        <div className="mx-3 flex-shrink-0 group-[.is-open]:mx-3">
          <h5 className="py-1.5 pl-1 text-xs font-medium text-gray-400 uppercase dark:text-gray-400">
            USER
          </h5>
          <ul className="flex flex-col gap-2 overflow-hidden pb-6">
            <li>
              <a
                href="Apps&Integration.html"
                className="group flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-600 transition-all duration-300 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-gray-50 hover:stroke-indigo-600 hover:text-gray-900 dark:stroke-gray-400 dark:text-gray-400"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Apps &amp; Integration
                </span>
              </a>
            </li>
            <li>
              <a
                href="General-Details.html"
                className="group flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-gray-50 hover:stroke-indigo-600 hover:text-gray-900 active:bg-gray-50 dark:stroke-gray-400 dark:text-gray-400"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Settings
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="group flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-gray-50 hover:stroke-indigo-600 hover:text-gray-900 active:bg-gray-50 dark:stroke-gray-400 dark:text-gray-400"
              >
                <span></span>
                <span className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                  Documents
                </span>
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-between border-t border-solid border-gray-200 py-5 dark:border-gray-800">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <img
                  src="https://pagedone.io/asset/uploads/1688032245.png"
                  alt="user avtra icon"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 lg:opacity-0">
                <p className="mb-0.5 text-xs font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                  Ronald Richards
                </p>
                <p className="text-xs font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                  @ronaldrich
                </p>
              </div>
            </div>
            <button className="rounded-full bg-white p-0.5 transition-all duration-500 ease-in-out group-[.is-open]:opacity-100 hover:bg-gray-100 lg:opacity-0 dark:bg-gray-700"></button>
          </div>
        </div>
      </aside>
      {/*main content*/}
      <div
        id="main-body"
        className="relative ml-auto h-full w-full overflow-y-auto transition-all duration-500 lg:pl-16 group-[.is-open]:lg:pl-64 xl:ml-auto"
      >
        <div className="mx-4 flex items-center justify-between border-b border-gray-200 px-4 py-3.5 dark:border-gray-800">
          <div className="block">
            <div className="flex items-center justify-start gap-3 pb-8 lg:hidden">
              <button
                id="toggleSidebarmobile"
                className="flex h-6 w-6 items-center justify-center rounded-full lg:hidden dark:bg-gray-700"
              ></button>
            </div>
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
              <p className="font-normal text-gray-200 dark:text-gray-700">|</p>
              <button className="flex h-8 w-8 items-center justify-center p-3 sm:h-11 sm:w-11"></button>
            </div>
            <button className="group flex items-center gap-1.5 rounded-lg border border-solid border-gray-300 bg-gray-50 stroke-gray-500 px-2 py-2 text-sm font-medium text-gray-900 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 hover:text-gray-900 md:pr-5 md:pl-3.5 dark:border-gray-700 dark:bg-gray-800 dark:stroke-white dark:text-white dark:hover:stroke-gray-900">
              <span className="max-md:hidden">Attendance</span>
            </button>
            <button className="group flex items-center gap-1.5 rounded-lg border border-solid border-indigo-600 bg-indigo-600 px-2 py-2 text-sm font-medium whitespace-nowrap text-white transition-all duration-300 hover:border-indigo-700 hover:bg-indigo-700 lg:pr-5 lg:pl-3.5">
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
        <div className="w-full bg-white p-8 dark:bg-gray-900">
          <div className="rounded-xl border border-gray-200 dark:border-gray-700">
            <img
              src="https://pagedone.io/asset/uploads/1712309277.png"
              alt="image"
              className="block h-full w-full object-cover dark:hidden"
            />
            <img
              src="https://pagedone.io/asset/uploads/1712656956.png"
              alt="image"
              className="hidden h-full w-full object-cover dark:block"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
