export default function CtaSectionForExclusiveSubscriberRewards() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="col-span-full lg:col-span-5 flex flex-col gap-5 my-auto">
            <div className="flex flex-col gap-3.5 ">
              <h2 className="text-4xl font-bold font-manrope text-gray-900 text-center lg:text-left leading-[52px]">
                Subscribe Now &amp; Claim Your Reward!
              </h2>
              <p className="text-sm font-normal leading-5 text-gray-600 text-center lg:text-left font-inter">
                Subscribe today and unlock your reward! Get access to exclusive
                content, updates, and promotions, and receive a special reward
                as a thank-you for joining our newsletter.
              </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-0 lg:items-start flex-col md:flex-row font-inter">
              <div className="flex items-center gap-3.5">
                <div className="flex items-center gap-1 text-amber-500 transition-all duration-500 ">
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                </div>
                <span className="text-base font-normal leading-7 text-gray-600 md:border-r border-gray-600 mr-1 pr-1">
                  4.9 Rating
                </span>
              </div>
              <div className="text-base font-normal leading-7 text-gray-600">
                163 Reviews on <a className="text-indigo-600">pagedone</a>
              </div>
            </div>
            <div className="flex flex-col justify-center lg:justify-start sm:flex-row items-center gap-7 mt-3">
              <button></button>
              <button></button>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1759490105.png"
            alt="image"
            className="col-span-full lg:col-span-7 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
