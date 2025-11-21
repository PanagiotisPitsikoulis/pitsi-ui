export default function TeamCardsWithBackgroundAndCtaButton() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope pb-4 text-center text-4xl leading-normal font-bold text-gray-900">
            Introducing Our Talented Team
          </h2>
          <p className="text-center text-lg leading-7 font-normal text-gray-500">
            Meet Our Exceptional Team! Our diverse talents converge to create a
            dynamic force, driven by shared
            <br /> values and a commitment to excellence.
          </p>
        </div>
        <div className="mb-12 flex flex-wrap justify-center gap-8">
          <div className="group relative block w-96">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1710307723.png"
                alt="Nikita image"
                className="w-full rounded-t-2xl object-cover transition-all duration-500"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2.5 rounded-br-2xl rounded-bl-2xl bg-gray-100 px-8 py-7 transition-all duration-700 ease-in-out group-hover:bg-indigo-600">
              <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                <div className="inline-flex items-center justify-start gap-4 self-stretch">
                  <h4 className="border-r border-gray-300 pr-4 text-base leading-relaxed font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                    Dianne Russell
                  </h4>
                  <span className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                    Sales Lead
                  </span>
                </div>
                <p className="self-stretch text-sm leading-snug font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                  The inception of this venture has not only been fulfilling but
                  has also marked a significant milestone in my journey.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative block w-96">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1710307736.png"
                alt="Harsh image"
                className="w-full rounded-t-2xl object-cover transition-all duration-500"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2.5 rounded-br-2xl rounded-bl-2xl bg-gray-100 px-8 py-7 transition-all duration-700 ease-in-out group-hover:bg-indigo-600">
              <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                <div className="inline-flex items-center justify-start gap-4 self-stretch">
                  <h4 className="border-r border-gray-300 pr-4 text-base leading-relaxed font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                    Michael Cannon
                  </h4>
                  <span className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                    Founder
                  </span>
                </div>
                <p className="self-stretch text-sm leading-snug font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                  PageDone remains steadfast in its commitment to innovation and
                  growth. With each step forward, we embrace.
                </p>
              </div>
            </div>
          </div>
          <div className="group relative block w-96">
            <div className="relative">
              <img
                src="https://pagedone.io/asset/uploads/1710307754.png"
                alt="Sasha image"
                className="w-full rounded-t-2xl object-cover transition-all duration-500"
              />
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-2.5 rounded-br-2xl rounded-bl-2xl bg-gray-100 px-8 py-7 transition-all duration-700 ease-in-out group-hover:bg-indigo-600">
              <div className="flex flex-col items-start justify-start gap-4 self-stretch">
                <div className="inline-flex items-center justify-start gap-4 self-stretch">
                  <h4 className="border-r border-gray-300 pr-4 text-base leading-relaxed font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-white">
                    Sylvia Morales
                  </h4>
                  <span className="text-base leading-relaxed font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                    Product Manager
                  </span>
                </div>
                <p className="self-stretch text-sm leading-snug font-normal text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white">
                  The inception of this venture has been an immensely rewarding
                  experience, representing a pivotal milestone in my personal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto flex items-center justify-center rounded-full bg-indigo-600 px-7 py-3 shadow transition-all duration-700 ease-in-out hover:bg-indigo-800">
          <span className="px-2 text-base leading-normal font-semibold text-white">
            Join our team
          </span>
        </button>
      </div>
    </section>
  )
}
