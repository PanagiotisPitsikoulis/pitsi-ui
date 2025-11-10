export default function BlogWithExpandedCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-16 text-center text-5xl font-bold text-gray-900">
          Latest News
        </h2>
        <div className="mb-16 flex flex-wrap justify-center gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="group w-full cursor-pointer max-lg:mx-auto max-lg:max-w-xl lg:w-1/3">
            <div className="mb-8 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696247839.png"
                alt="blogs tailwind section"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="block">
              <h4 className="mb-4 text-lg leading-8 font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-600">
                Tech essentials: exploring the latest electronic gadgets and
                innovations
              </h4>
              <p className="mb-5 leading-6 text-gray-500">
                Discovering the must-have electronic devices and groundbreaking
                innovations in the tech world.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704349572.png"
                    alt="Andrea image"
                    className="rounded-full object-cover"
                  />
                  <div className="block">
                    <h6 className="mb-1 text-sm font-medium text-gray-900">
                      Andrea william
                    </h6>
                    <span className="text-xs text-gray-500">21 Jan 2023</span>
                  </div>
                </div>
                <a
                  href="javascript:;"
                  className="text-sm text-gray-500 group-hover:text-indigo-600"
                >
                  Business
                </a>
              </div>
            </div>
          </div>
          <div className="group w-full cursor-pointer max-lg:mx-auto max-lg:max-w-xl lg:w-1/3">
            <div className="mb-8 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696247867.png"
                alt="blogs tailwind section"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="block">
              <h4 className="mb-4 text-lg leading-8 font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-600">
                Unlocking financial inclusion: how fintech is bridging the gap
              </h4>
              <p className="mb-5 leading-6 text-gray-500">
                Examining how fintech is promoting access to financial services
                for underserved populations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704349572.png"
                    alt="James image"
                    className="rounded-full object-cover"
                  />
                  <div className="block">
                    <h6 className="mb-1 text-sm font-medium text-gray-900">
                      James Camron
                    </h6>
                    <span className="text-xs text-gray-500">21 Apr 2023</span>
                  </div>
                </div>
                <a
                  href="javascript:;"
                  className="text-sm text-gray-500 group-hover:text-indigo-600"
                >
                  Business
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 w-full max-lg:mx-auto max-lg:max-w-xl lg:mt-0 lg:w-1/3">
            <h4 className="mb-8 text-center text-xl font-medium text-gray-500 lg:text-left">
              Most popular news
            </h4>
            <a
              href="javascript:;"
              className="mb-11 flex items-center gap-3 max-md:justify-between md:flex-row md:gap-8"
            >
              <div className="block w-full">
                <h5 className="mb-2 text-left text-lg leading-8 text-gray-900">
                  How feedback can increase team productivity
                </h5>
                <span className="block text-left text-sm text-gray-600">
                  Jenna Lukas
                </span>
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1696248344.png"
                alt="Jenna image"
                className="rounded-xl object-cover"
              />
            </a>
            <a
              href="javascript:;"
              className="mb-11 flex items-center gap-3 max-md:justify-between md:flex-row md:gap-8"
            >
              <div className="block w-full">
                <h5 className="mb-2 text-left text-lg leading-8 text-gray-900">
                  Morning routine to boost your mood
                </h5>
                <span className="block text-left text-sm text-gray-600">
                  Jonathan Hope{" "}
                </span>
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1696248361.png"
                alt="Jonathan image"
                className="rounded-xl object-cover"
              />
            </a>
            <a
              href="javascript:;"
              className="flex items-center gap-3 max-md:justify-between md:flex-row md:gap-8"
            >
              <div className="block w-full">
                <h5 className="mb-2 text-left text-lg leading-8 text-gray-900">
                  How to use sticky note for problem solving
                </h5>
                <span className="block text-left text-sm text-gray-600">
                  Hope Kia
                </span>
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1696248374.png"
                alt="Hope image"
                className="rounded-xl object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
