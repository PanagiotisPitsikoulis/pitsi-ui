export default function ModalWithCarousel() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-7"
            data-modal-target="modalBox-7"
            data-modal-toggle="modalBox-7"
          >
            Team
          </button>
          <div
            id="modalBox-7"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-md">
              <div className="relative bg-white p-6">
                <div className="relative w-full overflow-hidden">
                  <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720777118.png"
                          className="h-auto w-full object-cover"
                        />
                        <h6 className="pt-5 text-center text-lg leading-8 font-bold text-gray-900">
                          Welcome to Our Team!
                        </h6>
                        <p className="mt-2 text-center text-xs font-normal text-gray-500">
                          Welcome to our team! We're excited to have you join
                          us. Let's collaborate and achieve success together!
                        </p>
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720777118.png"
                          className="h-auto w-full object-cover"
                        />
                        <h6 className="pt-5 text-center text-lg leading-8 font-bold text-gray-900">
                          Welcome to Our Team!
                        </h6>
                        <p className="mt-2 text-center text-xs font-normal text-gray-500">
                          Welcome to our team! We're excited to have you join
                          us. Let's collaborate and achieve success together!
                        </p>
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="https://pagedone.io/asset/uploads/1720777118.png"
                          className="h-auto w-full object-cover"
                        />
                        <h6 className="pt-5 text-center text-lg leading-8 font-bold text-gray-900">
                          Welcome to Our Team!
                        </h6>
                        <p className="mt-2 text-center text-xs font-normal text-gray-500">
                          Welcome to our team! We're excited to have you join
                          us. Let's collaborate and achieve success together!
                        </p>
                      </div>
                    </div>
                    <div className="swiper-pagination mb-3" />
                    <div className="flex items-center justify-between gap-4">
                      <button
                        className="close-modal-button w-full rounded-md border border-gray-200 p-1.5 py-2.5 text-center text-xs font-medium text-gray-900 transition-all duration-300 hover:border-gray-100 hover:bg-gray-100"
                        data-pd-overlay="#modalBox-7"
                        data-modal-target="modalBox-7"
                      >
                        Skip
                      </button>
                      <button className="swiper-button-next w-full bg-indigo-600 p-1.5 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-indigo-700">
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
          className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
        ></div>
      </div>
    </section>
  )
}
