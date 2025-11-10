export default function SimpleDeleteModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-41"
            data-modal-target="modalBox-41"
            data-modal-toggle="modalBox-41"
          >
            Button
          </button>
          <div
            id="modalBox-41"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="bg-white p-6">
                <div className="flex w-full items-center justify-end">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-41"
                    data-modal-target="modalBox-41"
                  ></button>
                </div>
                <div className="mt-1 mb-2.5 flex items-center justify-center"></div>
                <h5 className="mb-8 text-center text-base font-medium text-gray-900">
                  Are you sure you want to delete this item?
                </h5>
                <div className="flex items-center justify-center gap-4">
                  <button
                    className="close-modal-button rounded-lg border border-gray-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                    data-pd-overlay="#modalBox-41"
                    data-modal-target="modalBox-41"
                  >
                    No, cancel
                  </button>
                  <button
                    className="close-modal-button rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
