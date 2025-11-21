export default function ImageInGridIncentiveSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="box font-manrope max-w-lg text-2xl leading-9 font-semibold text-black max-lg:mx-auto max-sm:text-center md:text-3xl md:leading-10">
            There are the systems that offer nearby listing and competitive
            prices &amp; offer.
          </div>
          <div className="grid gap-4 max-lg:mx-auto max-lg:max-w-lg sm:grid-cols-2 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group flex cursor-grab flex-col max-sm:items-center">
              <p className="h-max w-max cursor-pointer rounded-full bg-white p-2 transition-all duration-500 group-hover:bg-indigo-100 max-sm:mx-auto"></p>
              <p className="mt-3 text-sm leading-6 font-medium text-gray-500 max-sm:text-center">
                User who are using actually our system
              </p>
            </div>
            <div className="group flex cursor-grab flex-col max-sm:items-center">
              <p className="h-max w-max cursor-pointer rounded-full bg-white p-2 transition-all duration-500 group-hover:bg-indigo-100"></p>
              <p className="mt-3 text-sm leading-6 font-medium text-gray-500 max-sm:text-center">
                Actual Data base on the our system
              </p>
            </div>
            <div className="group flex cursor-grab flex-col max-sm:items-center">
              <p className="h-max w-max cursor-pointer rounded-full bg-white p-2 transition-all duration-500 group-hover:bg-indigo-100"></p>
              <p className="mt-3 text-sm leading-6 font-medium text-gray-500 max-sm:text-center">
                Withdraw your payment any where &amp; time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
