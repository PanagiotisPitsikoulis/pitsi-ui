export default function TeamCardsWithBackgroundAndCtaButton() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal pb-4">
            Introducing Our Talented Team
          </h2>
          <p className="text-center text-gray-500 text-lg font-normal leading-7">
            Meet Our Exceptional Team! Our diverse talents converge to create a
            dynamic force, driven by shared
            <br /> values and a commitment to excellence.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="w-96 block group relative">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1710307723.png"
                alt="Nikita image"
                className="w-full transition-all duration-500 object-cover  rounded-t-2xl"
              />
            </div>
            <div className="transition-all duration-700 ease-in-out px-8 py-7 bg-gray-100 group-hover:bg-indigo-600 rounded-bl-2xl rounded-br-2xl flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <h4 className="text-gray-900 group-hover:text-white transition-all duration-700 ease-in-out text-base font-medium leading-relaxed border-r border-gray-300 pr-4">
                    Dianne Russell
                  </h4>
                  <span className="text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                    Sales Lead
                  </span>
                </div>
                <p className="self-stretch text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-sm font-normal leading-snug">
                  The inception of this venture has not only been fulfilling but
                  has also marked a significant milestone in my journey.
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 block group relative">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1710307736.png"
                alt="Harsh image"
                className="w-full transition-all duration-500 object-cover  rounded-t-2xl"
              />
            </div>
            <div className="transition-all duration-700 ease-in-out px-8 py-7 bg-gray-100 group-hover:bg-indigo-600 rounded-bl-2xl rounded-br-2xl flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <h4 className="text-gray-900 group-hover:text-white transition-all duration-700 ease-in-out text-base font-medium leading-relaxed border-r border-gray-300 pr-4">
                    Michael Cannon
                  </h4>
                  <span className="text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                    Founder
                  </span>
                </div>
                <p className="self-stretch text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-sm font-normal leading-snug">
                  PageDone remains steadfast in its commitment to innovation and
                  growth. With each step forward, we embrace.
                </p>
              </div>
            </div>
          </div>
          <div className="w-96 block group relative">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1710307754.png"
                alt="Sasha image"
                className="w-full transition-all duration-500 object-cover rounded-t-2xl"
              />
            </div>
            <div className="transition-all duration-700 ease-in-out px-8 py-7 bg-gray-100 group-hover:bg-indigo-600 rounded-bl-2xl rounded-br-2xl flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <h4 className="text-gray-900 group-hover:text-white transition-all duration-700 ease-in-out text-base font-medium leading-relaxed border-r border-gray-300 pr-4">
                    Sylvia Morales
                  </h4>
                  <span className="text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-base font-normal leading-relaxed">
                    Product Manager
                  </span>
                </div>
                <p className="self-stretch text-gray-500 group-hover:text-white transition-all duration-700 ease-in-out text-sm font-normal leading-snug">
                  The inception of this venture has been an immensely rewarding
                  experience, representing a pivotal milestone in my personal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto px-7 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all ease-in-out duration-700 rounded-full shadow justify-center items-center flex">
          <span className="px-2 text-white text-base font-semibold leading-normal">
            Join our team
          </span>
        </button>
      </div>
    </section>
  );
}
