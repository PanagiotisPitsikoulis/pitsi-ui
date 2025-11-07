export default function FourColumnGridLayoutWithSocialMediaAndCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="block">
            <h2 className="font-manrope mb-2 text-center text-4xl font-bold text-gray-900 lg:text-left">
              Our brilliant team
            </h2>
            <p className="text-center text-lg text-gray-500 xl:text-left">
              These people work on making our product best.
            </p>
          </div>
          <a
            href="javascript:;"
            className="mx-auto block w-48 rounded-xl bg-indigo-600 px-8 py-3 text-center text-base font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 xl:mx-0"
          >
            Join our team
          </a>
        </div>
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 sm:max-w-xl sm:grid-cols-2 md:max-w-xl lg:max-w-full lg:grid-cols-4">
          <div className="group relative w-full transition-all duration-500">
            <img
              src="https://pagedone.io/asset/uploads/1696238665.png"
              alt="Sasha image"
              className="mb-6 h-72 w-full rounded-2xl border-t-2 border-b-2 border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
            />
            <div className="before:content[''] relative mb-4 block pb-4 before:absolute before:bottom-0 before:h-[1px] before:w-10 before:bg-gray-300">
              <h4 className="mb-1 text-lg font-medium text-gray-900">
                Sasha Grey
              </h4>
              <p className="text-sm text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                Design Lead
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </div>
          <div className="group relative w-full transition-all duration-500">
            <img
              src="https://pagedone.io/asset/uploads/1696238852.png"
              alt="Nikita image"
              className="mb-6 h-72 w-full rounded-2xl border-t-2 border-b-2 border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
            />
            <div className="before:content[''] relative mb-4 block pb-4 before:absolute before:bottom-0 before:h-[1px] before:w-10 before:bg-gray-300">
              <h4 className="mb-1 text-lg font-medium text-gray-900">
                Nikita Xing
              </h4>
              <p className="text-sm text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                Product Manager
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </div>
          <div className="group relative w-full transition-all duration-500">
            <img
              src="https://pagedone.io/asset/uploads/1696238954.png"
              alt="Anuj image"
              className="mb-6 h-72 w-full rounded-2xl border-t-2 border-b-2 border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
            />
            <div className="before:content[''] relative mb-4 block pb-4 before:absolute before:bottom-0 before:h-[1px] before:w-10 before:bg-gray-300">
              <h4 className="mb-1 text-lg font-medium text-gray-900">
                Anuj mishra
              </h4>
              <p className="text-sm text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                Creative Leader
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </div>
          <div className="group relative w-full transition-all duration-500">
            <img
              src="https://pagedone.io/asset/uploads/1696238771.png"
              alt="Alexa image"
              className="mb-6 h-72 w-full rounded-2xl border-t-2 border-b-2 border-transparent object-cover transition-all duration-500 group-hover:border-indigo-600"
            />
            <div className="before:content[''] relative mb-4 block pb-4 before:absolute before:bottom-0 before:h-[1px] before:w-10 before:bg-gray-300">
              <h4 className="mb-1 text-lg font-medium text-gray-900">
                Alexa Monic
              </h4>
              <p className="text-sm text-gray-500 transition-all duration-500 group-hover:text-indigo-600">
                Marketing Head
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
              <a href="javascript:;"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
