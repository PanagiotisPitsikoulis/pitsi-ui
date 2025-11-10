export default function ApplicationShellWithNavbar() {
  return (
    <div className="relative">
      {/*header*/}
      <nav className="fixed w-full bg-white px-6 py-3.5 shadow-sm lg:shadow-none dark:bg-gray-900">
        <div className="flex flex-col items-center justify-between gap-1 sm:gap-6 lg:flex-row">
          <div className="flex w-full items-center justify-between lg:w-auto">
            <a href="#" className="block">
              <img
                src="https://pagedone.io/asset/uploads/1701235273.png"
                alt="Pagedone logo image"
                className="block object-cover dark:hidden"
              />
              <img
                src="https://pagedone.io/asset/uploads/1712310504.png"
                alt="Pagedone logo image"
                className="hidden object-cover dark:block"
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
            className="hidden w-full flex-1 flex-row lg:flex"
          >
            <ul className="flex flex-col items-center gap-2 text-center lg:ml-auto lg:flex-row lg:gap-2 xl:gap-4">
              <li>
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-500 ease-in-out"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-white"
                >
                  Employees
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-white"
                >
                  Attendances
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-white"
                >
                  Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-white"
                >
                  Leaves
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-white"
                >
                  Payroll
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="rounded-md bg-transparent px-3 py-1.5 text-xs font-semibold text-gray-500 transition-all duration-500 ease-in-out hover:bg-indigo-600 hover:text-white dark:text-white"
                >
                  Document
                </a>
              </li>
            </ul>
            <div className="items-center gap-1 text-center sm:gap-4 lg:ml-auto lg:flex">
              <div className="flex items-center justify-center gap-1 sm:gap-2 lg:justify-start">
                <div className="relative w-max p-3"></div>
                <p className="font-normal text-gray-200 dark:text-gray-700">
                  |
                </p>
                <button className="flex h-8 w-8 items-center justify-center sm:h-11 sm:w-11 lg:p-3"></button>
              </div>
              <button className="group mx-auto flex items-center gap-1.5 rounded-lg border border-solid border-indigo-600 bg-indigo-600 px-2 py-2 text-sm font-medium whitespace-nowrap text-white transition-all duration-300 hover:border-indigo-700 hover:bg-indigo-700 lg:mx-0 lg:pr-5 lg:pl-3.5">
                <span className="max-lg:hidden">Add Employee</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/*main content*/}
      <div className="pt-[68px]">
        <div className="bg-gray-50 px-3 py-3.5 lg:px-8 dark:bg-gray-800">
          <div className="block max-lg:pl-6">
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
        </div>
        <div className="w-full p-8">
          <div className="rounded-xl border border-gray-200">
            <img
              src="https://pagedone.io/asset/uploads/1712309277.png"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
