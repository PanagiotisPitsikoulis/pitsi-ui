export default function ShareWithInputSearchModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-23"
            data-modal-target="modalBox-23"
            data-modal-toggle="modalBox-23"
          >
            Share Archive
          </button>
          <div
            id="modalBox-23"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-5 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Share Archive
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-23"
                      data-modal-target="modalBox-23"
                    ></button>
                  </div>
                  <form action="#" className="mb-5 flex items-center gap-4">
                    <div className="relative text-gray-500 focus-within:text-gray-900">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full max-w-xs rounded-lg border border-gray-200 bg-transparent py-2.5 pr-3.5 pl-10 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Search name or email"
                      />
                    </div>
                    <button className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white">
                      Share
                    </button>
                  </form>
                  <div className="mb-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <img src="https://pagedone.io/asset/uploads/1726480939.png" />
                      <div className="flex w-full items-center">
                        <div className="block w-full">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Jessie Mayert
                          </p>
                          <span className="text-xs font-normal text-gray-500">
                            Until Jan 20, 2024 at 10:20 AM
                          </span>
                        </div>
                        <div className="flex items-center gap-3.5">
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://pagedone.io/asset/uploads/1726480949.png" />
                      <div className="flex w-full items-center">
                        <div className="block w-full">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            John smith
                          </p>
                          <span className="text-xs font-normal text-gray-500">
                            Until Jan 20, 2024 at 10:20 AM
                          </span>
                        </div>
                        <div className="flex items-center gap-3.5">
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://pagedone.io/asset/uploads/1726480959.png" />
                      <div className="flex w-full items-center">
                        <div className="block w-full">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            James Miller
                          </p>
                          <span className="text-xs font-normal text-gray-500">
                            Until Jan 20, 2024 at 10:20 AM
                          </span>
                        </div>
                        <div className="flex items-center gap-3.5">
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://pagedone.io/asset/uploads/1726480973.png" />
                      <div className="flex w-full items-center">
                        <div className="block w-full">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Olivia Carter
                          </p>
                          <span className="text-xs font-normal text-gray-500">
                            Until Jan 20, 2024 at 10:20 AM
                          </span>
                        </div>
                        <div className="flex items-center gap-3.5">
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://pagedone.io/asset/uploads/1726480985.png" />
                      <div className="flex w-full items-center">
                        <div className="block w-full">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Sopha Rodringuez
                          </p>
                          <span className="text-xs font-normal text-gray-500">
                            Until Jan 20, 2024 at 10:20 AM
                          </span>
                        </div>
                        <div className="flex items-center gap-3.5">
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                          <button className="text-gray-600 transition-all duration-300 hover:text-gray-900"></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button w-full rounded-lg border border-indigo-600 px-3 py-2.5 text-center text-sm font-medium text-indigo-600"
                      data-pd-overlay="#modalBox-23"
                      data-modal-target="modalBox-23"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-white"
                      data-pd-overlay="#modalBox-23"
                      data-modal-target="modalBox-23"
                    >
                      Save
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
