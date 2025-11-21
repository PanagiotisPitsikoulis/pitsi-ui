export default function NotificationModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-9"
            data-modal-target="modalBox-9"
            data-modal-toggle="modalBox-9"
          >
            Updates
          </button>
          <div
            id="modalBox-9"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h6 className="mb-1.5 text-lg font-bold text-gray-900">
                        Updates
                      </h6>
                      <span className="mr-2 rounded-full bg-blue-50 px-1.5 py-0.5 text-xs font-medium text-blue-700">
                        4 New Update
                      </span>
                    </div>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-9"
                      data-modal-target="modalBox-9"
                    ></button>
                  </div>
                  <div className="flex w-full flex-col gap-5">
                    <div
                      className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-500 hover:bg-indigo-50"
                      role="alert"
                    >
                      <div className="flex items-center gap-6">
                        <div className="flex w-max items-center">
                          <span className="flex-shrink-0">
                            <img
                              src="https://pagedone.io/asset/uploads/1720777156.png"
                              alt="Harsh image"
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          </span>
                          <div className="relative -left-2.5 h-max rounded-full bg-blue-50 p-3"></div>
                        </div>
                        <p className="w-full text-xs font-medium text-gray-900">
                          <span className="text-blue-700">
                            pagedone-modal.file
                          </span>{" "}
                          is not insert proper, give insert error.
                        </p>
                      </div>
                      <button
                        className="inline-flex flex-shrink-0 justify-center text-gray-400 transition-all duration-150"
                        data-dismiss="alert"
                      >
                        <span className="sr-only">Close</span>
                      </button>
                    </div>
                    <div
                      className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-500 hover:bg-indigo-50"
                      role="alert"
                    >
                      <div className="flex items-center gap-6">
                        <div className="flex w-max items-center">
                          <span className="flex-shrink-0">
                            <img
                              src="https://pagedone.io/asset/uploads/1720777168.png
"
                              alt="Harsh image"
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          </span>
                          <div className="relative -left-2.5 h-max rounded-full bg-blue-50 p-3"></div>
                        </div>
                        <div>
                          <p className="mb-2.5 w-full text-xs font-medium text-gray-900">
                            John Doe invited a team meeting at 10:45 am to 12:20
                            pm
                          </p>
                          <div className="flex items-center gap-2.5">
                            <button className="rounded-md bg-blue-700 px-3 py-2 text-xs font-medium text-white">
                              Attend
                            </button>
                            <button className="rounded-md bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="inline-flex flex-shrink-0 justify-center text-gray-400 transition-all duration-150"
                        data-dismiss="alert"
                      >
                        <span className="sr-only">Close</span>
                      </button>
                    </div>
                    <div
                      className="flex w-full cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-500 hover:bg-indigo-50"
                      role="alert"
                    >
                      <div className="flex items-center gap-6">
                        <div className="flex w-max items-center">
                          <span className="flex-shrink-0">
                            <img
                              src="https://pagedone.io/asset/uploads/1720777168.png
"
                              alt="Harsh image"
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          </span>
                          <div className="relative -left-2.5 h-max rounded-full bg-blue-50 p-3"></div>
                        </div>
                        <p className="w-full text-xs font-medium text-gray-900">
                          Downlead Completed
                          <span className="text-blue-700">
                            {" "}
                            pagedone-Icon-modal.file
                          </span>
                        </p>
                      </div>
                      <button
                        className="inline-flex flex-shrink-0 justify-center text-gray-400 transition-all duration-150"
                        data-dismiss="alert"
                      >
                        <span className="sr-only">Close</span>
                      </button>
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        className="rounded-lg border border-gray-200 px-10 py-2.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:border-blue-50 hover:bg-blue-50 hover:text-blue-700"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
