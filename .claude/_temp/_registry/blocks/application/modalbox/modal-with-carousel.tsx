export default function ModalWithCarousel() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-7"
            data-modal-target="modalBox-7"
            data-modal-toggle="modalBox-7"
          >
            Team
          </button>
          <div
            id="modalBox-7"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-md sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6 relative">
                <div className="w-full relative overflow-hidden">
                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720777118.png"
                          className="w-full h-auto object-cover"
                        />
                        <h6 className="pt-5 text-lg font-bold leading-8 text-gray-900 text-center">
                          Welcome to Our Team!
                        </h6>
                        <p className="text-gray-500 mt-2 text-xs font-normal text-center">
                          Welcome to our team! We're excited to have you join
                          us. Let's collaborate and achieve success together!
                        </p>
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720777118.png"
                          className="w-full h-auto object-cover"
                        />
                        <h6 className="pt-5 text-lg font-bold leading-8 text-gray-900 text-center">
                          Welcome to Our Team!
                        </h6>
                        <p className="text-gray-500 mt-2 text-xs font-normal text-center">
                          Welcome to our team! We're excited to have you join
                          us. Let's collaborate and achieve success together!
                        </p>
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720777118.png"
                          className="w-full h-auto object-cover"
                        />
                        <h6 className="pt-5 text-lg font-bold leading-8 text-gray-900 text-center">
                          Welcome to Our Team!
                        </h6>
                        <p className="text-gray-500 mt-2 text-xs font-normal text-center">
                          Welcome to our team! We're excited to have you join
                          us. Let's collaborate and achieve success together!
                        </p>
                      </div>
                    </div>
                    <div className="swiper-pagination mb-3" />
                    <div className="flex items-center justify-between gap-4">
                      <button
                        className="w-full text-center p-1.5 py-2.5 border border-gray-200 rounded-md text-xs font-medium text-gray-900 close-modal-button transition-all duration-300 hover:bg-gray-100 hover:border-gray-100"
                        data-pd-overlay="#modalBox-7"
                        data-modal-target="modalBox-7"
                      >
                        Skip
                      </button>
                      <button className="swiper-button-next p-1.5 py-2.5 text-center w-full bg-indigo-600 text-white text-sm font-medium transition-all duration-300 hover:bg-indigo-700">
                        Next
                      </button>
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
