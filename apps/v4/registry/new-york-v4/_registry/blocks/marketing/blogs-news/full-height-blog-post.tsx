export default function FullHeightBlogPost() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-2 lg:gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
              Comprehensive Guide to Evaluating
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
              This blog highlights a series of recent endeavors, providing
              insights into the design, development, and execution of each
              project. From residential renovations and commercial builds to
              landscape
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-8 lg:grid-cols-2">
            <div className="relative inline-flex w-full flex-col items-center justify-end rounded-sm bg-gradient-to-b from-black to-black">
              <img
                src="https://pagedone.io/asset/uploads/1722319971.png"
                alt="Blog nad News Image"
                className="h-auto w-full rounded-sm object-cover"
              />
              <div className="absolute flex flex-col items-start justify-start gap-3.5 p-8">
                <h6 className="text-base leading-relaxed font-medium text-white">
                  Marketing
                </h6>
                <div className="flex flex-col items-start justify-start gap-3">
                  <h3 className="font-manrope text-3xl leading-normal font-semibold text-white">
                    Clever Ways to Organize Your Life{" "}
                  </h3>
                  <p className="text-xs leading-normal font-medium text-gray-300">
                    Discover our customized solutions tailored to meet the
                    unique needs of your industry. We provide innovative and
                    specialized services designed to enhance efficiency, drive
                    growth, and achieve your business objectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inline-flex w-full flex-col items-center justify-end rounded-sm bg-gradient-to-b from-black to-black">
              <img
                src="https://pagedone.io/asset/uploads/1722319981.png"
                alt="Blog nad News Image"
                className="h-auto w-full rounded-sm object-cover"
              />
              <div className="absolute flex flex-col items-start justify-start gap-3.5 p-8">
                <h6 className="text-base leading-relaxed font-medium text-white">
                  Business
                </h6>
                <div className="flex flex-col items-start justify-start gap-3">
                  <h3 className="font-manrope text-3xl leading-normal font-semibold text-white">
                    How to analyze every holdings
                  </h3>
                  <p className="text-xs leading-normal font-medium text-gray-300">
                    We cover essential strategies for evaluating performance,
                    assessing risk, and making informed investment decisions,
                    helping you to maximize returns and minimize potential
                    losses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
