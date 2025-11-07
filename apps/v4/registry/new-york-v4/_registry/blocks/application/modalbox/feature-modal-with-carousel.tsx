export default function FeatureModalWithCarousel() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-11"
            data-modal-target="modalBox-11"
            data-modal-toggle="modalBox-11"
          >
            New Features
          </button>
          <div
            id="modalBox-11"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="relative bg-white p-6">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-medium text-blue-500">
                      New Features
                    </p>
                  </div>
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-11"
                    data-modal-target="modalBox-11"
                  ></button>
                </div>
                <h6 className="mb-1.5 text-left leading-8 font-bold text-gray-900">
                  Forms are added
                </h6>
                <p className="mb-8 text-xs font-normal text-gray-500">
                  New features is forms designs available. Simply drag and drop
                  and used easily.{" "}
                </p>
                <div className="relative w-full overflow-hidden">
                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720776922.png
"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720776922.png
"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720776922.png
"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="relative flex w-full items-center justify-between">
                      <div className="swiper-button-prev h-5 w-5"></div>
                      <div className="swiper-pagination" />
                      <div className="swiper-button-next h-5 w-5"></div>
                    </div>
                  </div>
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
