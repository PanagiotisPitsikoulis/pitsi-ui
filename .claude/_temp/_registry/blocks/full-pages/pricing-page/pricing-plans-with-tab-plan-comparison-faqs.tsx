export default function PricingPlansWithTabPlanComparisonFaqs() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-1"
            data-modal-target="modalBox-1"
            data-modal-toggle="modalBox-1"
          >
            Open Modal
          </button>
          <div
            id="modalBox-1"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start gap-3.5 bg-white p-6">
                <div className="w-max">
                  <p className="w-6 h-6 flex items-center justify-center rounded-full bg-indigo-50">
                    {/* SVG removed */}
                  </p>
                </div>
                <div className="block">
                  <div className="flex items-center justify-between mb-3.5">
                    <h6 className="text-sm font-semibold text-gray-900 ">
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
                  <div className="flex items-center pt-5 gap-4">
                    <button
                      className="w-full text-center p-1.5 py-2 border border-gray-200 rounded-md text-xs font-medium text-gray-900 close-modal-button transition-all duration-300 hover:bg-gray-100 hover:border-gray-100"
                      data-pd-overlay="#modalBox-1"
                      data-modal-target="modalBox-1"
                    >
                      Cancel
                    </button>
                    <button
                      className="w-full text-center p-1.5 py-2 rounded-md bg-indigo-600 text-white text-xs font-medium close-modal-button transition-all duration-300 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
