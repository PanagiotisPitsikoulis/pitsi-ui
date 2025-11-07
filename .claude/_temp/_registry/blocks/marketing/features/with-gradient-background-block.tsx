export default function WithGradientBackgroundBlock() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse justify-center items-center gap-20 lg:flex-row lg:justify-between ">
          <div className="w-full lg:w-3/5 bg-gradient-to-l from-[#7A5AF8] to-[#A78BFA] flex items-center justify-center rounded-3xl p-4 lg:p-10 max-lg:max-w-2xl max-lg:mx-auto">
            <img
              src="https://pagedone.io/asset/uploads/1695031049.png"
              alt="Dashboard image"
              className="w-full rounded-3xl object-cover"
            />
          </div>
          <div className="w-full lg:w-2/5">
            <div className="max-w-2xl max-lg:mx-auto lg:max-w-lg">
              <div className="mb-11">
                <span className="text-base text-left text-indigo-600 font-medium mb-2 block">
                  OUR FEATURES
                </span>
                <h2 className="text-4xl text-left font-bold text-gray-900 leading-[3.25rem] mb-5">
                  Track your portfolio in a few clicks{" "}
                </h2>
                <p className="text-base text-gray-600 font-normal leading-6">
                  Our focus on providing a user-friendly portfolio tracking
                  system ensures that you can easily keep track of your
                  investments, with just a few clicks and without any hassle.
                </p>
              </div>
              <ul className="grid gap-8">
                <li className="gap-4 flex items-center">
                  <div className="relative"></div>
                  <div className=" text-sm font-medium text-gray-500 leading-6">
                    <span className="text-gray-900"> User friendly UI : </span>
                    Experience the convenience and ease of our platform's
                    user-friendly design
                  </div>
                </li>
                <li className="gap-4 flex items-center">
                  <div className="relative"></div>
                  <div className=" text-sm font-medium text-gray-500 leading-6">
                    <span className="text-gray-900">Easy login : </span>
                    Get the most out of platform by leveraging our easy login
                    capabilities
                  </div>
                </li>
                <li className="gap-4 flex items-center">
                  <div className="relative"></div>
                  <div className=" text-sm font-medium text-gray-500 leading-6">
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
  );
}
