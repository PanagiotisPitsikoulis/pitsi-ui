export default function ProfileHeaderWithUserDescription() {
  return (
    <section className="relative pt-24 pb-24 lg:pt-40">
      <img
        src="https://pagedone.io/asset/uploads/1705475165.png"
        alt="cover-image"
        className="absolute top-0 left-0 z-0 h-[410px] w-full object-cover"
      />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="relative z-10 mx-auto mb-3 flex w-max items-center justify-center">
          <img
            src="https://pagedone.io/asset/uploads/1705475153.png"
            alt="user-avatar-image"
            className="rounded-full border-4 border-solid border-white object-cover"
          />
        </div>
        <div className="relative z-[5] mx-auto -mt-20 w-full max-w-6xl bg-white p-10 pt-20 shadow-lg shadow-gray-100 lg:-mt-28 lg:p-10">
          <div className="mb-10 flex flex-col items-center justify-between max-lg:gap-6 lg:flex-row lg:items-start">
            <ul className="flex items-center">
              <li className="w-28 border-r border-solid border-gray-200">
                <p className="mb-2.5 text-center text-xl leading-8 font-semibold text-gray-900">
                  22
                </p>
                <p className="text-center text-xs leading-5 font-normal text-gray-500">
                  Friends
                </p>
              </li>
              <li className="w-28 border-r border-solid border-gray-200">
                <p className="mb-2.5 text-center text-xl leading-8 font-semibold text-gray-900">
                  10
                </p>
                <p className="text-center text-xs leading-5 font-normal text-gray-500">
                  Photos
                </p>
              </li>
              <li className="w-28">
                <p className="mb-2.5 text-center text-xl leading-8 font-semibold text-gray-900">
                  89
                </p>
                <p className="text-center text-xs leading-5 font-normal text-gray-500">
                  Comments
                </p>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <button className="rounded-full border border-solid border-gray-300 bg-gray-50 px-6 py-3 text-sm leading-6 font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-100 hover:shadow-gray-50">
                Connect
              </button>
              <button className="rounded-full border border-solid border-gray-300 bg-indigo-600 px-6 py-3 text-sm leading-6 font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-50">
                Message
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 border-b border-solid border-gray-300 pb-6 lg:pb-10">
            <h3 className="font-manrope text-3xl font-bold text-gray-900">
              Jane Cooper
            </h3>
            <p className="text-base leading-7 font-normal text-gray-400">
              jane_cooper
            </p>
            <p className="text-base leading-7 font-medium text-gray-700">
              Soluction Manager • Creative Team Officer
            </p>
            <p className="text-base leading-7 font-normal text-gray-400">
              University of Computer Science
            </p>
          </div>
          <p className="mx-auto max-w-3xl pt-6 text-center text-base leading-7 font-normal text-gray-500 lg:pt-10">
            I'm Jane Cooper, a passionate enthusiast and . Join me on this
            journey as I explore the beauty of specific interests or topics. I
            believe in personal or professional philosophy,. Let's connect,
            share experiences, and inspire each other!
          </p>
        </div>
      </div>
    </section>
  )
}
