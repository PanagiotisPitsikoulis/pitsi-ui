export default function HorizontalCardsBlock() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 ">
          <h2 className="text-4xl  font-bold text-gray-900 text-center">
            What our happy users says!{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center flex-wrap gap-8 md:flex-nowrap md:flex-row lg:justify-between max-w-lg md:max-w-full mx-auto">
          <div className="flex w-full flex-col lg:flex-row lg:w-1/2 relative py-6 lg:py-11 lg:gap-0 xl:gap-8">
            <div className="bg-gray-100 rounded-xl w-full h-full lg:w-60 xl:h-56 absolute top-0" />
            <div className="p-5  flex flex-col justify-center items-center  relative lg:items-start">
              <h6 className="text-base font-medium text-gray-900 whitespace-nowrap">
                Isabella Martinez
              </h6>
              <span className="text-sm text-indigo-600">Product Designer</span>
              <div className="flex items-center gap-1 mt-5">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
            </div>
            <div className="flex items-center gap-8 px-5 flex-col relative lg:flex-row lg:px-0">
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1709788090.png"
                alt="Harsh image"
              />
              <p className="text-lg text-gray-600 text-center w-full lg:w-56 lg:text-left">
                I've been using pagedone for a year now and it's made managing
                my finances easier.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row lg:w-1/2 relative py-6 lg:py-11 max-lg:h-full lg:gap-0 xl:gap-8">
            <div className="bg-gray-100 rounded-xl w-full h-full lg:w-60 xl:h-56 absolute top-0" />
            <div className="p-5  flex flex-col justify-center items-center  relative lg:items-start">
              <h6 className="text-base font-medium text-gray-900">
                Matthew Be.
              </h6>
              <span className="text-sm text-indigo-600">Sales Manager</span>
              <div className="flex items-center gap-1 mt-5">
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
                {/* SVG removed */}
              </div>
            </div>
            <div className="flex items-center gap-8 px-5 flex-col relative lg:flex-row lg:px-0">
              <img
                className="rounded-2xl object-cover"
                src="https://pagedone.io/asset/uploads/1709788110.png"
                alt="Naina image"
              />
              <p className="text-lg text-gray-600 text-center w-full lg:w-56 lg:text-left">
                Our revenue grew to 144% more after just one month of use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
