export default function ModalWithFullWidthButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-43"
            data-modal-target="modalBox-43"
            data-modal-toggle="modalBox-43"
          >
            Button
          </button>
          <div
            id="modalBox-43"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6">
                <div className="flex items-center justify-end w-full">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-43"
                    data-modal-target="modalBox-43"
                  ></button>
                </div>
                <div className="flex items-center justify-center p-3 w-max mx-auto rounded-full bg-red-50 mt-5 mb-3.5"></div>
                <h5 className="text-center text-sm font-medium text-gray-900 mb-5">
                  Before you confirm the deletion of project "Example," consider
                  the potential repercussions
                </h5>
                <div className="flex items-center flex-col justify-center gap-2.5">
                  <button
                    className="close-modal-button py-2.5 px-5 w-full text-center rounded-lg bg-red-600 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
                    data-pd-overlay="#modalBox-43"
                    data-modal-target="modalBox-43"
                  >
                    Delete
                  </button>
                  <button
                    className="close-modal-button py-2.5 px-5 w-full text-center rounded-lg border border-gray-200 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:border-gray-100"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
