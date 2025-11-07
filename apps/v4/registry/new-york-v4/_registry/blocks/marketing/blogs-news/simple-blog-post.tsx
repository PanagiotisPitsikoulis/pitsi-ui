export default function SimpleBlogPost() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-14 text-center text-5xl font-bold text-gray-900">
          Our Blog
        </h2>
        <div className="mb-14 grid grid-cols-1 gap-8 max-lg:mx-auto max-lg:max-w-xl lg:grid-cols-3">
          <div className="group grid w-full cursor-pointer grid-cols-1 bg-white max-lg:rounded-2xl lg:col-span-2 lg:grid-cols-2 lg:gap-8">
            <div className="flex w-full items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696247839.png"
                alt="Andrea image"
                className="h-full w-full rounded-l-2xl object-cover"
              />
            </div>
            <div className="relative block flex-1 bg-white px-7 py-9 transition-all duration-500 group-hover:bg-indigo-600 max-lg:-mt-9 max-lg:rounded-b-2xl lg:rounded-r-2xl">
              <h3 className="mb-5 text-3xl leading-9 font-medium text-gray-900 transition-all duration-500 group-hover:text-white">
                Step by step to conduct usability testing{" "}
              </h3>
              <p className="mb-8 leading-6 text-gray-500 transition-all duration-500 group-hover:text-white">
                Examining how fintech is promoting access to financial services
                for underserved populations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704361939.png"
                    alt="Andrea image"
                    className="object-cover"
                  />
                  <div className="block">
                    <h6 className="mb-1 text-sm font-medium text-gray-900 transition-all duration-500 group-hover:text-white">
                      Andrea william
                    </h6>
                    <span className="text-xs text-gray-500 transition-all duration-500 group-hover:text-white">
                      21 Jan 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full cursor-pointer">
            <div className="flex h-56 w-full items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696247637.png"
                alt="Harsh image"
                className="h-full w-full rounded-t-2xl rounded-b-none object-cover"
              />
            </div>
            <div className="block rounded-b-2xl bg-white p-6 transition-all duration-500 group-hover:bg-indigo-600">
              <h4 className="mb-1 text-lg font-medium text-gray-900 transition-all duration-500 group-hover:text-white">
                Minimal workspace for inspirations{" "}
              </h4>
              <span className="text-gray-500 transition-all duration-500 group-hover:text-white">
                Harsh Patel - 21 Feb, 2023
              </span>
            </div>
          </div>
          <div className="group w-full cursor-pointer">
            <div className="flex h-56 w-full items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696247653.png"
                alt="John image"
                className="h-full w-full rounded-t-2xl rounded-b-none object-cover"
              />
            </div>
            <div className="block rounded-b-2xl bg-white p-6 transition-all duration-500 group-hover:bg-indigo-600">
              <h4 className="mb-1 text-lg font-medium text-gray-900 transition-all duration-500 group-hover:text-white">
                Morning routine to boost your mood
              </h4>
              <span className="text-gray-500 transition-all duration-500 group-hover:text-white">
                John Doe - 21 Mar, 2023
              </span>
            </div>
          </div>
          <div className="group w-full cursor-pointer">
            <div className="flex h-56 w-full items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696247675.png"
                alt="Alexa image"
                className="h-full w-full rounded-t-2xl rounded-b-none object-cover"
              />
            </div>
            <div className="block rounded-b-2xl bg-white p-6 transition-all duration-500 group-hover:bg-indigo-600">
              <h4 className="mb-1 text-lg font-medium text-gray-900 transition-all duration-500 group-hover:text-white">
                Analyze holdings of your portfolio
              </h4>
              <span className="text-gray-500 transition-all duration-500 group-hover:text-white">
                Alexa Kimberly - 21 Apr, 2023
              </span>
            </div>
          </div>
          <div className="group w-full cursor-pointer">
            <div className="flex h-56 w-full items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696247706.png"
                alt="James image"
                className="h-full w-full rounded-t-2xl rounded-b-none object-cover"
              />
            </div>
            <div className="block rounded-b-2xl bg-white p-6 transition-all duration-500 group-hover:bg-indigo-600">
              <h4 className="mb-1 text-lg font-medium text-gray-900 transition-all duration-500 group-hover:text-white">
                Should UI designers learn how to code
              </h4>
              <span className="text-gray-500 transition-all duration-500 group-hover:text-white">
                James Lilian - 21 May, 2023
              </span>
            </div>
          </div>
        </div>
        <a
          href="javascript:;"
          className="mx-auto flex w-52 cursor-pointer justify-center rounded-full bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700"
        >
          View All
        </a>
      </div>
    </section>
  )
}
