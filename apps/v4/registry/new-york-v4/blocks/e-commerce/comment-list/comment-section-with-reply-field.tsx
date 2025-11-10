export default function CommentSectionWithReplyField() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:gap-14">
          <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
            Comments (03)
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <div className="inline-flex w-full items-center justify-between">
                  <div className="flex items-center justify-start gap-2.5">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1710225753.png"
                      alt="John smith image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-1">
                      <h5 className="text-sm leading-snug font-semibold text-gray-900">
                        John smith
                      </h5>
                      <span className="text-xs leading-5 font-normal text-gray-500">
                        5 Day ago
                      </span>
                    </div>
                  </div>
                  <a href="#"></a>
                </div>
                <p className="text-sm leading-snug font-normal text-gray-800">
                  Mauris luctus habitasse turpis elementum vitae in. Ut
                  habitasse orci sed aliquam bibendum. Sem in nisl vestibulum
                  rhoncus sed diam amet nulla. Netus feugiat nunc vulputate eros
                  pellentesque. A at augue elementum aliquet in aliquet. Vitae
                  amet quisque massa egestas amet. Vitae id ipsum lacus tellus
                  facilisis sit. Nunc ut pellentesque lacus massa arcu neque mi
                  ultrices convallis.
                </p>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Reply"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <div className="inline-flex w-full items-center justify-between">
                  <div className="flex w-full items-center justify-start gap-2.5">
                    <img
                      src="https://pagedone.io/asset/uploads/1716619168.png"
                      alt="Harper Williams image"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-1">
                      <h5 className="text-sm leading-snug font-semibold text-gray-900">
                        Harper Williams
                      </h5>
                      <span className="text-xs leading-5 font-normal text-gray-500">
                        4 Day ago
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-1.5">
                    <a href="#"></a>
                    <h5 className="text-sm leading-snug font-normal text-black">
                      23
                    </h5>
                  </div>
                </div>
                <p className="text-sm leading-snug font-normal text-gray-800">
                  Mauris luctus habitasse turpis elementum vitae in. Ut
                  habitasse orci sed aliquam bibendum. Sem in nisl vestibulum
                  rhoncus sed diam amet nulla. Netus feugiat nunc vulputate eros
                  pellentesque. A at augue elementum aliquet in aliquet. Vitae
                  amet quisque massa egestas amet. Vitae id ipsum lacus tellus
                  facilisis sit. Nunc ut pellentesque lacus massa arcu neque mi
                  ultrices convallis.
                </p>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Reply"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-4 rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <div className="inline-flex w-full items-center justify-between">
                  <div className="flex items-center justify-start gap-2.5">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1710237485.png"
                      alt="Danial Harrison image"
                    />
                    <div className="inline-flex flex-col items-start justify-start gap-1">
                      <h5 className="text-sm leading-snug font-semibold text-gray-900">
                        Danial Harrison
                      </h5>
                      <span className="text-xs leading-5 font-normal text-gray-500">
                        4 Day ago
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-1.5">
                    <a href="#"></a>
                    <h5 className="text-sm leading-snug font-normal text-black">
                      850
                    </h5>
                  </div>
                </div>
                <p className="text-sm leading-snug font-normal text-gray-800">
                  Mauris luctus habitasse turpis elementum vitae in. Ut
                  habitasse orci sed aliquam bibendum. Sem in nisl vestibulum
                  rhoncus sed diam amet nulla. Netus feugiat nunc vulputate eros
                  pellentesque. A at augue elementum aliquet in aliquet. Vitae
                  amet quisque massa egestas amet. Vitae id ipsum lacus tellus
                  facilisis sit. Nunc ut pellentesque lacus massa arcu neque mi
                  ultrices convallis.
                </p>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Reply"
                />
              </div>
              <button className="flex items-center justify-center rounded-lg bg-emerald-800 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-900">
                <span className="px-1.5 text-sm leading-6 font-medium text-white">
                  Post
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
