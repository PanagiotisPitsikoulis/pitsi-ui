export default function CommentFormTailwind() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8 lg:gap-10">
          <h2 className="font-manrope text-3xl leading-normal font-bold text-gray-900">
            Comments
          </h2>
          <div className="flex w-full flex-col items-start justify-start gap-9">
            <div className="flex w-full flex-col items-end justify-start gap-5">
              <div className="flex w-full flex-col items-start justify-center rounded-2xl">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 bg-white p-4 lg:p-6">
                  <div className="flex flex-col items-start justify-center gap-5">
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      Great job on the presentation today, everyone! The client
                      was really impressed with our work. Your dedication and
                      teamwork truly shone through, making a significant impact.
                      Let's keep this momentum going and continue to deliver
                      outstanding results. I'm proud of what we've achieved
                      together and excited about the opportunities ahead. Keep
                      up the excellent work!
                    </p>
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-8 w-8 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710321469.png"
                        alt="Michael Johnson image"
                      />
                      <div className="flex w-full items-center justify-between gap-2.5">
                        <h5 className="text-base leading-relaxed font-semibold text-gray-900">
                          Michael Johnson
                        </h5>
                        <h6 className="text-right text-sm leading-snug font-normal text-gray-500">
                          5 weeks ago
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 bg-white p-4 lg:p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-5">
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
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        src="https://pagedone.io/asset/uploads/1711607064.png"
                        className="h-8 w-8 rounded-full object-cover"
                        alt="Jessica Martinez image"
                      />
                      <div className="flex w-full items-center justify-between gap-2.5">
                        <h5 className="text-base leading-relaxed font-semibold text-gray-900">
                          Jessica Martinez
                        </h5>
                        <h6 className="text-right text-sm leading-snug font-normal text-gray-500">
                          10 weeks ago
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-center">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-2xl border border-gray-200 bg-white p-4 lg:p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-5">
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      We need to finalize the project deliverables by the end of
                      this week. Please make sure all reports are updated.
                      Ensure that all data is accurate and up-to-date, and
                      double-check for any discrepancies. Let’s aim for a smooth
                      and timely submission to meet our deadline.
                    </p>
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        src="https://pagedone.io/asset/uploads/1704349572.png"
                        className="h-8 w-8 rounded-full object-cover"
                        alt="Robert Wilson image"
                      />
                      <div className="flex w-full items-center justify-between gap-2.5">
                        <h5 className="text-base leading-relaxed font-semibold text-gray-900">
                          Robert Wilson
                        </h5>
                        <h6 className="text-right text-sm leading-snug font-normal text-gray-500">
                          1 months ago
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-end justify-center gap-6 rounded-2xl border border-gray-200 p-4 lg:p-6">
              <h3 className="font-manrope w-full text-2xl leading-9 font-semibold text-black">
                Leave a Comment
              </h3>
              <div className="flex w-full flex-col items-start justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-5 sm:flex-row">
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="Pagedone"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start gap-1">
                    <label
                      htmlFor=""
                      className="flex items-center gap-0.5 text-xs leading-5 font-medium text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="inline-flex w-full items-center justify-start gap-2 rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                      placeholder="mail@pagedone.com"
                    />
                  </div>
                </div>
                <textarea
                  name=""
                  rows={7}
                  className="w-full resize-none rounded-lg border border-gray-300 px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none"
                  placeholder="Write a comment..."
                />
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-gradient-to-tr from-gray-700 to-gray-500 px-5 py-2.5 shadow transition-all duration-700 ease-in-out hover:from-gray-800 hover:to-gray-600 sm:w-fit">
                <span className="px-2 text-base leading-7 font-semibold text-white">
                  Submit Comment
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
