export default function EventModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-18"
            data-modal-target="modalBox-18"
            data-modal-toggle="modalBox-18"
          >
            Create Event
          </button>
          <div
            id="modalBox-18"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-8 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Establish Event
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-18"
                      data-modal-target="modalBox-18"
                    ></button>
                  </div>
                  <div className="relative mb-3.5">
                    <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                      Event Name
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full max-w-xs rounded-lg border border-gray-300 bg-transparent py-2 pr-3.5 pl-4 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Team fun party"
                      required
                    />
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
                  <div className="mb-8 flex items-center justify-between rounded-lg border border-gray-200 px-3.5 py-2.5">
                    <div className="block">
                      <p className="mb-1 text-sm font-semibold text-gray-900">
                        Invite Team Members
                      </p>
                      <p className="text-xs font-normal text-gray-500">
                        Invite your teammates to this event
                      </p>
                    </div>
                    <button className="rounded-md bg-gray-100 p-2.5 text-gray-800 transition-all duration-300 hover:bg-gray-200 hover:text-black"></button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button w-full rounded-lg bg-gray-50 py-2.5 text-center text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100"
                      data-pd-overlay="#modalBox-18"
                      data-modal-target="modalBox-18"
                    >
                      Cancel Event
                    </button>
                    <button
                      className="close-modal-button w-full rounded-lg bg-gray-900 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
