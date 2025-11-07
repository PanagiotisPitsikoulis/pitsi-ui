export default function ShareWithInputSearchModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-23"
            data-modal-target="modalBox-23"
            data-modal-toggle="modalBox-23"
          >
            Share Archive
          </button>
          <div
            id="modalBox-23"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-5">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Share Archive
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-23"
                      data-modal-target="modalBox-23"
                    ></button>
                  </div>
                  <form action="#" className="flex items-center gap-4 mb-5">
                    <div className="relative  text-gray-500 focus-within:text-gray-900 ">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full max-w-xs pr-3.5 pl-10 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="Search name or email"
                      />
                    </div>
                    <button className="py-2.5 px-5 rounded-lg bg-indigo-600 text-sm font-medium text-white">
                      Share
                    </button>
                  </form>
                  <div className="flex flex-col gap-4 mb-5">
                    <div className="flex items-center gap-3 ">
                      <img src="https://pagedone.io/asset/uploads/1726480939.png" />
                      <div className="flex items-center w-full">
                        <div className="block w-full">
                          <p className="text-sm font-medium text-gray-900 mb-1">
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
                    <div className="flex items-center gap-3 ">
                      <img src="https://pagedone.io/asset/uploads/1726480949.png" />
                      <div className="flex items-center w-full">
                        <div className="block w-full">
                          <p className="text-sm font-medium text-gray-900 mb-1">
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
                    <div className="flex items-center gap-3 ">
                      <img src="https://pagedone.io/asset/uploads/1726480959.png" />
                      <div className="flex items-center w-full">
                        <div className="block w-full">
                          <p className="text-sm font-medium text-gray-900 mb-1">
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
                    <div className="flex items-center gap-3 ">
                      <img src="https://pagedone.io/asset/uploads/1726480973.png" />
                      <div className="flex items-center w-full">
                        <div className="block w-full">
                          <p className="text-sm font-medium text-gray-900 mb-1">
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
                    <div className="flex items-center gap-3 ">
                      <img src="https://pagedone.io/asset/uploads/1726480985.png" />
                      <div className="flex items-center w-full">
                        <div className="block w-full">
                          <p className="text-sm font-medium text-gray-900 mb-1">
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
                      className="py-2.5 px-3 w-full text-center rounded-lg border border-indigo-600 text-sm font-medium text-indigo-600 close-modal-button"
                      data-pd-overlay="#modalBox-23"
                      data-modal-target="modalBox-23"
                    >
                      Cancel
                    </button>
                    <button
                      className="py-2.5 px-3.5 w-full text-center rounded-lg bg-indigo-600 text-sm font-medium text-white close-modal-button"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
