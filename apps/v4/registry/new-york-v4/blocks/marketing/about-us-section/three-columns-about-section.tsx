export default function ThreeColumnsAboutSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="mx-auto grid w-full grid-cols-1 items-center justify-start gap-3 sm:max-w-lg lg:max-w-full lg:grid-cols-2 lg:gap-8">
            <div className="inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
              <span className="text-center text-base leading-relaxed font-normal text-gray-400 lg:text-start">
                About Us
              </span>
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                Mastering the Art of Effective Communication in the Workplace.
              </h2>
            </div>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
              This blog delves into techniques for improving clarity, active
              listening, and meaningful interactions with colleagues and
              clients. Learn how to navigate complex conversations.
            </p>
          </div>
          <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 sm:max-w-lg lg:max-w-full lg:flex-row lg:gap-8 lg:px-8">
            <div className="inline-flex w-full flex-col items-start justify-center gap-5 lg:w-auto lg:items-center lg:gap-8 lg:py-12">
              <div className="group flex flex-col items-start justify-start gap-4">
                <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-indigo-50 p-3.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-medium text-black">
                    Trusted Employees
                  </h4>
                  <p className="text-sm leading-normal font-normal text-gray-500">
                    Each member of our team brings a wealth of expertise and a
                    commitment to your success,.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col items-start justify-start gap-4">
                <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-indigo-50 p-3.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-medium text-black">
                    Year of Experience
                  </h4>
                  <p className="text-sm leading-normal font-normal text-gray-500">
                    Explore what defines a successful project and how to achieve
                    it. From meticulous planning.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="order-last h-auto w-full rounded-xl object-cover lg:order-none lg:w-auto"
              src="https://pagedone.io/asset/uploads/1724306185.png"
              alt="About Us image"
            />
            <div className="inline-flex w-full flex-col items-start justify-center gap-5 lg:w-auto lg:gap-8 lg:py-12">
              <div className="group flex flex-col items-start justify-start gap-4">
                <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-indigo-50 p-3.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-medium text-black">
                    Positive Reviews
                  </h4>
                  <p className="text-sm leading-normal font-normal text-gray-500">
                    Discover the impact of positive reviews and how they reflect
                    the quality and satisfaction.
                  </p>
                </div>
              </div>
              <div className="group flex flex-col items-start justify-start gap-4">
                <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-indigo-50 p-3.5 transition-all duration-700 ease-in-out group-hover:bg-indigo-100">
                  {/* SVG removed */}
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-medium text-black">
                    Achieve Awards
                  </h4>
                  <p className="text-sm leading-normal font-normal text-gray-500">
                    Uncover the significance of achieving awards and the
                    recognition they bring.
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
