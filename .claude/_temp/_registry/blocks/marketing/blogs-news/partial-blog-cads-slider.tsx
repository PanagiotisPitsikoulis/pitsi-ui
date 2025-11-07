export default function PartialBlogCadsSlider() {
  return (
    <div className="py-24  overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 ">
        <div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-5 justify-between mb-12">
          <div className="block">
            <h2 className="font-manrope font-bold text-4xl leading-snug text-white mb-3 lg:text-start text-center">
              Browse our newest blog content and articles.
            </h2>
            <p className="text-lg font-normal leading-8 text-gray-300 lg:text-start text-center">
              Explore our latest blog and article for fresh insights and
              updates. Stay informed with our newest content to keep up with the
              latest trends and information.
            </p>
          </div>
          <button className="bg-white py-2.5 pr-5 pl-7 rounded-xl flex items-center gap-2 text-base font-semibold whitespace-nowrap transition-all duration-500 hover:shadow-lg hover:shadow-white/20">
            View All Blogs
            {/* SVG removed */}
          </button>
        </div>
        <div className="swiper-container swiper--top">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 w-full max-w-xl transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664067.png"
                        alt="avatar image"
                        className="rounded-full object-cover"
                      />
                      <p className="text-lg font-normal text-gray-400">
                        Noah Williams
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* SVG removed */}
                      <p className="text-lg font-normal text-gray-400">
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-400 mb-4">
                    June 12, 2024
                  </span>
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-white mb-2">
                    Benefits and Challenges of Sustainable Living: Making
                    Eco-Friendly Choices
                  </h5>
                  <p className="text-lg font-normal text-gray-400 mb-8">
                    Discusses the advantages and obstacles of adopting a
                    sustainable lifestyle, including practical tips for...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-3.5"
                  >
                    Learn More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 w-full max-w-xl transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664088.png"
                        alt="avatar image"
                        className="rounded-full object-cover"
                      />
                      <p className="text-lg font-normal text-gray-400">
                        Olivia Brown
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* SVG removed */}
                      <p className="text-lg font-normal text-gray-400">
                        7 minutes ago
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-400 mb-4">
                    June 29, 2024
                  </span>
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-white mb-2">
                    Mental Health in the Workplace: Strategies for Supporting
                    Well-Being
                  </h5>
                  <p className="text-lg font-normal text-gray-400 mb-8">
                    Examines the importance of mental health in the workplace
                    and offers strategies for employers and...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-3.5"
                  >
                    Learn More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 w-full max-w-xl transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664122.png"
                        alt="avatar image"
                        className="rounded-full object-cover"
                      />
                      <p className="text-lg font-normal text-gray-400">
                        Mia Martinez
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* SVG removed */}
                      <p className="text-lg font-normal text-gray-400">
                        25 minutes ago
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-400 mb-4">
                    July 16, 2024
                  </span>
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-white mb-2">
                    Navigating the World of Cryptocurrency: Opportunities and
                    Risks in Digital Finance
                  </h5>
                  <p className="text-lg font-normal text-gray-400 mb-8">
                    Provides an overview of cryptocurrency, including its
                    opportunities for investment and the risks involved in...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-3.5"
                  >
                    Learn More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 w-full max-w-xl transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664067.png"
                        alt="avatar image"
                        className="rounded-full object-cover"
                      />
                      <p className="text-lg font-normal text-gray-400">
                        Noah Williams
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* SVG removed */}
                      <p className="text-lg font-normal text-gray-400">
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-400 mb-4">
                    June 12, 2024
                  </span>
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-white mb-2">
                    Benefits and Challenges of Sustainable Living: Making
                    Eco-Friendly Choices
                  </h5>
                  <p className="text-lg font-normal text-gray-400 mb-8">
                    Discusses the advantages and obstacles of adopting a
                    sustainable lifestyle, including practical tips for...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-3.5"
                  >
                    Learn More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 w-full max-w-xl transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664088.png"
                        alt="avatar image"
                        className="rounded-full object-cover"
                      />
                      <p className="text-lg font-normal text-gray-400">
                        Olivia Brown
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* SVG removed */}
                      <p className="text-lg font-normal text-gray-400">
                        7 minutes ago
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-400 mb-4">
                    June 29, 2024
                  </span>
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-white mb-2">
                    Mental Health in the Workplace: Strategies for Supporting
                    Well-Being
                  </h5>
                  <p className="text-lg font-normal text-gray-400 mb-8">
                    Examines the importance of mental health in the workplace
                    and offers strategies for employers and...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-3.5"
                  >
                    Learn More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 w-full max-w-xl transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664122.png"
                        alt="avatar image"
                        className="rounded-full object-cover"
                      />
                      <p className="text-lg font-normal text-gray-400">
                        Mia Martinez
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* SVG removed */}
                      <p className="text-lg font-normal text-gray-400">
                        25 minutes ago
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-400 mb-4">
                    July 16, 2024
                  </span>
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-white mb-2">
                    Navigating the World of Cryptocurrency: Opportunities and
                    Risks in Digital Finance
                  </h5>
                  <p className="text-lg font-normal text-gray-400 mb-8">
                    Provides an overview of cryptocurrency, including its
                    opportunities for investment and the risks involved in...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-3.5"
                  >
                    Learn More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 w-full max-w-xl transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664067.png"
                        alt="avatar image"
                        className="rounded-full object-cover"
                      />
                      <p className="text-lg font-normal text-gray-400">
                        Noah Williams
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* SVG removed */}
                      <p className="text-lg font-normal text-gray-400">
                        13 minutes ago
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-400 mb-4">
                    June 12, 2024
                  </span>
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-white mb-2">
                    Benefits and Challenges of Sustainable Living: Making
                    Eco-Friendly Choices
                  </h5>
                  <p className="text-lg font-normal text-gray-400 mb-8">
                    Discusses the advantages and obstacles of adopting a
                    sustainable lifestyle, including practical tips for...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-3.5"
                  >
                    Learn More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 w-full max-w-xl transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664088.png"
                        alt="avatar image"
                        className="rounded-full object-cover"
                      />
                      <p className="text-lg font-normal text-gray-400">
                        Olivia Brown
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* SVG removed */}
                      <p className="text-lg font-normal text-gray-400">
                        7 minutes ago
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-400 mb-4">
                    June 29, 2024
                  </span>
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-white mb-2">
                    Mental Health in the Workplace: Strategies for Supporting
                    Well-Being
                  </h5>
                  <p className="text-lg font-normal text-gray-400 mb-8">
                    Examines the importance of mental health in the workplace
                    and offers strategies for employers and...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-3.5"
                  >
                    Learn More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 w-full max-w-xl transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1722664122.png"
                        alt="avatar image"
                        className="rounded-full object-cover"
                      />
                      <p className="text-lg font-normal text-gray-400">
                        Mia Martinez
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* SVG removed */}
                      <p className="text-lg font-normal text-gray-400">
                        25 minutes ago
                      </p>
                    </div>
                  </div>
                  <span className="text-base font-medium text-gray-400 mb-4">
                    July 16, 2024
                  </span>
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-white mb-2">
                    Navigating the World of Cryptocurrency: Opportunities and
                    Risks in Digital Finance
                  </h5>
                  <p className="text-lg font-normal text-gray-400 mb-8">
                    Provides an overview of cryptocurrency, including its
                    opportunities for investment and the risks involved in...
                  </p>
                  <a
                    href="javascript:;"
                    className="flex items-center gap-2 py-2.5 text-base font-semibold text-white transition-all duration-500 hover:gap-3.5"
                  >
                    Learn More
                    {/* SVG removed */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
