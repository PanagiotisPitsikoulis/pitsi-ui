export default function NestedCommentSection() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-10 inline-flex">
          <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
            Comments
          </h2>
          <div className="w-full flex-col justify-start items-start gap-9 flex">
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
                <div className="w-full justify-start items-start gap-2.5 flex">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <button className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6 whitespace-nowrap">
                    Post Comment
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h3 className="w-full first-letter:text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  12 Comments
                </h3>
                <div className="block">
                  <select
                    id="countries"
                    className="w-28 h-10 border border-gray-300 text-gray-900 text-sm shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] font-medium leading-5 rounded-lg block py-2 px-3.5 focus:outline-none"
                  >
                    <option selected>Recent</option>
                    <option value="PR">Previous</option>
                    <option value="NE">Next</option>
                    <option value="RE">Recent</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex-col justify-start items-end flex">
                <div className="w-full pl-6 pb-6 rounded-2xl flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                    <div className="w-full justify-between items-center inline-flex">
                      <div className="justify-start items-center gap-2.5 flex">
                        <div className="w-10 h-10 bg-gray-300 rounded-full justify-start items-start gap-2.5 flex">
                          <img
                            className="rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1714988283.png"
                            alt="Jenny Wilson image"
                          />
                        </div>
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                          <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                            Jenny Wilson
                          </h5>
                          <span className="text-gray-500 text-xs font-normal leading-5">
                            1 week ago
                          </span>
                        </div>
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
                    <p className="text-gray-800 text-sm font-normal leading-snug">
                      These running shoes are the best I've ever owned. They're
                      lightweight, supportive, and my feet feel great even after
                      long runs. The cushioning is perfect for absorbing impact.
                    </p>
                  </div>
                  <div className="w-full justify-start items-center gap-3 inline-flex">
                    <div className="justify-start items-center gap-2 flex">
                      <a className="px-1.5 py-1 rounded border border-gray-200 justify-start items-center gap-1 flex">
                        <h5 className="text-black text-sm font-medium leading-snug">
                          10
                        </h5>
                        <img
                          src="https://pagedone.io/asset/uploads/1716545141.png"
                          alt="Thumbs Up emoji image"
                        />
                      </a>
                      <a href="#"></a>
                    </div>
                    <div className="block gap-2 flex items-center border-l border-gray-200 pl-3">
                      <select
                        id="countries"
                        className="select1 w-[70px] h-6 text-gray-500 text-xs font-normal leading-5 block focus:outline-none"
                      >
                        <option selected>3 Replies</option>
                        <option value="PR">2 Replies</option>
                        <option value="NE">4 Replies</option>
                        <option value="RE">3 Replies</option>
                      </select>
                      <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                        Reply
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="w-full pl-8 flex-col justify-start items-end gap-2.5 flex">
                  <div className="w-full pl-6 pb-6 border-l border-gray-200 flex-col justify-start items-start gap-8 flex">
                    <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                      <div className="w-full justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-2.5 flex">
                          <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                            <img
                              className="rounded-full object-cover"
                              src="https://pagedone.io/asset/uploads/1710225753.png"
                              alt="Kevin Patel image"
                            />
                          </div>
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                              Kevin Patel
                            </h5>
                            <span className="text-gray-500 text-xs font-normal leading-5">
                              5 days ago
                            </span>
                          </div>
                        </div>
                        <div className="w-6 h-6 relative">
                          <div className="w-full h-fit flex">
                            <div className="relative w-full">
                              <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
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
                      <p className="text-gray-800 text-sm font-normal leading-snug">
                        Totally! I ran a half marathon in them last weekend and
                        had zero discomfort. Have you tried them on trails?
                      </p>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <div className="justify-start items-center gap-2 flex">
                        <a className="px-1.5 py-1 rounded border border-gray-200 justify-start items-center gap-1 flex">
                          <h5 className="text-black text-sm font-medium leading-snug">
                            5
                          </h5>
                          <img
                            src="https://pagedone.io/asset/uploads/1716545141.png"
                            alt="Thumbs Up emoji image"
                          />
                        </a>
                        <a href="#"></a>
                      </div>
                      <div className=" border-l border-gray-200 pl-3">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          Reply
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full pl-8 flex-col justify-start items-end gap-2.5 flex">
                  <div className="w-full pl-6 pb-6 border-l border-gray-200 flex-col justify-start items-start gap-8 flex">
                    <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                      <div className="w-full justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-2.5 flex">
                          <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                            <img
                              className="rounded-full object-cover"
                              src="https://pagedone.io/asset/uploads/1716546816.png"
                              alt="James Anderson image"
                            />
                          </div>
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                              James Anderson
                            </h5>
                            <span className="text-gray-500 text-xs font-normal leading-5">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="w-6 h-6 relative">
                          <div className="w-full h-fit flex">
                            <div className="relative w-full">
                              <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
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
                      <p className="text-gray-800 text-sm font-normal leading-snug">
                        I’ve been considering getting these. How do they hold up
                        for indoor workouts?
                      </p>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <div className="justify-start items-center gap-2 flex ">
                        <a className="px-1.5 py-1 rounded border border-gray-200 justify-start items-center gap-1 flex">
                          <h5 className="text-black text-sm font-medium leading-snug">
                            2
                          </h5>
                          <img
                            src="https://pagedone.io/asset/uploads/1716545141.png"
                            alt="Thumbs Up emoji image"
                          />
                        </a>
                        <a href="#"></a>
                      </div>
                      <div className="block gap-2 flex items-center border-l border-gray-200 pl-3">
                        <select
                          id="countries"
                          className="select1 w-[70px] h-6 text-gray-500 text-xs font-normal leading-5 block focus:outline-none"
                        >
                          <option selected>1 Replies</option>
                          <option value="PR">1 Replies</option>
                          <option value="NE">2 Replies</option>
                          <option value="RE">3 Replies</option>
                        </select>
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          Reply
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full pl-14 flex-col justify-start items-end gap-2.5 flex">
                  <div className="w-full pl-6 pb-6 border-l border-gray-200 flex-col justify-start items-start gap-8 flex">
                    <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                      <div className="w-full justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-2.5 flex">
                          <div className="w-10 h-10 bg-gray-300 rounded-full justify-start items-start gap-2.5 flex">
                            <img
                              className="rounded-full object-cover"
                              src="https://pagedone.io/asset/uploads/1714988283.png"
                              alt="Jenny Wilson image"
                            />
                          </div>
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                              Jenny Wilson
                            </h5>
                            <span className="text-gray-500 text-xs font-normal leading-5">
                              25 mins ago
                            </span>
                          </div>
                        </div>
                        <div className="w-6 h-6 relative">
                          <div className="w-full h-fit flex">
                            <div className="relative w-full">
                              <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
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
                      <p className="text-gray-800 text-sm font-normal leading-snug">
                        Absolutely! These shoes are fantastic for indoor
                        workouts. The support and cushioning provide excellent
                        stability, whether you're doing cardio, weightlifting,
                        or HIIT. I've found that they offer just the right
                        amount of flexibility and grip, which is essential for
                        lateral movements and quick transitions. Plus, the
                        breathable materials help keep my feet comfortable, even
                        during intense sessions.
                      </p>
                    </div>
                    <div className="w-full justify-start items-center gap-3 inline-flex">
                      <div className="justify-start items-center gap-2 flex">
                        <a className="px-1.5 py-1 rounded border border-gray-200 justify-start items-center gap-1 flex">
                          <h5 className="text-black text-sm font-medium leading-snug">
                            20
                          </h5>
                          <img
                            src="https://pagedone.io/asset/uploads/1716545141.png"
                            alt="Thumbs Up emoji image"
                          />
                        </a>
                        <a href="#"></a>
                      </div>
                      <div className="block gap-2 flex items-center border-l border-gray-200 pl-3">
                        <select
                          id="countries"
                          className="select1 w-[70px] h-6 text-gray-500 text-xs font-normal leading-5 block focus:outline-none"
                        >
                          <option selected>1 Replies</option>
                          <option value="PR">1 Replies</option>
                          <option value="NE">2 Replies</option>
                          <option value="RE">3 Replies</option>
                        </select>
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          Reply
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full pl-8 flex-col justify-start items-end gap-2.5 flex">
                  <div className="w-full pl-6 pb-6 border-l border-gray-200 flex-col justify-start items-start gap-8 flex">
                    <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                      <div className="w-full justify-between items-center inline-flex">
                        <div className="justify-start items-center gap-2.5 flex">
                          <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                            <img
                              className="rounded-full object-cover"
                              src="https://pagedone.io/asset/uploads/1716617834.png"
                              alt="Jennifer Lopez image"
                            />
                          </div>
                          <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                              Jennifer Lopez
                            </h5>
                            <span className="text-gray-500 text-xs font-normal leading-5">
                              5 hours ago
                            </span>
                          </div>
                        </div>
                        <div className="w-6 h-6 relative">
                          <div className="w-full h-fit flex">
                            <div className="relative w-full">
                              <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                              <button
                                id="dropdown-button"
                                data-target="dropdown-5"
                                className="w-full justify-center dropdown-toggle flex-shrink-0 z-10 flex items-center text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0"
                              ></button>
                              <div
                                id="dropdown-5"
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
                      <p className="text-gray-800 text-sm font-normal leading-snug">
                        Do they come in different widths? I have wide feet and
                        struggle to find comfortable shoes.
                      </p>
                    </div>
                    <div className="justify-start items-center gap-3 inline-flex">
                      <a href="#"></a>
                      <div className="block justify-start items-center gap-2 flex pl-3 border-l border-gray-200">
                        <select
                          id="countries"
                          className="select2 w-[70px] h-6 text-gray-500 text-xs font-normal leading-5 block focus:outline-none"
                        >
                          <option selected>1 Replies</option>
                          <option value="PR">1 Replies</option>
                          <option value="NE">2 Replies</option>
                          <option value="RE">3 Replies</option>
                        </select>
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          Reply
                        </h5>
                      </div>
                    </div>
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
