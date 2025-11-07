export default function PricingPlansWithTabPlanComparisonFaqs() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-1"
            data-modal-target="modalBox-1"
            data-modal-toggle="modalBox-1"
          >
            Open Modal
          </button>
          <div
            id="modalBox-1"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="flex items-start gap-3.5 bg-white p-6">
                <div className="w-max">
                  <p className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50">
                    {/* SVG removed */}
                  </p>
                </div>
                <div className="block">
                  <div className="mb-3.5 flex items-center justify-between">
                    <h6 className="text-sm font-semibold text-gray-900">
                      Smart Assistant Modal
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-1"
                      data-modal-target="modalBox-1"
                    >
                      {/* SVG removed */}
                    </button>
                  </div>
                  <p className="text-xs font-normal text-gray-500">
                    Introducing a state-of-the-art modal with built-in AI that
                    improves user interactions and simplifies tasks. Experience
                    a smooth and intuitive journey with our intelligent Smart
                    Assistant Modal.
                  </p>
                  <div className="flex items-center gap-4 pt-5">
                    <button
                      className="close-modal-button w-full rounded-md border border-gray-200 p-1.5 py-2 text-center text-xs font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                      data-pd-overlay="#modalBox-1"
                      data-modal-target="modalBox-1"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-md bg-indigo-600 p-1.5 py-2 text-center text-xs font-medium text-white transition-all duration-300 hover:bg-indigo-700"
                      data-pd-overlay="#modalBox-1"
                      data-modal-target="modalBox-1"
                    >
                      Confirm
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
