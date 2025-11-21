export default function SideBySideImageAboutUsTemplate() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-7">
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:gap-8">
              <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                <h5 className="text-center text-lg leading-relaxed font-normal text-orange-500 lg:text-start">
                  Discover Our Vision
                </h5>
                <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                  We Make Life Easier With Smart, Effective Solutions
                </h2>
              </div>
              <img
                className="h-auto w-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1724138640.png"
                alt="About Us image"
              />
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:gap-11">
              <img
                className="h-auto w-full rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1724138653.png"
                alt="About Us image"
              />
              <div className="grid w-full grid-cols-1 items-center justify-end gap-5 sm:grid-cols-3">
                <div className="inline-flex h-full w-full flex-col items-center justify-start gap-0.5 rounded-2xl bg-gray-100 p-3">
                  <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-orange-500">
                    94%
                  </h3>
                  <h6 className="text-center text-base leading-relaxed font-normal text-orange-500">
                    Happy Clients
                  </h6>
                </div>
                <div className="inline-flex h-full w-full flex-col items-center justify-start gap-0.5 rounded-2xl bg-gray-100 p-3">
                  <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-orange-500">
                    20
                  </h3>
                  <h6 className="text-center text-base leading-relaxed font-normal text-orange-500">
                    Year of Experience
                  </h6>
                </div>
                <div className="inline-flex h-full w-full flex-col items-center justify-start gap-0.5 rounded-2xl bg-gray-100 p-3">
                  <h3 className="font-manrope text-center text-3xl leading-normal font-bold text-orange-500">
                    10k+
                  </h3>
                  <h6 className="text-center text-base leading-relaxed font-normal text-orange-500">
                    Completed Project
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <p className="text-base leading-relaxed font-normal text-gray-500">
            Our smart and effective solutions simplify everyday life for our
            customers, offering convenience and efficiency in every interaction.
            We are dedicated to delivering innovations that make a real
            difference, enhancing the overall customer experience and
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  )
}
