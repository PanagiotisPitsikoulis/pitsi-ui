export default function SplittedContentAndImage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
          <div className="inline-flex w-full flex-col items-start justify-center gap-8 lg:py-7">
            <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <span className="text-center text-base leading-relaxed font-normal text-gray-400 lg:text-start">
                About Us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Discover the Space Where Ideas Come to Life
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Our open, flexible workspace encourages interaction and sparks
                inspiration, while dedicated areas provide quiet reflection.
              </p>
            </div>
            <div className="mb-3 grid w-full grid-cols-1 items-start justify-start gap-8 sm:mb-0 sm:grid-cols-2">
              <div className="inline-flex w-full flex-col items-center justify-start gap-2.5 sm:items-start">
                <div className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-indigo-600">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-center justify-start gap-1.5 sm:items-start">
                  <h6 className="text-center text-base leading-relaxed font-medium text-black sm:text-start">
                    Our Mission
                  </h6>
                  <p className="text-center text-xs leading-normal font-normal text-gray-500 sm:text-start">
                    Through a dedication to continuous learning, we foster a
                    dynamic workforce capable.
                  </p>
                </div>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start gap-2.5 sm:items-start">
                <div className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-[10px] bg-indigo-600">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-center justify-start gap-1.5 sm:items-start">
                  <h6 className="text-center text-base leading-relaxed font-medium text-black sm:text-start">
                    Our Vision
                  </h6>
                  <p className="text-center text-xs leading-normal font-normal text-gray-500 sm:text-start">
                    We are committed to transforming the landscape by equipping
                    our team with the skills.
                  </p>
                </div>
              </div>
            </div>
            <ul className="flex w-full flex-col items-start justify-start gap-4 sm:gap-6">
              <div className="grid w-full grid-cols-1 items-center justify-start gap-4 sm:grid-cols-2 sm:gap-8">
                <li className="flex w-full items-center justify-center gap-2.5 sm:justify-start">
                  <div className="relative h-6 w-6"></div>
                  <p className="text-sm leading-normal font-normal text-gray-900">
                    More than 10 years of experience.
                  </p>
                </li>
                <li className="flex w-full items-center justify-center gap-2.5 sm:justify-start">
                  <div className="relative h-6 w-6"></div>
                  <p className="text-sm leading-normal font-normal text-gray-900">
                    More than 10 years of experience.
                  </p>
                </li>
              </div>
              <div className="grid w-full grid-cols-1 items-center justify-start gap-4 sm:grid-cols-2 sm:gap-8">
                <li className="flex w-full items-center justify-center gap-2.5 sm:justify-start">
                  <div className="relative h-6 w-6"></div>
                  <p className="text-sm leading-normal font-normal text-gray-900">
                    More than 10 years of experience.
                  </p>
                </li>
                <li className="flex w-full items-center justify-center gap-2.5 sm:justify-start">
                  <div className="relative h-6 w-6"></div>
                  <p className="text-sm leading-normal font-normal text-gray-900">
                    More than 10 years of experience.
                  </p>
                </li>
              </div>
            </ul>
            <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Contact Us
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-center gap-6 sm:grid-cols-2 lg:gap-8">
            <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:gap-8">
              <img
                className="h-auto w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724823724.png"
                alt="About Us Image"
              />
              <img
                className="h-auto w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724823741.png"
                alt="About Us Image"
              />
            </div>
            <div className="flex w-full items-center justify-start gap-2.5">
              <img
                className="h-auto w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724823752.png"
                alt="About Us Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
