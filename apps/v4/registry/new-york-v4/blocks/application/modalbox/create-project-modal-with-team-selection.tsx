export default function CreateProjectModalWithTeamSelection() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-20"
            data-modal-target="modalBox-20"
            data-modal-toggle="modalBox-20"
          >
            Create Project
          </button>
          <div
            id="modalBox-20"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="bg-white p-6">
                <div className="mb-1 flex w-full items-center justify-end">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-20"
                    data-modal-target="modalBox-20"
                  ></button>
                </div>
                <h6 className="mb-8 text-center text-lg leading-8 font-bold text-gray-900">
                  Create a New Project
                </h6>
                <form action="#" className="mb-8 flex flex-col gap-3.5">
                  <div className="relative w-full">
                    <label className="mb-2 flex items-center text-xs font-medium text-gray-600">
                      Project Name
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full rounded-lg border border-gray-200 bg-transparent py-2 pr-3.5 pl-4 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                      placeholder="Write Project name"
                    />
                  </div>
                  <div className="block">
                    <p className="mb-1 text-xs font-medium text-gray-600">
                      Rate
                    </p>
                    <div className="flex flex-col items-end gap-4 min-[550px]:flex-row">
                      <div className="relative w-full">
                        <input
                          type="text"
                          className="block w-full rounded-lg border border-gray-200 bg-transparent py-2 pr-4 pl-4 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-300 shadow-xs focus:outline-none"
                          placeholder="6,000.00"
                        />
                        <select
                          id="countries"
                          className="absolute top-0.5 right-1 block h-9 w-16 border-l border-gray-200 px-1 text-sm text-gray-900 focus:outline-none"
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
                        className="block w-full rounded-lg border border-gray-200 px-4 py-2 text-base text-gray-600 focus:outline-none"
                      >
                        <option selected>Par Week</option>
                        <option value="year">Par Year</option>
                        <option value="month">Par Month</option>
                      </select>
                    </div>
                  </div>
                  <div className="block w-full">
                    <p className="mb-1 text-xs font-medium text-gray-600">
                      Deadline
                    </p>
                    <div className="grid grid-cols-7 gap-4">
                      <select
                        id="month"
                        className="col-span-7 block w-full rounded-lg border border-gray-200 px-2 py-2.5 text-base text-gray-600 focus:outline-none min-[550px]:col-span-3"
                      >
                        <option selected>December</option>
                        <option value="Jan">January</option>
                        <option value="Feb">February</option>
                        <option value="Mar">March</option>
                        <option value="Apr">April</option>
                      </select>
                      <div className="col-span-7 grid grid-cols-2 gap-4 min-[550px]:col-span-4">
                        <select
                          id="day"
                          className="block h-12 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-base text-gray-600 focus:outline-none"
                        >
                          <option selected>12</option>
                          <option value={1}>01</option>
                          <option value={2}>02</option>
                          <option value={3}>03</option>
                          <option value={4}>04</option>
                        </select>
                        <select
                          id="year"
                          className="block h-12 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-base text-gray-600 focus:outline-none"
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
                      className="mb-1 block w-full text-sm font-medium text-gray-600"
                    >
                      Required
                    </label>
                    <select
                      id="Required"
                      className="block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-base text-gray-600 focus:outline-none"
                    >
                      <option selected>Design &amp; Implementation</option>
                      <option value="US">Design &amp; Implementation</option>
                      <option value="CA">Design &amp; Implementation</option>
                    </select>
                  </div>
                  <div className="block">
                    <p className="mb-1 text-xs font-medium text-gray-600">
                      Team
                    </p>
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50"></span>
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
                    className="close-modal-button w-full rounded-lg border border-gray-200 px-3.5 py-2.5 text-center text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-gray-200"
                    data-pd-overlay="#modalBox-20"
                    data-modal-target="modalBox-20"
                  >
                    Cancel
                  </button>
                  <button
                    className="close-modal-button w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700"
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
          className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
        ></div>
      </div>
    </section>
  )
}
