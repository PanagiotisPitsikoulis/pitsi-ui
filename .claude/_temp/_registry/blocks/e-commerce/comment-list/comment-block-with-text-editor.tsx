export default function CommentBlockWithTextEditor() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-9 flex">
            <div className="w-full flex-col justify-start items-start gap-10 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h2 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                  20 Comments
                </h2>
                <button className="px-5 py-2 bg-gradient-to-tr from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Signout
                  </span>
                </button>
              </div>
              <div className="w-full flex-col justify-start items-end gap-5 flex">
                <div className="w-full p-6 rounded-2xl border-b border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710225753.png"
                        alt="James Anderson image"
                      />
                      <div className="w-full justify-between items-center gap-2.5 flex">
                        <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                          James Anderson
                        </h6>
                        <h5 className="text-right text-gray-500 text-sm font-normal leading-snug">
                          24 April, 12:20 PM
                        </h5>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
                      These running shoes are the best I've ever owned. They're
                      lightweight, supportive, and my feet feel great even after
                      long runs. The cushioning is perfect for absorbing impact.
                    </p>
                  </div>
                  <div className="w-full justify-between items-center gap-8 inline-flex">
                    <div className="justify-start items-center gap-3 flex">
                      <h5 className="text-gray-500 text-sm font-medium leading-snug pr-3 border-r border-gray-200">
                        Reply
                      </h5>
                      <a className="p-1.5 rounded-full border border-gray-200 justify-start items-center gap-1 flex"></a>
                    </div>
                    <div className="w-6 h-6 relative">
                      <div className="w-full h-fit flex">
                        <div className="relative w-full">
                          <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300" />
                          <button
                            id="dropdown-button"
                            data-target="dropdown-1"
                            className="w-full justify-center dropdown-toggle flex-shrink-0 z-10 flex items-center text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0"
                          ></button>
                          <div
                            id="dropdown-1"
                            className="absolute top-10 right-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
                <div className="w-full p-6 rounded-2xl border-b border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710225753.png"
                        alt="James Anderson image"
                      />
                      <div className="w-full justify-between items-center gap-2.5 flex">
                        <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                          James Anderson
                        </h6>
                        <h5 className="text-right text-gray-500 text-sm font-normal leading-snug">
                          24 April, 12:20 PM
                        </h5>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
                      These running shoes are the best I've ever owned. They're
                      lightweight, supportive, and my feet feel great even after
                      long runs. The cushioning is perfect for absorbing impact.
                    </p>
                  </div>
                  <div className="w-full justify-between items-center gap-8 inline-flex">
                    <div className="justify-start items-center gap-3 flex">
                      <h5 className="text-indigo-600 text-sm font-medium leading-snug pr-3 border-r border-gray-200">
                        1 Reply
                      </h5>
                      <a className="p-1.5 bg-blue-50 rounded-full border border-blue-200 justify-start items-center gap-1 flex">
                        <h5 className="text-indigo-600 text-sm font-medium leading-snug">
                          14
                        </h5>
                      </a>
                    </div>
                    <div className="w-6 h-6 relative">
                      <div className="w-full h-fit flex">
                        <div className="relative w-full">
                          <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300" />
                          <button
                            id="dropdown-button"
                            data-target="dropdown-2"
                            className="w-full justify-center dropdown-toggle flex-shrink-0 z-10 flex items-center text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0"
                          ></button>
                          <div
                            id="dropdown-2"
                            className="absolute top-10 right-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
                <div className="w-full lg:pl-10 md:pl-8 pl-6 flex-col justify-start items-end gap-2.5 flex">
                  <div className="w-full p-6 rounded-2xl border-b border-gray-200 flex-col justify-start items-start gap-8 flex">
                    <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                      <div className="w-full justify-start items-center gap-2.5 inline-flex">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710225753.png"
                          alt="James Anderson image"
                        />
                        <div className="w-full justify-between items-center gap-2.5 flex">
                          <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                            James Anderson
                          </h6>
                          <h5 className="text-right text-gray-500 text-sm font-normal leading-snug">
                            05 May, 12:20 PM
                          </h5>
                        </div>
                      </div>
                      <p className="text-gray-800 text-sm font-normal leading-snug">
                        These running shoes are the best I've ever owned.
                        They're lightweight, supportive, and my feet feel great
                        even after long runs. The cushioning is perfect for
                        absorbing impact.
                      </p>
                    </div>
                    <div className="w-full justify-between items-center gap-8 inline-flex">
                      <div className="justify-start items-center gap-3 flex">
                        <h5 className="text-indigo-600 text-sm font-medium leading-snug pr-3 border-r border-gray-200">
                          1 Reply
                        </h5>
                        <a className="p-1.5 bg-blue-50 rounded-full border border-blue-200 justify-start items-center gap-1 flex">
                          <h5 className="text-indigo-600 text-sm font-medium leading-snug">
                            14
                          </h5>
                        </a>
                      </div>
                      <div className="w-6 h-6 relative">
                        <div className="w-full h-fit flex">
                          <div className="relative w-full">
                            <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300" />
                            <button
                              id="dropdown-button"
                              data-target="dropdown-3"
                              className="w-full justify-center dropdown-toggle flex-shrink-0 z-10 flex items-center text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0"
                            ></button>
                            <div
                              id="dropdown-3"
                              className="absolute top-10 right-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
                <div className="w-full p-6 rounded-2xl border-b border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710225753.png"
                        alt="James Anderson image"
                      />
                      <div className="w-full justify-between items-center gap-2.5 flex">
                        <h6 className="text-gray-900 text-base font-semibold leading-relaxed">
                          James Anderson
                        </h6>
                        <h5 className="text-right text-gray-500 text-sm font-normal leading-snug">
                          24 April, 12:20 PM
                        </h5>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
                      These running shoes are the best I've ever owned. They're
                      lightweight, supportive, and my feet feel great even after
                      long runs. The cushioning is perfect for absorbing impact.
                    </p>
                  </div>
                  <div className="w-full justify-between items-center gap-8 inline-flex">
                    <div className="justify-start items-center gap-3 flex">
                      <h5 className="text-gray-500 text-sm font-medium leading-snug pr-3 border-r border-gray-200">
                        Reply
                      </h5>
                      <a className="p-1.5 bg-blue-50 rounded-full border border-blue-200 justify-start items-center gap-1 flex">
                        <h5 className="text-indigo-600 text-sm font-medium leading-snug">
                          28
                        </h5>
                      </a>
                    </div>
                    <div className="w-6 h-6 relative">
                      <div className="w-full h-fit flex">
                        <div className="relative w-full">
                          <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300" />
                          <button
                            id="dropdown-button"
                            data-target="dropdown-4"
                            className="w-full justify-center dropdown-toggle flex-shrink-0 z-10 flex items-center text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0"
                          ></button>
                          <div
                            id="dropdown-4"
                            className="absolute top-10 right-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 open hidden"
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
            <div className="w-full flex-col justify-center items-end gap-6 flex">
              <div className="w-full flex-col justify-start items-start flex">
                <textarea
                  name=""
                  rows={5}
                  className="w-full resize-none focus:outline-none px-4 py-2.5 text-gray-900 placeholder-gray-400 text-lg font-normal leading-8 bg-white rounded-tl-lg rounded-tr-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-start gap-2 inline-flex"
                  placeholder="Leave a positive comment..."
                />
                <div className="w-full px-4 py-2.5 opacity-80 bg-white rounded-bl-lg rounded-br-lg shadow border-l border-r border-b border-gray-300 justify-end items-center inline-flex">
                  <div className="h-6 justify-end items-center gap-3 flex">
                    <div className="justify-start items-start gap-2.5 flex">
                      <a href="#"></a>
                      <a href="#"></a>
                      <a href="#"></a>
                    </div>
                    <div className="justify-start items-start gap-2.5 flex border-x border-gray-200 px-3">
                      <a href="#"></a>
                      <a href="#"></a>
                      <a href="#"></a>
                      <a href="#"></a>
                    </div>
                    <div className="justify-start items-center gap-2.5 flex">
                      <a className="px-[3px] justify-center items-center flex">
                        <span className="text-black text-lg font-medium leading-6">
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
              <button className="w-36 px-5 py-2.5 bg-gradient-to-tr from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
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
