export default function CommentListWithTextEditor() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:gap-14">
          <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
            Comments (15)
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-8">
            <div className="group flex w-full flex-col items-start justify-start gap-3.5 rounded-2xl border border-gray-200 bg-white p-4 lg:p-6">
              <div className="inline-flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-2.5">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1710225753.png"
                    alt="John smith image"
                  />
                  <div className="flex items-start justify-start gap-2.5">
                    <h5 className="text-sm leading-snug font-semibold text-gray-900">
                      John smith
                    </h5>
                    <h5 className="text-sm leading-snug font-normal text-gray-500">
                      5 hour ago
                    </h5>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-end gap-2.5 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100">
                    <a className="flex h-5 w-5 items-center justify-center p-px"></a>
                    <span className="text-sm leading-snug font-normal text-red-600">
                      Delete
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-2.5">
                    <a className="flex h-5 w-5 items-center justify-center p-px"></a>
                    <span className="text-sm leading-snug font-normal text-indigo-600">
                      Reply
                    </span>
                  </div>
                </div>
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
            </div>
            <div className="group flex w-full flex-col items-start justify-start gap-3.5 rounded-2xl border border-gray-200 bg-white p-4 lg:p-6">
              <div className="inline-flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-2.5">
                  <img
                    src="https://pagedone.io/asset/uploads/1716619168.png"
                    alt="Harper Williams image"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex items-start justify-start gap-2.5">
                    <h5 className="text-sm leading-snug font-semibold text-gray-900">
                      Harper Williams
                    </h5>
                    <h5 className="text-sm leading-snug font-normal text-gray-500">
                      2 day ago
                    </h5>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-end gap-2.5 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100">
                    <a className="flex h-5 w-5 items-center justify-center p-px"></a>
                    <span className="text-sm leading-snug font-normal text-red-600">
                      Delete
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-2.5">
                    <a className="flex h-5 w-5 items-center justify-center p-px"></a>
                    <span className="text-sm leading-snug font-normal text-indigo-600">
                      Reply
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-snug font-normal text-gray-800">
                Quam lorem sed ipsum sem sollicitudin volutpat. Posuere
                pellentesque eget nec adipiscing interdum porttitor duis diam
                scelerisque. Vestibulum viverra orci volutpat massa fringilla
                commodo. In tellus augue turpis nibh aliquam donec vulputate.
                Interdum porttitor vitae dictum a lacus commodo.
              </p>
            </div>
            <div className="group flex w-full flex-col items-start justify-start gap-3.5 rounded-2xl border border-gray-200 bg-white p-4 lg:p-6">
              <div className="inline-flex w-full items-center justify-between">
                <div className="flex items-center justify-start gap-2.5">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1710225753.png"
                    alt="James Miller image"
                  />
                  <div className="flex items-start justify-start gap-2.5">
                    <h5 className="text-sm leading-snug font-semibold text-gray-900">
                      James Miller
                    </h5>
                    <h5 className="text-sm leading-snug font-normal text-gray-500">
                      3 day ago
                    </h5>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center justify-end gap-2.5 opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100">
                    <a className="flex h-5 w-5 items-center justify-center p-px"></a>
                    <span className="text-sm leading-snug font-normal text-red-600">
                      Delete
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-2.5">
                    <a className="flex h-5 w-5 items-center justify-center p-px"></a>
                    <span className="text-sm leading-snug font-normal text-indigo-600">
                      Edit
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm leading-snug font-normal text-gray-800">
                Sit sed vel tellus lobortis turpis vestibulum. Pellentesque
                fermentum sapien euismod faucibus posuere facilisis sapien in.
                Risus amet ornare nulla nisl orci imperdiet. Sed tristique arcu
                aliquet placerat sapien felis erat enim ullamcorper. Nunc massa
                sit enim id amet faucibus proin tortor. Vehicula eu semper nisi
                mus lectus orci ut. Fusce id sed malesuada dui cursus nibh
                tellus. Velit enim nullam condimentum gravida nullam et erat
                enim faucibus.
              </p>
            </div>
            <div className="flex w-full flex-col items-end justify-start gap-5">
              <div className="flex w-full flex-col items-start justify-start">
                <div className="flex w-full flex-col items-start justify-start">
                  <textarea
                    name=""
                    rows={5}
                    className="inline-flex w-full resize-none items-start justify-start gap-2 rounded-tl-2xl rounded-tr-2xl border border-gray-300 bg-white px-4 py-2.5 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                    placeholder="Enter a your comment..."
                  />
                </div>
                <div className="inline-flex w-full items-center justify-between rounded-br-2xl rounded-bl-2xl border-r border-b border-l border-gray-300 bg-white px-4 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                  <div className="flex w-full items-start justify-start gap-2.5">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-end gap-4 sm:flex-row">
                <button className="flex w-full items-center justify-center rounded-lg border border-gray-200 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:border-transparent hover:bg-indigo-50 sm:w-fit">
                  <span className="px-1.5 py-px text-sm leading-5 font-medium text-black">
                    Cancel
                  </span>
                </button>
                <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Comment
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
