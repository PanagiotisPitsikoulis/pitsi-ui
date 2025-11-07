export default function AboutUsWithFeatureListsAndGraphs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <div className="inline-flex items-center justify-center gap-1.5 rounded-full border border-blue-400 bg-blue-50 px-2.5 py-0.5">
              <span className="text-center text-xs leading-normal font-medium text-blue-600">
                About Us
              </span>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-2">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
                Driving Business Success
              </h2>
              <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
                Our mission is to drive business success by providing innovative
                solutions and strategic guidance. We focus on helping your
                business achieve sustainable growth and stay competitive in a
                dynamic market.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8 lg:flex-row lg:gap-9">
            <img
              className="mx-auto h-auto w-auto rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1724147841.png"
              alt="About Us image"
            />
            <div className="inline-flex flex-col items-start justify-start gap-7 lg:gap-10">
              <div className="flex flex-col items-start justify-start gap-5">
                <div className="flex flex-col items-start justify-end gap-3">
                  <h2 className="font-manrope text-4xl leading-normal font-bold text-gray-900">
                    Empowering Your Business for Growth
                  </h2>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    Our approach is designed to empower your business with the
                    tools, strategies, and insights needed to achieve
                    sustainable growth. We focus on delivering customized
                    solutions that align with your goals, helping you navigate
                    challenges and seize opportunities.
                  </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-3 pl-4">
                  <div className="inline-flex items-start justify-start gap-2.5">
                    <div className="flex items-center justify-start gap-2.5 pt-0.5">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-base leading-relaxed font-medium text-gray-800">
                      Tailored Strategies :
                      <span className="font-normal text-gray-500">
                        We develop customized business strategies that cater
                        specifically to your unique needs and objectives.
                      </span>
                    </h6>
                  </div>
                  <div className="inline-flex items-start justify-start gap-2.5">
                    <div className="flex items-center justify-start gap-2.5 pt-0.5">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-base leading-relaxed font-medium text-gray-800">
                      Market Insights :
                      <span className="font-normal text-gray-500">
                        Leverage our deep understanding of market trends to stay
                        ahead of the competition and make informed decisions.
                      </span>
                    </h6>
                  </div>
                  <div className="inline-flex items-start justify-start gap-2.5">
                    <div className="flex items-center justify-start gap-2.5 pt-0.5">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-base leading-relaxed font-medium text-gray-800">
                      Innovative Solutions :
                      <span className="font-normal text-gray-500">
                        Implement cutting-edge solutions that drive efficiency,
                        productivity, and profitability.
                      </span>
                    </h6>
                  </div>
                  <div className="inline-flex items-start justify-start gap-2.5">
                    <div className="flex items-center justify-start gap-2.5 pt-0.5">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-base leading-relaxed font-medium text-gray-800">
                      Sustainable Growth :
                      <span className="font-normal text-gray-500">
                        Our goal is to facilitate long-term growth by building a
                        strong foundation for your business's future success.
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <button className="flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-blue-700 sm:w-fit">
                <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                  Get Started
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
