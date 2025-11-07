export default function ModalWithInputAndToggleButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-blue-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-blue-700"
            data-pd-overlay="#modalBox-8"
            data-modal-target="modalBox-8"
            data-modal-toggle="modalBox-8"
          >
            Add Member
          </button>
          <div
            id="modalBox-8"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-5">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Add Team Member
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-8"
                      data-modal-target="modalBox-8"
                    ></button>
                  </div>
                  <div className="relative mb-5">
                    <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full  pl-4 pr-3.5 py-2.5 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Teammate Name"
                      required
                    />
                  </div>
                  <div className="relative mb-5">
                    <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                      Email
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full  px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Teammate email"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <h6 className="text-base font-medium text-gray-900 mb-4">
                      Permission
                    </h6>
                    <div className="flex flex-col gap-3 mb-5">
                      <div className="flex items-center ">
                        <label className="relative inline-flex items-center mb-5 cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600 hover:peer-checked:bg-blue-700 "></div>
                        </label>
                        <div className="block">
                          <span className="ml-3 text-sm font-normal text-gray-600 mb-1">
                            Add
                          </span>
                          <br />
                          <span className="ml-3 text-sm font-normal text-gray-400 ">
                            Can add new members
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <label className="relative inline-flex items-center mb-5 cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked
                          />
                          <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600 hover:peer-checked:bg-blue-700 "></div>
                        </label>
                        <div className="block">
                          <span className="ml-3 text-sm font-normal text-gray-600 mb-1">
                            Edit
                          </span>
                          <br />
                          <span className="ml-3 text-sm font-normal text-gray-400 ">
                            Can edit workspace
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <label className="relative inline-flex items-center mb-5 cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-blue-600 hover:peer-checked:bg-blue-700 "></div>
                        </label>
                        <div className="block">
                          <span className="ml-3 text-sm font-normal text-gray-600 mb-1">
                            Delete
                          </span>
                          <br />
                          <span className="ml-3 text-sm font-normal text-gray-400 ">
                            Can delete tasks and workspace
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        className="w-full text-center p-1.5 py-2.5 border border-gray-200 rounded-md text-xs font-medium text-gray-900 close-modal-button transition-all duration-300 hover:bg-gray-100 hover:border-gray-100"
                        data-pd-overlay="#modalBox-8"
                        data-modal-target="modalBox-8"
                      >
                        Cancel
                      </button>
                      <button
                        className="w-full text-center p-1.5 py-2.5 rounded-md bg-blue-600 text-white text-xs font-medium close-modal-button transition-all duration-300 hover:bg-blue-700"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
