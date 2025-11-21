export default function CommentBlockWithTextEditor() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <div className="flex w-full flex-col items-start justify-start gap-9">
            <div className="flex w-full flex-col items-start justify-start gap-10">
              <div className="inline-flex w-full items-center justify-between">
                <h2 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                  20 Comments
                </h2>
                <button className="flex items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 px-5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:from-indigo-700 hover:to-indigo-500">
                  <span className="px-1.5 text-sm leading-6 font-medium text-white">
                    Signout
                  </span>
                </button>
              </div>
              <div className="flex w-full flex-col items-end justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border-b border-gray-200 p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-3.5">
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710225753.png"
                        alt="James Anderson image"
                      />
                      <div className="flex w-full items-center justify-between gap-2.5">
                        <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                          James Anderson
                        </h6>
                        <h5 className="text-right text-sm leading-snug font-normal text-gray-500">
                          24 April, 12:20 PM
                        </h5>
                      </div>
                    </div>
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      These running shoes are the best I've ever owned. They're
                      lightweight, supportive, and my feet feel great even after
                      long runs. The cushioning is perfect for absorbing impact.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-8">
                    <div className="flex items-center justify-start gap-3">
                      <h5 className="border-r border-gray-200 pr-3 text-sm leading-snug font-medium text-gray-500">
                        Reply
                      </h5>
                      <a className="flex items-center justify-start gap-1 rounded-full border border-gray-200 p-1.5"></a>
                    </div>
                    <div className="relative h-6 w-6">
                      <div className="flex h-fit w-full">
                        <div className="relative w-full">
                          <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300" />
                          <button
                            id="dropdown-button"
                            data-target="dropdown-1"
                            className="dropdown-toggle absolute top-0 right-0 z-10 flex w-full flex-shrink-0 items-center justify-center bg-transparent text-center text-base font-medium text-gray-900"
                          ></button>
                          <div
                            id="dropdown-1"
                            className="open absolute top-10 right-0 z-20 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdown-button"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Save
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border-b border-gray-200 p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-3.5">
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710225753.png"
                        alt="James Anderson image"
                      />
                      <div className="flex w-full items-center justify-between gap-2.5">
                        <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                          James Anderson
                        </h6>
                        <h5 className="text-right text-sm leading-snug font-normal text-gray-500">
                          24 April, 12:20 PM
                        </h5>
                      </div>
                    </div>
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      These running shoes are the best I've ever owned. They're
                      lightweight, supportive, and my feet feel great even after
                      long runs. The cushioning is perfect for absorbing impact.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-8">
                    <div className="flex items-center justify-start gap-3">
                      <h5 className="border-r border-gray-200 pr-3 text-sm leading-snug font-medium text-indigo-600">
                        1 Reply
                      </h5>
                      <a className="flex items-center justify-start gap-1 rounded-full border border-blue-200 bg-blue-50 p-1.5">
                        <h5 className="text-sm leading-snug font-medium text-indigo-600">
                          14
                        </h5>
                      </a>
                    </div>
                    <div className="relative h-6 w-6">
                      <div className="flex h-fit w-full">
                        <div className="relative w-full">
                          <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300" />
                          <button
                            id="dropdown-button"
                            data-target="dropdown-2"
                            className="dropdown-toggle absolute top-0 right-0 z-10 flex w-full flex-shrink-0 items-center justify-center bg-transparent text-center text-base font-medium text-gray-900"
                          ></button>
                          <div
                            id="dropdown-2"
                            className="open absolute top-10 right-0 z-20 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdown-button"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Save
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end justify-start gap-2.5 pl-6 md:pl-8 lg:pl-10">
                  <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border-b border-gray-200 p-6">
                    <div className="flex w-full flex-col items-start justify-center gap-3.5">
                      <div className="inline-flex w-full items-center justify-start gap-2.5">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710225753.png"
                          alt="James Anderson image"
                        />
                        <div className="flex w-full items-center justify-between gap-2.5">
                          <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                            James Anderson
                          </h6>
                          <h5 className="text-right text-sm leading-snug font-normal text-gray-500">
                            05 May, 12:20 PM
                          </h5>
                        </div>
                      </div>
                      <p className="text-sm leading-snug font-normal text-gray-800">
                        These running shoes are the best I've ever owned.
                        They're lightweight, supportive, and my feet feel great
                        even after long runs. The cushioning is perfect for
                        absorbing impact.
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-between gap-8">
                      <div className="flex items-center justify-start gap-3">
                        <h5 className="border-r border-gray-200 pr-3 text-sm leading-snug font-medium text-indigo-600">
                          1 Reply
                        </h5>
                        <a className="flex items-center justify-start gap-1 rounded-full border border-blue-200 bg-blue-50 p-1.5">
                          <h5 className="text-sm leading-snug font-medium text-indigo-600">
                            14
                          </h5>
                        </a>
                      </div>
                      <div className="relative h-6 w-6">
                        <div className="flex h-fit w-full">
                          <div className="relative w-full">
                            <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300" />
                            <button
                              id="dropdown-button"
                              data-target="dropdown-3"
                              className="dropdown-toggle absolute top-0 right-0 z-10 flex w-full flex-shrink-0 items-center justify-center bg-transparent text-center text-base font-medium text-gray-900"
                            ></button>
                            <div
                              id="dropdown-3"
                              className="open absolute top-10 right-0 z-20 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                            >
                              <ul
                                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdown-button"
                              >
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Save
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                  >
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border-b border-gray-200 p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-3.5">
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710225753.png"
                        alt="James Anderson image"
                      />
                      <div className="flex w-full items-center justify-between gap-2.5">
                        <h6 className="text-base leading-relaxed font-semibold text-gray-900">
                          James Anderson
                        </h6>
                        <h5 className="text-right text-sm leading-snug font-normal text-gray-500">
                          24 April, 12:20 PM
                        </h5>
                      </div>
                    </div>
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      These running shoes are the best I've ever owned. They're
                      lightweight, supportive, and my feet feel great even after
                      long runs. The cushioning is perfect for absorbing impact.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between gap-8">
                    <div className="flex items-center justify-start gap-3">
                      <h5 className="border-r border-gray-200 pr-3 text-sm leading-snug font-medium text-gray-500">
                        Reply
                      </h5>
                      <a className="flex items-center justify-start gap-1 rounded-full border border-blue-200 bg-blue-50 p-1.5">
                        <h5 className="text-sm leading-snug font-medium text-indigo-600">
                          28
                        </h5>
                      </a>
                    </div>
                    <div className="relative h-6 w-6">
                      <div className="flex h-fit w-full">
                        <div className="relative w-full">
                          <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300" />
                          <button
                            id="dropdown-button"
                            data-target="dropdown-4"
                            className="dropdown-toggle absolute top-0 right-0 z-10 flex w-full flex-shrink-0 items-center justify-center bg-transparent text-center text-base font-medium text-gray-900"
                          ></button>
                          <div
                            id="dropdown-4"
                            className="open absolute top-10 right-0 z-20 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                          >
                            <ul
                              className="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdown-button"
                            >
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Edit
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Save
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Delete
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-end justify-center gap-6">
              <div className="flex w-full flex-col items-start justify-start">
                <textarea
                  name=""
                  rows={5}
                  className="inline-flex w-full resize-none items-start justify-start gap-2 rounded-tl-lg rounded-tr-lg border border-gray-300 bg-white px-4 py-2.5 text-lg leading-8 font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Leave a positive comment..."
                />
                <div className="inline-flex w-full items-center justify-end rounded-br-lg rounded-bl-lg border-r border-b border-l border-gray-300 bg-white px-4 py-2.5 opacity-80 shadow">
                  <div className="flex h-6 items-center justify-end gap-3">
                    <div className="flex items-start justify-start gap-2.5">
                      <a href="#"></a>
                      <a href="#"></a>
                      <a href="#"></a>
                    </div>
                    <div className="flex items-start justify-start gap-2.5 border-x border-gray-200 px-3">
                      <a href="#"></a>
                      <a href="#"></a>
                      <a href="#"></a>
                      <a href="#"></a>
                    </div>
                    <div className="flex items-center justify-start gap-2.5">
                      <a className="flex items-center justify-center px-[3px]">
                        <span className="text-lg leading-6 font-medium text-black">
                          @
                        </span>
                      </a>
                      <a href="#"></a>
                      <a href="#"></a>
                      <a href="#"></a>
                    </div>
                  </div>
                </div>
              </div>
              <button className="flex w-36 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:from-indigo-700 hover:to-indigo-500">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
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
