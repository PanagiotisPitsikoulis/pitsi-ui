export default function CardModalWithShareLinkOption() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-35"
            data-modal-target="modalBox-35"
            data-modal-toggle="modalBox-35"
          >
            Login
          </button>
          <div
            id="modalBox-35"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="bg-white p-6">
                <img
                  src="https://pagedone.io/asset/uploads/1720777096.png
"
                  className="mb-5 h-auto w-full object-cover"
                />
                <h5 className="mb-2 text-center text-lg leading-8 font-bold text-black">
                  New Blog Post
                </h5>
                <p className="mb-5 text-center text-xs font-normal text-gray-500">
                  A New Blog Post is like a fresh addition to the library of
                  ideas, insights, and stories housed within a blog.
                </p>
                <div className="mb-8 flex items-end gap-5">
                  <div className="relative w-full">
                    <label className="mb-1 flex items-center text-xs font-medium text-gray-600">
                      Share link
                    </label>
                    <div className="w-full rounded-lg border border-gray-200 py-2.5 pr-3.5 pl-4 text-sm font-normal text-blue-500 select-all">
                      www.pagedone.io / blog
                    </div>
                  </div>
                  <button className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-50 px-3"></button>
                </div>
                <div className="flex items-center gap-5">
                  <button
                    className="close-modal-button w-full rounded-lg border border-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-indigo-600"
                    data-pd-overlay="#modalBox-35"
                    data-modal-target="modalBox-35"
                  >
                    Cancel
                  </button>
                  <button
                    className="close-modal-button w-full rounded-lg bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-medium text-white"
                    data-pd-overlay="#modalBox-35"
                    data-modal-target="modalBox-35"
                  >
                    Confirm
                  </button>
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
