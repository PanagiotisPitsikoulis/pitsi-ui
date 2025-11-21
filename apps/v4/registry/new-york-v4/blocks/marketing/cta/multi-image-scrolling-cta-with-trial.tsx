export default function MultiImageScrollingCtaWithTrial() {
  return (
    <section className="font-inter overflow-hidden py-8 lg:pt-0">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-14 lg:flex-row">
          <div className="w-full lg:w-2/3">
            <h2 className="font-manrope text-center text-4xl font-bold text-gray-900 sm:leading-[52px] lg:text-left">
              Don’t miss out—your journey begins now.
            </h2>
            <p className="pt-4 text-center text-base leading-6 font-normal text-gray-500 lg:text-left">
              Take the first step toward unlocking new possibilities and
              achieving your goals. Start today and experience the path to
              success waiting for you!
            </p>
            <ul className="mb-8 flex flex-col items-center justify-center gap-4 pt-5 lg:items-start lg:justify-start">
              <li className="flex items-center gap-3 text-sm leading-5 font-normal text-gray-500">
                {/* SVG removed */}
                Premium Support
              </li>
              <li className="flex items-center gap-3 text-sm leading-5 font-normal text-gray-500">
                {/* SVG removed */}
                Fast Delivery
              </li>
              <li className="flex items-center gap-3 text-sm leading-5 font-normal text-gray-500">
                {/* SVG removed */}
                Library of Our Specialist Team
              </li>
            </ul>
            <div className="flex w-full justify-center lg:justify-start">
              <button className="mx-auto w-max rounded-2xl bg-indigo-600 px-7 py-2.5 text-base leading-7 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
                Start a Trial
              </button>
            </div>
          </div>
          <div className="mx-auto grid h-[500px] grid-cols-1 gap-5 overflow-hidden sm:grid-cols-2 lg:mx-0 lg:w-2/6">
            <div className="flex animate-[scroll-horizontal_15s_linear_infinite] flex-row gap-5 sm:animate-[scroll-vertical_30s_linear_infinite] sm:flex-col">
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
            <div className="flex animate-[scroll-horizontal-reverse_15s_linear_infinite] flex-row gap-5 sm:animate-[scroll-vertical-down_30s_linear_infinite] sm:flex-col">
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
  )
}
