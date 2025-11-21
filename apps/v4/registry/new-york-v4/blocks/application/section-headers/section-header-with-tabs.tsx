export default function SectionHeaderWithTabs() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-7 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="block">
            <h2 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
              Visitors Reports
            </h2>
            <p className="text-sm leading-6 font-normal text-gray-500">
              Passionate UI/UX designer with a keen eye for detail and a flair
              for creating visually stunning
            </p>
          </div>
          <form>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
              <input
                type="text"
                id="default-search"
                className="block h-11 w-full rounded-full border border-gray-300 bg-transparent py-2.5 pr-5 pl-12 text-base font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none lg:w-80"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <ul className="flex w-full items-center justify-between overflow-auto max-md:flex-wrap">
          <li className="md:w-full">
            <a className="flex w-max items-center justify-center border-b-2 border-solid border-indigo-600 py-3 text-center text-base font-medium whitespace-nowrap text-indigo-600 transition-all duration-500 hover:border-indigo-600 max-[400px]:px-2 max-md:px-3 md:w-full">
              Home
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex w-max items-center justify-center border-b-2 border-solid border-gray-200 py-3 text-center text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600 max-[400px]:px-2 max-md:px-3 md:w-full">
              About
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex w-max items-center justify-center border-b-2 border-solid border-gray-200 py-3 text-center text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600 max-[400px]:px-2 max-md:px-3 md:w-full">
              Contact
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex w-max items-center justify-center border-b-2 border-solid border-gray-200 py-3 text-center text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600 max-[400px]:px-2 max-md:px-3 md:w-full">
              Feature
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex w-max items-center justify-center border-b-2 border-solid border-gray-200 py-3 text-center text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600 max-[400px]:px-2 max-md:px-3 md:w-full">
              Pricing
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex w-max items-center justify-center border-b-2 border-solid border-gray-200 py-3 text-center text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600 max-[400px]:px-2 max-md:px-3 md:w-full">
              Blog
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex w-max items-center justify-center border-b-2 border-solid border-gray-200 py-3 text-center text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600 max-[400px]:px-2 max-md:px-3 md:w-full">
              career
            </a>
          </li>
          <li className="md:w-full">
            <a className="flex w-max items-center justify-center border-b-2 border-solid border-gray-200 py-3 text-center text-base font-medium whitespace-nowrap text-gray-900 transition-all duration-500 hover:border-indigo-600 hover:text-indigo-600 max-[400px]:px-2 max-md:px-3 md:w-full">
              Legal
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
