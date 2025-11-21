export default function AdvancedLayoutWithCollapsableSidebar() {
  return (
    <div
      id="main"
      className="group is-open relative bg-gray-50 dark:bg-gray-900"
    >
      <div className="invisible fixed z-10 block h-full w-full bg-black/70 opacity-0 transition-all duration-500 ease-in-out group-[.backdrop]:visible group-[.backdrop]:opacity-100 lg:hidden" />
      <aside
        id="sidemenu"
        className="group absolute left-0 z-10 flex min-h-screen w-64 flex-shrink-0 flex-col border-r border-gray-200 bg-gray-50 transition-all duration-500 ease-in-out group-[.is-open]:-translate-x-full max-sm:w-full lg:fixed lg:w-16 lg:translate-x-0 lg:group-[.is-open]:w-64 lg:group-[.is-open]:translate-x-0 dark:border-gray-900"
      >
        {/*Sidebar Header*/}
        <div className="mx-4 flex flex-shrink-0 items-center justify-between gap-4 border-b border-gray-200 px-0 py-6 group-[.is-open]:flex-row dark:border-gray-800">
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
                className="flex items-center justify-start gap-3 rounded-lg bg-white stroke-indigo-600 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-900 group-[.is-open]:justify-start group-[.is-open]:px-2 dark:bg-gray-700 dark:stroke-white dark:text-white"
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
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-white hover:stroke-indigo-600 hover:text-gray-900 active:bg-white dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
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
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-white hover:stroke-indigo-600 hover:text-gray-900 active:bg-white dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
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
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-white hover:fill-indigo-600 hover:stroke-indigo-600 hover:text-gray-900 active:bg-white dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
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
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-white hover:stroke-indigo-600 hover:text-gray-900 active:bg-white dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
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
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-white hover:stroke-indigo-600 hover:text-gray-900 active:bg-white dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
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
                className="flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-white hover:stroke-indigo-600 hover:text-gray-900 active:bg-white dark:justify-start dark:stroke-gray-400 dark:text-gray-400"
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
                className="group flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-600 transition-all duration-300 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-white hover:stroke-indigo-600 hover:text-gray-900 dark:stroke-gray-400 dark:text-gray-400"
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
                className="group flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-white hover:stroke-indigo-600 hover:text-gray-900 active:bg-white dark:stroke-gray-400 dark:text-gray-400"
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
                className="group flex items-center gap-3 rounded-lg stroke-gray-500 px-2 py-2 text-sm font-medium whitespace-nowrap text-gray-500 transition-all duration-500 group-[.is-open]:justify-start group-[.is-open]:px-2 hover:bg-white hover:stroke-indigo-600 hover:text-gray-900 active:bg-white dark:stroke-gray-400 dark:text-gray-400"
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
        <div className="flex items-center justify-start gap-3 pb-8 lg:hidden">
          <button
            id="toggleSidebarmobile"
            className="m-4 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 lg:hidden dark:bg-gray-700"
          ></button>
        </div>
        <div className="w-full p-8">
          <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
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
