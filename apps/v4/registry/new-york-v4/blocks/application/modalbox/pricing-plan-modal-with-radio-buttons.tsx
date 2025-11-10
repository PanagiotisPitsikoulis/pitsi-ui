export default function PricingPlanModalWithRadioButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-36"
            data-modal-target="modalBox-36"
            data-modal-toggle="modalBox-36"
          >
            Buy a Plan
          </button>
          <div
            id="modalBox-36"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between gap-5">
                    <h6 className="mb-1 text-lg font-bold text-gray-900">
                      Change Your Plan
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-36"
                      data-modal-target="modalBox-36"
                    ></button>
                  </div>
                  <p className="mb-8 text-xs font-normal text-gray-500">
                    Enhance your plan to unlock extra benefits!
                  </p>
                  <ul className="item-center mb-8 flex flex-col gap-4">
                    <li className="w-full">
                      <input
                        type="radio"
                        name="plans"
                        id="plan-1"
                        className="peer/plan hidden"
                      />
                      <label
                        htmlFor="plan-1"
                        className="group item-center flex h-max w-full justify-between rounded-lg border border-gray-200 p-3 text-gray-500 transition-all duration-300 peer-checked/plan:border-indigo-600 peer-checked/plan:bg-indigo-50 hover:bg-indigo-50"
                      >
                        <div className="flex w-full items-start gap-2.5">
                          <div className="block">
                            <p className="mb-1.5 text-sm font-medium text-black">
                              Free
                            </p>
                            <p className="text-xs font-normal text-gray-500">
                              Limited features
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium whitespace-nowrap text-gray-900">
                          $0.00 <p className="text-gray-500">/mo</p>
                        </div>
                      </label>
                    </li>
                    <li className="w-full">
                      <input
                        type="radio"
                        name="plans"
                        id="plan-2"
                        className="peer/plan hidden"
                      />
                      <label
                        htmlFor="plan-2"
                        className="group item-center flex h-max w-full justify-between rounded-lg border border-gray-200 p-3 text-gray-500 transition-all duration-300 peer-checked/plan:border-indigo-600 peer-checked/plan:bg-indigo-50 hover:bg-indigo-50"
                      >
                        <div className="flex w-full items-start gap-2.5">
                          <div className="block">
                            <p className="mb-1.5 text-sm font-medium text-black">
                              Basic
                            </p>
                            <p className="text-xs font-normal text-gray-500">
                              Essential features
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium whitespace-nowrap text-gray-900">
                          $20.00 <p className="text-gray-500">/mo</p>
                        </div>
                      </label>
                    </li>
                    <li className="w-full">
                      <input
                        type="radio"
                        name="plans"
                        id="plan-3"
                        className="peer/plan hidden"
                      />
                      <label
                        htmlFor="plan-3"
                        className="group item-center flex h-max w-full justify-between rounded-lg border border-gray-200 p-3 text-gray-500 transition-all duration-300 peer-checked/plan:border-indigo-600 peer-checked/plan:bg-indigo-50 hover:bg-indigo-50"
                      >
                        <div className="flex w-full items-start gap-2.5">
                          <div className="block">
                            <p className="mb-1.5 text-sm font-medium text-black">
                              Advanced
                            </p>
                            <p className="text-xs font-normal text-gray-500">
                              Premium features
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium whitespace-nowrap text-gray-900">
                          $50.00 <p className="text-gray-500">/mo</p>
                        </div>
                      </label>
                    </li>
                  </ul>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                      data-pd-overlay="#modalBox-36"
                      data-modal-target="modalBox-36"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
