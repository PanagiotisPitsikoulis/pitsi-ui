export default function NewestArticleBlog() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Newest Article
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Check out our newest article for the latest insights and updates.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2">
            <div className="relative inline-flex h-full w-full flex-col items-start justify-end gap-1 rounded-xl">
              <img
                src="https://pagedone.io/asset/uploads/1722250657.png"
                alt="Blog and News Image"
                className="h-auto w-full rounded-xl object-cover lg:h-full"
              />
              <div className="absolute flex flex-col items-start justify-end gap-3 bg-white/5 p-4">
                <div className="inline-flex items-start justify-start">
                  <div className="flex items-center justify-start gap-1.5 rounded-full bg-gray-100 px-2 py-px">
                    <span className="text-center text-xs leading-normal font-medium text-gray-700">
                      Innovation
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h4 className="text-xl leading-8 font-semibold text-white">
                    Green Energy Innovations: The Path to a Sustainable Future
                  </h4>
                  <p className="text-base leading-relaxed font-normal text-gray-100">
                    Green energy innovations are paving the way to a sustainable
                    future by reducing carbon emissions and promoting renewable
                    resources. Discover the latest advancements driving this
                    critical transition.
                  </p>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full flex-col items-start justify-start gap-6">
              <div className="grid w-full grid-cols-1 items-start justify-start gap-6 md:grid-cols-12">
                <div className="relative col-span-12 inline-flex h-full w-full flex-col items-start justify-end gap-1 rounded-xl bg-gradient-to-b from-black to-black md:col-span-5">
                  <img
                    src="https://pagedone.io/asset/uploads/1722250668.png"
                    alt="Blog and News Image"
                    className="h-auto w-full rounded-xl object-cover lg:h-full"
                  />
                  <h4 className="absolute px-5 pb-5 text-xl leading-8 font-semibold text-white">
                    The Role of 5G in Smart Cities
                  </h4>
                </div>
                <div className="relative col-span-12 inline-flex h-full w-full flex-col items-start justify-end gap-1 rounded-xl bg-gradient-to-b from-black to-black md:col-span-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1722250678.png"
                    alt="Blog and News Image"
                    className="h-auto w-full rounded-xl object-cover lg:h-full"
                  />
                  <h4 className="absolute px-5 pb-5 text-xl leading-8 font-semibold text-white">
                    Exploring the Future of Remote Workspaces
                  </h4>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 items-start justify-start gap-6 md:grid-cols-12">
                <div className="relative col-span-12 inline-flex h-full w-full flex-col items-start justify-end gap-1 rounded-xl bg-gradient-to-b from-black to-black md:col-span-7">
                  <img
                    src="https://pagedone.io/asset/uploads/1722250688.png"
                    alt="Blog and News Image"
                    className="h-auto w-full rounded-xl object-cover lg:h-full"
                  />
                  <h4 className="absolute px-5 pb-5 text-xl leading-8 font-semibold text-white">
                    The Ethical Implications of Deepfake Technology
                  </h4>
                </div>
                <div className="relative col-span-12 inline-flex h-full w-full flex-col items-start justify-end gap-1 rounded-xl bg-gradient-to-b from-black to-black md:col-span-5">
                  <img
                    src="https://pagedone.io/asset/uploads/1722250697.png"
                    alt="Blog and News Image"
                    className="h-auto w-full rounded-xl object-cover lg:h-full"
                  />
                  <h4 className="absolute px-5 pb-5 text-xl leading-8 font-semibold text-white">
                    Cybersecurity in the Age of IoT
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
