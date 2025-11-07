export default function IncentivePageWithCardView() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="box border border-gray-300 rounded-2xl py-8 xl:py-11 group cursor-pointer px-4 xl:px-9 flex items-center justify-center flex-col">
            <span className="rounded-xl p-4 bg-indigo-50 mb-6 cursor-pointer shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-100 group-hover:shadow-indigo-200"></span>
            <h5 className="font-manrope font-bold text-2xl leading-9 text-black text-center mb-2">
              Global Service Provide
            </h5>
            <p className="font-normal text-base leading-7 text-black text-center">
              Elevate your design projects to new heights with the global
              services offered by Pagedone.
            </p>
          </div>
          <div className="box border border-gray-300 rounded-2xl py-8 xl:py-11 group cursor-pointer px-4 xl:px-9 flex items-center justify-center flex-col">
            <span className="rounded-xl p-4 bg-indigo-50 mb-6 cursor-pointer shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-100 group-hover:shadow-indigo-200"></span>
            <h5 className="font-manrope font-bold text-2xl leading-9 text-black text-center mb-2">
              24*7 Service provide
            </h5>
            <p className="font-normal text-base leading-7 text-black text-center">
              Experience unparalleled support and accessibility with the "24/7
              Service" feature offered by Pagedone.
            </p>
          </div>
          <div className="box border border-gray-300 rounded-2xl py-8 xl:py-11 group cursor-pointer px-4 xl:px-9 flex items-center justify-center flex-col">
            <span className="rounded-xl p-4 bg-indigo-50 mb-6 cursor-pointer shadow-sm shadow-transparent transition-all duration-500 group-hover:bg-indigo-100 group-hover:shadow-indigo-200"></span>
            <h5 className="font-manrope font-bold text-2xl leading-9 text-black text-center mb-2">
              Download Free
            </h5>
            <p className="font-normal text-base leading-7 text-black text-center">
              Experience unparalleled support and accessibility with the "24/7
              Service" feature offered by Pagedone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
