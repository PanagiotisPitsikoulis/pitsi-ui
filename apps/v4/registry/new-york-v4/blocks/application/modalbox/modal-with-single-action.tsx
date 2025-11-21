export default function ModalWithSingleAction() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-6"
            data-modal-target="modalBox-6"
            data-modal-toggle="modalBox-6"
          >
            Payment
          </button>
          <div
            id="modalBox-6"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="bg-white p-6">
                <div className="flex w-full items-center justify-end">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-6"
                    data-modal-target="modalBox-6"
                  ></button>
                </div>
                <div className="my-3.5 flex items-center justify-center">
                  <div className="rounded-full bg-emerald-50 p-3"></div>
                </div>
                <h5 className="mb-2 text-center text-lg leading-8 font-bold text-gray-900">
                  Payment Successful!
                </h5>
                <p className="mb-5 text-center text-xs font-normal text-gray-500">
                  Payment Complete! Thanks for your purchase, enjoy your
                  product/service!
                </p>
                <button
                  className="close-modal-button w-full rounded-lg bg-indigo-600 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700"
                  data-pd-overlay="#modalBox-6"
                  data-modal-target="modalBox-6"
                >
                  Confirm
                </button>
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
