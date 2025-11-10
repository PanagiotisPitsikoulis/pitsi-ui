export default function WithGradientBackgroundBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-center gap-20 lg:flex-row lg:justify-between">
          <div className="flex w-full items-center justify-center rounded-3xl bg-gradient-to-l from-[#7A5AF8] to-[#A78BFA] p-4 max-lg:mx-auto max-lg:max-w-2xl lg:w-3/5 lg:p-10">
            <img
              src="https://pagedone.io/asset/uploads/1695031049.png"
              alt="Dashboard image"
              className="w-full rounded-3xl object-cover"
            />
          </div>
          <div className="w-full lg:w-2/5">
            <div className="max-w-2xl max-lg:mx-auto lg:max-w-lg">
              <div className="mb-11">
                <span className="mb-2 block text-left text-base font-medium text-indigo-600">
                  OUR FEATURES
                </span>
                <h2 className="mb-5 text-left text-4xl leading-[3.25rem] font-bold text-gray-900">
                  Track your portfolio in a few clicks{" "}
                </h2>
                <p className="text-base leading-6 font-normal text-gray-600">
                  Our focus on providing a user-friendly portfolio tracking
                  system ensures that you can easily keep track of your
                  investments, with just a few clicks and without any hassle.
                </p>
              </div>
              <ul className="grid gap-8">
                <li className="flex items-center gap-4">
                  <div className="relative"></div>
                  <div className="text-sm leading-6 font-medium text-gray-500">
                    <span className="text-gray-900"> User friendly UI : </span>
                    Experience the convenience and ease of our platform's
                    user-friendly design
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="relative"></div>
                  <div className="text-sm leading-6 font-medium text-gray-500">
                    <span className="text-gray-900">Easy login : </span>
                    Get the most out of platform by leveraging our easy login
                    capabilities
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="relative"></div>
                  <div className="text-sm leading-6 font-medium text-gray-500">
                    <span className="text-gray-900">Live market :</span>
                    Stay ahead of the game with our platform's real-time market
                    data and analysis
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
