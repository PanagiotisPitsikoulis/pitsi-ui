export default function SimpleCommentBlock() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-14">
          <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
            Comments (15)
          </h2>
          <div className="flex w-full flex-col items-start justify-start">
            <div className="flex w-full flex-col items-start justify-start">
              <textarea
                name=""
                rows={5}
                className="inline-flex w-full resize-none items-start justify-start gap-2 rounded-tl-lg rounded-tr-lg border border-gray-300 bg-white px-4 py-2.5 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Enter a your comment..."
              />
            </div>
            <div className="inline-flex w-full items-center justify-between rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-300 bg-white px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
              <button className="flex items-center justify-center rounded-lg bg-emerald-800 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-900">
                <span className="px-1.5 text-sm leading-6 font-medium whitespace-nowrap text-white">
                  Send Message
                </span>
              </button>
              <div className="flex w-full items-start justify-end gap-2.5">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-3xl border border-gray-200 bg-white p-5 lg:p-8">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <div className="inline-flex w-full items-center justify-between">
                  <div className="flex items-center justify-start gap-2.5">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1710225753.png"
                      alt="John smith image"
                    />
                    <h5 className="text-sm leading-snug font-semibold text-gray-900">
                      John smith
                    </h5>
                  </div>
                  <span className="text-right text-xs leading-5 font-normal text-gray-500">
                    Feb. 09,2024
                  </span>
                </div>
                <p className="text-sm leading-snug font-normal text-gray-800">
                  Aliquam sed diam tellus purus nulla consequat fermentum
                  pulvinar. Erat consequat cras eget sed sed rhoncus auctor. Vel
                  est est turpis vehicula natoque hendrerit id a elementum.
                  Pellentesque viverra nibh eget morbi lorem risus augue. Donec
                  risus curabitur quis pulvinar gravida pellentesque. Purus cras
                  consectetur nisl a lacus. Non adipiscing proin lorem at eu.
                  Adipiscing urna arcu neque ut eu ultrices ac libero. Est
                  consequat dictumst arcu convallis.
                </p>
                <div className="inline-flex items-start justify-start gap-6">
                  <div className="flex items-center justify-center gap-2">
                    <a href="#"></a>
                    <h5 className="text-sm leading-snug font-normal text-black">
                      100 Likes
                    </h5>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <a href="#"></a>
                    <h5 className="text-sm leading-snug font-normal text-black">
                      Replay
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-3xl bg-white pl-10 md:pl-32 lg:pl-52">
              <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-3xl border border-gray-200 bg-white p-5 lg:p-8">
                <div className="flex w-full flex-col items-start justify-start gap-3.5">
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-2.5">
                      <img
                        className="rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1716619168.png"
                        alt="Harper Williams image"
                      />
                      <h5 className="text-sm leading-snug font-semibold text-gray-900">
                        Harper Williams
                      </h5>
                    </div>
                    <span className="text-right text-xs leading-5 font-normal text-gray-500">
                      Feb. 12,2024
                    </span>
                  </div>
                  <p className="text-sm leading-snug font-normal text-gray-800">
                    Sit tellus cursus et sit consectetur ipsum turpis. In
                    aliquam nunc pretium pellentesque. Sit purus lacus ultrices
                    odio imperdiet aenean gravida. A est massa vestibulum ipsum
                    ut vitae in. Eleifend sed consectetur commodo purus. Felis
                    tincidunt porttitor accumsan aliquam diam sed arcu
                    sollicitudin. Maecenas ultrices tellus rhoncus nisl.
                  </p>
                  <div className="inline-flex items-start justify-start gap-6">
                    <div className="flex items-center justify-center gap-2">
                      <a href="#"></a>
                      <h5 className="text-sm leading-snug font-normal text-black">
                        100 Likes
                      </h5>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <a href="#"></a>
                      <h5 className="text-sm leading-snug font-normal text-black">
                        Replay
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-3xl border border-gray-200 bg-white p-5 lg:p-8">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <div className="inline-flex w-full items-center justify-between">
                  <div className="flex items-center justify-start gap-2.5">
                    <img
                      className="rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1716619188.png"
                      alt="Olivia Carter image"
                    />
                    <h5 className="text-sm leading-snug font-semibold text-gray-900">
                      Olivia Carter
                    </h5>
                  </div>
                  <span className="text-right text-xs leading-5 font-normal text-gray-500">
                    Feb. 02,2024
                  </span>
                </div>
                <p className="text-sm leading-snug font-normal text-gray-800">
                  In sapien volutpat quisque volutpat vel. Sed diam euismod est
                  eget consequat vitae. Tortor tortor sed tellus nibh morbi
                  ultrices sem turpis vel. Duis risus parturient dis enim sed
                  morbi tempus non integer. Ac fermentum augue praesent
                  tristique et.
                </p>
                <div className="inline-flex items-start justify-start gap-6">
                  <div className="flex items-center justify-center gap-2">
                    <a href="#"></a>
                    <h5 className="text-sm leading-snug font-normal text-black">
                      100 Likes
                    </h5>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <a href="#"></a>
                    <h5 className="text-sm leading-snug font-normal text-black">
                      Replay
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-2.5 rounded-3xl border border-gray-200 bg-white p-5 lg:p-8">
              <div className="flex w-full flex-col items-start justify-start gap-3.5">
                <div className="inline-flex w-full items-center justify-between">
                  <div className="flex items-center justify-start gap-2.5">
                    <img
                      className="rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1716617834.png"
                      alt="Ava Mitchell image"
                    />
                    <h5 className="text-sm leading-snug font-semibold text-gray-900">
                      Ava Mitchell
                    </h5>
                  </div>
                  <span className="text-right text-xs leading-5 font-normal text-gray-600">
                    Feb. 01,2024
                  </span>
                </div>
                <p className="text-sm leading-snug font-normal text-gray-800">
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
                <div className="inline-flex items-start justify-start gap-6">
                  <div className="flex items-center justify-center gap-2">
                    <a href="#"></a>
                    <h5 className="text-sm leading-snug font-normal text-black">
                      100 Likes
                    </h5>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <a href="#"></a>
                    <h5 className="text-sm leading-snug font-normal text-black">
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
  )
}
