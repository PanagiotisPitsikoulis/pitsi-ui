export default function ModalWithFooter() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-32"
            data-modal-target="modalBox-32"
            data-modal-toggle="modalBox-32"
          >
            Message
          </button>
          <div
            id="modalBox-32"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-5 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Send Us Message
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-32"
                      data-modal-target="modalBox-32"
                    ></button>
                  </div>
                  <p className="mb-5 text-xs font-normal text-gray-500">
                    Morbi donec mattis at nec enim diam tellus odio tincidunt.
                    Cursus fringilla dignissim lacinia sit arcu. Ut amet arcu eu
                    eros et commodo. Aliquam a penatibus id condimentum.
                  </p>
                  <p className="mb-5 border-b border-gray-200 pb-5 text-xs font-normal text-gray-500">
                    Quam euismod donec pharetra vestibulum nunc vel. Hendrerit
                    luctus sit accumsan sed egestas commodo morbi sit quam. In
                    integer adipiscing tortor mauris tincidunt.
                  </p>
                  <div className="flex items-center justify-end gap-4">
                    <button
                      data-pd-overlay="modalBox-32"
                      data-modal-target="modalBox-32"
                      className="close-modal-button rounded-lg border border-gray-200 px-9 py-2.5 text-sm font-medium text-gray-900 transition-all duration-500 focus-within:border-gray-100 focus-within:bg-gray-100 focus-within:outline-0 hover:border-gray-100 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      data-pd-overlay="modalBox-32"
                      data-modal-target="modalBox-32"
                      className="close-modal-button rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-500 focus-within:bg-green-800 focus-within:outline-0 hover:bg-green-800"
                    >
                      Make changes
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
