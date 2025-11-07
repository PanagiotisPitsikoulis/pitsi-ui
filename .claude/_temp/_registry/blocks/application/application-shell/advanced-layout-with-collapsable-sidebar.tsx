export default function AdvancedLayoutWithCollapsableSidebar() {
  return (
    <div
      id="main"
      className="relative bg-gray-50 dark:bg-gray-900 group is-open"
    >
      <div className="lg:hidden block fixed bg-black/70 w-full h-full z-10 opacity-0 invisible group-[.backdrop]:opacity-100 group-[.backdrop]:visible transition-all duration-500 ease-in-out" />
      <aside
        id="sidemenu"
        className="group min-h-screen max-sm:w-full flex flex-col flex-shrink-0 w-64 lg:group-[.is-open]:w-64 lg:group-[.is-open]:translate-x-0 group-[.is-open]:-translate-x-full  lg:translate-x-0 absolute left-0 lg:fixed z-10 lg:w-16 transition-all duration-500 ease-in-out  border-r border-gray-200 dark:border-gray-900 bg-gray-50"
      >
        {/*Sidebar Header*/}
        <div className="flex items-center justify-between flex-shrink-0  group-[.is-open]:flex-row gap-4 mx-4 px-0  py-6 border-b border-gray-200 dark:border-gray-800 ">
          <a href="#"></a>
          <button
            id="navbar-toggle"
            className="absolute right-3 lg:-right-3 w-6 h-6 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 "
          ></button>
        </div>
        {/*Sidebar Links*/}
        <nav className="flex-1 overflow-hidden overflow-y-auto pt-6 mx-3 group-[.is-open]:mx-3">
          <h5 className="py-2 pl-1 text-xs font-medium text-gray-400 uppercase">
            MENU
          </h5>
          <ul className=" overflow-hidden flex flex-col gap-1.5">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-900 dark:text-white text-sm font-medium py-2  px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start justify-start rounded-lg dark:bg-gray-700 bg-white stroke-indigo-600 dark:stroke-white whitespace-nowrap"
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="Employees.html"
                className="whitespace-nowrap flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-medium py-2  px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start dark:justify-start rounded-lg transition-all duration-500 hover:bg-white active:bg-white hover:text-gray-900 hover:stroke-indigo-600 stroke-gray-500 dark:stroke-gray-400"
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Employees
                </span>
              </a>
            </li>
            <li>
              <a
                href="Attendances.html"
                className="whitespace-nowrap flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-medium py-2  px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start dark:justify-start rounded-lg transition-all duration-500 hover:bg-white active:bg-white hover:text-gray-900 hover:stroke-indigo-600 stroke-gray-500 dark:stroke-gray-400"
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Attendances
                </span>
              </a>
            </li>
            <li>
              <a
                href="calendar.html"
                className="whitespace-nowrap flex items-center gap-3 text-gray-500 dark:text-gray-400  text-sm font-medium py-2  px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start dark:justify-start rounded-lg transition-all duration-500 hover:bg-white active:bg-white  hover:text-gray-900 hover:fill-indigo-600 stroke-gray-500 dark:stroke-gray-400 hover:stroke-indigo-600"
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Calendar
                </span>
              </a>
            </li>
            <li>
              <a
                href="leaves.html"
                className="whitespace-nowrap flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-medium py-2  px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start dark:justify-start rounded-lg transition-all duration-500 hover:bg-white active:bg-white hover:text-gray-900 hover:stroke-indigo-600 stroke-gray-500 dark:stroke-gray-400"
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Leaves
                </span>
              </a>
            </li>
            <li>
              <a
                href="payroll.html"
                className="whitespace-nowrap flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-medium py-2  px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start dark:justify-start rounded-lg transition-all duration-500 hover:bg-white active:bg-white hover:text-gray-900 hover:stroke-indigo-600 stroke-gray-500 dark:stroke-gray-400"
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Payroll
                </span>
              </a>
            </li>
            <li>
              <a
                href="Documents.html"
                className="whitespace-nowrap flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-medium py-2  px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start dark:justify-start rounded-lg transition-all duration-500 hover:bg-white active:bg-white hover:text-gray-900 hover:stroke-indigo-600 stroke-gray-500 dark:stroke-gray-400"
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Documents
                </span>
              </a>
            </li>
            {/* Sidebar Links... */}
          </ul>
        </nav>
        {/*Sidebar Footer*/}
        <div className="flex-shrink-0 mx-3 group-[.is-open]:mx-3">
          <h5 className="py-1.5 pl-1  text-xs font-medium text-gray-400 dark:text-gray-400 uppercase">
            USER
          </h5>
          <ul className="overflow-hidden flex flex-col gap-2 pb-6">
            <li>
              <a
                href="Apps&Integration.html"
                className="whitespace-nowrap flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm font-medium py-2 px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start rounded-lg group transition-all duration-300 hover:text-gray-900 dark:stroke-gray-400 hover:bg-white hover:stroke-indigo-600 stroke-gray-500 "
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Apps &amp; Integration
                </span>
              </a>
            </li>
            <li>
              <a
                href="General-Details.html"
                className="whitespace-nowrap group flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-medium py-2 px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start rounded-lg transition-all duration-500 hover:bg-white active:bg-white hover:text-gray-900 hover:stroke-indigo-600 stroke-gray-500 dark:stroke-gray-400"
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Settings
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="whitespace-nowrap group flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm font-medium py-2 px-2 group-[.is-open]:px-2 group-[.is-open]:justify-start rounded-lg transition-all duration-500 hover:bg-white active:bg-white hover:text-gray-900 hover:stroke-indigo-600 stroke-gray-500 dark:stroke-gray-400"
              >
                <span></span>
                <span className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                  Documents
                </span>
              </a>
            </li>
          </ul>
          <div className="py-5  flex justify-between items-center border-t border-solid border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
                <img
                  src="https://pagedone.io/asset/uploads/1688032245.png"
                  alt="user avtra icon"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="lg:opacity-0 group-[.is-open]:opacity-100 transition-all duration-500 ease-in-out">
                <p className="font-semibold text-xs text-gray-900 dark:text-white mb-0.5 whitespace-nowrap">
                  Ronald Richards
                </p>
                <p className="font-medium text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  @ronaldrich
                </p>
              </div>
            </div>
            <button className="rounded-full p-0.5 bg-white transition-all duration-500 hover:bg-gray-100 dark:bg-gray-700 lg:opacity-0 group-[.is-open]:opacity-100 ease-in-out"></button>
          </div>
        </div>
      </aside>
      {/*main content*/}
      <div
        id="main-body"
        className=" h-full overflow-y-auto  xl:ml-auto relative transition-all duration-500 w-full lg:pl-16 group-[.is-open]:lg:pl-64 ml-auto "
      >
        <div className="flex lg:hidden items-center justify-start gap-3 pb-8">
          <button
            id="toggleSidebarmobile"
            className="w-6 h-6 m-4 rounded-full flex lg:hidden items-center justify-center bg-gray-100 dark:bg-gray-700"
          ></button>
        </div>
        <div className="w-full p-8   ">
          <div className="border-gray-200 dark:border-gray-700 dark:bg-gray-800  bg-white border rounded-xl">
            <img
              src="https://pagedone.io/asset/uploads/1712309277.png"
              alt="image"
              className="object-cover w-full h-full block dark:hidden"
            />
            <img
              src="https://pagedone.io/asset/uploads/1712656956.png"
              alt="image"
              className="object-cover w-full h-full hidden dark:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
