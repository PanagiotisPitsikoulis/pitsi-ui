export default function SectionHeaderWithCtaTabs() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="mb-7 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="block">
            <h2 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
              Projects
            </h2>
            <p className="text-sm leading-6 font-normal text-gray-500">
              Passionate UI/UX designer with a keen eye for detail and a flair
              for creating visually stunning
            </p>
          </div>
          <div className="flex flex-col gap-8 min-[450px]:flex-row min-[450px]:items-center">
            <div className="flex items-center">
              <img
                src="assets/images/section-head-6-1.png"
                className="rounded-full border border-solid border-white object-cover"
              />
              <img
                src="assets/images/section-head-6-2.png"
                className="-ml-2.5 rounded-full border border-solid border-white object-cover"
              />
              <img
                src="assets/images/section-head-6-3.png"
                className="-ml-2.5 rounded-full border border-solid border-white object-cover"
              />
              <img
                src="assets/images/section-head-6-4.png"
                className="-ml-2.5 rounded-full border border-solid border-white object-cover"
              />
              <img
                src="assets/images/section-head-6-5.png"
                className="-ml-2.5 rounded-full border border-solid border-white object-cover"
              />
              <button className="-ml-2.5 flex h-10 w-10 items-center justify-center rounded-full border border-solid border-white bg-gray-100 text-sm font-semibold text-gray-600">
                +5
              </button>
            </div>
            <button className="flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 pr-6 text-sm font-medium text-white shadow-sm shadow-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:shadow-gray-300 max-[450px]:w-max">
              Add Member
            </button>
          </div>
        </div>
        <ul className="flex w-full items-center justify-between gap-2 overflow-auto max-lg:flex-wrap">
          <li className="lg:w-full">
            <a className="flex w-full items-center justify-center rounded-full bg-indigo-50 px-5 py-3 text-center text-lg font-semibold whitespace-nowrap text-indigo-600 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 max-[450px]:px-3.5 max-[450px]:py-2.5 max-lg:text-sm">
              Home
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex w-full items-center justify-center rounded-full bg-gray-50 px-5 py-3 text-center text-lg font-semibold whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 max-[450px]:px-3.5 max-[450px]:py-2.5 max-lg:text-sm">
              About
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex w-full items-center justify-center rounded-full bg-gray-50 px-5 py-3 text-center text-lg font-semibold whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 max-[450px]:px-3.5 max-[450px]:py-2.5 max-lg:text-sm">
              Contect
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex w-full items-center justify-center rounded-full bg-gray-50 px-5 py-3 text-center text-lg font-semibold whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 max-[450px]:px-3.5 max-[450px]:py-2.5 max-lg:text-sm">
              Blog
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex w-full items-center justify-center rounded-full bg-gray-50 px-5 py-3 text-center text-lg font-semibold whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 max-[450px]:px-3.5 max-[450px]:py-2.5 max-lg:text-sm">
              Feature
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex w-full items-center justify-center rounded-full bg-gray-50 px-5 py-2.5 text-center text-lg font-semibold whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 max-[450px]:px-3.5 max-[450px]:py-2.5 max-lg:text-sm">
              pricing
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex w-full items-center justify-center rounded-full bg-gray-50 px-5 py-2.5 text-center text-lg font-semibold whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 max-[450px]:px-3.5 max-[450px]:py-2.5 max-lg:text-sm">
              Career
            </a>
          </li>
          <li className="lg:w-full">
            <a className="flex w-full items-center justify-center rounded-full bg-gray-50 px-5 py-2.5 text-center text-lg font-semibold whitespace-nowrap text-gray-900 transition-all duration-500 hover:bg-indigo-50 hover:text-indigo-600 max-[450px]:px-3.5 max-[450px]:py-2.5 max-lg:text-sm">
              Legal
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
