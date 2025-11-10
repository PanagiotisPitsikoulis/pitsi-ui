export default function SimpleThreeColumnBlogComponent() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-2 lg:gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Recent Posts &amp; Stories
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Brings you the latest insights, updates, and engaging narratives
              from our community and beyond.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-3">
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-3.5">
              <img
                className="h-auto w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1722320944.png"
                alt="Blog and News Image"
              />
              <div className="flex flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h6 className="text-base leading-relaxed font-medium text-gray-600">
                  June 24, 2024
                </h6>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    How to Create a Sustainable Workout Routine
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    offers guidance on developing a fitness plan that is both
                    effective and maintainable, focusing on balance,
                    consistency, and...
                  </p>
                </div>
              </div>
            </div>
            <div className="relative inline-flex h-full w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
              <img
                src="https://pagedone.io/asset/uploads/1722320955.png"
                alt="Blog and News Image"
                className="h-auto w-full rounded-xl object-cover lg:h-full"
              />
              <div className="absolute flex flex-col gap-2.5 px-5 pb-5">
                <h6 className="text-base leading-relaxed font-medium text-gray-100">
                  July 12, 2024
                </h6>
                <h4 className="text-xl leading-8 font-semibold text-white">
                  How to Choose the Right Career Path for You
                </h4>
              </div>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-3.5">
              <img
                className="h-auto w-full rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1722320964.png"
                alt="Blog and News Image"
              />
              <div className="flex flex-col items-start justify-start gap-2.5 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <h6 className="text-base leading-relaxed font-medium text-gray-600">
                  July 21, 2024
                </h6>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    The Rise of Esports: A New Era of Competitive Gaming
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
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
  )
}
