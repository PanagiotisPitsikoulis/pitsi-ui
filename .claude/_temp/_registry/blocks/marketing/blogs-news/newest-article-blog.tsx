export default function NewestArticleBlog() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Newest Article
            </h2>
            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              Check out our newest article for the latest insights and updates.
            </p>
          </div>
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full h-full rounded-xl flex-col justify-end items-start gap-1 inline-flex relative">
              <img
                src="https://pagedone.io/asset/uploads/1722250657.png"
                alt="Blog and News Image"
                className="rounded-xl w-full lg:h-full h-auto object-cover"
              />
              <div className="p-4 bg-white/5 flex-col justify-end items-start gap-3 flex absolute">
                <div className="justify-start items-start inline-flex">
                  <div className="px-2 py-px bg-gray-100 rounded-full justify-start items-center gap-1.5 flex">
                    <span className="text-center text-gray-700 text-xs font-medium leading-normal">
                      Innovation
                    </span>
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h4 className="text-white text-xl font-semibold leading-8">
                    Green Energy Innovations: The Path to a Sustainable Future
                  </h4>
                  <p className="text-gray-100 text-base font-normal leading-relaxed">
                    Green energy innovations are paving the way to a sustainable
                    future by reducing carbon emissions and promoting renewable
                    resources. Discover the latest advancements driving this
                    critical transition.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-full justify-start items-start gap-6 grid md:grid-cols-12 grid-cols-1">
                <div className="md:col-span-5 col-span-12 w-full h-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start gap-1 inline-flex relative">
                  <img
                    src="https://pagedone.io/asset/uploads/1722250668.png"
                    alt="Blog and News Image"
                    className="rounded-xl lg:h-full h-auto w-full object-cover"
                  />
                  <h4 className="px-5 pb-5 text-white text-xl font-semibold leading-8 absolute">
                    The Role of 5G in Smart Cities
                  </h4>
                </div>
                <div className="md:col-span-7 col-span-12 w-full h-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start gap-1 inline-flex relative">
                  <img
                    src="https://pagedone.io/asset/uploads/1722250678.png"
                    alt="Blog and News Image"
                    className="rounded-xl lg:h-full h-auto w-full object-cover"
                  />
                  <h4 className="px-5 pb-5 text-white text-xl font-semibold leading-8 absolute">
                    Exploring the Future of Remote Workspaces
                  </h4>
                </div>
              </div>
              <div className="w-full justify-start items-start gap-6 grid md:grid-cols-12 grid-cols-1">
                <div className="md:col-span-7 col-span-12 w-full h-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start gap-1 inline-flex relative">
                  <img
                    src="https://pagedone.io/asset/uploads/1722250688.png"
                    alt="Blog and News Image"
                    className="rounded-xl lg:h-full h-auto w-full object-cover"
                  />
                  <h4 className="px-5 pb-5 text-white text-xl font-semibold leading-8 absolute">
                    The Ethical Implications of Deepfake Technology
                  </h4>
                </div>
                <div className="md:col-span-5 col-span-12 w-full h-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start gap-1 inline-flex relative">
                  <img
                    src="https://pagedone.io/asset/uploads/1722250697.png"
                    alt="Blog and News Image"
                    className="rounded-xl lg:h-full h-auto w-full object-cover"
                  />
                  <h4 className="px-5 pb-5 text-white text-xl font-semibold leading-8 absolute">
                    Cybersecurity in the Age of IoT
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
