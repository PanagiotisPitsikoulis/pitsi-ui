export default function ThreeColumnBlogList() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-3 flex">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Discover Inspiration
            </h2>
            <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
              Find the inspiration you need to spark innovation and fresh ideas.
            </p>
          </div>
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-3 grid-cols-1">
            <div className="w-full h-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start inline-flex relative">
              <img
                src="https://pagedone.io/asset/uploads/1722248739.png"
                alt="Blog nad News Image"
                className="rounded-xl w-full lg:h-full h-auto object-cover"
              />
              <div className="px-5 pb-5 gap-1 flex flex-col absolute">
                <h4 className="text-white text-xl font-semibold leading-8">
                  AI-Driven Personal Assistants: Enhancing Productivity and
                  Daily Life
                </h4>
                <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                  10 August 2024
                </h6>
              </div>
            </div>
            <div className="w-full h-full flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-full h-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start gap-1 flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722248751.png"
                  alt="Blog nad News Image"
                  className="rounded-xl w-full lg:h-full h-auto object-cover"
                />
                <div className="px-5 pb-5 gap-1 flex flex-col absolute">
                  <h4 className="text-white text-xl font-semibold leading-8">
                    How Blockchain is Revolutionizing Supply Chain Management
                  </h4>
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    14 August 2024
                  </h6>
                </div>
              </div>
              <div className="w-full h-full bg-gradient-to-b from-black to-black rounded-xl flex-col justify-end items-start gap-1 flex relative">
                <img
                  src="https://pagedone.io/asset/uploads/1722248763.png"
                  alt="Blog nad News Image"
                  className="rounded-xl w-full lg:h-full h-auto object-cover"
                />
                <div className="px-5 pb-5 gap-1 flex flex-col absolute">
                  <h4 className="text-white text-xl font-semibold leading-8">
                    The Role of Augmented Reality in Transforming Retail
                    Experiences
                  </h4>
                  <h6 className="text-gray-100 text-base font-medium leading-relaxed">
                    20 August 2024
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex-col justify-center items-start gap-6 inline-flex">
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <img
                  className="rounded-lg sm:w-auto w-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1722248773.png"
                  alt="Blog nad News Image"
                />
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                  <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                    7 July 2024
                  </h6>
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    The Role of AI in Enhancing Mental Health
                  </h4>
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <img
                  className="rounded-lg sm:w-auto w-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1722248783.png"
                  alt="Blog nad News Image"
                />
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                  <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                    20 July 2024
                  </h6>
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    Exploring the Potential of CRISPR Technology
                  </h4>
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <img
                  className="rounded-lg sm:w-auto w-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1722248830.png"
                  alt="Blog nad News Image"
                />
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                  <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                    28 July 2024
                  </h6>
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    The Evolution of Voice Technology
                  </h4>
                </div>
              </div>
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <img
                  className="rounded-lg sm:w-auto w-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1722248841.png"
                  alt="Blog nad News Image"
                />
                <div className="w-full flex-col justify-start items-start gap-1 inline-flex">
                  <h6 className="text-gray-600 text-base font-medium leading-relaxed">
                    4 August 2024{" "}
                  </h6>
                  <h4 className="text-gray-900 text-xl font-medium leading-8">
                    The Future of Sustainable Urban Farming
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
