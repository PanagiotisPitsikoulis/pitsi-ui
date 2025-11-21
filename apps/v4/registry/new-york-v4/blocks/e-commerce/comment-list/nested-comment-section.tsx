export default function NestedCommentSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10">
          <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
            Comments
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-9">
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
                <div className="flex w-full items-start justify-start gap-2.5">
                  <a href="#"></a>
                  <a href="#"></a>
                  <a href="#"></a>
                </div>
                <button className="flex items-center justify-center rounded-lg bg-emerald-800 px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-emerald-900">
                  <span className="px-1.5 text-sm leading-6 font-medium whitespace-nowrap text-white">
                    Post Comment
                  </span>
                </button>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="inline-flex w-full items-center justify-between">
                <h3 className="font-manrope w-full text-2xl leading-9 font-semibold first-letter:text-gray-900">
                  12 Comments
                </h3>
                <div className="block">
                  <select
                    id="countries"
                    className="block h-10 w-28 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-5 font-medium text-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  >
                    <option selected>Recent</option>
                    <option value="PR">Previous</option>
                    <option value="NE">Next</option>
                    <option value="RE">Recent</option>
                  </select>
                </div>
              </div>
              <div className="flex w-full flex-col items-end justify-start">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl pb-6 pl-6">
                  <div className="flex w-full flex-col items-start justify-center gap-3.5">
                    <div className="inline-flex w-full items-center justify-between">
                      <div className="flex items-center justify-start gap-2.5">
                        <div className="flex h-10 w-10 items-start justify-start gap-2.5 rounded-full bg-gray-300">
                          <img
                            className="rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1714988283.png"
                            alt="Jenny Wilson image"
                          />
                        </div>
                        <div className="inline-flex flex-col items-start justify-start gap-1">
                          <h5 className="text-sm leading-snug font-semibold text-gray-900">
                            Jenny Wilson
                          </h5>
                          <span className="text-xs leading-5 font-normal text-gray-500">
                            1 week ago
                          </span>
                        </div>
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
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      These running shoes are the best I've ever owned. They're
                      lightweight, supportive, and my feet feel great even after
                      long runs. The cushioning is perfect for absorbing impact.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-start gap-3">
                    <div className="flex items-center justify-start gap-2">
                      <a className="flex items-center justify-start gap-1 rounded border border-gray-200 px-1.5 py-1">
                        <h5 className="text-sm leading-snug font-medium text-black">
                          10
                        </h5>
                        <img
                          src="https://pagedone.io/asset/uploads/1716545141.png"
                          alt="Thumbs Up emoji image"
                        />
                      </a>
                      <a href="#"></a>
                    </div>
                    <div className="block flex items-center gap-2 border-l border-gray-200 pl-3">
                      <select
                        id="countries"
                        className="select1 block h-6 w-[70px] text-xs leading-5 font-normal text-gray-500 focus:outline-none"
                      >
                        <option selected>3 Replies</option>
                        <option value="PR">2 Replies</option>
                        <option value="NE">4 Replies</option>
                        <option value="RE">3 Replies</option>
                      </select>
                      <h5 className="text-sm leading-snug font-semibold text-gray-900">
                        Reply
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end justify-start gap-2.5 pl-8">
                  <div className="flex w-full flex-col items-start justify-start gap-8 border-l border-gray-200 pb-6 pl-6">
                    <div className="flex w-full flex-col items-start justify-center gap-3.5">
                      <div className="inline-flex w-full items-center justify-between">
                        <div className="flex items-center justify-start gap-2.5">
                          <div className="flex h-10 w-10 items-start justify-start gap-2.5 rounded-full bg-stone-300">
                            <img
                              className="rounded-full object-cover"
                              src="https://pagedone.io/asset/uploads/1710225753.png"
                              alt="Kevin Patel image"
                            />
                          </div>
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h5 className="text-sm leading-snug font-semibold text-gray-900">
                              Kevin Patel
                            </h5>
                            <span className="text-xs leading-5 font-normal text-gray-500">
                              5 days ago
                            </span>
                          </div>
                        </div>
                        <div className="relative h-6 w-6">
                          <div className="flex h-fit w-full">
                            <div className="relative w-full">
                              <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300"></div>
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
                      <p className="text-sm leading-snug font-normal text-gray-800">
                        Totally! I ran a half marathon in them last weekend and
                        had zero discomfort. Have you tried them on trails?
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <div className="flex items-center justify-start gap-2">
                        <a className="flex items-center justify-start gap-1 rounded border border-gray-200 px-1.5 py-1">
                          <h5 className="text-sm leading-snug font-medium text-black">
                            5
                          </h5>
                          <img
                            src="https://pagedone.io/asset/uploads/1716545141.png"
                            alt="Thumbs Up emoji image"
                          />
                        </a>
                        <a href="#"></a>
                      </div>
                      <div className="border-l border-gray-200 pl-3">
                        <h5 className="text-sm leading-snug font-semibold text-gray-900">
                          Reply
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end justify-start gap-2.5 pl-8">
                  <div className="flex w-full flex-col items-start justify-start gap-8 border-l border-gray-200 pb-6 pl-6">
                    <div className="flex w-full flex-col items-start justify-center gap-3.5">
                      <div className="inline-flex w-full items-center justify-between">
                        <div className="flex items-center justify-start gap-2.5">
                          <div className="flex h-10 w-10 items-start justify-start gap-2.5 rounded-full bg-stone-300">
                            <img
                              className="rounded-full object-cover"
                              src="https://pagedone.io/asset/uploads/1716546816.png"
                              alt="James Anderson image"
                            />
                          </div>
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h5 className="text-sm leading-snug font-semibold text-gray-900">
                              James Anderson
                            </h5>
                            <span className="text-xs leading-5 font-normal text-gray-500">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="relative h-6 w-6">
                          <div className="flex h-fit w-full">
                            <div className="relative w-full">
                              <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300"></div>
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
                      <p className="text-sm leading-snug font-normal text-gray-800">
                        I’ve been considering getting these. How do they hold up
                        for indoor workouts?
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <div className="flex items-center justify-start gap-2">
                        <a className="flex items-center justify-start gap-1 rounded border border-gray-200 px-1.5 py-1">
                          <h5 className="text-sm leading-snug font-medium text-black">
                            2
                          </h5>
                          <img
                            src="https://pagedone.io/asset/uploads/1716545141.png"
                            alt="Thumbs Up emoji image"
                          />
                        </a>
                        <a href="#"></a>
                      </div>
                      <div className="block flex items-center gap-2 border-l border-gray-200 pl-3">
                        <select
                          id="countries"
                          className="select1 block h-6 w-[70px] text-xs leading-5 font-normal text-gray-500 focus:outline-none"
                        >
                          <option selected>1 Replies</option>
                          <option value="PR">1 Replies</option>
                          <option value="NE">2 Replies</option>
                          <option value="RE">3 Replies</option>
                        </select>
                        <h5 className="text-sm leading-snug font-semibold text-gray-900">
                          Reply
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end justify-start gap-2.5 pl-14">
                  <div className="flex w-full flex-col items-start justify-start gap-8 border-l border-gray-200 pb-6 pl-6">
                    <div className="flex w-full flex-col items-start justify-center gap-3.5">
                      <div className="inline-flex w-full items-center justify-between">
                        <div className="flex items-center justify-start gap-2.5">
                          <div className="flex h-10 w-10 items-start justify-start gap-2.5 rounded-full bg-gray-300">
                            <img
                              className="rounded-full object-cover"
                              src="https://pagedone.io/asset/uploads/1714988283.png"
                              alt="Jenny Wilson image"
                            />
                          </div>
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h5 className="text-sm leading-snug font-semibold text-gray-900">
                              Jenny Wilson
                            </h5>
                            <span className="text-xs leading-5 font-normal text-gray-500">
                              25 mins ago
                            </span>
                          </div>
                        </div>
                        <div className="relative h-6 w-6">
                          <div className="flex h-fit w-full">
                            <div className="relative w-full">
                              <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300"></div>
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
                      <p className="text-sm leading-snug font-normal text-gray-800">
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
                    <div className="inline-flex w-full items-center justify-start gap-3">
                      <div className="flex items-center justify-start gap-2">
                        <a className="flex items-center justify-start gap-1 rounded border border-gray-200 px-1.5 py-1">
                          <h5 className="text-sm leading-snug font-medium text-black">
                            20
                          </h5>
                          <img
                            src="https://pagedone.io/asset/uploads/1716545141.png"
                            alt="Thumbs Up emoji image"
                          />
                        </a>
                        <a href="#"></a>
                      </div>
                      <div className="block flex items-center gap-2 border-l border-gray-200 pl-3">
                        <select
                          id="countries"
                          className="select1 block h-6 w-[70px] text-xs leading-5 font-normal text-gray-500 focus:outline-none"
                        >
                          <option selected>1 Replies</option>
                          <option value="PR">1 Replies</option>
                          <option value="NE">2 Replies</option>
                          <option value="RE">3 Replies</option>
                        </select>
                        <h5 className="text-sm leading-snug font-semibold text-gray-900">
                          Reply
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end justify-start gap-2.5 pl-8">
                  <div className="flex w-full flex-col items-start justify-start gap-8 border-l border-gray-200 pb-6 pl-6">
                    <div className="flex w-full flex-col items-start justify-center gap-3.5">
                      <div className="inline-flex w-full items-center justify-between">
                        <div className="flex items-center justify-start gap-2.5">
                          <div className="flex h-10 w-10 items-start justify-start gap-2.5 rounded-full bg-stone-300">
                            <img
                              className="rounded-full object-cover"
                              src="https://pagedone.io/asset/uploads/1716617834.png"
                              alt="Jennifer Lopez image"
                            />
                          </div>
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h5 className="text-sm leading-snug font-semibold text-gray-900">
                              Jennifer Lopez
                            </h5>
                            <span className="text-xs leading-5 font-normal text-gray-500">
                              5 hours ago
                            </span>
                          </div>
                        </div>
                        <div className="relative h-6 w-6">
                          <div className="flex h-fit w-full">
                            <div className="relative w-full">
                              <div className="absolute top-0 left-0 px-4 py-2.5 text-gray-300"></div>
                              <button
                                id="dropdown-button"
                                data-target="dropdown-5"
                                className="dropdown-toggle absolute top-0 right-0 z-10 flex w-full flex-shrink-0 items-center justify-center bg-transparent text-center text-base font-medium text-gray-900"
                              ></button>
                              <div
                                id="dropdown-5"
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
                      <p className="text-sm leading-snug font-normal text-gray-800">
                        Do they come in different widths? I have wide feet and
                        struggle to find comfortable shoes.
                      </p>
                    </div>
                    <div className="inline-flex items-center justify-start gap-3">
                      <a href="#"></a>
                      <div className="block flex items-center justify-start gap-2 border-l border-gray-200 pl-3">
                        <select
                          id="countries"
                          className="select2 block h-6 w-[70px] text-xs leading-5 font-normal text-gray-500 focus:outline-none"
                        >
                          <option selected>1 Replies</option>
                          <option value="PR">1 Replies</option>
                          <option value="NE">2 Replies</option>
                          <option value="RE">3 Replies</option>
                        </select>
                        <h5 className="text-sm leading-snug font-semibold text-gray-900">
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
  )
}
