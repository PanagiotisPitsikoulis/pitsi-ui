export default function CreateMeetingModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-19"
            data-modal-target="modalBox-19"
            data-modal-toggle="modalBox-19"
          >
            Meeting
          </button>
          <div
            id="modalBox-19"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-emerald-50"></div>
                      <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                        Office Meeting
                      </h6>
                    </div>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-emerald-700"
                      data-pd-overlay="#modalBox-19"
                      data-modal-target="modalBox-19"
                    ></button>
                  </div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <button className="flex items-center gap-1.5 pb-2 border-b border-emerald-700 text-xs font-medium text-emerald-700">
                      Information
                    </button>
                    <button className="flex items-center gap-1.5 pb-2 border-b border-transparent text-gray-400 transition-all duration-300 hover:border-emerald-700 text-xs font-medium hover:text-emerald-700">
                      Notes
                    </button>
                    <button className="flex items-center gap-1.5 pb-2 border-b border-transparent text-gray-400 transition-all duration-300 hover:border-emerald-700 text-xs font-medium hover:text-emerald-700">
                      Media
                    </button>
                  </div>
                  <div className="relative mb-3.5">
                    <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                      Date
                    </label>
                    <div className="relative  text-gray-500 focus-within:text-gray-900 ">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full max-w-xs pr-4 pl-10 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="Monday , Jan 20"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3.5">
                    <div className="relative mb-5">
                      <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                        Time Start
                      </label>
                      <div className="relative  text-gray-500 focus-within:text-gray-900 ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full max-w-xs pr-4 pl-10 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                          placeholder="03:00 PM"
                        />
                      </div>
                    </div>
                    <div className="relative mb-5">
                      <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                        Time End
                      </label>
                      <div className="relative  text-gray-500 focus-within:text-gray-900 ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full max-w-xs pr-4 pl-10 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                          placeholder="06:00 PM"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="block mb-3.5">
                    <p className="text-xs font-medium text-gray-600 mb-1">
                      Participants
                    </p>
                    <div className="rounded-lg border border-gray-200 flex flex-col divide-y divide-gray-200">
                      <div className="flex items-center gap-1.5 py-2 px-3.5">
                        <span className="text-sm py-px font-normal text-gray-500">
                          Add participants(s)
                        </span>
                      </div>
                      <div className="flex items-center justify-between py-2 px-3.5">
                        <div className="flex items-center gap-1">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776807.png"
                            alt="image"
                            className="object-cover"
                          />
                          <img
                            src="https://pagedone.io/asset/uploads/1720776818.png"
                            alt="image"
                            className="object-cover"
                          />
                          <img
                            src="https://pagedone.io/asset/uploads/1720776828.png"
                            alt="image"
                            className="object-cover"
                          />
                          <img
                            src="https://pagedone.io/asset/uploads/1720776842.png"
                            alt="image"
                            className="object-cover"
                          />
                          <img
                            src="https://pagedone.io/asset/uploads/1720776852.png"
                            alt="image"
                            className="object-cover"
                          />
                        </div>
                        <button className="text-gray-500 transition-all duration-300 hover:text-gray-900"></button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3.5">
                    <div className="block w-full relative">
                      <label
                        htmlFor="countries"
                        className="block mb-1 text-sm font-medium text-gray-600 w-full"
                      >
                        Platform
                      </label>
                      <div className="relative">
                        <select
                          id="countries"
                          className=" border border-gray-200 text-gray-600 text-sm rounded-lg block w-full py-2.5 px-4 pl-9 focus:outline-none"
                        >
                          <option selected>Google Meet</option>
                          <option value="US">Zoom</option>
                          <option value="CA">Skype</option>
                        </select>
                      </div>
                    </div>
                    <div className="block">
                      <p className="text-xs font-medium text-gray-600 mb-1">
                        Link
                      </p>
                      <div className="flex items-center gap-1.5 py-2.5 pr-3.5 pl-4 rounded-lg border border-gray-200">
                        <span className="text-sm font-normal text-gray-400 select-all">
                          meet.google.c...
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-8">
                    <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                      Location
                    </label>
                    <div className="relative  text-gray-500 focus-within:text-gray-900 ">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full max-w-xs pr-4 pl-10 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="Add location"
                      />
                    </div>
                  </div>
                  <button
                    className="w-full text-center rounded-lg py-2.5 px-4 bg-emerald-700 text-white text-sm font-medium transition-all duration-300 hover:bg-emerald-800 close-modal-button"
                    data-pd-overlay="#modalBox-19"
                    data-modal-target="modalBox-19"
                  >
                    Save Meeting
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="backdrop"
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
