export default function PartialBlogCadsSlider() {
  return (
    <div className="overflow-hidden py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-5 lg:flex-row lg:gap-8">
          <div className="block">
            <h2 className="font-manrope mb-3 text-center text-4xl leading-snug font-bold text-white lg:text-start">
              Browse our newest blog content and articles.
            </h2>
            <p className="text-center text-lg leading-8 font-normal text-gray-300 lg:text-start">
              Explore our latest blog and article for fresh insights and
              updates. Stay informed with our newest content to keep up with the
              latest trends and information.
            </p>
          </div>
          <button className="flex items-center gap-2 rounded-xl bg-white py-2.5 pr-5 pl-7 text-base font-semibold whitespace-nowrap transition-all duration-500 hover:shadow-lg hover:shadow-white/20">
            View All Blogs
            {/* SVG removed */}
          </button>
        </div>
        <div className="swiper-container swiper--top">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                  <span className="mb-4 text-base font-medium text-gray-400">
                    June 12, 2024
                  </span>
                  <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-white">
                    Benefits and Challenges of Sustainable Living: Making
                    Eco-Friendly Choices
                  </h5>
                  <p className="mb-8 text-lg font-normal text-gray-400">
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
              <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                  <span className="mb-4 text-base font-medium text-gray-400">
                    June 29, 2024
                  </span>
                  <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-white">
                    Mental Health in the Workplace: Strategies for Supporting
                    Well-Being
                  </h5>
                  <p className="mb-8 text-lg font-normal text-gray-400">
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
              <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                  <span className="mb-4 text-base font-medium text-gray-400">
                    July 16, 2024
                  </span>
                  <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-white">
                    Navigating the World of Cryptocurrency: Opportunities and
                    Risks in Digital Finance
                  </h5>
                  <p className="mb-8 text-lg font-normal text-gray-400">
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
              <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                  <span className="mb-4 text-base font-medium text-gray-400">
                    June 12, 2024
                  </span>
                  <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-white">
                    Benefits and Challenges of Sustainable Living: Making
                    Eco-Friendly Choices
                  </h5>
                  <p className="mb-8 text-lg font-normal text-gray-400">
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
              <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                  <span className="mb-4 text-base font-medium text-gray-400">
                    June 29, 2024
                  </span>
                  <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-white">
                    Mental Health in the Workplace: Strategies for Supporting
                    Well-Being
                  </h5>
                  <p className="mb-8 text-lg font-normal text-gray-400">
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
              <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                  <span className="mb-4 text-base font-medium text-gray-400">
                    July 16, 2024
                  </span>
                  <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-white">
                    Navigating the World of Cryptocurrency: Opportunities and
                    Risks in Digital Finance
                  </h5>
                  <p className="mb-8 text-lg font-normal text-gray-400">
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
              <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                  <span className="mb-4 text-base font-medium text-gray-400">
                    June 12, 2024
                  </span>
                  <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-white">
                    Benefits and Challenges of Sustainable Living: Making
                    Eco-Friendly Choices
                  </h5>
                  <p className="mb-8 text-lg font-normal text-gray-400">
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
              <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                  <span className="mb-4 text-base font-medium text-gray-400">
                    June 29, 2024
                  </span>
                  <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-white">
                    Mental Health in the Workplace: Strategies for Supporting
                    Well-Being
                  </h5>
                  <p className="mb-8 text-lg font-normal text-gray-400">
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
              <div className="w-full max-w-xl rounded-2xl bg-gradient-to-br from-gray-600 via-gray-600 to-white p-0.5 transition-all duration-700">
                <div className="rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 p-6">
                  <div className="mb-6 flex items-center justify-between">
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
                  <span className="mb-4 text-base font-medium text-gray-400">
                    July 16, 2024
                  </span>
                  <h5 className="font-manrope mb-2 text-2xl leading-9 font-bold text-white">
                    Navigating the World of Cryptocurrency: Opportunities and
                    Risks in Digital Finance
                  </h5>
                  <p className="mb-8 text-lg font-normal text-gray-400">
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
  )
}
