export default function CreateProfileModalWithFileUpload() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-10"
            data-modal-target="modalBox-10"
            data-modal-toggle="modalBox-10"
          >
            Create Profile
          </button>
          <div
            id="modalBox-10"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-8 flex items-center justify-between gap-5">
                    <div>
                      <h6 className="mb-1 text-lg font-bold text-gray-900">
                        Create New
                      </h6>
                      <p className="text-xs font-normal text-gray-500">
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
                  <div className="mb-5 flex items-center gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                      <p className="text-sm font-semibold text-sky-600">JD</p>
                    </div>
                    <div>
                      <p className="mb-1.5 text-xs font-normal text-black">
                        Set profile photo
                      </p>
                      <div className="flex items-center gap-2.5">
                        <label>
                          <input type="file" hidden />
                          <div className="flex w-max cursor-pointer items-center justify-center gap-1.5 rounded-md border border-gray-200 py-2 pr-3 pl-1.5 text-xs font-medium whitespace-nowrap text-gray-900 focus:outline-none">
                            Upload Image
                          </div>
                        </label>
                        <button className="px-3 py-2 text-xs font-medium text-gray-600 transition-all duration-300 hover:text-gray-900">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <label className="mb-1.5 flex items-center text-xs font-medium text-gray-600">
                      ID
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full max-w-xs rounded-lg border border-gray-200 bg-transparent px-4 py-2.5 text-base leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="@john.doe"
                      required
                    />
                  </div>
                  <div className="mt-4 mb-8">
                    <p className="pb-1.5 text-sm font-medium text-gray-600">
                      Your account
                    </p>
                    <ul className="item-center mb-1.5 flex gap-px rounded-lg bg-gray-100 p-1.5">
                      <li className="w-full">
                        <input
                          type="radio"
                          name="plans"
                          id="plan-1"
                          className="peer/plan hidden"
                        />
                        <label
                          htmlFor="plan-1"
                          className="group item-center flex h-max w-full cursor-pointer justify-center rounded-lg text-gray-500 transition-all duration-300 peer-checked/plan:bg-white peer-checked/plan:text-gray-900 hover:bg-gray-50"
                        >
                          <div className="flex w-full items-center justify-center gap-2 p-1.5">
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
                          className="peer/plan hidden"
                          defaultChecked
                        />
                        <label
                          htmlFor="plan-2"
                          className="group item-center flex h-max w-full cursor-pointer justify-center rounded-lg text-gray-500 transition-all duration-300 peer-checked/plan:bg-white peer-checked/plan:text-gray-900 hover:bg-gray-50"
                        >
                          <div className="flex w-full items-center justify-center gap-2 p-1.5">
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
                      className="close-modal-button w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                      data-pd-overlay="#modalBox-10"
                      data-modal-target="modalBox-10"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-lg bg-gray-900 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
