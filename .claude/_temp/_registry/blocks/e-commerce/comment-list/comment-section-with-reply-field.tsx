export default function CommentSectionWithReplyField() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-8 inline-flex">
          <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Comments (03)
          </h2>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full p-6 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start flex">
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-2.5 flex">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1710225753.png"
                      alt="John smith image"
                    />
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                        John smith
                      </h5>
                      <span className="text-gray-500 text-xs font-normal leading-5">
                        5 Day ago
                      </span>
                    </div>
                  </div>
                  <a href="#"></a>
                </div>
                <p className="text-gray-800 text-sm font-normal leading-snug">
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
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                  placeholder="Reply"
                />
              </div>
            </div>
            <div className="w-full p-6 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start flex">
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <div className="w-full justify-start items-center gap-2.5 flex">
                    <img
                      src="https://pagedone.io/asset/uploads/1716619168.png"
                      alt="Harper Williams image"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                        Harper Williams
                      </h5>
                      <span className="text-gray-500 text-xs font-normal leading-5">
                        4 Day ago
                      </span>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1.5 flex">
                    <a href="#"></a>
                    <h5 className="text-black text-sm font-normal leading-snug">
                      23
                    </h5>
                  </div>
                </div>
                <p className="text-gray-800 text-sm font-normal leading-snug">
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
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                  placeholder="Reply"
                />
              </div>
            </div>
            <div className="w-full p-6 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-4 flex">
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-2.5 flex">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1710237485.png"
                      alt="Danial Harrison image"
                    />
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                        Danial Harrison
                      </h5>
                      <span className="text-gray-500 text-xs font-normal leading-5">
                        4 Day ago
                      </span>
                    </div>
                  </div>
                  <div className="justify-start items-center gap-1.5 flex">
                    <a href="#"></a>
                    <h5 className="text-black text-sm font-normal leading-snug">
                      850
                    </h5>
                  </div>
                </div>
                <p className="text-gray-800 text-sm font-normal leading-snug">
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
                  className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300"
                  placeholder="Reply"
                />
              </div>
              <button className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Post
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
