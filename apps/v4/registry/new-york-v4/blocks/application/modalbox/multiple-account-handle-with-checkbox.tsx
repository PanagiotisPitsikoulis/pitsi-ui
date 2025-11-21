export default function MultipleAccountHandleWithCheckbox() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-17"
            data-modal-target="modalBox-17"
            data-modal-toggle="modalBox-17"
          >
            Menage Account
          </button>
          <div
            id="modalBox-17"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Handle accounts settings
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-17"
                      data-modal-target="modalBox-17"
                    ></button>
                  </div>
                  <p className="mb-8 text-xs font-normal text-gray-500">
                    Easily handle your account settings and customize your
                    preferences.
                  </p>
                  <div className="mb-4 flex flex-col gap-4">
                    <label
                      htmlFor="checkbox-checked-in-form"
                      className="flex w-full cursor-pointer items-center justify-between rounded-md border-b border-gray-300 bg-white pb-4 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776864.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Ethan Johnson
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@etanjonson.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                        id="checkbox-checked-in-form"
                      />
                    </label>
                    <label
                      htmlFor="checkbox-checked-in-form-2"
                      className="flex w-full cursor-pointer items-center justify-between rounded-md border-b border-gray-300 bg-white pb-4 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776874.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Amelia Anderson
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@amelianderson.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                        id="checkbox-checked-in-form-2"
                        defaultChecked
                      />
                    </label>
                    <label
                      htmlFor="checkbox-checked-in-form-3"
                      className="flex w-full cursor-pointer items-center justify-between rounded-md border-b border-gray-300 bg-white pb-4 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776884.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Benjamin Taylor
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@benjamintaylor.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                        id="checkbox-checked-in-form-3"
                      />
                    </label>
                    <label
                      htmlFor="checkbox-checked-in-form-4"
                      className="flex w-full cursor-pointer items-center justify-between rounded-md border-b border-gray-300 bg-white pb-4 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776893.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Liam Smith
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@liamsmith.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                        id="checkbox-checked-in-form-4"
                        defaultChecked
                      />
                    </label>
                    <label
                      htmlFor="checkbox-checked-in-form-5"
                      className="flex w-full cursor-pointer items-center justify-between rounded-md border-b border-gray-300 bg-white pb-4 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776904.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Zoe Harris
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@zoeharris.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-center checked:bg-no-repeat"
                        id="checkbox-checked-in-form-5"
                      />
                    </label>
                  </div>
                  <div className="mb-8 flex items-center justify-end">
                    <button className="flex items-center gap-1 text-xs font-medium text-blue-700 transition-all duration-300 hover:text-blue-900">
                      Add Other Account
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button w-full rounded-lg bg-blue-50 py-2.5 text-center text-sm font-medium text-blue-700 transition-all duration-300 hover:bg-blue-100"
                      data-pd-overlay="#modalBox-17"
                      data-modal-target="modalBox-17"
                    >
                      Delete Account
                    </button>
                    <button
                      className="close-modal-button w-full rounded-lg bg-blue-700 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-blue-800"
                      data-pd-overlay="#modalBox-17"
                      data-modal-target="modalBox-17"
                    >
                      Add in New Group
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
