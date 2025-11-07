export default function ThreeColumnsAboutSection() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="lg:max-w-full sm:max-w-lg w-full mx-auto justify-start items-center lg:gap-8 gap-3 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 inline-flex">
              <span className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                About Us
              </span>
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Mastering the Art of Effective Communication in the Workplace.
              </h2>
            </div>
            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              This blog delves into techniques for improving clarity, active
              listening, and meaningful interactions with colleagues and
              clients. Learn how to navigate complex conversations.
            </p>
          </div>
          <div className="lg:max-w-full sm:max-w-lg w-full mx-auto lg:px-8 justify-center items-center lg:gap-8 gap-6 flex lg:flex-row flex-col">
            <div className="lg:w-auto w-full lg:py-12 flex-col justify-center lg:items-center items-start lg:gap-8 gap-5 inline-flex">
              <div className="group flex-col justify-start items-start gap-4 flex">
                <div className="w-[60px] h-[60px] p-3.5 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h4 className="text-black text-xl font-medium leading-8">
                    Trusted Employees
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-normal">
                    Each member of our team brings a wealth of expertise and a
                    commitment to your success,.
                  </p>
                </div>
              </div>
              <div className="group flex-col justify-start items-start gap-4 flex">
                <div className="w-[60px] h-[60px] p-3.5 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h4 className="text-black text-xl font-medium leading-8">
                    Year of Experience
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-normal">
                    Explore what defines a successful project and how to achieve
                    it. From meticulous planning.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="rounded-xl lg:w-auto w-full h-auto object-cover lg:order-none order-last"
              src="https://pagedone.io/asset/uploads/1724306185.png"
              alt="About Us image"
            />
            <div className="lg:w-auto w-full lg:py-12 flex-col justify-center items-start lg:gap-8 gap-5 inline-flex">
              <div className="group flex-col justify-start items-start gap-4 flex">
                <div className="w-[60px] h-[60px] p-3.5 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h4 className="text-black text-xl font-medium leading-8">
                    Positive Reviews
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-normal">
                    Discover the impact of positive reviews and how they reflect
                    the quality and satisfaction.
                  </p>
                </div>
              </div>
              <div className="group flex-col justify-start items-start gap-4 flex">
                <div className="w-[60px] h-[60px] p-3.5 bg-indigo-50 group-hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center inline-flex">
                  {/* SVG removed */}
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h4 className="text-black text-xl font-medium leading-8">
                    Achieve Awards
                  </h4>
                  <p className="text-gray-500 text-sm font-normal leading-normal">
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
  );
}
