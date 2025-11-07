export default function GallerySectionWithTabContent() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
        <div className="flex md:flex-row flex-col items-center justify-between gap-2.5">
          <h2 className="w-full text-gray-900 text-4xl font-bold font-manrope leading-normal md:text-start text-center">
            Gallery Chronicles
          </h2>
          <p className="w-full md:text-right text-center text-gray-600 text-lg font-normal leading-8">
            Traversing the Rich Tapestry of Our Collections
          </p>
        </div>
        <div className="tabs" id="gallery">
          <div className="lg:my-16 my-10">
            <div
              id="tabs-with-underline-1"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-1"
              className="tabcontent "
            >
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041668.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041668.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2016
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041679.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041679.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image ">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041689.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041689.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4 lg:my-8 my-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041723.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041723.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041734.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041734.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041744.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041744.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041779.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041779.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041789.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041789.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041801.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041801.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabs-with-underline-2"
              className="hidden tabcontent"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-2"
            >
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041668.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041668.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2016
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041679.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041679.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image ">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041689.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041689.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4 lg:my-8 my-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041723.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041723.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041734.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041734.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041744.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041744.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041779.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041779.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041789.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041789.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041801.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041801.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabs-with-underline-3"
              className="hidden tabcontent"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-3"
            >
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041668.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041668.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2016
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041679.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041679.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image ">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041689.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041689.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4 lg:my-8 my-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041723.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041723.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041734.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041734.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041744.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041744.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041779.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041779.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041789.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041789.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041801.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041801.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabs-with-underline-4"
              className="hidden tabcontent"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-4"
            >
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041668.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041668.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2016
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041679.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041679.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image ">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041689.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041689.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4 lg:my-8 my-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041723.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041723.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041734.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041734.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041744.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041744.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col lg:gap-8 gap-4">
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041779.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041779.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041789.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041789.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-full group overflow-hidden rounded-2xl image">
                  <div className="img-wrapper rounded-2xl ">
                    <a href="https://pagedone.io/asset/uploads/1714041801.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041801.png"
                        className="img-responsive w-96 h-60 group-hover:scale-110 transition-all duration-700 ease-in-out object-cover rounded-2xl"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 p-5 w-full h-full group-hover:w-full group-hover:h-full group-hover:rounded-2xl group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                        <span className="text-white text-lg font-medium leading-8">
                          2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <ul className="flex gap-2.5 py-2.5 px-3 bg-white rounded-full border border-gray-200 w-fit mx-auto">
              <li>
                <a
                  className="inline-block active tablink tab-active:bg-emerald-50 tab-active:text-emerald-800 tab-active:rounded-full px-3 py-1.5 text-gray-900 text-xs font-medium leading-4"
                  data-tab="tabs-with-underline-1"
                  role="tab"
                >
                  Year
                </a>
              </li>
              <li>
                <a
                  className="inline-block tablink tab-active:bg-emerald-50 tab-active:text-emerald-800 tab-active:rounded-full px-3 py-1.5 text-gray-900 text-xs font-medium leading-4"
                  data-tab="tabs-with-underline-2"
                  role="tab"
                >
                  Months
                </a>
              </li>
              <li>
                <a
                  className="inline-block tablink tab-active:bg-emerald-50 tab-active:text-emerald-800 tab-active:rounded-full px-3 py-1.5 text-gray-900 text-xs font-medium leading-4"
                  data-tab="tabs-with-underline-3"
                  role="tab"
                >
                  Days
                </a>
              </li>
              <li>
                <a
                  className="inline-block tablink tab-active:bg-emerald-50 tab-active:text-emerald-800 tab-active:rounded-full px-3 py-1.5 text-gray-900 text-xs font-medium leading-4"
                  data-tab="tabs-with-underline-4"
                  role="tab"
                >
                  All Photos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lightbox" id="lightbox">
          <span className="close" id="close">
            ×
          </span>
          <img className="lightbox-image" id="lightbox-image" />
        </div>
      </div>
    </section>
  );
}
