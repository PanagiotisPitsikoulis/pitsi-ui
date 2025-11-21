export default function FeedbackModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-3"
            data-modal-target="modalBox-3"
            data-modal-toggle="modalBox-3"
          >
            Ask a Questions
          </button>
          <div
            id="modalBox-3"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="bg-white p-6">
                <div className="flex flex-col gap-5">
                  <h4 className="text-center text-lg leading-8 font-bold text-gray-900">
                    Ask a Questions
                  </h4>
                  <form action="#" className="flex flex-col gap-4">
                    <div className="relative">
                      <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                        Add a Title
                      </label>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pr-3.5 pl-4 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Add your title"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                        What are details of your problem?{" "}
                      </label>
                      <textarea
                        id="problem-1"
                        className="block h-24 w-full resize-none rounded-lg border border-gray-200 bg-transparent px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Enter the details of your problem..."
                      />
                    </div>
                    <div className="relative">
                      <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                        What did you try and what were you expecting?
                      </label>
                      <textarea
                        id="problem-2"
                        className="block h-24 w-full resize-none rounded-lg border border-gray-200 bg-transparent px-3.5 py-2 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                        placeholder="Enter the details of your problem..."
                      />
                    </div>
                  </form>
                  <div className="flex items-center justify-end gap-4">
                    <button
                      className="close-modal-button rounded-lg border border-gray-200 px-9 py-2.5 text-sm font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                      data-pd-overlay="#modalBox-3"
                      data-modal-target="modalBox-3"
                    >
                      Cancel
                    </button>
                    <button
                      className="close-modal-button rounded-lg bg-green-700 px-9 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-green-800"
                      data-pd-overlay="#modalBox-3"
                      data-modal-target="modalBox-3"
                    >
                      Submit
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
