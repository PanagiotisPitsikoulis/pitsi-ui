export default function ModalWithFullWidthButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-43"
            data-modal-target="modalBox-43"
            data-modal-toggle="modalBox-43"
          >
            Button
          </button>
          <div
            id="modalBox-43"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="bg-white p-6">
                <div className="flex w-full items-center justify-end">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-43"
                    data-modal-target="modalBox-43"
                  ></button>
                </div>
                <div className="mx-auto mt-5 mb-3.5 flex w-max items-center justify-center rounded-full bg-red-50 p-3"></div>
                <h5 className="mb-5 text-center text-sm font-medium text-gray-900">
                  Before you confirm the deletion of project "Example," consider
                  the potential repercussions
                </h5>
                <div className="flex flex-col items-center justify-center gap-2.5">
                  <button
                    className="close-modal-button w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
                    data-pd-overlay="#modalBox-43"
                    data-modal-target="modalBox-43"
                  >
                    Delete
                  </button>
                  <button
                    className="close-modal-button w-full rounded-lg border border-gray-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                    data-pd-overlay="#modalBox-43"
                    data-modal-target="modalBox-43"
                  >
                    Cancel
                  </button>
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
