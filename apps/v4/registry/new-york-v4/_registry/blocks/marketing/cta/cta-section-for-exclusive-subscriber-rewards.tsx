export default function CtaSectionForExclusiveSubscriberRewards() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-7xl rounded-3xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="col-span-full my-auto flex flex-col gap-5 lg:col-span-5">
            <div className="flex flex-col gap-3.5">
              <h2 className="font-manrope text-center text-4xl leading-[52px] font-bold text-gray-900 lg:text-left">
                Subscribe Now &amp; Claim Your Reward!
              </h2>
              <p className="font-inter text-center text-sm leading-5 font-normal text-gray-600 lg:text-left">
                Subscribe today and unlock your reward! Get access to exclusive
                content, updates, and promotions, and receive a special reward
                as a thank-you for joining our newsletter.
              </p>
            </div>
            <div className="font-inter flex flex-col items-center justify-center gap-3 md:flex-row md:gap-0 lg:items-start lg:justify-start">
              <div className="flex items-center gap-3.5">
                <div className="flex items-center gap-1 text-amber-500 transition-all duration-500">
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                  {/* SVG removed */}
                </div>
                <span className="mr-1 border-gray-600 pr-1 text-base leading-7 font-normal text-gray-600 md:border-r">
                  4.9 Rating
                </span>
              </div>
              <div className="text-base leading-7 font-normal text-gray-600">
                163 Reviews on <a className="text-indigo-600">pagedone</a>
              </div>
            </div>
            <div className="mt-3 flex flex-col items-center justify-center gap-7 sm:flex-row lg:justify-start">
              <button></button>
              <button></button>
            </div>
          </div>
          <img
            src="https://pagedone.io/asset/uploads/1759490105.png"
            alt="image"
            className="col-span-full mx-auto lg:col-span-7"
          />
        </div>
      </div>
    </section>
  )
}
