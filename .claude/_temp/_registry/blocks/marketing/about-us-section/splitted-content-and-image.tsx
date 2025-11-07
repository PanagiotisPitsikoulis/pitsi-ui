export default function SplittedContentAndImage() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full lg:py-7 flex-col justify-center items-start gap-8 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
              <span className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                About Us
              </span>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Discover the Space Where Ideas Come to Life
              </h2>
              <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                Our open, flexible workspace encourages interaction and sparks
                inspiration, while dedicated areas provide quiet reflection.
              </p>
            </div>
            <div className="w-full justify-start items-start gap-8 sm:mb-0 mb-3 grid sm:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start sm:items-start items-center gap-2.5 inline-flex">
                <div className="w-[50px] h-[50px] bg-indigo-600 rounded-[10px] justify-center items-center inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start sm:items-start items-center gap-1.5 flex">
                  <h6 className="text-black text-base font-medium leading-relaxed sm:text-start text-center">
                    Our Mission
                  </h6>
                  <p className="text-gray-500 text-xs font-normal leading-normal sm:text-start text-center">
                    Through a dedication to continuous learning, we foster a
                    dynamic workforce capable.
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-start sm:items-start items-center gap-2.5 inline-flex">
                <div className="w-[50px] h-[50px] bg-indigo-600 rounded-[10px] justify-center items-center inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start sm:items-start items-center gap-1.5 flex">
                  <h6 className="text-black text-base font-medium leading-relaxed sm:text-start text-center">
                    Our Vision
                  </h6>
                  <p className="text-gray-500 text-xs font-normal leading-normal sm:text-start text-center">
                    We are committed to transforming the landscape by equipping
                    our team with the skills.
                  </p>
                </div>
              </div>
            </div>
            <ul className="w-full flex-col justify-start items-start sm:gap-6 gap-4 flex">
              <div className="w-full justify-start items-center sm:gap-8 gap-4 grid sm:grid-cols-2 grid-cols-1">
                <li className="w-full sm:justify-start justify-center items-center gap-2.5 flex">
                  <div className="w-6 h-6 relative"></div>
                  <p className="text-gray-900 text-sm font-normal leading-normal">
                    More than 10 years of experience.
                  </p>
                </li>
                <li className="w-full sm:justify-start justify-center items-center gap-2.5 flex">
                  <div className="w-6 h-6 relative"></div>
                  <p className="text-gray-900 text-sm font-normal leading-normal">
                    More than 10 years of experience.
                  </p>
                </li>
              </div>
              <div className="w-full justify-start items-center sm:gap-8 gap-4 grid sm:grid-cols-2 grid-cols-1">
                <li className="w-full sm:justify-start justify-center items-center gap-2.5 flex">
                  <div className="w-6 h-6 relative"></div>
                  <p className="text-gray-900 text-sm font-normal leading-normal">
                    More than 10 years of experience.
                  </p>
                </li>
                <li className="w-full sm:justify-start justify-center items-center gap-2.5 flex">
                  <div className="w-6 h-6 relative"></div>
                  <p className="text-gray-900 text-sm font-normal leading-normal">
                    More than 10 years of experience.
                  </p>
                </li>
              </div>
            </ul>
            <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Contact Us
              </span>
              {/* SVG removed */}
            </button>
          </div>
          <div className="w-full justify-center items-center lg:gap-8 gap-6 grid sm:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start lg:gap-8 gap-6 inline-flex">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724823724.png"
                alt="About Us Image"
              />
              <img
                className="w-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724823741.png"
                alt="About Us Image"
              />
            </div>
            <div className="w-full justify-start items-center gap-2.5 flex">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1724823752.png"
                alt="About Us Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
