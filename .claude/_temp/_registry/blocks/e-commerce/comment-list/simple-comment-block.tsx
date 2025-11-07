export default function SimpleCommentBlock() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
          <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Comments (15)
          </h2>
          <div className="w-full flex-col justify-start items-start flex">
            <div className="w-full flex-col justify-start items-start flex">
              <textarea
                name=""
                rows={5}
                className="w-full resize-none focus:outline-none px-4 py-2.5 text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-start gap-2 inline-flex"
                placeholder="Enter a your comment..."
              />
            </div>
            <div className="w-full px-4 py-2.5 bg-white rounded-bl-lg rounded-br-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-300 justify-between items-center inline-flex">
              <button className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">
                  Send Message
                </span>
              </button>
              <div className="w-full justify-end items-start gap-2.5 flex">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-2.5 flex">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1710225753.png"
                      alt="John smith image"
                    />
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                      John smith
                    </h5>
                  </div>
                  <span className="text-right text-gray-500 text-xs font-normal leading-5">
                    Feb. 09,2024
                  </span>
                </div>
                <p className="text-gray-800 text-sm font-normal leading-snug">
                  Aliquam sed diam tellus purus nulla consequat fermentum
                  pulvinar. Erat consequat cras eget sed sed rhoncus auctor. Vel
                  est est turpis vehicula natoque hendrerit id a elementum.
                  Pellentesque viverra nibh eget morbi lorem risus augue. Donec
                  risus curabitur quis pulvinar gravida pellentesque. Purus cras
                  consectetur nisl a lacus. Non adipiscing proin lorem at eu.
                  Adipiscing urna arcu neque ut eu ultrices ac libero. Est
                  consequat dictumst arcu convallis.
                </p>
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <a href="#"></a>
                    <h5 className="text-black text-sm font-normal leading-snug">
                      100 Likes
                    </h5>
                  </div>
                  <div className="justify-center items-center gap-2 flex">
                    <a href="#"></a>
                    <h5 className="text-black text-sm font-normal leading-snug">
                      Replay
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:pl-52 md:pl-32 pl-10 bg-white rounded-3xl flex-col justify-start items-start gap-2.5 flex">
              <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <img
                        className="rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1716619168.png"
                        alt="Harper Williams image"
                      />
                      <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                        Harper Williams
                      </h5>
                    </div>
                    <span className="text-right text-gray-500 text-xs font-normal leading-5">
                      Feb. 12,2024
                    </span>
                  </div>
                  <p className="text-gray-800 text-sm font-normal leading-snug">
                    Sit tellus cursus et sit consectetur ipsum turpis. In
                    aliquam nunc pretium pellentesque. Sit purus lacus ultrices
                    odio imperdiet aenean gravida. A est massa vestibulum ipsum
                    ut vitae in. Eleifend sed consectetur commodo purus. Felis
                    tincidunt porttitor accumsan aliquam diam sed arcu
                    sollicitudin. Maecenas ultrices tellus rhoncus nisl.
                  </p>
                  <div className="justify-start items-start gap-6 inline-flex">
                    <div className="justify-center items-center gap-2 flex">
                      <a href="#"></a>
                      <h5 className="text-black text-sm font-normal leading-snug">
                        100 Likes
                      </h5>
                    </div>
                    <div className="justify-center items-center gap-2 flex">
                      <a href="#"></a>
                      <h5 className="text-black text-sm font-normal leading-snug">
                        Replay
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-2.5 flex">
                    <img
                      className="rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1716619188.png"
                      alt="Olivia Carter image"
                    />
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                      Olivia Carter
                    </h5>
                  </div>
                  <span className="text-right text-gray-500 text-xs font-normal leading-5">
                    Feb. 02,2024
                  </span>
                </div>
                <p className="text-gray-800 text-sm font-normal leading-snug">
                  In sapien volutpat quisque volutpat vel. Sed diam euismod est
                  eget consequat vitae. Tortor tortor sed tellus nibh morbi
                  ultrices sem turpis vel. Duis risus parturient dis enim sed
                  morbi tempus non integer. Ac fermentum augue praesent
                  tristique et.
                </p>
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <a href="#"></a>
                    <h5 className="text-black text-sm font-normal leading-snug">
                      100 Likes
                    </h5>
                  </div>
                  <div className="justify-center items-center gap-2 flex">
                    <a href="#"></a>
                    <h5 className="text-black text-sm font-normal leading-snug">
                      Replay
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <div className="justify-start items-center gap-2.5 flex">
                    <img
                      className="rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1716617834.png"
                      alt="Ava Mitchell image"
                    />
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                      Ava Mitchell
                    </h5>
                  </div>
                  <span className="text-right text-gray-600 text-xs font-normal leading-5">
                    Feb. 01,2024
                  </span>
                </div>
                <p className="text-gray-800 text-sm font-normal leading-snug">
                  Fames at sagittis id ullamcorper platea libero. Vitae fusce
                  lobortis turpis placerat iaculis cras nunc bibendum. Faucibus
                  tortor bibendum nullam in viverra neque sit vel sed. Libero
                  enim interdum nulla consequat diam quam tellus pellentesque
                  enim. Quisque urna dapibus non diam et in gravida nibh.
                  Volutpat nunc lacus at dictum tellus nam vulputate. Nibh sit
                  nisl feugiat nibh. Pellentesque pulvinar vel egestas feugiat
                  volutpat. Congue pellentesque praesent lorem pellentesque diam
                  hac. Tortor turpis condimentum et massa eget scelerisque.
                  Dolor cursus pharetra euismod interdum nibh.
                </p>
                <div className="justify-start items-start gap-6 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <a href="#"></a>
                    <h5 className="text-black text-sm font-normal leading-snug">
                      100 Likes
                    </h5>
                  </div>
                  <div className="justify-center items-center gap-2 flex">
                    <a href="#"></a>
                    <h5 className="text-black text-sm font-normal leading-snug">
                      Replay
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
