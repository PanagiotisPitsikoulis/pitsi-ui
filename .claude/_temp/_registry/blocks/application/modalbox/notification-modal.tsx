export default function NotificationModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-9"
            data-modal-target="modalBox-9"
            data-modal-toggle="modalBox-9"
          >
            Updates
          </button>
          <div
            id="modalBox-9"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h6 className="text-lg font-bold text-gray-900 mb-1.5">
                        Updates
                      </h6>
                      <span className="bg-blue-50 text-blue-700 text-xs font-medium mr-2 px-1.5 py-0.5 rounded-full">
                        4 New Update
                      </span>
                    </div>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-9"
                      data-modal-target="modalBox-9"
                    ></button>
                  </div>
                  <div className="flex flex-col gap-5 w-full">
                    <div
                      className="flex items-center w-full p-4 bg-white rounded-xl border border-gray-200 shadow-sm gap-3 cursor-pointer hover:bg-indigo-50 transition-all duration-500"
                      role="alert"
                    >
                      <div className="flex gap-6 items-center">
                        <div className="flex items-center w-max">
                          <span className="flex-shrink-0">
                            <img
                              src="https://pagedone.io/asset/uploads/1720777156.png"
                              alt="Harsh image"
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          </span>
                          <div className="relative p-3 rounded-full bg-blue-50 h-max -left-2.5"></div>
                        </div>
                        <p className="text-xs font-medium text-gray-900 w-full">
                          <span className="text-blue-700">
                            pagedone-modal.file
                          </span>{" "}
                          is not insert proper, give insert error.
                        </p>
                      </div>
                      <button
                        className="inline-flex flex-shrink-0 justify-center text-gray-400 transition-all duration-150 "
                        data-dismiss="alert"
                      >
                        <span className="sr-only">Close</span>
                      </button>
                    </div>
                    <div
                      className="flex items-center w-full p-4 bg-white rounded-xl border border-gray-200 shadow-sm gap-3 hover:bg-indigo-50 transition-all duration-500 cursor-pointer"
                      role="alert"
                    >
                      <div className="flex gap-6 items-center">
                        <div className="flex items-center w-max">
                          <span className="flex-shrink-0">
                            <img
                              src="https://pagedone.io/asset/uploads/1720777168.png
"
                              alt="Harsh image"
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          </span>
                          <div className="relative p-3 rounded-full bg-blue-50 h-max -left-2.5"></div>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-900 w-full mb-2.5">
                            John Doe invited a team meeting at 10:45 am to 12:20
                            pm
                          </p>
                          <div className="flex items-center gap-2.5">
                            <button className="py-2 px-3 rounded-md bg-blue-700 text-xs font-medium text-white">
                              Attend
                            </button>
                            <button className="py-2 px-3 rounded-md bg-blue-50 text-xs font-medium text-blue-700">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="inline-flex flex-shrink-0 justify-center text-gray-400 transition-all duration-150 "
                        data-dismiss="alert"
                      >
                        <span className="sr-only">Close</span>
                      </button>
                    </div>
                    <div
                      className="flex items-center w-full p-4 bg-white rounded-xl border border-gray-200 shadow-sm gap-3 hover:bg-indigo-50 transition-all duration-500 cursor-pointer"
                      role="alert"
                    >
                      <div className="flex gap-6 items-center">
                        <div className="flex items-center w-max">
                          <span className="flex-shrink-0">
                            <img
                              src="https://pagedone.io/asset/uploads/1720777168.png
"
                              alt="Harsh image"
                              className="w-12 h-12 rounded-full object-cover"
                            />
                          </span>
                          <div className="relative p-3 rounded-full bg-blue-50 h-max -left-2.5"></div>
                        </div>
                        <p className="text-xs font-medium text-gray-900 w-full">
                          Downlead Completed
                          <span className="text-blue-700">
                            {" "}
                            pagedone-Icon-modal.file
                          </span>
                        </p>
                      </div>
                      <button
                        className="inline-flex flex-shrink-0 justify-center text-gray-400 transition-all duration-150 "
                        data-dismiss="alert"
                      >
                        <span className="sr-only">Close</span>
                      </button>
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        className="py-2.5 px-10 rounded-lg border border-gray-200 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-50"
                        data-dismiss="alert"
                      >
                        Clear
                      </button>
                    </div>
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
