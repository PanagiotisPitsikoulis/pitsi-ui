export default function SubscribeFormInFooter() {
  return (
    <section className="pt-16 pb-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 border-b-2 border-gray-200 pb-14 min-[1130px]:grid-cols-12 lg:gap-0">
          <div className="col-span-1 mx-auto w-full min-[1130px]:col-span-5 min-[1130px]:max-w-full">
            <div className="flex w-full flex-col gap-8 max-sm:items-center">
              <a href="https://pagedone.io/" className="py-1.5">
                {/* SVG removed */}
              </a>
              <div className="flex w-full flex-col items-center gap-3 min-[470px]:flex-row">
                <div className="relative text-gray-500 focus-within:text-gray-900 max-sm:w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* SVG removed */}
                  </div>
                  <input
                    type="text"
                    id="default-search"
                    className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-12 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none max-sm:min-w-full sm:max-w-xs"
                    placeholder="mail@pagedone.com"
                  />
                </div>
                <button className="rounded-lg bg-sky-800 px-7 py-3 text-base font-semibold text-white transition-all duration-500 hover:bg-sky-900 max-[470px]:w-full">
                  Subscribe
                </button>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <img
                    src="https://pagedone.io/asset/uploads/1711781258.png"
                    className="relative rounded-full object-cover"
                  />
                  <img
                    src="https://pagedone.io/asset/uploads/1711781273.png"
                    className="relative z-10 -translate-x-2 rounded-full object-cover"
                  />
                  <img
                    src="https://pagedone.io/asset/uploads/1711781291.png"
                    className="relative z-20 -translate-x-4 rounded-full object-cover"
                  />
                </div>
                <p className="text-base font-normal text-gray-500">
                  <span className="font-medium text-gray-900">1K </span>Members
                  Join
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 mx-auto flex w-full flex-col justify-between gap-6 max-[1130px]:pt-10 min-[1130px]:col-span-7 min-[1130px]:max-w-full sm:flex-row lg:pl-14">
            <div>
              <h6 className="mb-7 text-lg font-medium text-gray-900 max-sm:text-center">
                Address
              </h6>
              <ul className="flex flex-col gap-6">
                <li>
                  <p className="text-base font-normal text-gray-600 max-sm:text-center">
                    61-A, Elm street, Gujarat, India.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-7 text-lg font-medium text-gray-900 max-sm:text-center">
                Contact
              </h6>
              <ul className="flex flex-col gap-6">
                <li>
                  <p className="text-base font-normal whitespace-nowrap text-gray-600 max-sm:text-center">
                    +91 945 658 3256
                  </p>
                </li>
                <li>
                  <p className="text-base font-normal whitespace-nowrap text-gray-600 max-sm:text-center">
                    support@pagedone.com
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-7 text-lg font-medium text-gray-900 max-sm:text-center">
                Office
              </h6>
              <ul className="flex flex-col gap-6">
                <li>
                  <p className="text-base font-normal whitespace-nowrap text-gray-600 max-sm:text-center">
                    Monday - Friday
                  </p>
                </li>
                <li>
                  <p className="text-base font-normal whitespace-nowrap text-gray-600 max-sm:text-center">
                    9AM - 7PM
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-5 pt-7 first-letter:items-center md:flex-row">
          <p className="text-sm font-normal text-gray-400">
            ©<a href="https://pagedone.io/">pagedone</a>2023, All rights
            reserved.
          </p>
          <ul className="flex items-center gap-9">
            <li>
              <a className="text-sm font-normal text-gray-500 transition-all duration-300 focus-within:text-indigo-600 focus-within:outline-0 hover:text-indigo-600">
                Terms
              </a>
            </li>
            <li>
              <a className="text-sm font-normal text-gray-500 transition-all duration-300 focus-within:text-indigo-600 focus-within:outline-0 hover:text-indigo-600">
                Privacy
              </a>
            </li>
            <li>
              <a className="text-sm font-normal text-gray-500 transition-all duration-300 focus-within:text-indigo-600 focus-within:outline-0 hover:text-indigo-600">
                Cookies
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <button className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm shadow-gray-200 transition-all duration-300 focus-within:outline-0">
              {/* SVG removed */}
              <div className="absolute top-full left-0 z-0 h-full w-full rounded-full bg-sky-500 transition-all duration-500 group-focus-within:top-0 group-hover:top-0"></div>
            </button>
            <button className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm shadow-gray-200 transition-all duration-300 focus-within:outline-0">
              {/* SVG removed */}
              <div className="absolute top-full left-0 z-0 h-full w-full rounded-full bg-black transition-all duration-500 group-focus-within:top-0 group-hover:top-0"></div>
            </button>
            <button className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm shadow-gray-200 transition-all duration-300 focus-within:outline-0">
              {/* SVG removed */}
              <div className="bg-primary absolute top-full left-0 z-0 h-full w-full rounded-full transition-all duration-500 group-focus-within:top-0 group-hover:top-0"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
