export default function CommentsSectionWithForm() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
          <h2 className="w-full text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Comments
          </h2>
          <div className="w-full flex-col justify-start items-start gap-5 flex">
            <div className="w-full rounded-3xl justify-start items-start gap-3.5 inline-flex">
              <img
                className="w-10 h-10 object-cover"
                src="https://pagedone.io/asset/uploads/1710225753.png"
                alt="John smith image"
              />
              <textarea
                name=""
                rows={5}
                className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] resize-none focus:outline-none placeholder-gray-400 text-gray-900 text-lg font-normal leading-7"
                placeholder="Write a your thoughts here...."
              />
            </div>
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Post your comment
              </span>
            </button>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full pb-6 border-b border-gray-300 justify-start items-start gap-2.5 inline-flex">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://pagedone.io/asset/uploads/1710226776.png"
                alt="Mia Thompson image"
              />
              <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                <div className="w-full justify-start items-start flex-col flex gap-1">
                  <div className="w-full justify-between items-start gap-1 inline-flex">
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                      Mia Thompson
                    </h5>
                    <span className="text-right text-gray-500 text-xs font-normal leading-5">
                      12 hour ago
                    </span>
                  </div>
                  <h5 className="text-gray-800 text-sm font-normal leading-snug">
                    In vestibulum sed aliquet id turpis. Sagittis sed sed
                    adipiscing velit habitant quam. Neque feugiat consectetur
                    consectetur turpis.
                  </h5>
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <a className="w-5 h-5 flex items-center justify-center group"></a>
                  <a className="w-5 h-5 flex items-center justify-center group"></a>
                  <a className="w-5 h-5 flex items-center justify-center group"></a>
                </div>
              </div>
            </div>
            <div className="w-full pb-6 border-b border-gray-300 justify-start items-start gap-2.5 inline-flex">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://pagedone.io/asset/uploads/1710238051.png"
                alt="Emma Davis image"
              />
              <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                <div className="w-full justify-start items-start flex-col flex gap-1">
                  <div className="w-full justify-between items-start gap-1 inline-flex">
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                      Emma Davis
                    </h5>
                    <span className="text-right text-gray-500 text-xs font-normal leading-5">
                      2 Day ago
                    </span>
                  </div>
                  <h5 className="text-gray-800 text-sm font-normal leading-snug">
                    Rutrum enim commodo est tristique vitae ut porta euismod
                    cras. Id quis at donec duis scelerisque. Diam magnis
                    adipiscing tellus sapien diam neque porta nullam lectus.
                    Velit ornare odio ornare congue eleifend turpis nulla diam.
                    Pharetra pellentesque ultrices sollicitudin phasellus
                    suspendisse.
                  </h5>
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <a className="w-5 h-5 flex items-center justify-center group"></a>
                  <a className="w-5 h-5 flex items-center justify-center group"></a>
                  <a className="w-5 h-5 flex items-center justify-center group"></a>
                </div>
              </div>
            </div>
            <div className="w-full pb-6 border-b border-gray-300 justify-start items-start gap-2.5 inline-flex">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://pagedone.io/asset/uploads/1710225753.png"
                alt="James Miller image"
              />
              <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                <div className="w-full justify-start items-start flex-col flex gap-1">
                  <div className="w-full justify-between items-start gap-1 inline-flex">
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                      James Miller
                    </h5>
                    <span className="text-right text-gray-500 text-xs font-normal leading-5">
                      5 Day ago
                    </span>
                  </div>
                  <h5 className="text-gray-800 text-sm font-normal leading-snug">
                    Lectus quis ac quis lectus elit. Dolor tortor eu tristique
                    malesuada. Quis dictumst nulla vitae velit nisi. Volutpat
                    enim turpis dignissim.
                  </h5>
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <a className="w-5 h-5 flex items-center justify-center group"></a>
                  <a className="w-5 h-5 flex items-center justify-center group"></a>
                  <a className="w-5 h-5 flex items-center justify-center group"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
