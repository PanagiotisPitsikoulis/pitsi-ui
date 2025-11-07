export default function SimpleBlogPost() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-5xl font-bold text-gray-900 text-center mb-14">
          Our Blog
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-14 gap-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="group w-full lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-8 bg-white max-lg:rounded-2xl cursor-pointer">
            <div className="flex items-center w-full  ">
              <img
                src="https://pagedone.io/asset/uploads/1696247839.png"
                alt="Andrea image"
                className="rounded-l-2xl  w-full h-full object-cover"
              />
            </div>
            <div className="block flex-1 bg-white py-9 px-7 max-lg:rounded-b-2xl lg:rounded-r-2xl relative max-lg:-mt-9 transition-all duration-500 group-hover:bg-indigo-600">
              <h3 className="text-3xl text-gray-900 font-medium leading-9 mb-5 transition-all duration-500 group-hover:text-white">
                Step by step to conduct usability testing{" "}
              </h3>
              <p className="text-gray-500 leading-6 mb-8 transition-all duration-500 group-hover:text-white">
                Examining how fintech is promoting access to financial services
                for underserved populations.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704361939.png"
                    alt="Andrea image"
                    className="object-cover"
                  />
                  <div className="block">
                    <h6 className="text-sm text-gray-900 font-medium mb-1 transition-all duration-500 group-hover:text-white">
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
          <div className="group w-full cursor-pointer ">
            <div className="flex items-center w-full h-56">
              <img
                src="https://pagedone.io/asset/uploads/1696247637.png"
                alt="Harsh image"
                className="rounded-t-2xl rounded-b-none w-full h-full object-cover"
              />
            </div>
            <div className="block bg-white p-6 rounded-b-2xl transition-all duration-500 group-hover:bg-indigo-600">
              <h4 className="text-lg text-gray-900 font-medium mb-1 transition-all duration-500 group-hover:text-white">
                Minimal workspace for inspirations{" "}
              </h4>
              <span className="text-gray-500 transition-all duration-500 group-hover:text-white">
                Harsh Patel - 21 Feb, 2023
              </span>
            </div>
          </div>
          <div className="group w-full cursor-pointer ">
            <div className="flex items-center w-full h-56">
              <img
                src="https://pagedone.io/asset/uploads/1696247653.png"
                alt="John image"
                className="rounded-t-2xl rounded-b-none w-full h-full object-cover"
              />
            </div>
            <div className="block bg-white p-6 rounded-b-2xl transition-all duration-500 group-hover:bg-indigo-600">
              <h4 className="text-lg text-gray-900 font-medium mb-1 transition-all duration-500 group-hover:text-white">
                Morning routine to boost your mood
              </h4>
              <span className="text-gray-500 transition-all duration-500 group-hover:text-white">
                John Doe - 21 Mar, 2023
              </span>
            </div>
          </div>
          <div className="group w-full cursor-pointer  ">
            <div className="flex items-center w-full h-56">
              <img
                src="https://pagedone.io/asset/uploads/1696247675.png"
                alt="Alexa image"
                className="rounded-t-2xl rounded-b-none w-full h-full object-cover"
              />
            </div>
            <div className="block bg-white p-6 rounded-b-2xl transition-all duration-500 group-hover:bg-indigo-600">
              <h4 className="text-lg text-gray-900 font-medium mb-1 transition-all duration-500 group-hover:text-white">
                Analyze holdings of your portfolio
              </h4>
              <span className="text-gray-500 transition-all duration-500 group-hover:text-white">
                Alexa Kimberly - 21 Apr, 2023
              </span>
            </div>
          </div>
          <div className="group w-full cursor-pointer  ">
            <div className="flex items-center w-full h-56">
              <img
                src="https://pagedone.io/asset/uploads/1696247706.png"
                alt="James image"
                className="rounded-t-2xl rounded-b-none w-full h-full object-cover"
              />
            </div>
            <div className="block bg-white p-6 rounded-b-2xl transition-all duration-500 group-hover:bg-indigo-600">
              <h4 className="text-lg text-gray-900 font-medium mb-1 transition-all duration-500 group-hover:text-white">
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
          className="cursor-pointer flex justify-center mx-auto py-4 px-8 w-52 rounded-full bg-indigo-600 shadow-sm text-white text-lg font-semibold transition-all duration-500 hover:bg-indigo-700"
        >
          View All
        </a>
      </div>
    </section>
  );
}
