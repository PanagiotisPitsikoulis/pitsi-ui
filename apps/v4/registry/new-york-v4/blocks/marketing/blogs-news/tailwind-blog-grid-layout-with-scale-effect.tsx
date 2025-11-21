export default function TailwindBlogGridLayoutWithScaleEffect() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope w-full pb-12 text-center text-5xl leading-relaxed font-bold text-gray-900 lg:text-start">
          Our Recent Blog
        </h2>
        <div className="group mb-12 flex grid-cols-12 flex-col-reverse items-end justify-start gap-10 lg:grid lg:gap-14">
          <div className="col-span-12 grid items-start justify-start gap-6 border-b-2 border-indigo-600 pb-10 sm:flex sm:gap-12 lg:col-span-7 xl:col-span-8">
            <div className="inline-flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-gray-300">
              <div className="text-base leading-relaxed font-normal text-gray-900">
                01
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-3.5">
              <span className="text-xs leading-5 font-normal text-indigo-600">
                8 Mins Read | 02 Dec 20
              </span>
              <h3 className="font-manrope text-3xl leading-normal font-semibold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                The 1 tool that helps remote teams collaborate better
              </h3>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Smart investment strategies encompass a range of approaches
                aimed at maximizing returns while minimizing risk.
              </p>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="flex items-start justify-start gap-2.5">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1710834352.png"
                    alt="James Camron image"
                  />
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1">
                  <h4 className="text-sm leading-normal font-medium text-gray-900">
                    James Camron
                  </h4>
                  <h5 className="text-xs leading-4 font-normal text-gray-500">
                    21 Apr 2023
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="relative col-span-12 flex h-80 w-full items-center justify-center overflow-hidden lg:col-span-5 lg:items-end xl:col-span-4">
            <img
              className="rounded-full rounded-bl-none object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1711019061.png"
              alt="blog image"
            />
          </div>
        </div>
        <div className="group mb-12 grid grid-cols-12 items-end justify-start gap-10 lg:gap-14">
          <div className="relative col-span-12 flex h-80 w-full items-center justify-center overflow-hidden lg:col-span-5 lg:items-end xl:col-span-4">
            <img
              className="rounded-full rounded-br-none object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              src="https://pagedone.io/asset/uploads/1711019083.png"
              alt="blog image"
            />
          </div>
          <div className="col-span-12 grid items-start justify-start gap-6 border-b-2 border-indigo-600 pb-10 sm:flex sm:gap-12 lg:col-span-7 xl:col-span-8">
            <div className="inline-flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-gray-300">
              <div className="text-base leading-relaxed font-normal text-gray-900">
                02
              </div>
            </div>
            <div className="inline-flex shrink grow basis-0 flex-col items-start justify-start gap-3.5">
              <span className="text-xs leading-5 font-normal text-indigo-600">
                15 Mins Read | 02 Dec 20
              </span>
              <h3 className="font-manrope text-3xl leading-normal font-semibold text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                Fintech's Role in Unlocking Financial Inclusion
              </h3>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Our commitment to integrity and professionalism ensures that our
                investors can trust us to act in their best interests at all
                times.
              </p>
              <div className="inline-flex items-center justify-start gap-3">
                <div className="flex items-start justify-start gap-2.5">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1710834365.png"
                    alt="Emily Johnson image"
                  />
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1">
                  <h4 className="text-sm leading-normal font-medium text-gray-900">
                    Emily Johnson
                  </h4>
                  <h5 className="text-xs leading-4 font-normal text-gray-500">
                    21 Apr 2023
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
