export default function DeleteModalWithCheckbox() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-42"
            data-modal-target="modalBox-42"
            data-modal-toggle="modalBox-42"
          >
            Open Modal
          </button>
          <div
            id="modalBox-42"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex items-start gap-3.5 bg-white p-6">
                <div className="block">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-max"></div>
                      <h6 className="text-lg font-bold text-gray-900">
                        Delete your data?
                      </h6>
                    </div>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-42"
                      data-modal-target="modalBox-42"
                    ></button>
                  </div>
                  <p className="mb-3.5 text-sm font-normal text-gray-500">
                    If you delete them, your account and activity related to
                    these questions might be erased. Furthermore, these
                    questions won't be able to gather any more information about
                    you on Pagedone.
                  </p>
                  <label
                    htmlFor="checkbox-in-form"
                    className="flex w-full cursor-pointer rounded-lg border border-gray-200 bg-white p-3 text-sm"
                  >
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 min-w-[16px] cursor-pointer appearance-none rounded-md border border-gray-300 checked:border-red-500 checked:bg-red-100 checked:bg-center checked:bg-no-repeat"
                      id="checkbox-in-form"
                    />
                    <span className="ml-2.5 text-sm font-normal text-gray-600">
                      Additionally, remove all photos, videos, and documents on
                      Pagedone that may have been published on your behalf."
                    </span>
                  </label>
                  <div className="mt-8 flex items-center gap-4">
                    <button
                      className="close-modal-button w-full rounded-md border border-red-700 p-1.5 py-2.5 text-center text-sm font-medium text-red-700 transition-all duration-300 hover:border-red-100 hover:bg-red-100"
                      data-pd-overlay="#modalBox-42"
                      data-modal-target="modalBox-42"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-md bg-red-700 p-1.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-red-800"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
