export default function SuccessModalWithTwoButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-28"
            data-modal-target="modalBox-28"
            data-modal-toggle="modalBox-28"
          >
            Submit
          </button>
          <div
            id="modalBox-28"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-3.5 flex items-center justify-end">
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-28"
                      data-modal-target="modalBox-28"
                    ></button>
                  </div>
                  <div className="mb-3.5 flex items-center justify-center">
                    <img
                      src="https://pagedone.io/asset/uploads/1720777106.png
"
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-5 flex flex-col items-center justify-center gap-2">
                    <h5 className="text-center text-lg leading-8 font-bold text-gray-900">
                      Congratulations!
                    </h5>
                    <p className="text-center text-xs font-normal text-gray-500">
                      Congratulations on completing your course! Now it's time
                      to assess your knowledge and see how well you've mastered
                      the material.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="close-modal-button w-full rounded-lg border border-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-indigo-600 transition-all duration-500 focus-within:bg-indigo-100 focus-within:outline-0 hover:bg-indigo-100"
                      data-pd-overlay="#modalBox-28"
                      data-modal-target="modalBox-28"
                    >
                      Skip
                    </button>
                    <button
                      className="close-modal-button w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-500 focus-within:bg-indigo-700 focus-within:outline-0 hover:bg-indigo-700"
                      data-pd-overlay="#modalBox-28"
                      data-modal-target="modalBox-28"
                    >
                      Give Assessment
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
