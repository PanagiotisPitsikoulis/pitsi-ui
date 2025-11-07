export default function CommentListWithTextEditor() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-8 inline-flex">
          <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
            Comments (15)
          </h2>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            <div className="w-full group lg:p-6 p-4 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-3.5 flex">
              <div className="w-full justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1710225753.png"
                    alt="John smith image"
                  />
                  <div className="justify-start items-start gap-2.5 flex">
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                      John smith
                    </h5>
                    <h5 className="text-gray-500 text-sm font-normal leading-snug">
                      5 hour ago
                    </h5>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="justify-end items-center gap-2.5 flex opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <a className="w-5 h-5 p-px justify-center items-center flex"></a>
                    <span className="text-red-600 text-sm font-normal leading-snug">
                      Delete
                    </span>
                  </div>
                  <div className="justify-end items-center gap-2.5 flex">
                    <a className="w-5 h-5 p-px justify-center items-center flex"></a>
                    <span className="text-indigo-600 text-sm font-normal leading-snug">
                      Reply
                    </span>
                  </div>
                </div>
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
            </div>
            <div className="w-full group lg:p-6 p-4 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-3.5 flex">
              <div className="w-full justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                  <img
                    src="https://pagedone.io/asset/uploads/1716619168.png"
                    alt="Harper Williams image"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="justify-start items-start gap-2.5 flex">
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                      Harper Williams
                    </h5>
                    <h5 className="text-gray-500 text-sm font-normal leading-snug">
                      2 day ago
                    </h5>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="justify-end items-center gap-2.5 flex opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <a className="w-5 h-5 p-px justify-center items-center flex"></a>
                    <span className="text-red-600 text-sm font-normal leading-snug">
                      Delete
                    </span>
                  </div>
                  <div className="justify-end items-center gap-2.5 flex">
                    <a className="w-5 h-5 p-px justify-center items-center flex"></a>
                    <span className="text-indigo-600 text-sm font-normal leading-snug">
                      Reply
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-sm font-normal leading-snug">
                Quam lorem sed ipsum sem sollicitudin volutpat. Posuere
                pellentesque eget nec adipiscing interdum porttitor duis diam
                scelerisque. Vestibulum viverra orci volutpat massa fringilla
                commodo. In tellus augue turpis nibh aliquam donec vulputate.
                Interdum porttitor vitae dictum a lacus commodo.
              </p>
            </div>
            <div className="w-full group lg:p-6 p-4 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-3.5 flex">
              <div className="w-full justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src="https://pagedone.io/asset/uploads/1710225753.png"
                    alt="James Miller image"
                  />
                  <div className="justify-start items-start gap-2.5 flex">
                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                      James Miller
                    </h5>
                    <h5 className="text-gray-500 text-sm font-normal leading-snug">
                      3 day ago
                    </h5>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="justify-end items-center gap-2.5 flex opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <a className="w-5 h-5 p-px justify-center items-center flex"></a>
                    <span className="text-red-600 text-sm font-normal leading-snug">
                      Delete
                    </span>
                  </div>
                  <div className="justify-end items-center gap-2.5 flex">
                    <a className="w-5 h-5 p-px justify-center items-center flex"></a>
                    <span className="text-indigo-600 text-sm font-normal leading-snug">
                      Edit
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-800 text-sm font-normal leading-snug">
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
            <div className="w-full flex-col justify-start items-end gap-5 flex">
              <div className="w-full flex-col justify-start items-start flex">
                <div className="w-full flex-col justify-start items-start flex">
                  <textarea
                    name=""
                    rows={5}
                    className="w-full resize-none focus:outline-none px-4 py-2.5 text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 bg-white rounded-tl-2xl rounded-tr-2xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-start gap-2 inline-flex"
                    placeholder="Enter a your comment..."
                  />
                </div>
                <div className="w-full px-4 py-2.5 bg-white rounded-bl-2xl rounded-br-2xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border-l border-r border-b border-gray-300 justify-between items-center inline-flex">
                  <div className="w-full justify-start items-start gap-2.5 flex">
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                  </div>
                </div>
              </div>
              <div className="w-full justify-end items-start gap-4 flex sm:flex-row flex-col">
                <button className="sm:w-fit w-full px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 hover:bg-indigo-50 transition-all duration-700 ease-in-out hover:border-transparent justify-center items-center flex">
                  <span className="px-1.5 py-px text-black text-sm font-medium leading-5">
                    Cancel
                  </span>
                </button>
                <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Comment
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
