export default function PricingPlanModalWithRadioButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-36"
            data-modal-target="modalBox-36"
            data-modal-toggle="modalBox-36"
          >
            Buy a Plan
          </button>
          <div
            id="modalBox-36"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between gap-5 mb-1">
                    <h6 className="text-lg font-bold text-gray-900 mb-1">
                      Change Your Plan
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-36"
                      data-modal-target="modalBox-36"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-8">
                    Enhance your plan to unlock extra benefits!
                  </p>
                  <ul className="flex item-center flex-col mb-8 gap-4 ">
                    <li className="w-full">
                      <input
                        type="radio"
                        name="plans"
                        id="plan-1"
                        className="hidden peer/plan"
                      />
                      <label
                        htmlFor="plan-1"
                        className="rounded-lg group w-full h-max p-3 border border-gray-200 text-gray-500 peer-checked/plan:border-indigo-600 peer-checked/plan:bg-indigo-50 flex item-center justify-between transition-all duration-300 hover:bg-indigo-50"
                      >
                        <div className="flex items-start gap-2.5 w-full">
                          <div className="block">
                            <p className="text-sm font-medium text-black mb-1.5">
                              Free
                            </p>
                            <p className="text-xs font-normal text-gray-500">
                              Limited features
                            </p>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-900 whitespace-nowrap flex items-center gap-1">
                          $0.00 <p className="text-gray-500">/mo</p>
                        </div>
                      </label>
                    </li>
                    <li className="w-full">
                      <input
                        type="radio"
                        name="plans"
                        id="plan-2"
                        className="hidden peer/plan"
                      />
                      <label
                        htmlFor="plan-2"
                        className="rounded-lg group w-full h-max p-3 border border-gray-200 text-gray-500 peer-checked/plan:border-indigo-600 peer-checked/plan:bg-indigo-50 flex item-center justify-between transition-all duration-300 hover:bg-indigo-50"
                      >
                        <div className="flex items-start gap-2.5 w-full">
                          <div className="block">
                            <p className="text-sm font-medium text-black mb-1.5">
                              Basic
                            </p>
                            <p className="text-xs font-normal text-gray-500">
                              Essential features
                            </p>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-900 whitespace-nowrap flex items-center gap-1">
                          $20.00 <p className="text-gray-500">/mo</p>
                        </div>
                      </label>
                    </li>
                    <li className="w-full">
                      <input
                        type="radio"
                        name="plans"
                        id="plan-3"
                        className="hidden peer/plan"
                      />
                      <label
                        htmlFor="plan-3"
                        className="rounded-lg group w-full h-max p-3 border border-gray-200 text-gray-500 peer-checked/plan:border-indigo-600 peer-checked/plan:bg-indigo-50 flex item-center justify-between transition-all duration-300 hover:bg-indigo-50"
                      >
                        <div className="flex items-start gap-2.5 w-full">
                          <div className="block">
                            <p className="text-sm font-medium text-black mb-1.5">
                              Advanced
                            </p>
                            <p className="text-xs font-normal text-gray-500">
                              Premium features
                            </p>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-900 whitespace-nowrap flex items-center gap-1">
                          $50.00 <p className="text-gray-500">/mo</p>
                        </div>
                      </label>
                    </li>
                  </ul>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button py-2.5 px-3.5 rounded-lg border border-gray-200 w-full text-center text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-100 hover:border-gray-100"
                      data-pd-overlay="#modalBox-36"
                      data-modal-target="modalBox-36"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button py-2.5 px-3.5 rounded-lg w-full text-center bg-indigo-600 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700"
                      data-pd-overlay="#modalBox-36"
                      data-modal-target="modalBox-36"
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
