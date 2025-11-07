export default function ModalWithInputAndToggleButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-blue-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-blue-700"
            data-pd-overlay="#modalBox-8"
            data-modal-target="modalBox-8"
            data-modal-toggle="modalBox-8"
          >
            Add Member
          </button>
          <div
            id="modalBox-8"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-5 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Add Team Member
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-8"
                      data-modal-target="modalBox-8"
                    ></button>
                  </div>
                  <div className="relative mb-5">
                    <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-3.5 pl-4 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Teammate Name"
                      required
                    />
                  </div>
                  <div className="relative mb-5">
                    <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                      Email
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Teammate email"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="mb-4 text-base font-medium text-gray-900">
                      Permission
                    </h6>
                    <div className="mb-5 flex flex-col gap-3">
                      <div className="flex items-center">
                        <label className="relative mb-5 inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            className="peer sr-only"
                            defaultChecked
                          />
                          <div className="peer h-5 w-9 rounded-full bg-gray-200 transition-all duration-500 ease-in-out peer-checked:bg-blue-600 peer-focus:outline-0 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white hover:bg-gray-300 hover:peer-checked:bg-blue-700"></div>
                        </label>
                        <div className="block">
                          <span className="mb-1 ml-3 text-sm font-normal text-gray-600">
                            Add
                          </span>
                          <br />
                          <span className="ml-3 text-sm font-normal text-gray-400">
                            Can add new members
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <label className="relative mb-5 inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            className="peer sr-only"
                            defaultChecked
                          />
                          <div className="peer h-5 w-9 rounded-full bg-gray-200 transition-all duration-500 ease-in-out peer-checked:bg-blue-600 peer-focus:outline-0 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white hover:bg-gray-300 hover:peer-checked:bg-blue-700"></div>
                        </label>
                        <div className="block">
                          <span className="mb-1 ml-3 text-sm font-normal text-gray-600">
                            Edit
                          </span>
                          <br />
                          <span className="ml-3 text-sm font-normal text-gray-400">
                            Can edit workspace
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <label className="relative mb-5 inline-flex cursor-pointer items-center">
                          <input type="checkbox" className="peer sr-only" />
                          <div className="peer h-5 w-9 rounded-full bg-gray-200 transition-all duration-500 ease-in-out peer-checked:bg-blue-600 peer-focus:outline-0 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white hover:bg-gray-300 hover:peer-checked:bg-blue-700"></div>
                        </label>
                        <div className="block">
                          <span className="mb-1 ml-3 text-sm font-normal text-gray-600">
                            Delete
                          </span>
                          <br />
                          <span className="ml-3 text-sm font-normal text-gray-400">
                            Can delete tasks and workspace
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        className="close-modal-button w-full rounded-md border border-gray-200 p-1.5 py-2.5 text-center text-xs font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                        data-pd-overlay="#modalBox-8"
                        data-modal-target="modalBox-8"
                      >
                        Cancel
                      </button>
                      <button
                        className="close-modal-button w-full rounded-md bg-blue-600 p-1.5 py-2.5 text-center text-xs font-medium text-white transition-all duration-300 hover:bg-blue-700"
                        data-pd-overlay="#modalBox-8"
                        data-modal-target="modalBox-8"
                      >
                        Save
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
