export default function CreateMeetingModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-19"
            data-modal-target="modalBox-19"
            data-modal-toggle="modalBox-19"
          >
            Meeting
          </button>
          <div
            id="modalBox-19"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50"></div>
                      <h6 className="text-lg leading-8 font-bold text-gray-900">
                        Office Meeting
                      </h6>
                    </div>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-emerald-700"
                      data-pd-overlay="#modalBox-19"
                      data-modal-target="modalBox-19"
                    ></button>
                  </div>
                  <div className="mb-5 flex items-center gap-2.5">
                    <button className="flex items-center gap-1.5 border-b border-emerald-700 pb-2 text-xs font-medium text-emerald-700">
                      Information
                    </button>
                    <button className="flex items-center gap-1.5 border-b border-transparent pb-2 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-emerald-700 hover:text-emerald-700">
                      Notes
                    </button>
                    <button className="flex items-center gap-1.5 border-b border-transparent pb-2 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-emerald-700 hover:text-emerald-700">
                      Media
                    </button>
                  </div>
                  <div className="relative mb-3.5">
                    <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                      Date
                    </label>
                    <div className="relative text-gray-500 focus-within:text-gray-900">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full max-w-xs rounded-lg border border-gray-300 bg-transparent py-2 pr-4 pl-10 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Monday , Jan 20"
                      />
                    </div>
                  </div>
                  <div className="mb-3.5 flex items-center gap-4">
                    <div className="relative mb-5">
                      <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                        Time Start
                      </label>
                      <div className="relative text-gray-500 focus-within:text-gray-900">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full max-w-xs rounded-lg border border-gray-300 bg-transparent py-2 pr-4 pl-10 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                          placeholder="03:00 PM"
                        />
                      </div>
                    </div>
                    <div className="relative mb-5">
                      <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                        Time End
                      </label>
                      <div className="relative text-gray-500 focus-within:text-gray-900">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full max-w-xs rounded-lg border border-gray-300 bg-transparent py-2 pr-4 pl-10 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                          placeholder="06:00 PM"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3.5 block">
                    <p className="mb-1 text-xs font-medium text-gray-600">
                      Participants
                    </p>
                    <div className="flex flex-col divide-y divide-gray-200 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-1.5 px-3.5 py-2">
                        <span className="py-px text-sm font-normal text-gray-500">
                          Add participants(s)
                        </span>
                      </div>
                      <div className="flex items-center justify-between px-3.5 py-2">
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
                  <div className="mb-3.5 flex items-center gap-4">
                    <div className="relative block w-full">
                      <label
                        htmlFor="countries"
                        className="mb-1 block w-full text-sm font-medium text-gray-600"
                      >
                        Platform
                      </label>
                      <div className="relative">
                        <select
                          id="countries"
                          className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 pl-9 text-sm text-gray-600 focus:outline-none"
                        >
                          <option selected>Google Meet</option>
                          <option value="US">Zoom</option>
                          <option value="CA">Skype</option>
                        </select>
                      </div>
                    </div>
                    <div className="block">
                      <p className="mb-1 text-xs font-medium text-gray-600">
                        Link
                      </p>
                      <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 py-2.5 pr-3.5 pl-4">
                        <span className="text-sm font-normal text-gray-400 select-all">
                          meet.google.c...
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-8">
                    <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                      Location
                    </label>
                    <div className="relative text-gray-500 focus-within:text-gray-900">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full max-w-xs rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-10 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Add location"
                      />
                    </div>
                  </div>
                  <button
                    className="close-modal-button w-full rounded-lg bg-emerald-700 px-4 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-800"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
