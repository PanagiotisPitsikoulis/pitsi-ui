export default function SimpleDeleteModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-41"
            data-modal-target="modalBox-41"
            data-modal-toggle="modalBox-41"
          >
            Button
          </button>
          <div
            id="modalBox-41"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6">
                <div className="flex items-center justify-end w-full">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-41"
                    data-modal-target="modalBox-41"
                  ></button>
                </div>
                <div className="flex items-center justify-center mt-1 mb-2.5"></div>
                <h5 className="text-center text-base font-medium text-gray-900 mb-8">
                  Are you sure you want to delete this item?
                </h5>
                <div className="flex items-center justify-center gap-4">
                  <button
                    className="close-modal-button py-2.5 px-5 rounded-lg border border-gray-200 text-center text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:border-gray-100"
                    data-pd-overlay="#modalBox-41"
                    data-modal-target="modalBox-41"
                  >
                    No, cancel
                  </button>
                  <button
                    className="close-modal-button py-2.5 px-5 rounded-lg bg-red-600 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
                    data-pd-overlay="#modalBox-41"
                    data-modal-target="modalBox-41"
                  >
                    Yes, I’m sure
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
