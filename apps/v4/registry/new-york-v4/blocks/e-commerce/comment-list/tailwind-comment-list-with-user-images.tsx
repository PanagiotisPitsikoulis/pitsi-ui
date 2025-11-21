export default function TailwindCommentListWithUserImages() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <div className="flex w-full flex-col items-start justify-start gap-8 lg:gap-10">
            <div className="inline-flex w-full items-center justify-between">
              <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
                Comments
              </h2>
              <button className="flex items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-400 px-3.5 py-2 shadow transition-all duration-700 ease-in-out hover:from-indigo-700 hover:to-indigo-500">
                <span className="px-1.5 text-sm leading-6 font-medium text-white">
                  Write Comment
                </span>
              </button>
            </div>
            <div className="flex w-full flex-col items-end justify-start gap-5">
              <div className="flex w-full flex-col items-start justify-center">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-tl-2xl rounded-tr-2xl border-t border-r border-l border-gray-200 bg-white p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-5">
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710226776.png"
                        alt="Emily Jones image"
                      />
                      <div className="inline-flex w-full flex-col items-start justify-center gap-1">
                        <div className="inline-flex w-full items-center justify-between gap-2.5">
                          <h5 className="text-base leading-relaxed font-semibold text-gray-900">
                            Emily Jones
                          </h5>
                          <h6 className="text-right text-sm leading-snug font-normal text-gray-500">
                            24 April, 12:20 PM
                          </h6>
                        </div>
                        <h6 className="text-sm leading-snug font-medium text-gray-500">
                          CO-founder
                        </h6>
                      </div>
                    </div>
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      Great job on the presentation today, everyone! The client
                      was really impressed with our work. Your dedication and
                      teamwork truly shone through, making a significant impact.
                      Let's keep this momentum going and continue to deliver
                      outstanding results. I'm proud of what we've achieved
                      together and excited about the opportunities ahead. Keep
                      up the excellent work!
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-2.5">
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <span className="text-sm leading-snug font-normal text-gray-500">
                          20k
                        </span>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <span className="text-sm leading-snug font-normal text-gray-500">
                          12
                        </span>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <span className="text-sm leading-snug font-normal text-gray-500">
                          10
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start justify-start -space-x-2 overflow-hidden">
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710225621.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321575.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321486.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710238014.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-blue-100 ring-1 ring-white">
                        <span className="flex h-8 w-8 items-center justify-center text-center text-xs leading-5 font-semibold text-blue-500">
                          50+
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex w-full justify-between">
                  <div className="relative flex w-full justify-between">
                    <input
                      type="text"
                      className="relative h-14 w-full rounded-b-lg border-x border-b border-gray-200 bg-gray-50 py-3 pr-5 pl-[50px] text-lg leading-8 font-normal text-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] first-letter:placeholder-gray-400 focus:outline-none"
                      placeholder="Write comment reply..."
                    />
                    <img
                      className="absolute top-3.5 left-5 mr-2 h-6 w-6 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1710307723.png"
                      alt="Avtar image"
                    />
                  </div>
                  <a className="absolute top-[18px] right-6"></a>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-tl-2xl rounded-tr-2xl border-t border-r border-l border-gray-200 bg-white p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-5">
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1716546816.png"
                        alt="Christopher Brown image"
                      />
                      <div className="inline-flex w-full flex-col items-start justify-center gap-1">
                        <div className="inline-flex w-full items-center justify-between gap-2.5">
                          <h5 className="text-base leading-relaxed font-semibold text-gray-900">
                            Christopher Brown
                          </h5>
                          <h6 className="text-right text-sm leading-snug font-normal text-gray-500">
                            16 February, 08:26 AM
                          </h6>
                        </div>
                        <h6 className="text-sm leading-snug font-medium text-gray-500">
                          HR
                        </h6>
                      </div>
                    </div>
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      Don't forget, our annual team-building event is next
                      Friday. Make sure to Pagedone by Wednesday. It's going to
                      be a fantastic day filled with fun activities and
                      opportunities to strengthen our bonds as a team. We'll
                      have games, workshops, and plenty of chances to get to
                      know each other better outside of the office. Lunch and
                      refreshments will be provided, so come ready to relax and
                      enjoy. Let's make this event a memorable one—your
                      participation is what makes these events so special.
                      Looking forward to seeing everyone there!
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-2.5">
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <span className="text-sm leading-snug font-normal text-gray-500">
                          5k
                        </span>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <span className="text-sm leading-snug font-normal text-gray-500">
                          34
                        </span>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <span className="text-sm leading-snug font-normal text-gray-500">
                          8
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start justify-start -space-x-2 overflow-hidden">
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710225621.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321575.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321486.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710238014.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-blue-100 ring-1 ring-white">
                        <span className="flex h-8 w-8 items-center justify-center text-center text-xs leading-5 font-semibold text-blue-500">
                          26
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex w-full justify-between">
                  <div className="relative flex w-full justify-between">
                    <input
                      type="text"
                      className="relative h-14 w-full rounded-b-lg border-x border-b border-gray-200 bg-gray-50 py-3 pr-5 pl-[50px] text-lg leading-8 font-normal text-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] first-letter:placeholder-gray-400 focus:outline-none"
                      placeholder="Write comment reply..."
                    />
                    <img
                      className="absolute top-3.5 left-5 mr-2 h-6 w-6 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1710307723.png"
                      alt="Avtar image"
                    />
                  </div>
                  <a className="absolute top-[18px] right-6"></a>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-tl-2xl rounded-tr-2xl border-t border-r border-l border-gray-200 bg-white p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-5">
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1716546816.png"
                        alt="Daniel Taylor image"
                      />
                      <div className="inline-flex w-full flex-col items-start justify-center gap-1">
                        <div className="inline-flex w-full items-center justify-between gap-2.5">
                          <h5 className="text-base leading-relaxed font-semibold text-gray-900">
                            Daniel Taylor
                          </h5>
                          <h6 className="text-right text-sm leading-snug font-normal text-gray-500">
                            10 January, 10:35 AM
                          </h6>
                        </div>
                        <h6 className="text-sm leading-snug font-medium text-gray-500">
                          Project Manager
                        </h6>
                      </div>
                    </div>
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      We need to finalize the project deliverables by the end of
                      this week. Please make sure all reports are updated.
                      Ensure that all data is accurate and up-to-date, and
                      double-check for any discrepancies. Let’s aim for a smooth
                      and timely submission to meet our deadline.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-2.5">
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <span className="text-sm leading-snug font-normal text-gray-500">
                          51k
                        </span>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <span className="text-sm leading-snug font-normal text-gray-500">
                          34
                        </span>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <span className="text-sm leading-snug font-normal text-gray-500">
                          24
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start justify-start -space-x-2 overflow-hidden">
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710225621.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321575.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321486.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-gray-100 ring-1 ring-white">
                        <img
                          className="h-8 w-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710238014.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="flex inline-block items-center justify-center rounded-full border border-white bg-blue-100 ring-1 ring-white">
                        <span className="flex h-8 w-8 items-center justify-center text-center text-xs leading-5 font-semibold text-blue-500">
                          10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative flex w-full justify-between">
                  <div className="relative flex w-full justify-between">
                    <input
                      type="text"
                      className="relative h-14 w-full rounded-b-lg border-x border-b border-gray-200 bg-gray-50 py-3 pr-5 pl-[50px] text-lg leading-8 font-normal text-gray-900 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] first-letter:placeholder-gray-400 focus:outline-none"
                      placeholder="Write comment reply..."
                    />
                    <img
                      className="absolute top-3.5 left-5 mr-2 h-6 w-6 rounded-full object-cover"
                      src="https://pagedone.io/asset/uploads/1710307723.png"
                      alt="Avtar image"
                    />
                  </div>
                  <a className="absolute top-[18px] right-6"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
