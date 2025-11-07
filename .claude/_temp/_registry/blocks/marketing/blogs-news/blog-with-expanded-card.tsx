export default function BlogWithExpandedCard() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-5xl font-bold text-gray-900 text-center mb-16">
          Latest News
        </h2>
        <div className="flex justify-center mb-16 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="group w-full lg:w-1/3 max-lg:max-w-xl max-lg:mx-auto cursor-pointer">
            <div className="flex items-center mb-8">
              <img
                src="https://pagedone.io/asset/uploads/1696247839.png"
                alt="blogs tailwind section"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="block">
              <h4 className="text-lg text-gray-900 font-medium leading-8 mb-4 transition-all duration-300 group-hover:text-indigo-600">
                Tech essentials: exploring the latest electronic gadgets and
                innovations
              </h4>
              <p className="text-gray-500 leading-6 mb-5">
                Discovering the must-have electronic devices and groundbreaking
                innovations in the tech world.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704349572.png"
                    alt="Andrea image"
                    className="rounded-full object-cover"
                  />
                  <div className="block">
                    <h6 className="text-sm text-gray-900 font-medium mb-1">
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
          <div className="group w-full lg:w-1/3 max-lg:max-w-xl max-lg:mx-auto cursor-pointer">
            <div className="flex items-center mb-8">
              <img
                src="https://pagedone.io/asset/uploads/1696247867.png"
                alt="blogs tailwind section"
                className="rounded-2xl w-full object-cover"
              />
            </div>
            <div className="block">
              <h4 className="text-lg text-gray-900 font-medium leading-8 mb-4 transition-all duration-300 group-hover:text-indigo-600">
                Unlocking financial inclusion: how fintech is bridging the gap
              </h4>
              <p className="text-gray-500 leading-6 mb-5">
                Examining how fintech is promoting access to financial services
                for underserved populations.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://pagedone.io/asset/uploads/1704349572.png"
                    alt="James image"
                    className="rounded-full object-cover"
                  />
                  <div className="block">
                    <h6 className="text-sm text-gray-900 font-medium mb-1">
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
          <div className=" w-full lg:w-1/3 mt-10 lg:mt-0 max-lg:max-w-xl max-lg:mx-auto">
            <h4 className="text-xl text-gray-500 font-medium mb-8  text-center lg:text-left">
              Most popular news
            </h4>
            <a
              href="javascript:;"
              className="flex max-md:justify-between items-center gap-3 md:gap-8 mb-11  md:flex-row"
            >
              <div className="block w-full">
                <h5 className="text-lg text-gray-900 leading-8 mb-2 text-left">
                  How feedback can increase team productivity
                </h5>
                <span className="text-sm text-gray-600 text-left block">
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
              className="flex max-md:justify-between items-center gap-3 md:gap-8 mb-11  md:flex-row"
            >
              <div className="block w-full">
                <h5 className="text-lg text-gray-900 leading-8 mb-2 text-left">
                  Morning routine to boost your mood
                </h5>
                <span className="text-sm text-gray-600 text-left block">
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
              className="flex max-md:justify-between items-center gap-3 md:gap-8  md:flex-row"
            >
              <div className="block w-full">
                <h5 className="text-lg text-gray-900 leading-8 mb-2 text-left">
                  How to use sticky note for problem solving
                </h5>
                <span className="text-sm text-gray-600 text-left block">
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
  );
}
