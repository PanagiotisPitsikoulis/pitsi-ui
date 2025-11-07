export default function MultipleAccountHandleWithCheckbox() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-17"
            data-modal-target="modalBox-17"
            data-modal-toggle="modalBox-17"
          >
            Menage Account
          </button>
          <div
            id="modalBox-17"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Handle accounts settings
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-17"
                      data-modal-target="modalBox-17"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-8">
                    Easily handle your account settings and customize your
                    preferences.
                  </p>
                  <div className="flex flex-col gap-4 mb-4">
                    <label
                      htmlFor="checkbox-checked-in-form"
                      className="flex pb-4 cursor-pointer items-center justify-between w-full bg-white border-b border-gray-300 rounded-md text-sm "
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-blue-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776864.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Ethan Johnson
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@etanjonson.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        id="checkbox-checked-in-form"
                      />
                    </label>
                    <label
                      htmlFor="checkbox-checked-in-form-2"
                      className="flex pb-4 cursor-pointer items-center justify-between w-full bg-white border-b border-gray-300 rounded-md text-sm "
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-purple-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776874.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Amelia Anderson
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@amelianderson.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        id="checkbox-checked-in-form-2"
                        defaultChecked
                      />
                    </label>
                    <label
                      htmlFor="checkbox-checked-in-form-3"
                      className="flex pb-4 cursor-pointer items-center justify-between w-full bg-white border-b border-gray-300 rounded-md text-sm "
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-red-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776884.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Benjamin Taylor
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@benjamintaylor.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        id="checkbox-checked-in-form-3"
                      />
                    </label>
                    <label
                      htmlFor="checkbox-checked-in-form-4"
                      className="flex pb-4 cursor-pointer items-center justify-between w-full bg-white border-b border-gray-300 rounded-md text-sm "
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-amber-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776893.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Liam Smith
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@liamsmith.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        id="checkbox-checked-in-form-4"
                        defaultChecked
                      />
                    </label>
                    <label
                      htmlFor="checkbox-checked-in-form-5"
                      className="flex pb-4 cursor-pointer items-center justify-between w-full bg-white border-b border-gray-300 rounded-md text-sm "
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-emerald-200">
                          <img
                            src="https://pagedone.io/asset/uploads/1720776904.png"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Zoe Harris
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            mail@zoeharris.com
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        className="w-5 h-5 appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        id="checkbox-checked-in-form-5"
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-end mb-8">
                    <button className="flex items-center gap-1 text-xs font-medium text-blue-700 transition-all duration-300 hover:text-blue-900">
                      Add Other Account
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button py-2.5 text-center rounded-lg bg-blue-50 text-blue-700 text-sm font-medium w-full transition-all duration-300 hover:bg-blue-100"
                      data-pd-overlay="#modalBox-17"
                      data-modal-target="modalBox-17"
                    >
                      Delete Account
                    </button>
                    <button
                      className="close-modal-button py-2.5 text-center rounded-lg bg-blue-700 text-white text-sm font-medium w-full transition-all duration-300 hover:bg-blue-800"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
