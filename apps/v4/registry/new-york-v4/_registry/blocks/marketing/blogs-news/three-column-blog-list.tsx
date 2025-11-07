export default function ThreeColumnBlogList() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-3 lg:items-start">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Discover Inspiration
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
              Find the inspiration you need to spark innovation and fresh ideas.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-3">
            <div className="relative inline-flex h-full w-full flex-col items-start justify-end rounded-xl bg-gradient-to-b from-black to-black">
              <img
                src="https://pagedone.io/asset/uploads/1722248739.png"
                alt="Blog nad News Image"
                className="h-auto w-full rounded-xl object-cover lg:h-full"
              />
              <div className="absolute flex flex-col gap-1 px-5 pb-5">
                <h4 className="text-xl leading-8 font-semibold text-white">
                  AI-Driven Personal Assistants: Enhancing Productivity and
                  Daily Life
                </h4>
                <h6 className="text-base leading-relaxed font-medium text-gray-100">
                  10 August 2024
                </h6>
              </div>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-start gap-6">
              <div className="relative flex h-full w-full flex-col items-start justify-end gap-1 rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722248751.png"
                  alt="Blog nad News Image"
                  className="h-auto w-full rounded-xl object-cover lg:h-full"
                />
                <div className="absolute flex flex-col gap-1 px-5 pb-5">
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    How Blockchain is Revolutionizing Supply Chain Management
                  </h4>
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    14 August 2024
                  </h6>
                </div>
              </div>
              <div className="relative flex h-full w-full flex-col items-start justify-end gap-1 rounded-xl bg-gradient-to-b from-black to-black">
                <img
                  src="https://pagedone.io/asset/uploads/1722248763.png"
                  alt="Blog nad News Image"
                  className="h-auto w-full rounded-xl object-cover lg:h-full"
                />
                <div className="absolute flex flex-col gap-1 px-5 pb-5">
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    The Role of Augmented Reality in Transforming Retail
                    Experiences
                  </h4>
                  <h6 className="text-base leading-relaxed font-medium text-gray-100">
                    20 August 2024
                  </h6>
                </div>
              </div>
            </div>
            <div className="inline-flex h-full w-full flex-col items-start justify-center gap-6">
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <img
                  className="h-auto w-full rounded-lg object-cover sm:w-auto"
                  src="https://pagedone.io/asset/uploads/1722248773.png"
                  alt="Blog nad News Image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1">
                  <h6 className="text-base leading-relaxed font-medium text-gray-600">
                    7 July 2024
                  </h6>
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    The Role of AI in Enhancing Mental Health
                  </h4>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <img
                  className="h-auto w-full rounded-lg object-cover sm:w-auto"
                  src="https://pagedone.io/asset/uploads/1722248783.png"
                  alt="Blog nad News Image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1">
                  <h6 className="text-base leading-relaxed font-medium text-gray-600">
                    20 July 2024
                  </h6>
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    Exploring the Potential of CRISPR Technology
                  </h4>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <img
                  className="h-auto w-full rounded-lg object-cover sm:w-auto"
                  src="https://pagedone.io/asset/uploads/1722248830.png"
                  alt="Blog nad News Image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1">
                  <h6 className="text-base leading-relaxed font-medium text-gray-600">
                    28 July 2024
                  </h6>
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    The Evolution of Voice Technology
                  </h4>
                </div>
              </div>
              <div className="flex w-full flex-col items-center justify-start gap-5 sm:flex-row">
                <img
                  className="h-auto w-full rounded-lg object-cover sm:w-auto"
                  src="https://pagedone.io/asset/uploads/1722248841.png"
                  alt="Blog nad News Image"
                />
                <div className="inline-flex w-full flex-col items-start justify-start gap-1">
                  <h6 className="text-base leading-relaxed font-medium text-gray-600">
                    4 August 2024{" "}
                  </h6>
                  <h4 className="text-xl leading-8 font-medium text-gray-900">
                    The Future of Sustainable Urban Farming
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
