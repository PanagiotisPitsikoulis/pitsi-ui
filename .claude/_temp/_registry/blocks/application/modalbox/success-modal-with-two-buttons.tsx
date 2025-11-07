export default function SuccessModalWithTwoButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-28"
            data-modal-target="modalBox-28"
            data-modal-toggle="modalBox-28"
          >
            Submit
          </button>
          <div
            id="modalBox-28"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-end mb-3.5">
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-28"
                      data-modal-target="modalBox-28"
                    ></button>
                  </div>
                  <div className="flex items-center justify-center mb-3.5">
                    <img
                      src="https://pagedone.io/asset/uploads/1720777106.png
"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-center flex-col gap-2 mb-5">
                    <h5 className="text-lg font-bold leading-8 text-gray-900 text-center">
                      Congratulations!
                    </h5>
                    <p className="text-xs font-normal text-gray-500 text-center">
                      Congratulations on completing your course! Now it's time
                      to assess your knowledge and see how well you've mastered
                      the material.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      className="py-2.5 px-3.5 w-full text-center rounded-lg border border-indigo-600 text-sm font-medium text-indigo-600 close-modal-button transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-100 hover:bg-indigo-100"
                      data-pd-overlay="#modalBox-28"
                      data-modal-target="modalBox-28"
                    >
                      Skip
                    </button>
                    <button
                      className="py-2.5 px-3.5 w-full text-center rounded-lg bg-indigo-600 text-sm font-medium text-white close-modal-button transition-all duration-500 focus-within:outline-0 focus-within:bg-indigo-700 hover:bg-indigo-700"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
