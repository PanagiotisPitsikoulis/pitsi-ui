export default function CreateProjectModalWithTeamSelection() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-20"
            data-modal-target="modalBox-20"
            data-modal-toggle="modalBox-20"
          >
            Create Project
          </button>
          <div
            id="modalBox-20"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6">
                <div className="flex items-center justify-end mb-1 w-full">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-20"
                    data-modal-target="modalBox-20"
                  ></button>
                </div>
                <h6 className="text-lg font-bold leading-8 text-gray-900 text-center mb-8">
                  Create a New Project
                </h6>
                <form action="#" className="flex flex-col gap-3.5 mb-8">
                  <div className="relative w-full">
                    <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                      Project Name
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full pr-3.5 pl-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                      placeholder="Write Project name"
                    />
                  </div>
                  <div className="block">
                    <p className="text-xs font-medium text-gray-600 mb-1">
                      Rate
                    </p>
                    <div className="flex flex-col min-[550px]:flex-row items-end gap-4">
                      <div className="relative w-full ">
                        <input
                          type="text"
                          className="block w-full pr-4 pl-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-200 rounded-lg placeholder-gray-300 focus:outline-none leading-relaxed"
                          placeholder="6,000.00"
                        />
                        <select
                          id="countries"
                          className="w-16 text-gray-900 text-sm block absolute top-0.5 right-1 h-9 px-1 border-l border-gray-200 focus:outline-none"
                        >
                          <option value="USD" selected>
                            USD
                          </option>
                          <option value="CA">CA</option>
                          <option value="FR">Fr</option>
                        </select>
                      </div>
                      <select
                        id="income"
                        className=" border border-gray-200 text-gray-600 text-base rounded-lg block w-full  py-2 px-4 focus:outline-none"
                      >
                        <option selected>Par Week</option>
                        <option value="year">Par Year</option>
                        <option value="month">Par Month</option>
                      </select>
                    </div>
                  </div>
                  <div className="block w-full">
                    <p className="text-xs font-medium text-gray-600 mb-1">
                      Deadline
                    </p>
                    <div className="grid grid-cols-7 gap-4">
                      <select
                        id="month"
                        className="col-span-7 min-[550px]:col-span-3 border border-gray-200 text-gray-600 text-base rounded-lg block w-full py-2.5 px-2 focus:outline-none"
                      >
                        <option selected>December</option>
                        <option value="Jan">January</option>
                        <option value="Feb">February</option>
                        <option value="Mar">March</option>
                        <option value="Apr">April</option>
                      </select>
                      <div className="col-span-7 min-[550px]:col-span-4 grid grid-cols-2 gap-4">
                        <select
                          id="day"
                          className="h-12 border border-gray-200 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                        >
                          <option selected>12</option>
                          <option value={1}>01</option>
                          <option value={2}>02</option>
                          <option value={3}>03</option>
                          <option value={4}>04</option>
                        </select>
                        <select
                          id="year"
                          className="h-12 border border-gray-200 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                        >
                          <option selected>2022</option>
                          <option value={2023}>2023</option>
                          <option value={2024}>2024</option>
                          <option value={2025}>2025</option>
                          <option value={2026}>2026</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="block w-full">
                    <label
                      htmlFor="Required"
                      className="block mb-1 text-sm font-medium text-gray-600 w-full"
                    >
                      Required
                    </label>
                    <select
                      id="Required"
                      className=" border border-gray-200 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
                    >
                      <option selected>Design &amp; Implementation</option>
                      <option value="US">Design &amp; Implementation</option>
                      <option value="CA">Design &amp; Implementation</option>
                    </select>
                  </div>
                  <div className="block">
                    <p className="text-xs font-medium text-gray-600 mb-1">
                      Team
                    </p>
                    <div className="flex items-center gap-2.5 ">
                      <span className="w-11 h-11 rounded-full flex items-center justify-center bg-indigo-50"></span>
                      <img
                        src="https://pagedone.io/asset/uploads/1720776948.png"
                        alt="Team member image"
                      />
                      <img
                        src="https://pagedone.io/asset/uploads/1720776958.png"
                        alt="Team member image"
                      />
                      <img
                        src="https://pagedone.io/asset/uploads/1720776967.png"
                        alt="Team member image"
                      />
                      <img
                        src="https://pagedone.io/asset/uploads/1720776977.png"
                        alt="Team member image"
                      />
                    </div>
                  </div>
                </form>
                <div className="flex items-center gap-4">
                  <button
                    className="w-full text-center py-2.5 px-3.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-200 close-modal-button"
                    data-pd-overlay="#modalBox-20"
                    data-modal-target="modalBox-20"
                  >
                    Cancel
                  </button>
                  <button
                    className="w-full text-center py-2.5 px-3.5 rounded-lg bg-indigo-600 text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700 close-modal-button"
                    data-pd-overlay="#modalBox-20"
                    data-modal-target="modalBox-20"
                  >
                    Create
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
    </section>
  );
}
