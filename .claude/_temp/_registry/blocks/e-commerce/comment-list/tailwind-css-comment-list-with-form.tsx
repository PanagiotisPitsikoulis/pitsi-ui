export default function TailwindCssCommentListWithForm() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-10 gap-7 inline-flex">
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
                <div className="px-3 py-1.5 rounded-md border border-gray-200 justify-start items-start gap-4 inline-flex">
                  <div className="w-[18px] h-[18px]">
                    <img
                      className="w-full h-full"
                      src="https://pagedone.io/asset/uploads/1716545141.png"
                      alt="Thumbs Up emoji image"
                    />
                  </div>
                  <div className="w-[18px] h-[18px]">
                    <img
                      className="w-full h-full"
                      src="https://pagedone.io/asset/uploads/1716620420.png"
                      alt="smiling face emoji image"
                    />
                  </div>
                  <div className="w-[18px] h-[18px]">
                    <img
                      className="w-full h-full"
                      src="https://pagedone.io/asset/uploads/1716620492.png"
                      alt="Grinning face emoji image"
                    />
                  </div>
                  <div className="w-[18px] h-[18px]">
                    <img
                      className="w-[18px] h-[18px]"
                      src="https://pagedone.io/asset/uploads/1716620548.png"
                      alt="Neutral face emoji image"
                    />
                  </div>
                  <div className="w-[18px] h-[18px]">
                    <img
                      className="w-[18px] h-[18px]"
                      src="https://pagedone.io/asset/uploads/1716620598.png"
                      alt="Grimacing face emoji image"
                    />
                  </div>
                  <div className="w-[18px] h-[18px]">
                    <img
                      className="w-[18px] h-[18px]"
                      src="https://pagedone.io/asset/uploads/1716620642.png"
                      alt="Pouting face emoji image"
                    />
                  </div>
                </div>
                <a href="#"></a>
              </div>
            </div>
            <div className="w-full flex-col justify-start items-start gap-6 flex">
              <div className="w-full justify-between items-center inline-flex">
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
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
              <div className="w-full flex-col justify-start items-end gap-5 flex">
                <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710238051.png"
                        alt="Mary Lewis image"
                      />
                      <div className="w-full justify-between items-center gap-2.5 flex">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          Mary Lewis
                        </h5>
                        <span className="text-right text-gray-500 text-xs font-normal leading-5">
                          2 weeks ago
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
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
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-medium leading-snug">
                          10
                        </h5>
                      </div>
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-medium leading-snug">
                          2
                        </h5>
                      </div>
                    </div>
                    <div className="justify-end items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-normal leading-snug">
                          2k
                        </h5>
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-normal leading-snug">
                          20
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1710225753.png"
                        alt="James Anderson image"
                      />
                      <div className="w-full justify-between items-center gap-2.5 flex">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          James Anderson
                        </h5>
                        <span className="text-right text-gray-500 text-xs font-normal leading-5">
                          4 days ago
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
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
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-medium leading-snug">
                          5
                        </h5>
                      </div>
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-medium leading-snug">
                          0
                        </h5>
                      </div>
                    </div>
                    <div className="justify-end items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-normal leading-snug">
                          4k
                        </h5>
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-normal leading-snug">
                          12
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-6 rounded-xl border border-gray-200 flex-col justify-start items-start gap-8 flex">
                  <div className="w-full flex-col justify-center items-start gap-3.5 flex">
                    <div className="w-full justify-start items-center gap-2.5 inline-flex">
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://pagedone.io/asset/uploads/1716621417.png"
                        alt="William Hernandez image"
                      />
                      <div className="w-full justify-between items-center gap-2.5 flex">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          William Hernandez
                        </h5>
                        <span className="text-right text-gray-500 text-xs font-normal leading-5">
                          12 days ago
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-800 text-sm font-normal leading-snug">
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
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-medium leading-snug">
                          28
                        </h5>
                      </div>
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-medium leading-snug">
                          4
                        </h5>
                      </div>
                    </div>
                    <div className="justify-end items-center gap-2.5 flex">
                      <div className="justify-start items-center gap-1 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-normal leading-snug">
                          45k
                        </h5>
                      </div>
                      <div className="justify-start items-center gap-1.5 flex">
                        <a href="#"></a>
                        <h5 className="text-gray-900 text-sm font-normal leading-snug">
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
  );
}
