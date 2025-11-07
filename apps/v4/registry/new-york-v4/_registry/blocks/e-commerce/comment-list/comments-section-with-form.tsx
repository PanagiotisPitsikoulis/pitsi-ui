export default function CommentsSectionWithForm() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-14">
          <h2 className="font-manrope w-full text-4xl leading-normal font-bold text-gray-900">
            Comments
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-5">
            <div className="inline-flex w-full items-start justify-start gap-3.5 rounded-3xl">
              <img
                className="h-10 w-10 object-cover"
                src="https://pagedone.io/asset/uploads/1710225753.png"
                alt="John smith image"
              />
              <textarea
                name=""
                rows={5}
                className="w-full resize-none rounded-2xl border border-gray-300 px-5 py-3 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Write a your thoughts here...."
              />
            </div>
            <button className="flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Post your comment
              </span>
            </button>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="inline-flex w-full items-start justify-start gap-2.5 border-b border-gray-300 pb-6">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://pagedone.io/asset/uploads/1710226776.png"
                alt="Mia Thompson image"
              />
              <div className="inline-flex w-full flex-col items-start justify-start gap-3.5">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <div className="inline-flex w-full items-start justify-between gap-1">
                    <h5 className="text-sm leading-snug font-semibold text-gray-900">
                      Mia Thompson
                    </h5>
                    <span className="text-right text-xs leading-5 font-normal text-gray-500">
                      12 hour ago
                    </span>
                  </div>
                  <h5 className="text-sm leading-snug font-normal text-gray-800">
                    In vestibulum sed aliquet id turpis. Sagittis sed sed
                    adipiscing velit habitant quam. Neque feugiat consectetur
                    consectetur turpis.
                  </h5>
                </div>
                <div className="inline-flex items-start justify-start gap-5">
                  <a className="group flex h-5 w-5 items-center justify-center"></a>
                  <a className="group flex h-5 w-5 items-center justify-center"></a>
                  <a className="group flex h-5 w-5 items-center justify-center"></a>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full items-start justify-start gap-2.5 border-b border-gray-300 pb-6">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://pagedone.io/asset/uploads/1710238051.png"
                alt="Emma Davis image"
              />
              <div className="inline-flex w-full flex-col items-start justify-start gap-3.5">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <div className="inline-flex w-full items-start justify-between gap-1">
                    <h5 className="text-sm leading-snug font-semibold text-gray-900">
                      Emma Davis
                    </h5>
                    <span className="text-right text-xs leading-5 font-normal text-gray-500">
                      2 Day ago
                    </span>
                  </div>
                  <h5 className="text-sm leading-snug font-normal text-gray-800">
                    Rutrum enim commodo est tristique vitae ut porta euismod
                    cras. Id quis at donec duis scelerisque. Diam magnis
                    adipiscing tellus sapien diam neque porta nullam lectus.
                    Velit ornare odio ornare congue eleifend turpis nulla diam.
                    Pharetra pellentesque ultrices sollicitudin phasellus
                    suspendisse.
                  </h5>
                </div>
                <div className="inline-flex items-start justify-start gap-5">
                  <a className="group flex h-5 w-5 items-center justify-center"></a>
                  <a className="group flex h-5 w-5 items-center justify-center"></a>
                  <a className="group flex h-5 w-5 items-center justify-center"></a>
                </div>
              </div>
            </div>
            <div className="inline-flex w-full items-start justify-start gap-2.5 border-b border-gray-300 pb-6">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://pagedone.io/asset/uploads/1710225753.png"
                alt="James Miller image"
              />
              <div className="inline-flex w-full flex-col items-start justify-start gap-3.5">
                <div className="flex w-full flex-col items-start justify-start gap-1">
                  <div className="inline-flex w-full items-start justify-between gap-1">
                    <h5 className="text-sm leading-snug font-semibold text-gray-900">
                      James Miller
                    </h5>
                    <span className="text-right text-xs leading-5 font-normal text-gray-500">
                      5 Day ago
                    </span>
                  </div>
                  <h5 className="text-sm leading-snug font-normal text-gray-800">
                    Lectus quis ac quis lectus elit. Dolor tortor eu tristique
                    malesuada. Quis dictumst nulla vitae velit nisi. Volutpat
                    enim turpis dignissim.
                  </h5>
                </div>
                <div className="inline-flex items-start justify-start gap-5">
                  <a className="group flex h-5 w-5 items-center justify-center"></a>
                  <a className="group flex h-5 w-5 items-center justify-center"></a>
                  <a className="group flex h-5 w-5 items-center justify-center"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
