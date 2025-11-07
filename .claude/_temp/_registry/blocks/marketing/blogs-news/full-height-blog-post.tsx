export default function FullHeightBlogPost() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center lg:gap-3 gap-2 flex">
            <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
              Comprehensive Guide to Evaluating
            </h2>
            <p className="lg:max-w-4xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              This blog highlights a series of recent endeavors, providing
              insights into the design, development, and execution of each
              project. From residential renovations and commercial builds to
              landscape
            </p>
          </div>
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full bg-gradient-to-b from-black to-black rounded-sm flex-col justify-end items-center inline-flex relative">
              <img
                src="https://pagedone.io/asset/uploads/1722319971.png"
                alt="Blog nad News Image"
                className="rounded-sm w-full h-auto object-cover"
              />
              <div className="p-8 flex-col justify-start items-start gap-3.5 flex absolute">
                <h6 className="text-white text-base font-medium leading-relaxed">
                  Marketing
                </h6>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h3 className="text-white text-3xl font-semibold font-manrope leading-normal">
                    Clever Ways to Organize Your Life{" "}
                  </h3>
                  <p className="text-gray-300 text-xs font-medium leading-normal">
                    Discover our customized solutions tailored to meet the
                    unique needs of your industry. We provide innovative and
                    specialized services designed to enhance efficiency, drive
                    growth, and achieve your business objectives.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-gradient-to-b from-black to-black rounded-sm flex-col justify-end items-center inline-flex relative">
              <img
                src="https://pagedone.io/asset/uploads/1722319981.png"
                alt="Blog nad News Image"
                className="rounded-sm w-full h-auto object-cover"
              />
              <div className="p-8 flex-col justify-start items-start gap-3.5 flex absolute">
                <h6 className="text-white text-base font-medium leading-relaxed">
                  Business
                </h6>
                <div className="flex-col justify-start items-start gap-3 flex">
                  <h3 className="text-white text-3xl font-semibold font-manrope leading-normal">
                    How to analyze every holdings
                  </h3>
                  <p className="text-gray-300 text-xs font-medium leading-normal">
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
  );
}
