export default function ModalWithFooter() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-32"
            data-modal-target="modalBox-32"
            data-modal-toggle="modalBox-32"
          >
            Message
          </button>
          <div
            id="modalBox-32"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-5">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Send Us Message
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-32"
                      data-modal-target="modalBox-32"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-5">
                    Morbi donec mattis at nec enim diam tellus odio tincidunt.
                    Cursus fringilla dignissim lacinia sit arcu. Ut amet arcu eu
                    eros et commodo. Aliquam a penatibus id condimentum.
                  </p>
                  <p className="text-xs font-normal text-gray-500 pb-5 border-b border-gray-200 mb-5">
                    Quam euismod donec pharetra vestibulum nunc vel. Hendrerit
                    luctus sit accumsan sed egestas commodo morbi sit quam. In
                    integer adipiscing tortor mauris tincidunt.
                  </p>
                  <div className="flex items-center justify-end gap-4">
                    <button
                      data-pd-overlay="modalBox-32"
                      data-modal-target="modalBox-32"
                      className="close-modal-button py-2.5 px-9 rounded-lg border border-gray-200 text-sm font-medium text-gray-900 transition-all duration-500 focus-within:outline-0 focus-within:bg-gray-100 focus-within:border-gray-100 hover:border-gray-100 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      data-pd-overlay="modalBox-32"
                      data-modal-target="modalBox-32"
                      className="close-modal-button py-2.5 px-5 rounded-lg bg-green-700 text-white text-sm font-medium transition-all duration-500 focus-within:outline-0 focus-within:bg-green-800 hover:bg-green-800"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
