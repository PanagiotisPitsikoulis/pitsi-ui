export default function TailwindBlogGridLayoutWithScaleEffect() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="w-full text-gray-900 text-5xl font-bold font-manrope leading-relaxed pb-12 lg:text-start text-center">
          Our Recent Blog
        </h2>
        <div className="group justify-start items-end lg:gap-14 gap-10 lg:grid grid-cols-12 flex flex-col-reverse  mb-12">
          <div className="xl:col-span-8 lg:col-span-7 col-span-12 pb-10 border-b-2 border-indigo-600 justify-start items-start sm:gap-12 gap-6 sm:flex grid">
            <div className="w-12 h-12 rounded-full border border-gray-300 flex-col justify-center items-center gap-1.5 inline-flex">
              <div className="text-gray-900 text-base font-normal leading-relaxed">
                01
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-3.5 inline-flex">
              <span className="text-indigo-600 text-xs font-normal leading-5">
                8 Mins Read | 02 Dec 20
              </span>
              <h3 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal group-hover:text-indigo-600 transition-all duration-700 ease-in-out">
                The 1 tool that helps remote teams collaborate better
              </h3>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Smart investment strategies encompass a range of approaches
                aimed at maximizing returns while minimizing risk.
              </p>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1710834352.png"
                    alt="James Camron image"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <h4 className="text-gray-900 text-sm font-medium leading-normal">
                    James Camron
                  </h4>
                  <h5 className="text-gray-500 text-xs font-normal leading-4">
                    21 Apr 2023
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 lg:col-span-5 w-full col-span-12 h-80 overflow-hidden relative flex items-center justify-center lg:items-end">
            <img
              className="transition-all duration-700 ease-in-out group-hover:scale-105 rounded-full rounded-bl-none object-cover"
              src="https://pagedone.io/asset/uploads/1711019061.png"
              alt="blog image"
            />
          </div>
        </div>
        <div className="group justify-start items-end lg:gap-14 gap-10 grid grid-cols-12  mb-12">
          <div className="xl:col-span-4 lg:col-span-5 w-full col-span-12 h-80 overflow-hidden relative flex items-center justify-center lg:items-end">
            <img
              className="transition-all duration-700 ease-in-out group-hover:scale-105 rounded-full rounded-br-none object-cover"
              src="https://pagedone.io/asset/uploads/1711019083.png"
              alt="blog image"
            />
          </div>
          <div className="xl:col-span-8 lg:col-span-7 col-span-12 pb-10 border-b-2 border-indigo-600 justify-start items-start sm:gap-12 gap-6 sm:flex grid">
            <div className="w-12 h-12 rounded-full border border-gray-300 flex-col justify-center items-center gap-1.5 inline-flex">
              <div className="text-gray-900 text-base font-normal leading-relaxed">
                02
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-3.5 inline-flex">
              <span className="text-indigo-600 text-xs font-normal leading-5">
                15 Mins Read | 02 Dec 20
              </span>
              <h3 className="text-gray-900 text-3xl font-semibold font-manrope leading-normal group-hover:text-indigo-600 transition-all duration-700 ease-in-out">
                Fintech's Role in Unlocking Financial Inclusion
              </h3>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Our commitment to integrity and professionalism ensures that our
                investors can trust us to act in their best interests at all
                times.
              </p>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1710834365.png"
                    alt="Emily Johnson image"
                  />
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <h4 className="text-gray-900 text-sm font-medium leading-normal">
                    Emily Johnson
                  </h4>
                  <h5 className="text-gray-500 text-xs font-normal leading-4">
                    21 Apr 2023
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
