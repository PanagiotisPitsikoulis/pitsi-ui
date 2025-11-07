export default function CreateProfileModalWithFileUpload() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-10"
            data-modal-target="modalBox-10"
            data-modal-toggle="modalBox-10"
          >
            Create Profile
          </button>
          <div
            id="modalBox-10"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between gap-5 mb-8">
                    <div>
                      <h6 className="text-lg font-bold text-gray-900 mb-1">
                        Create New
                      </h6>
                      <p className="text-xs font-normal text-gray-500 ">
                        Create your new profile and start your journey with us
                        today!
                      </p>
                    </div>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-10"
                      data-modal-target="modalBox-10"
                    ></button>
                  </div>
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                      <p className="text-sm font-semibold text-sky-600">JD</p>
                    </div>
                    <div>
                      <p className="text-xs font-normal text-black mb-1.5 ">
                        Set profile photo
                      </p>
                      <div className="flex items-center gap-2.5">
                        <label>
                          <input type="file" hidden />
                          <div
                            className="flex w-max py-2 pl-1.5 pr-3 gap-1.5 rounded-md border border-gray-200 whitespace-nowrap text-gray-900 text-xs font-medium
                              items-center justify-center cursor-pointer focus:outline-none"
                          >
                            Upload Image
                          </div>
                        </label>
                        <button className="py-2 px-3 text-xs font-medium text-gray-600 transition-all duration-300 hover:text-gray-900">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="flex  items-center mb-1.5 text-gray-600 text-xs font-medium">
                      ID
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full max-w-xs px-4 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="@john.doe"
                      required
                    />
                  </div>
                  <div className="mt-4 mb-8">
                    <p className="text-sm font-medium text-gray-600 pb-1.5">
                      Your account
                    </p>
                    <ul className="flex item-center gap-px rounded-lg p-1.5 bg-gray-100 mb-1.5">
                      <li className="w-full">
                        <input
                          type="radio"
                          name="plans"
                          id="plan-1"
                          className="hidden peer/plan"
                        />
                        <label
                          htmlFor="plan-1"
                          className="rounded-lg group w-full h-max text-gray-500 peer-checked/plan:text-gray-900 peer-checked/plan:bg-white flex item-center justify-center transition-all duration-300 hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="flex items-center justify-center gap-2 p-1.5 w-full">
                            <span className="text-base font-medium peer-checked:bg-none">
                              Private
                            </span>
                          </div>
                        </label>
                      </li>
                      <li className="w-full">
                        <input
                          type="radio"
                          name="plans"
                          id="plan-2"
                          className="hidden peer/plan"
                          defaultChecked
                        />
                        <label
                          htmlFor="plan-2"
                          className="rounded-lg group w-full h-max text-gray-500 peer-checked/plan:text-gray-900 peer-checked/plan:bg-white flex item-center justify-center transition-all duration-300 hover:bg-gray-50 cursor-pointer"
                        >
                          <div className="flex items-center justify-center gap-2 p-1.5 w-full">
                            <span className="text-base font-medium peer-checked:bg-none">
                              Public
                            </span>
                          </div>
                        </label>
                      </li>
                    </ul>
                    <p className="text-xs font-normal text-gray-400">
                      Your account information visible to others. Review your
                      privacy settings to ensure security.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button py-2.5 px-3.5 rounded-lg border border-gray-200 w-full text-center text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:border-gray-100"
                      data-pd-overlay="#modalBox-10"
                      data-modal-target="modalBox-10"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button py-2.5 px-3.5 rounded-lg w-full text-center bg-gray-900 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
                      data-pd-overlay="#modalBox-10"
                      data-modal-target="modalBox-10"
                    >
                      Continue
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
