export default function EventModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-18"
            data-modal-target="modalBox-18"
            data-modal-toggle="modalBox-18"
          >
            Create Event
          </button>
          <div
            id="modalBox-18"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-8">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Establish Event
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-18"
                      data-modal-target="modalBox-18"
                    ></button>
                  </div>
                  <div className="relative mb-3.5">
                    <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                      Event Name
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full max-w-xs pl-4 pr-3.5 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Team fun party"
                      required
                    />
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
                  <div className="flex items-center justify-between py-2.5 px-3.5 rounded-lg border border-gray-200 mb-8">
                    <div className="block">
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        Invite Team Members
                      </p>
                      <p className="text-xs font-normal text-gray-500">
                        Invite your teammates to this event
                      </p>
                    </div>
                    <button className="rounded-md p-2.5 bg-gray-100 text-gray-800 transition-all duration-300 hover:text-black hover:bg-gray-200"></button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button py-2.5 text-center w-full rounded-lg bg-gray-50 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100"
                      data-pd-overlay="#modalBox-18"
                      data-modal-target="modalBox-18"
                    >
                      Cancel Event
                    </button>
                    <button
                      className="close-modal-button py-2.5 text-center w-full rounded-lg bg-gray-900 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
                      data-pd-overlay="#modalBox-18"
                      data-modal-target="modalBox-18"
                    >
                      Create Event
                    </button>
                  </div>
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
