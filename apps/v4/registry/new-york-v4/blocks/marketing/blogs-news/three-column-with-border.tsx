export default function ThreeColumnWithBorder() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-14 text-center text-4xl font-bold text-gray-900">
          Our popular blogs
        </h2>
        <div className="mb-14 flex flex-wrap justify-center gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          <div className="group w-full cursor-pointer rounded-2xl border border-gray-300 p-5 transition-all duration-300 hover:border-indigo-600 max-lg:max-w-xl lg:w-1/3">
            <div className="mb-6 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696244553.png"
                alt="Harsh image"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="block">
              <h4 className="mb-9 leading-8 font-medium text-gray-900">
                Fintech 101: Exploring the Basics of Electronic Payments
              </h4>
              <div className="flex items-center justify-between font-medium">
                <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                <span className="text-sm text-indigo-600">2 year ago</span>
              </div>
            </div>
          </div>
          <div className="group w-full cursor-pointer rounded-2xl border border-gray-300 p-5 transition-all duration-300 hover:border-indigo-600 max-lg:max-w-xl lg:w-1/3">
            <div className="mb-6 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696244579.png"
                alt="John image"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="block">
              <h4 className="mb-9 leading-8 font-medium text-gray-900">
                From Classroom to Cyberspace: The Growing Influence of EdTech in
                Fintech
              </h4>
              <div className="flex items-center justify-between font-medium">
                <h6 className="text-sm text-gray-500">By John D.</h6>
                <span className="text-sm text-indigo-600">2 year ago</span>
              </div>
            </div>
          </div>
          <div className="group w-full cursor-pointer rounded-2xl border border-gray-300 p-5 transition-all duration-300 hover:border-indigo-600 max-lg:max-w-xl lg:w-1/3">
            <div className="mb-6 flex items-center">
              <img
                src="https://pagedone.io/asset/uploads/1696244619.png"
                alt="Alexa image"
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="block">
              <h4 className="mb-9 leading-8 font-medium text-gray-900">
                Fintech Solutions for Student Loans: Easing the Burden of
                Education Debt
              </h4>
              <div className="flex items-center justify-between font-medium">
                <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                <span className="text-sm text-indigo-600">2 year ago</span>
              </div>
            </div>
          </div>
        </div>
        <a
          href="javascript:;"
          className="mx-auto flex w-52 cursor-pointer items-center justify-center rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-100"
        >
          View All
        </a>
      </div>
    </section>
  )
}
