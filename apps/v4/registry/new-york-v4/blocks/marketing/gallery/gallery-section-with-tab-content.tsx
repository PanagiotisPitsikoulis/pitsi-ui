export default function GallerySectionWithTabContent() {
  return (
    <section className="py-24">
      <div className="lg-6 relative z-10 mx-auto w-full max-w-7xl px-4 md:px-5">
        <div className="flex flex-col items-center justify-between gap-2.5 md:flex-row">
          <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900 md:text-start">
            Gallery Chronicles
          </h2>
          <p className="w-full text-center text-lg leading-8 font-normal text-gray-600 md:text-right">
            Traversing the Rich Tapestry of Our Collections
          </p>
        </div>
        <div className="tabs" id="gallery">
          <div className="my-10 lg:my-16">
            <div
              id="tabs-with-underline-1"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-1"
              className="tabcontent"
            >
              <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041668.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041668.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2016
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041679.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041679.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041689.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041689.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4 flex flex-col gap-4 md:flex-row lg:my-8 lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041723.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041723.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041734.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041734.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041744.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041744.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041779.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041779.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041789.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041789.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041801.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041801.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
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
              className="tabcontent hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-2"
            >
              <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041668.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041668.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2016
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041679.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041679.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041689.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041689.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4 flex flex-col gap-4 md:flex-row lg:my-8 lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041723.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041723.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041734.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041734.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041744.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041744.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041779.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041779.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041789.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041789.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041801.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041801.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
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
              className="tabcontent hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-3"
            >
              <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041668.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041668.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2016
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041679.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041679.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041689.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041689.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4 flex flex-col gap-4 md:flex-row lg:my-8 lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041723.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041723.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041734.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041734.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041744.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041744.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041779.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041779.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041789.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041789.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041801.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041801.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
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
              className="tabcontent hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-4"
            >
              <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041668.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041668.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2016
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041679.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041679.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2017
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041689.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041689.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4 flex flex-col gap-4 md:flex-row lg:my-8 lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041723.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041723.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2019
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041734.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041734.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041744.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041744.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row lg:gap-8">
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041779.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041779.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2022
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041789.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041789.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
                          2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group image relative h-full w-full overflow-hidden rounded-2xl">
                  <div className="img-wrapper rounded-2xl">
                    <a href="https://pagedone.io/asset/uploads/1714041801.png">
                      <img
                        alt="Gallery image"
                        src="https://pagedone.io/asset/uploads/1714041801.png"
                        className="img-responsive h-60 w-96 rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                      />
                    </a>
                    <div className="img-overlay rounded-2xl">
                      <div className="absolute bottom-0 left-0 h-full w-full p-5 opacity-0 transition-all duration-700 ease-in-out group-hover:h-full group-hover:w-full group-hover:rounded-2xl group-hover:bg-black/20 group-hover:opacity-100">
                        <span className="text-lg leading-8 font-medium text-white">
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
            <ul className="mx-auto flex w-fit gap-2.5 rounded-full border border-gray-200 bg-white px-3 py-2.5">
              <li>
                <a
                  className="active tablink tab-active:bg-emerald-50 tab-active:text-emerald-800 tab-active:rounded-full inline-block px-3 py-1.5 text-xs leading-4 font-medium text-gray-900"
                  data-tab="tabs-with-underline-1"
                  role="tab"
                >
                  Year
                </a>
              </li>
              <li>
                <a
                  className="tablink tab-active:bg-emerald-50 tab-active:text-emerald-800 tab-active:rounded-full inline-block px-3 py-1.5 text-xs leading-4 font-medium text-gray-900"
                  data-tab="tabs-with-underline-2"
                  role="tab"
                >
                  Months
                </a>
              </li>
              <li>
                <a
                  className="tablink tab-active:bg-emerald-50 tab-active:text-emerald-800 tab-active:rounded-full inline-block px-3 py-1.5 text-xs leading-4 font-medium text-gray-900"
                  data-tab="tabs-with-underline-3"
                  role="tab"
                >
                  Days
                </a>
              </li>
              <li>
                <a
                  className="tablink tab-active:bg-emerald-50 tab-active:text-emerald-800 tab-active:rounded-full inline-block px-3 py-1.5 text-xs leading-4 font-medium text-gray-900"
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
  )
}
