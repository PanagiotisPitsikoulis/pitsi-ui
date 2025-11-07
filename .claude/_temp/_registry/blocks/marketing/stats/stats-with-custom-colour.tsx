export default function StatsWithCustomColour() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 xl:gap-14 lg:flex-row lg:justify-between">
          <div className="w-full lg:w-1/3 ">
            <div className="font-manrope font-bold text-5xl text-indigo-600 mb-6 text-center ">
              13M+
            </div>
            <p className="text-lg text-gray-500 leading-7 text-center">
              We have reach more than 13 millions user in around the world
            </p>
          </div>
          <div className="w-full lg:w-1/3 ">
            <div className="font-manrope font-bold text-5xl text-indigo-600 mb-6 text-center ">
              50M+
            </div>
            <p className="text-lg text-gray-500 leading-7 text-center">
              Pagedone is one of most downloaded on google play store &amp;
              apple store
            </p>
          </div>
          <div className="w-full lg:w-1/3 ">
            <div className="font-manrope font-bold text-5xl text-indigo-600 mb-6 text-center ">
              98%
            </div>
            <p className="text-lg text-gray-500 leading-7 text-center">
              Our user are satisfied using our services in their daily site
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
