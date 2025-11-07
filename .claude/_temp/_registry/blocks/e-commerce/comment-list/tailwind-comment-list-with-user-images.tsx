export default function TailwindCommentListWithUserImages() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <div className="w-full flex-col justify-start items-start lg:gap-10 gap-8 flex">
            <div className="w-full justify-between items-center inline-flex">
              <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
                Comments
              </h2>
              <button className="px-3.5 py-2 bg-gradient-to-tr from-indigo-600 to-indigo-400 hover:from-indigo-700 hover:to-indigo-500 transition-all duration-700 ease-in-out rounded-lg shadow justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Write Comment
                </span>
              </button>
            </div>
            <div className="w-full flex-col justify-start items-end gap-5 flex">
              <div className="w-full flex-col justify-center items-start flex">
                <div className="w-full p-6 bg-white rounded-tl-2xl rounded-tr-2xl border-l border-r border-t border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-5 flex">
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710226776.png"
                        alt="Emily Jones image"
                      />
                      <div className="w-full flex-col justify-center items-start gap-1 inline-flex">
                        <div className="w-full justify-between items-center gap-2.5 inline-flex">
                          <h5 className="text-gray-900 text-base font-semibold leading-relaxed">
                            Emily Jones
                          </h5>
                          <h6 className="text-right text-gray-500 text-sm font-normal leading-snug">
                            24 April, 12:20 PM
                          </h6>
                        </div>
                        <h6 className="text-gray-500 text-sm font-medium leading-snug">
                          CO-founder
                        </h6>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
                      Great job on the presentation today, everyone! The client
                      was really impressed with our work. Your dedication and
                      teamwork truly shone through, making a significant impact.
                      Let's keep this momentum going and continue to deliver
                      outstanding results. I'm proud of what we've achieved
                      together and excited about the opportunities ahead. Keep
                      up the excellent work!
                    </p>
                  </div>
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug">
                          20k
                        </span>
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <a href="#"></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug">
                          12
                        </span>
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <a href="#"></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug">
                          10
                        </span>
                      </div>
                    </div>
                    <div className="justify-start items-start flex -space-x-2 overflow-hidden">
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710225621.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321575.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321486.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710238014.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-blue-100 rounded-full border border-white justify-center items-center flex">
                        <span className="w-8 h-8 flex items-center justify-center text-center text-blue-500 text-xs font-semibold leading-5">
                          50+
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between relative">
                  <div className="w-full flex justify-between relative">
                    <input
                      type="text"
                      className="relative w-full h-14 focus:outline-none border-x border-gray-200 border-b rounded-b-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] py-3 pr-5 pl-[50px] bg-gray-50 first-letter:placeholder-gray-400 text-gray-900 text-lg font-normal leading-8"
                      placeholder="Write comment reply..."
                    />
                    <img
                      className="w-6 h-6 rounded-full absolute top-3.5 left-5 mr-2 object-cover"
                      src="https://pagedone.io/asset/uploads/1710307723.png"
                      alt="Avtar image"
                    />
                  </div>
                  <a className="absolute right-6 top-[18px]"></a>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start flex">
                <div className="w-full p-6 bg-white rounded-tl-2xl rounded-tr-2xl border-l border-r border-t border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-5 flex">
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1716546816.png"
                        alt="Christopher Brown image"
                      />
                      <div className="w-full flex-col justify-center items-start gap-1 inline-flex">
                        <div className="w-full justify-between items-center gap-2.5 inline-flex">
                          <h5 className="text-gray-900 text-base font-semibold leading-relaxed">
                            Christopher Brown
                          </h5>
                          <h6 className="text-right text-gray-500 text-sm font-normal leading-snug">
                            16 February, 08:26 AM
                          </h6>
                        </div>
                        <h6 className="text-gray-500 text-sm font-medium leading-snug">
                          HR
                        </h6>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
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
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug">
                          5k
                        </span>
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <a href="#"></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug">
                          34
                        </span>
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <a href="#"></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug">
                          8
                        </span>
                      </div>
                    </div>
                    <div className="justify-start items-start flex -space-x-2 overflow-hidden">
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710225621.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321575.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321486.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710238014.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-blue-100 rounded-full border border-white justify-center items-center flex">
                        <span className="w-8 h-8 flex items-center justify-center text-center text-blue-500 text-xs font-semibold leading-5">
                          26
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between relative">
                  <div className="w-full flex justify-between relative">
                    <input
                      type="text"
                      className="relative w-full h-14 focus:outline-none border-x border-gray-200 border-b rounded-b-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] py-3 pr-5 pl-[50px] bg-gray-50 first-letter:placeholder-gray-400 text-gray-900 text-lg font-normal leading-8"
                      placeholder="Write comment reply..."
                    />
                    <img
                      className="w-6 h-6 rounded-full absolute top-3.5 left-5 mr-2 object-cover"
                      src="https://pagedone.io/asset/uploads/1710307723.png"
                      alt="Avtar image"
                    />
                  </div>
                  <a className="absolute right-6 top-[18px]"></a>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start flex">
                <div className="w-full p-6 bg-white rounded-tl-2xl rounded-tr-2xl border-l border-r border-t border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-5 flex">
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1716546816.png"
                        alt="Daniel Taylor image"
                      />
                      <div className="w-full flex-col justify-center items-start gap-1 inline-flex">
                        <div className="w-full justify-between items-center gap-2.5 inline-flex">
                          <h5 className="text-gray-900 text-base font-semibold leading-relaxed">
                            Daniel Taylor
                          </h5>
                          <h6 className="text-right text-gray-500 text-sm font-normal leading-snug">
                            10 January, 10:35 AM
                          </h6>
                        </div>
                        <h6 className="text-gray-500 text-sm font-medium leading-snug">
                          Project Manager
                        </h6>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
                      We need to finalize the project deliverables by the end of
                      this week. Please make sure all reports are updated.
                      Ensure that all data is accurate and up-to-date, and
                      double-check for any discrepancies. Let’s aim for a smooth
                      and timely submission to meet our deadline.
                    </p>
                  </div>
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug">
                          51k
                        </span>
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <a href="#"></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug">
                          34
                        </span>
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <a href="#"></a>
                        <span className="text-gray-500 text-sm font-normal leading-snug">
                          24
                        </span>
                      </div>
                    </div>
                    <div className="justify-start items-start flex -space-x-2 overflow-hidden">
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710225621.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321575.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710321486.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-gray-100 rounded-full border border-white justify-center items-center flex">
                        <img
                          className="w-8 h-8 rounded-full object-cover"
                          src="https://pagedone.io/asset/uploads/1710238014.png"
                          alt="Avtar image"
                        />
                      </div>
                      <div className="inline-block ring-1 ring-white bg-blue-100 rounded-full border border-white justify-center items-center flex">
                        <span className="w-8 h-8 flex items-center justify-center text-center text-blue-500 text-xs font-semibold leading-5">
                          10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between relative">
                  <div className="w-full flex justify-between relative">
                    <input
                      type="text"
                      className="relative w-full h-14 focus:outline-none border-x border-gray-200 border-b rounded-b-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] py-3 pr-5 pl-[50px] bg-gray-50 first-letter:placeholder-gray-400 text-gray-900 text-lg font-normal leading-8"
                      placeholder="Write comment reply..."
                    />
                    <img
                      className="w-6 h-6 rounded-full absolute top-3.5 left-5 mr-2 object-cover"
                      src="https://pagedone.io/asset/uploads/1710307723.png"
                      alt="Avtar image"
                    />
                  </div>
                  <a className="absolute right-6 top-[18px]"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
