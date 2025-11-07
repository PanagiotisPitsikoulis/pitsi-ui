export default function SimpleThreeColumnBlogComponent() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-center items-center lg:gap-3 gap-2 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Recent Posts &amp; Stories
            </h2>
            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              Brings you the latest insights, updates, and engaging narratives
              from our community and beyond.
            </p>
          </div>
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-3 grid-cols-1">
            <div className="w-full h-full flex-col justify-start items-start gap-3.5 inline-flex">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1722320944.png"
                alt="Blog and News Image"
              />
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                  June 24, 2024
                </h6>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    How to Create a Sustainable Workout Routine
                  </h4>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    offers guidance on developing a fitness plan that is both
                    effective and maintainable, focusing on balance,
                    consistency, and...
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
              <img
                src="https://pagedone.io/asset/uploads/1722320955.png"
                alt="Blog and News Image"
                className="rounded-xl w-full lg:h-full h-auto object-cover"
              />
              <div className="px-5 pb-5 gap-2.5 flex flex-col absolute">
                <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                  July 12, 2024
                </h6>
                <h4 className="text-white text-xl font-semibold leading-8">
                  How to Choose the Right Career Path for You
                </h4>
              </div>
            </div>
            <div className="w-full h-full flex-col justify-start items-start gap-3.5 inline-flex">
              <img
                className="w-full h-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1722320964.png"
                alt="Blog and News Image"
              />
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                  July 21, 2024
                </h6>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    The Rise of Esports: A New Era of Competitive Gaming
                  </h4>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    A New Era of Competitive Gaming" explores the rapid growth
                    of competitive video gaming, highlighting its impact on
                    entertainment...
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
