export default function DeleteModalWithCheckbox() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-42"
            data-modal-target="modalBox-42"
            data-modal-toggle="modalBox-42"
          >
            Open Modal
          </button>
          <div
            id="modalBox-42"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start gap-3.5 bg-white p-6">
                <div className="block">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                      <div className="w-max"></div>
                      <h6 className="text-lg font-bold text-gray-900 ">
                        Delete your data?
                      </h6>
                    </div>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-42"
                      data-modal-target="modalBox-42"
                    ></button>
                  </div>
                  <p className="text-sm font-normal text-gray-500 mb-3.5">
                    If you delete them, your account and activity related to
                    these questions might be erased. Furthermore, these
                    questions won't be able to gather any more information about
                    you on Pagedone.
                  </p>
                  <label
                    htmlFor="checkbox-in-form"
                    className="flex p-3 w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-sm "
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 min-w-[16px] appearance-none cursor-pointer border border-gray-300  rounded-md mr-2 checked:bg-no-repeat checked:bg-center checked:border-red-500 checked:bg-red-100"
                      id="checkbox-in-form"
                    />
                    <span className="text-sm font-normal text-gray-600 ml-2.5">
                      Additionally, remove all photos, videos, and documents on
                      Pagedone that may have been published on your behalf."
                    </span>
                  </label>
                  <div className="flex items-center mt-8 gap-4">
                    <button
                      className="w-full text-center p-1.5 py-2.5 border border-red-700 rounded-md text-sm font-medium text-red-700 close-modal-button transition-all duration-300 hover:bg-red-100 hover:border-red-100"
                      data-pd-overlay="#modalBox-42"
                      data-modal-target="modalBox-42"
                    >
                      Cancel
                    </button>
                    <button
                      className="w-full text-center p-1.5 py-2.5 rounded-md bg-red-700 text-white text-sm font-medium close-modal-button transition-all duration-300 hover:bg-red-800"
                      data-pd-overlay="#modalBox-42"
                      data-modal-target="modalBox-42"
                    >
                      Delete
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
