export default function TailwindCssCommentListWithForm() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-7 lg:gap-10">
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
                <div className="inline-flex items-start justify-start gap-4 rounded-md border border-gray-200 px-3 py-1.5">
                  <div className="h-[18px] w-[18px]">
                    <img
                      className="h-full w-full"
                      src="https://pagedone.io/asset/uploads/1716545141.png"
                      alt="Thumbs Up emoji image"
                    />
                  </div>
                  <div className="h-[18px] w-[18px]">
                    <img
                      className="h-full w-full"
                      src="https://pagedone.io/asset/uploads/1716620420.png"
                      alt="smiling face emoji image"
                    />
                  </div>
                  <div className="h-[18px] w-[18px]">
                    <img
                      className="h-full w-full"
                      src="https://pagedone.io/asset/uploads/1716620492.png"
                      alt="Grinning face emoji image"
                    />
                  </div>
                  <div className="h-[18px] w-[18px]">
                    <img
                      className="h-[18px] w-[18px]"
                      src="https://pagedone.io/asset/uploads/1716620548.png"
                      alt="Neutral face emoji image"
                    />
                  </div>
                  <div className="h-[18px] w-[18px]">
                    <img
                      className="h-[18px] w-[18px]"
                      src="https://pagedone.io/asset/uploads/1716620598.png"
                      alt="Grimacing face emoji image"
                    />
                  </div>
                  <div className="h-[18px] w-[18px]">
                    <img
                      className="h-[18px] w-[18px]"
                      src="https://pagedone.io/asset/uploads/1716620642.png"
                      alt="Pouting face emoji image"
                    />
                  </div>
                </div>
                <a href="#"></a>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-6">
              <div className="inline-flex w-full items-center justify-between">
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
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
              <div className="flex w-full flex-col items-end justify-start gap-5">
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-xl border border-gray-200 p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-3.5">
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710238051.png"
                        alt="Mary Lewis image"
                      />
                      <div className="flex w-full items-center justify-between gap-2.5">
                        <h5 className="text-sm leading-snug font-semibold text-gray-900">
                          Mary Lewis
                        </h5>
                        <span className="text-right text-xs leading-5 font-normal text-gray-500">
                          2 weeks ago
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      Just watched the latest Bollywood blockbuster! The songs
                      were so catchy, and the dance numbers were breathtaking.
                      Beyond the entertainment value, these films often weave in
                      compelling storylines, rich cultural elements, and
                      stunning visuals, creating a feast for the senses. It's no
                      wonder Bollywood continues to enchant audiences with its
                      unique blend of music, dance, and storytelling, making
                      each blockbuster a cinematic celebration to remember.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-2.5">
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-medium text-gray-900">
                          10
                        </h5>
                      </div>
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-medium text-gray-900">
                          2
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2.5">
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          2k
                        </h5>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          20
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-xl border border-gray-200 p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-3.5">
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710225753.png"
                        alt="James Anderson image"
                      />
                      <div className="flex w-full items-center justify-between gap-2.5">
                        <h5 className="text-sm leading-snug font-semibold text-gray-900">
                          James Anderson
                        </h5>
                        <span className="text-right text-xs leading-5 font-normal text-gray-500">
                          4 days ago
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      {" "}
                      Bollywood romance movies have a special charm that
                      transports viewers into a world of love, passion, and
                      emotion. From picturesque locations to enchanting
                      storytelling, these films often leave audiences swooning
                      over the romance unfolding before their eyes. The
                      chemistry between the lead actors can make or break a
                      romance movie, and it's clear that when it sizzles, it
                      adds an extra layer of magic to the cinematic experience.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-2.5">
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-medium text-gray-900">
                          5
                        </h5>
                      </div>
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-medium text-gray-900">
                          0
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2.5">
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          4k
                        </h5>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          12
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-8 rounded-xl border border-gray-200 p-6">
                  <div className="flex w-full flex-col items-start justify-center gap-3.5">
                    <div className="inline-flex w-full items-center justify-start gap-2.5">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1716621417.png"
                        alt="William Hernandez image"
                      />
                      <div className="flex w-full items-center justify-between gap-2.5">
                        <h5 className="text-sm leading-snug font-semibold text-gray-900">
                          William Hernandez
                        </h5>
                        <span className="text-right text-xs leading-5 font-normal text-gray-500">
                          12 days ago
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-snug font-normal text-gray-800">
                      These films are renowned for their hilarious antics, witty
                      dialogue, and comedic timing that keep audiences laughing
                      non-stop. Whether it's the quirky characters, absurd
                      situations, or slapstick humor, Bollywood comedies have a
                      knack for delivering pure entertainment and lighthearted
                      fun. They provide the perfect escape from the stresses of
                      daily life, offering a delightful way to unwind and enjoy
                      some good old-fashioned laughter.
                    </p>
                  </div>
                  <div className="inline-flex w-full items-center justify-between">
                    <div className="flex items-center justify-start gap-2.5">
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-medium text-gray-900">
                          28
                        </h5>
                      </div>
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-medium text-gray-900">
                          4
                        </h5>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2.5">
                      <div className="flex items-center justify-start gap-1">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          45k
                        </h5>
                      </div>
                      <div className="flex items-center justify-start gap-1.5">
                        <a href="#"></a>
                        <h5 className="text-sm leading-snug font-normal text-gray-900">
                          26
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
