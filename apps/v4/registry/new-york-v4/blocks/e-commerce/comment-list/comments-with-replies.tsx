export default function CommentsWithReplies() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-6 lg:gap-10">
          <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
            200+ Comments
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-6 lg:gap-9">
            <div className="relative flex w-full justify-between gap-2">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-lg leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                placeholder="Write comments here...."
              />
              <a className="absolute top-[18px] right-6"></a>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-8">
              <div className="flex w-full flex-col items-end justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-3.5">
                    <div className="inline-flex w-full items-center justify-between">
                      <div className="flex items-center justify-start gap-2.5">
                        <div className="flex h-10 w-10 items-start justify-start gap-2.5 rounded-full bg-gray-300">
                          <img
                            className="rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1714988283.png"
                            alt="Jenny wilson image"
                          />
                        </div>
                        <div className="inline-flex flex-col items-start justify-start gap-1">
                          <h5 className="text-sm leading-snug font-semibold text-gray-900">
                            Jenny Wilson
                          </h5>
                          <h6 className="text-xs leading-5 font-normal text-gray-500">
                            1 hr ago
                          </h6>
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
                      This novel's character development is outstanding! The
                      protagonist's journey is so well-crafted and realistic. I
                      felt like I was growing along with them as I read.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-4">
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          2 Replies
                        </h5>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          Reactions
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-1">
                      <h5 className="text-sm leading-snug font-normal text-gray-500">
                        30
                      </h5>
                      <div className="flex items-start justify-start -space-x-2 overflow-hidden">
                        <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                          <img
                            className="h-3 w-3"
                            src="https://pagedone.io/asset/uploads/1716545141.png"
                            alt="Thumbs Up emoji"
                          />
                        </div>
                        <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                          <img
                            className="h-3 w-3"
                            src="https://pagedone.io/asset/uploads/1716545183.png"
                            alt="Smiling eyes emoji"
                          />
                        </div>
                        <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                          <img
                            className="h-3 w-3"
                            src="https://pagedone.io/asset/uploads/1716545217.png"
                            alt="hugging face emoji"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end justify-start gap-2.5 pl-7 sm:pl-10 md:pl-20 lg:pl-60">
                  <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
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
                            <h6 className="text-xs leading-5 font-normal text-gray-500">
                              60 mins ago
                            </h6>
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
                        Absolutely! I was amazed at how much they grew
                        throughout the story. The way the author portrayed their
                        struggles and triumphs was truly inspiring.
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-between">
                      <div className="flex items-center justify-start gap-4">
                        <div className="flex items-center justify-start gap-1.5">
                          <a href="#"></a>
                          <h5 className="text-sm leading-snug font-normal text-gray-900">
                            Replies
                          </h5>
                        </div>
                        <div className="flex items-center justify-start gap-1.5">
                          <a href="#"></a>
                          <h5 className="text-sm leading-snug font-normal text-gray-900">
                            Reactions
                          </h5>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <h5 className="text-sm leading-snug font-normal text-gray-500">
                          4
                        </h5>
                        <div className="flex items-start justify-start -space-x-2 overflow-hidden">
                          <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                            <img
                              className="h-3 w-3"
                              src="https://pagedone.io/asset/uploads/1716545141.png"
                              alt="Thumbs Up emoji"
                            />
                          </div>
                          <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                            <img
                              className="h-3 w-3"
                              src="https://pagedone.io/asset/uploads/1716545183.png"
                              alt="Smiling eyes emoji"
                            />
                          </div>
                          <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                            <img
                              className="h-3 w-3"
                              src="https://pagedone.io/asset/uploads/1716545217.png"
                              alt="hugging face emoji"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end justify-start gap-2.5 pl-7 sm:pl-10 md:pl-20 lg:pl-60">
                  <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
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
                            <h6 className="text-xs leading-5 font-normal text-gray-500">
                              25 mins ago
                            </h6>
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
                        I agree, and I also loved how the secondary characters
                        evolved. Each one had their own unique arc that added
                        depth to the overall narrative.
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-between">
                      <div className="flex items-center justify-start gap-4">
                        <div className="flex items-center justify-start gap-1.5">
                          <a href="#"></a>
                          <h5 className="text-sm leading-snug font-normal text-gray-900">
                            Replies
                          </h5>
                        </div>
                        <div className="flex items-center justify-start gap-1.5">
                          <a href="#"></a>
                          <h5 className="text-sm leading-snug font-normal text-gray-900">
                            Reactions
                          </h5>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <h5 className="text-sm leading-snug font-normal text-gray-500">
                          2
                        </h5>
                        <div className="flex items-start justify-start -space-x-2 overflow-hidden">
                          <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                            <img
                              className="h-3 w-3"
                              src="https://pagedone.io/asset/uploads/1716545141.png"
                              alt="Thumbs Up emoji"
                            />
                          </div>
                          <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                            <img
                              className="h-3 w-3"
                              src="https://pagedone.io/asset/uploads/1716545183.png"
                              alt="Smiling eyes emoji"
                            />
                          </div>
                          <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                            <img
                              className="h-3 w-3"
                              src="https://pagedone.io/asset/uploads/1716545217.png"
                              alt="hugging face emoji"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-end justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-3.5">
                    <div className="inline-flex w-full items-center justify-between">
                      <div className="flex items-center justify-start gap-2.5">
                        <div className="flex h-10 w-10 items-start justify-start gap-2.5 rounded-full bg-gray-200">
                          <img
                            className="rounded-full object-cover"
                            src="https://pagedone.io/asset/uploads/1710225621.png"
                            alt="Robert Wilson image"
                          />
                        </div>
                        <div className="inline-flex flex-col items-start justify-start gap-1">
                          <h5 className="text-sm leading-snug font-semibold text-gray-900">
                            Robert Wilson
                          </h5>
                          <h6 className="text-xs leading-5 font-normal text-gray-500">
                            6 hr ago
                          </h6>
                        </div>
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
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      The themes in this book really made me think about life
                      and purpose. It's a very introspective read that
                      encourages self-reflection and personal growth. The way
                      the author weaves philosophical questions into the
                      storyline is seamless and thought-provoking. Each chapter
                      seemed to pose new questions about identity, morality, and
                      the human condition. It’s one of those books that stays
                      with you long after you’ve turned the last page, prompting
                      you to reflect on your own beliefs and values. The
                      narrative was both compelling and enlightening, providing
                      a deep dive into the complexities of life.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-4">
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          1 Replies
                        </h5>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          Reactions
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-1">
                      <h5 className="text-sm leading-snug font-normal text-gray-500">
                        62
                      </h5>
                      <div className="flex items-start justify-start -space-x-2 overflow-hidden">
                        <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                          <img
                            className="h-3 w-3"
                            src="https://pagedone.io/asset/uploads/1716545141.png"
                            alt="Thumbs Up emoji"
                          />
                        </div>
                        <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                          <img
                            className="h-3 w-3"
                            src="https://pagedone.io/asset/uploads/1716545183.png"
                            alt="Smiling eyes emoji"
                          />
                        </div>
                        <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                          <img
                            className="h-3 w-3"
                            src="https://pagedone.io/asset/uploads/1716545217.png"
                            alt="hugging face emoji"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-end justify-start gap-2.5 pl-7 sm:pl-10 md:pl-20 lg:pl-60">
                  <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <div className="flex w-full flex-col items-start justify-center gap-3.5">
                      <div className="inline-flex w-full items-center justify-between">
                        <div className="flex items-center justify-start gap-2.5">
                          <div className="flex h-10 w-10 items-start justify-start gap-2.5 rounded-full bg-stone-300">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src="https://pagedone.io/asset/uploads/1710238051.png"
                              alt="Sarah Davis image"
                            />
                          </div>
                          <div className="inline-flex flex-col items-start justify-start gap-1">
                            <h5 className="text-sm leading-snug font-semibold text-gray-900">
                              Sarah Davis
                            </h5>
                            <h6 className="text-xs leading-5 font-normal text-gray-500">
                              2 hr ago
                            </h6>
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
                        Same here. It's rare for a book to have such a lasting
                        impact on my thoughts and perspectives. The narrative
                        was both compelling and enlightening, truly a
                        thought-provoking read. I found myself pondering the
                        themes long after I’d finished the book, which is a
                        testament to the author’s skill in crafting such a
                        reflective and meaningful story. It’s the kind of book
                        that sparks deep conversations and stays with you for a
                        long time.
                      </p>
                    </div>
                    <div className="inline-flex w-full items-center justify-between">
                      <div className="flex items-center justify-start gap-4">
                        <div className="flex items-center justify-start gap-1.5">
                          <a href="#"></a>
                          <h5 className="text-sm leading-snug font-normal text-gray-900">
                            3 Replies
                          </h5>
                        </div>
                        <div className="flex items-center justify-start gap-1.5">
                          <a href="#"></a>
                          <h5 className="text-sm leading-snug font-normal text-gray-900">
                            Reactions
                          </h5>
                        </div>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <h5 className="text-sm leading-snug font-normal text-gray-500">
                          10
                        </h5>
                        <div className="flex items-start justify-start -space-x-2 overflow-hidden">
                          <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                            <img
                              className="h-3 w-3"
                              src="https://pagedone.io/asset/uploads/1716545141.png"
                              alt="Thumbs Up emoji"
                            />
                          </div>
                          <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                            <img
                              className="h-3 w-3"
                              src="https://pagedone.io/asset/uploads/1716545183.png"
                              alt="Smiling eyes emoji"
                            />
                          </div>
                          <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 p-1.5 ring-1 ring-white">
                            <img
                              className="h-3 w-3"
                              src="https://pagedone.io/asset/uploads/1716545217.png"
                              alt="hugging face emoji"
                            />
                          </div>
                        </div>
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
