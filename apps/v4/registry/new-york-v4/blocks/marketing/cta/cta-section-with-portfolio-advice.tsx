export default function CtaSectionWithPortfolioAdvice() {
  return (
    <section className="py-16">
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-green-800 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 p-4 sm:p-10 lg:flex-row lg:gap-0 lg:p-20">
          <div className="font-inter grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h6 className="mb-1 text-center text-base leading-6 font-medium text-white lg:text-left">
                OUR FUTURE
              </h6>
              <h2 className="font-manrope text-center text-4xl font-bold text-white lg:text-left">
                Get professional advice for your portfolio growth.
              </h2>
              <p className="font-inter mt-5 text-center text-base leading-6 font-normal text-gray-200 lg:text-left">
                Join our community of subscribers and receive regular updates
                delivered straight to your inbox. It's quick, easy, and free
              </p>
              <div className="pt-8">
                <button className="font-inter mx-auto flex w-36 items-center justify-center rounded-xl bg-white px-5 py-2.5 text-base leading-7 font-semibold text-green-800 transition-all duration-500 hover:bg-gray-200 lg:mx-0">
                  Get Quote
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-3.5">
              <div className="col-span-7">
                <img
                  src="https://pagedone.io/asset/uploads/1759488816.png"
                  alt="image"
                  className="h-full w-full"
                />
              </div>
              <div className="col-span-5 flex flex-col gap-3.5">
                <img
                  src="https://pagedone.io/asset/uploads/1759488826.png"
                  alt="image"
                  className="h-full w-full"
                />
                <img
                  src="https://pagedone.io/asset/uploads/1759488838.png
                      "
                  alt="image"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
