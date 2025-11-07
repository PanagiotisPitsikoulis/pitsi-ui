export default function MultiImageScrollingCtaWithTrial() {
  return (
    <section className="py-8 lg:pt-0 font-inter overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-bold sm:leading-[52px] text-gray-900 font-manrope text-center lg:text-left">
              Don’t miss out—your journey begins now.
            </h2>
            <p className="text-gray-500 text-base font-normal leading-6 text-center pt-4 lg:text-left">
              Take the first step toward unlocking new possibilities and
              achieving your goals. Start today and experience the path to
              success waiting for you!
            </p>
            <ul className="flex flex-col gap-4 pt-5 mb-8 justify-center items-center lg:items-start lg:justify-start">
              <li className="flex items-center gap-3 text-gray-500 text-sm font-normal leading-5">
                {/* SVG removed */}
                Premium Support
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm font-normal leading-5">
                {/* SVG removed */}
                Fast Delivery
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm font-normal leading-5">
                {/* SVG removed */}
                Library of Our Specialist Team
              </li>
            </ul>
            <div className="w-full flex justify-center lg:justify-start">
              <button className="mx-auto lg:mx-0 bg-indigo-600 shadow-sm w-max px-7 py-2.5 text-white leading-7 text-base font-semibold rounded-2xl transition-all duration-500 hover:bg-indigo-700">
                Start a Trial
              </button>
            </div>
          </div>
          <div className="lg:w-2/6 mx-auto lg:mx-0 grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-hidden h-[500px]">
            <div className="flex flex-row sm:flex-col gap-5 animate-[scroll-horizontal_15s_linear_infinite] sm:animate-[scroll-vertical_30s_linear_infinite]">
              <img
                src="https://pagedone.io/asset/uploads/1759556428.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556443.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556471.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556428.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556443.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556471.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556527.png"
                alt="img"
              />
            </div>
            <div className="flex flex-row sm:flex-col gap-5 animate-[scroll-horizontal-reverse_15s_linear_infinite] sm:animate-[scroll-vertical-down_30s_linear_infinite]">
              <img
                src="https://pagedone.io/asset/uploads/1759556491.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556527.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556471.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556428.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556491.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556527.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556471.png"
                alt="img"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759556428.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
