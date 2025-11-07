export default function FeatureModalWithCarousel() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-11"
            data-modal-target="modalBox-11"
            data-modal-toggle="modalBox-11"
          >
            New Features
          </button>
          <div
            id="modalBox-11"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6 relative">
                <div className="flex items-center justify-between mb-2">
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
                <h6 className="text-left leading-8 font-bold text-gray-900 mb-1.5">
                  Forms are added
                </h6>
                <p className="text-xs font-normal text-gray-500 mb-8">
                  New features is forms designs available. Simply drag and drop
                  and used easily.{" "}
                </p>
                <div className="w-full relative overflow-hidden">
                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720776922.png
"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720776922.png
"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720776922.png
"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="relative flex items-center justify-between w-full">
                      <div className="swiper-button-prev w-5 h-5"></div>
                      <div className="swiper-pagination" />
                      <div className="swiper-button-next w-5 h-5"></div>
                    </div>
                  </div>
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
