export default function CommentFormTailwind() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-10 gap-8 inline-flex">
          <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
            Comments
          </h2>
          <div className="w-full flex-col justify-start items-start gap-9 flex">
            <div className="w-full flex-col justify-start items-end gap-5 flex">
              <div className="w-full rounded-2xl flex-col justify-center items-start flex">
                <div className="w-full lg:p-6 p-4 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="flex-col justify-center items-start gap-5 flex">
                    <p className="text-gray-800 text-sm font-normal leading-snug">
                      Great job on the presentation today, everyone! The client
                      was really impressed with our work. Your dedication and
                      teamwork truly shone through, making a significant impact.
                      Let's keep this momentum going and continue to deliver
                      outstanding results. I'm proud of what we've achieved
                      together and excited about the opportunities ahead. Keep
                      up the excellent work!
                    </p>
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710321469.png"
                        alt="Michael Johnson image"
                      />
                      <div className="w-full justify-between items-center gap-2.5 flex">
                        <h5 className="text-gray-900 text-base font-semibold leading-relaxed">
                          Michael Johnson
                        </h5>
                        <h6 className="text-right text-gray-500 text-sm font-normal leading-snug">
                          5 weeks ago
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start flex">
                <div className="w-full lg:p-6 p-4 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-5 flex">
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
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        src="https://pagedone.io/asset/uploads/1711607064.png"
                        className="w-8 h-8 rounded-full object-cover"
                        alt="Jessica Martinez image"
                      />
                      <div className="w-full justify-between items-center gap-2.5 flex">
                        <h5 className="text-gray-900 text-base font-semibold leading-relaxed">
                          Jessica Martinez
                        </h5>
                        <h6 className="text-right text-gray-500 text-sm font-normal leading-snug">
                          10 weeks ago
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start flex">
                <div className="w-full lg:p-6 p-4 bg-white rounded-2xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-5 flex">
                    <p className="text-gray-800 text-sm font-normal leading-snug">
                      We need to finalize the project deliverables by the end of
                      this week. Please make sure all reports are updated.
                      Ensure that all data is accurate and up-to-date, and
                      double-check for any discrepancies. Let’s aim for a smooth
                      and timely submission to meet our deadline.
                    </p>
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349572.png"
                        className="w-8 h-8 rounded-full object-cover"
                        alt="Robert Wilson image"
                      />
                      <div className="w-full justify-between items-center gap-2.5 flex">
                        <h5 className="text-gray-900 text-base font-semibold leading-relaxed">
                          Robert Wilson
                        </h5>
                        <h6 className="text-right text-gray-500 text-sm font-normal leading-snug">
                          1 months ago
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:p-6 p-4 rounded-2xl border border-gray-200 flex-col justify-center items-end gap-6 flex">
              <h3 className="w-full text-black text-2xl font-semibold font-manrope leading-9">
                Leave a Comment
              </h3>
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="w-full justify-start items-start gap-5 flex sm:flex-row flex-col">
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="Pagedone"
                    />
                  </div>
                  <div className="w-full flex-col justify-start items-start gap-1 flex">
                    <label
                      htmlFor=""
                      className="flex gap-0.5 items-center text-gray-600 text-xs font-medium leading-5"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed px-3.5 py-2 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-300 justify-start items-center gap-2 inline-flex"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                </div>
                <textarea
                  name=""
                  rows={7}
                  className="w-full focus:outline-none resize-none px-3.5 py-2 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-lg border border-gray-300  text-gray-900 placeholder-gray-400 text-sm font-normal leading-relaxed"
                  placeholder="Write a comment..."
                />
              </div>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-gradient-to-tr from-gray-700 to-gray-500 hover:from-gray-800 hover:to-gray-600 transition-all duration-700 ease-in-out rounded-xl shadow justify-center items-center flex">
                <span className="px-2 text-white text-base font-semibold leading-7">
                  Submit Comment
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
