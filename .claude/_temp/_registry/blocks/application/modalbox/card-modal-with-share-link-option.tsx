export default function CardModalWithShareLinkOption() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-35"
            data-modal-target="modalBox-35"
            data-modal-toggle="modalBox-35"
          >
            Login
          </button>
          <div
            id="modalBox-35"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6">
                <img
                  src="https://pagedone.io/asset/uploads/1720777096.png
"
                  className="w-full h-auto mb-5 object-cover"
                />
                <h5 className="mb-2 text-lg font-bold leading-8 text-black text-center">
                  New Blog Post
                </h5>
                <p className="text-xs font-normal text-gray-500 text-center mb-5">
                  A New Blog Post is like a fresh addition to the library of
                  ideas, insights, and stories housed within a blog.
                </p>
                <div className="flex items-end gap-5 mb-8">
                  <div className="relative w-full">
                    <label className="flex  items-center mb-1 text-gray-600 text-xs font-medium">
                      Share link
                    </label>
                    <div className="rounded-lg py-2.5 pr-3.5 pl-4 w-full border border-gray-200 text-sm font-normal text-blue-500 select-all ">
                      www.pagedone.io / blog
                    </div>
                  </div>
                  <button className="w-10 h-10 px-3 rounded-md bg-indigo-50 flex items-center justify-center"></button>
                </div>
                <div className="flex items-center gap-5">
                  <button
                    className="py-2.5 px-3.5 w-full text-center rounded-lg border border-indigo-600 text-sm font-medium text-indigo-600 close-modal-button"
                    data-pd-overlay="#modalBox-35"
                    data-modal-target="modalBox-35"
                  >
                    Cancel
                  </button>
                  <button
                    className="py-2.5 px-3.5 w-full text-center rounded-lg bg-indigo-600 text-sm font-medium text-white close-modal-button"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
