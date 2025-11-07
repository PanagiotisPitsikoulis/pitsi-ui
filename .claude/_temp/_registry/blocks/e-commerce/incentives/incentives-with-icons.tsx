export default function IncentivesWithIcons() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="box font-manrope font-semibold text-2xl leading-9 md:text-3xl md:leading-10 text-black max-w-lg max-lg:mx-auto max-sm:text-center">
            There are the systems that offer nearby listing and competitive
            prices &amp; offer.
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-lg:max-w-lg max-lg:mx-auto">
            <div className="flex flex-col max-sm:items-center group cursor-grab">
              <p className="p-2 w-max h-max rounded-full cursor-pointer bg-white max-sm:mx-auto transition-all duration-500 group-hover:bg-indigo-100"></p>
              <p className="mt-3 font-medium max-sm:text-center text-sm leading-6 text-gray-500">
                User who are using actually our system
              </p>
            </div>
            <div className="flex flex-col max-sm:items-center group cursor-grab">
              <p className="p-2 w-max h-max rounded-full cursor-pointer bg-white transition-all duration-500 group-hover:bg-indigo-100"></p>
              <p className="mt-3 font-medium max-sm:text-center text-sm leading-6 text-gray-500">
                Actual Data base on the our system
              </p>
            </div>
            <div className="flex flex-col max-sm:items-center group cursor-grab">
              <p className="p-2 w-max h-max rounded-full cursor-pointer bg-white transition-all duration-500 group-hover:bg-indigo-100"></p>
              <p className="mt-3 font-medium max-sm:text-center text-sm leading-6 text-gray-500">
                Withdraw your payment any where &amp; time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
