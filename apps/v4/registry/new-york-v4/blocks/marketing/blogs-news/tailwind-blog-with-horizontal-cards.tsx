export default function TailwindBlogWithHorizontalCards() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 inline-flex w-full flex-col items-center justify-start gap-3 lg:items-start">
          <h2 className="font-manrope text-center text-5xl leading-relaxed font-bold text-black lg:text-start">
            Our Blog
          </h2>
          <p className="text-center text-lg leading-7 font-normal text-gray-600 lg:text-start">
            A Gateway to Insightful Stories and Expertise, Unveiling a Tapestry
            of Ideas and Inspiration.
          </p>
        </div>
        <div className="mb-8 inline-flex w-full flex-col items-center justify-center gap-8 rounded-3xl bg-gray-900/50 bg-[url(https://pagedone.io/asset/uploads/1710842741.png)] bg-cover bg-no-repeat object-cover p-16 bg-blend-multiply md:p-20 lg:p-28">
          <div className="flex flex-col items-center justify-start gap-6">
            <h3 className="font-manrope text-center text-5xl leading-snug font-bold text-white lg:max-w-4xl">
              Vishal Mega Mart planning a $1 billion IPO: Report
            </h3>
            <div className="inline-flex items-center justify-start gap-4">
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1710839327.png"
                alt="Harsh Monic image"
              />
              <div className="inline-flex flex-col items-start justify-center gap-1">
                <h4 className="text-base leading-relaxed font-semibold text-white">
                  Harsh Monic
                </h4>
                <div className="inline-flex items-center justify-center gap-2.5">
                  <h5 className="text-right text-sm leading-snug font-normal text-white">
                    Mar 12, 2024
                  </h5>
                  <div className="flex items-center justify-start gap-1">
                    {/* SVG removed */}
                    <h5 className="text-sm leading-snug font-normal text-white">
                      5 min
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="mx-auto inline-flex items-center justify-center gap-2">
            <span className="text-lg leading-7 font-semibold text-white">
              Read More
            </span>
            {/* SVG removed */}
          </a>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex items-center justify-start gap-5 rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-700 ease-in-out hover:border-indigo-600">
            <img
              className="mx-auto rounded-xl object-cover sm:mx-0"
              src="https://pagedone.io/asset/uploads/1711017585.png"
              alt="Bigger Results image"
            />
            <div className="inline-flex flex-col items-start justify-start gap-4">
              <div className="inline-flex items-start justify-start gap-2.5">
                <h5 className="text-sm leading-snug font-normal text-gray-600">
                  Mar 12, 2024
                </h5>
                <div className="flex items-center justify-start gap-1">
                  {/* SVG removed */}
                  <h5 className="text-sm leading-snug font-normal text-gray-600">
                    5 min
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="text-xl leading-normal font-medium text-gray-900">
                  Powerful Ads, Bigger Results: Elevate Your Brand in a Single
                  Line!
                </h3>
                <div className="inline-flex items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 object-cover"
                    src="	https://pagedone.io/asset/uploads/1710839327.png"
                    alt="John Smith image"
                  />
                  <h5 className="text-sm leading-snug font-normal text-gray-600">
                    John Smith
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5 rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-700 ease-in-out hover:border-indigo-600">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1711017614.png"
              alt="Bite-sized Bytes image"
            />
            <div className="inline-flex flex-col items-start justify-start gap-4">
              <div className="inline-flex items-start justify-start gap-2.5">
                <h5 className="text-sm leading-snug font-normal text-gray-600">
                  Feb 18, 2024
                </h5>
                <div className="flex items-center justify-start gap-1">
                  {/* SVG removed */}
                  <h5 className="text-sm leading-snug font-normal text-gray-600">
                    10 min
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="text-xl leading-normal font-medium text-gray-900">
                  Bite-sized Bytes: Your Daily Dose of Tech Trends in a Quick
                  Read!
                </h3>
                <div className="inline-flex items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 object-cover"
                    src="	https://pagedone.io/asset/uploads/1710839327.png"
                    alt="Anuj Mishra image"
                  />
                  <h5 className="text-sm leading-snug font-normal text-gray-600">
                    Anuj Mishra
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5 rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-700 ease-in-out hover:border-indigo-600">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1711017636.png"
              alt="Snapshots image"
            />
            <div className="inline-flex flex-col items-start justify-start gap-4">
              <div className="inline-flex items-start justify-start gap-2.5">
                <h5 className="text-sm leading-snug font-normal text-gray-600">
                  Mar 12, 2024
                </h5>
                <div className="flex items-center justify-start gap-1">
                  {/* SVG removed */}
                  <h5 className="text-sm leading-snug font-normal text-gray-600">
                    16 min
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="text-xl leading-normal font-medium text-gray-900">
                  Snapshots: Uncover Event Magic in a Flash!
                </h3>
                <div className="inline-flex items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 object-cover"
                    src="	https://pagedone.io/asset/uploads/1710839327.png"
                    alt="Priya Patel"
                  />
                  <h5 className="text-sm leading-snug font-normal text-gray-600">
                    Priya Patel
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5 rounded-2xl border border-gray-300 bg-white p-6 transition-all duration-700 ease-in-out hover:border-indigo-600">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1711017646.png"
              alt="Biz Bites image"
            />
            <div className="inline-flex flex-col items-start justify-start gap-4">
              <div className="inline-flex items-start justify-start gap-2.5">
                <h5 className="text-sm leading-snug font-normal text-gray-600">
                  Feb 8, 2024
                </h5>
                <div className="flex items-center justify-start gap-1">
                  {/* SVG removed */}
                  <h5 className="text-sm leading-snug font-normal text-gray-600">
                    2 min
                  </h5>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2">
                <h3 className="text-xl leading-normal font-medium text-gray-900">
                  Biz Bites: Tiny Tips for Big Business Wins!
                </h3>
                <div className="inline-flex items-center justify-start gap-2">
                  <img
                    className="h-6 w-6 object-cover"
                    src="	https://pagedone.io/asset/uploads/1710839327.png"
                    alt="Anant Doe image"
                  />
                  <h5 className="text-sm leading-snug font-normal text-gray-600">
                    Anant Doe
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
