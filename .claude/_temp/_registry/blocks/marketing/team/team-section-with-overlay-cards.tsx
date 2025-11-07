export default function TeamSectionWithOverlayCards() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">
            Our brilliant team of{" "}
            <span className="text-indigo-600">Pagedone</span>{" "}
          </h2>
          <p className="text-xl text-gray-500 font-medium text-center">
            These people work on making our product best.
          </p>
        </div>
        <div className="flex justify-center items-center  gap-8 flex-col lg:flex-nowrap lg:flex-row lg:justify-between">
          <div className="block group ">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238702.png"
                alt="Cody image"
                className="w-full h-[28rem] rounded-2xl  transition-all duration-500 object-cover max-w-sm"
              />
            </div>
            <div className="bg-white border border-solid border-gray-200 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] rounded-2xl mx-7 relative z-10 p-5 -translate-y-12">
              <h4 className="text-xl font-medium text-gray-900 mb-2 capitalize text-center transition-all duration-500 ">
                Cody Fisher{" "}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 ">
                Founder
              </span>
            </div>
          </div>
          <div className="block group ">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238805.png"
                alt="Michael image"
                className="w-full h-[28rem] rounded-2xl  transition-all duration-500 object-cover max-w-sm"
              />
            </div>
            <div className="bg-white border border-solid border-gray-200 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] rounded-2xl mx-7 relative z-10 p-5 -translate-y-12">
              <h4 className="text-xl font-medium text-gray-900 mb-2 capitalize text-center transition-all duration-500 ">
                Michael Cannon{" "}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 ">
                Sales Executive
              </span>
            </div>
          </div>
          <div className="block group ">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1696238665.png"
                alt="Alexa image"
                className="w-full h-[28rem] rounded-2xl  transition-all duration-500 object-cover max-w-sm"
              />
            </div>
            <div className="bg-white border border-solid border-gray-200 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] rounded-2xl mx-7 relative z-10 p-5 -translate-y-12">
              <h4 className="text-xl font-medium text-gray-900 mb-2 capitalize text-center transition-all duration-500 ">
                Alexa Kim{" "}
              </h4>
              <span className="text-gray-500 text-center block transition-all duration-500 ">
                Product Manager
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
