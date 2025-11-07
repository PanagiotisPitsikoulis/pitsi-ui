export default function AboutUsWithFeatureListsAndGraphs() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <div className="px-2.5 py-0.5 bg-blue-50 rounded-full border border-blue-400 justify-center items-center gap-1.5 inline-flex">
              <span className="text-center text-blue-600 text-xs font-medium leading-normal">
                About Us
              </span>
            </div>
            <div className="w-full flex-col justify-start items-center gap-2 flex">
              <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                Driving Business Success
              </h2>
              <p className="lg:max-w-4xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
                Our mission is to drive business success by providing innovative
                solutions and strategic guidance. We focus on helping your
                business achieve sustainable growth and stay competitive in a
                dynamic market.
              </p>
            </div>
          </div>
          <div className="w-full justify-start items-center lg:gap-9 gap-8 flex lg:flex-row flex-col">
            <img
              className="w-auto mx-auto h-auto rounded-2xl object-cover"
              src="https://pagedone.io/asset/uploads/1724147841.png"
              alt="About Us image"
            />
            <div className="flex-col justify-start items-start lg:gap-10 gap-7 inline-flex">
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-end items-start gap-3 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                    Empowering Your Business for Growth
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    Our approach is designed to empower your business with the
                    tools, strategies, and insights needed to achieve
                    sustainable growth. We focus on delivering customized
                    solutions that align with your goals, helping you navigate
                    challenges and seize opportunities.
                  </p>
                </div>
                <div className="pl-4 flex-col justify-start items-start gap-3 flex">
                  <div className="justify-start items-start gap-2.5 inline-flex">
                    <div className="pt-0.5 justify-start items-center gap-2.5 flex">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-gray-800 text-base font-medium leading-relaxed">
                      Tailored Strategies :
                      <span className="text-gray-500 font-normal">
                        We develop customized business strategies that cater
                        specifically to your unique needs and objectives.
                      </span>
                    </h6>
                  </div>
                  <div className="justify-start items-start gap-2.5 inline-flex">
                    <div className="pt-0.5 justify-start items-center gap-2.5 flex">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-gray-800 text-base font-medium leading-relaxed">
                      Market Insights :
                      <span className="text-gray-500 font-normal">
                        Leverage our deep understanding of market trends to stay
                        ahead of the competition and make informed decisions.
                      </span>
                    </h6>
                  </div>
                  <div className="justify-start items-start gap-2.5 inline-flex">
                    <div className="pt-0.5 justify-start items-center gap-2.5 flex">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-gray-800 text-base font-medium leading-relaxed">
                      Innovative Solutions :
                      <span className="text-gray-500 font-normal">
                        Implement cutting-edge solutions that drive efficiency,
                        productivity, and profitability.
                      </span>
                    </h6>
                  </div>
                  <div className="justify-start items-start gap-2.5 inline-flex">
                    <div className="pt-0.5 justify-start items-center gap-2.5 flex">
                      {/* SVG removed */}
                    </div>
                    <h6 className="text-gray-800 text-base font-medium leading-relaxed">
                      Sustainable Growth :
                      <span className="text-gray-500 font-normal">
                        Our goal is to facilitate long-term growth by building a
                        strong foundation for your business's future success.
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <button className="sm:w-fit w-full px-5 py-2.5 bg-blue-600 hover:bg-blue-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                  Get Started
                </span>
                {/* SVG removed */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
