export default function TailwindBlogWithHorizontalCards() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-center lg:items-start gap-3 inline-flex mb-14">
          <h2 className="text-black text-5xl font-bold font-manrope leading-relaxed lg:text-start text-center">
            Our Blog
          </h2>
          <p className="text-gray-600 text-lg font-normal leading-7 lg:text-start text-center">
            A Gateway to Insightful Stories and Expertise, Unveiling a Tapestry
            of Ideas and Inspiration.
          </p>
        </div>
        <div className="w-full lg:p-28 md:p-20 p-16 bg-gray-900/50 bg-blend-multiply rounded-3xl flex-col justify-center items-center gap-8 inline-flex mb-8 bg-cover bg-no-repeat bg-[url(https://pagedone.io/asset/uploads/1710842741.png)] object-cover">
          <div className="flex-col justify-start items-center gap-6 flex">
            <h3 className="lg:max-w-4xl text-center text-white text-5xl font-bold font-manrope leading-snug">
              Vishal Mega Mart planning a $1 billion IPO: Report
            </h3>
            <div className="justify-start items-center gap-4 inline-flex">
              <img
                className="object-cover"
                src="https://pagedone.io/asset/uploads/1710839327.png"
                alt="Harsh Monic image"
              />
              <div className="flex-col justify-center items-start gap-1 inline-flex">
                <h4 className="text-white text-base font-semibold leading-relaxed">
                  Harsh Monic
                </h4>
                <div className="justify-center items-center gap-2.5 inline-flex">
                  <h5 className="text-right text-white text-sm font-normal leading-snug">
                    Mar 12, 2024
                  </h5>
                  <div className="justify-start items-center gap-1 flex">
                    {/* SVG removed */}
                    <h5 className="text-white text-sm font-normal leading-snug">
                      5 min
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className=" justify-center items-center gap-2 inline-flex mx-auto">
            <span className="text-white text-lg font-semibold leading-7">
              Read More
            </span>
            {/* SVG removed */}
          </a>
        </div>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-8 ">
          <div className="p-6 bg-white rounded-2xl border border-gray-300 justify-start items-center gap-5 flex hover:border-indigo-600 transition-all duration-700 ease-in-out">
            <img
              className="rounded-xl sm:mx-0 mx-auto object-cover"
              src="https://pagedone.io/asset/uploads/1711017585.png"
              alt="Bigger Results image"
            />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <h5 className="text-gray-600 text-sm font-normal leading-snug">
                  Mar 12, 2024
                </h5>
                <div className="justify-start items-center gap-1 flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-600 text-sm font-normal leading-snug">
                    5 min
                  </h5>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <h3 className="text-gray-900 text-xl font-medium leading-normal">
                  Powerful Ads, Bigger Results: Elevate Your Brand in a Single
                  Line!
                </h3>
                <div className="justify-start items-center gap-2 inline-flex">
                  <img
                    className="w-6 h-6 object-cover"
                    src="	https://pagedone.io/asset/uploads/1710839327.png"
                    alt="John Smith image"
                  />
                  <h5 className="text-gray-600 text-sm font-normal leading-snug">
                    John Smith
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-300 justify-start items-center gap-5 flex hover:border-indigo-600 transition-all duration-700 ease-in-out">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1711017614.png"
              alt="Bite-sized Bytes image"
            />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <h5 className="text-gray-600 text-sm font-normal leading-snug">
                  Feb 18, 2024
                </h5>
                <div className="justify-start items-center gap-1 flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-600 text-sm font-normal leading-snug">
                    10 min
                  </h5>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <h3 className="text-gray-900 text-xl font-medium leading-normal">
                  Bite-sized Bytes: Your Daily Dose of Tech Trends in a Quick
                  Read!
                </h3>
                <div className="justify-start items-center gap-2 inline-flex">
                  <img
                    className="w-6 h-6 object-cover"
                    src="	https://pagedone.io/asset/uploads/1710839327.png"
                    alt="Anuj Mishra image"
                  />
                  <h5 className="text-gray-600 text-sm font-normal leading-snug">
                    Anuj Mishra
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-300 justify-start items-center gap-5 flex hover:border-indigo-600 transition-all duration-700 ease-in-out">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1711017636.png"
              alt="Snapshots image"
            />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <h5 className="text-gray-600 text-sm font-normal leading-snug">
                  Mar 12, 2024
                </h5>
                <div className="justify-start items-center gap-1 flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-600 text-sm font-normal leading-snug">
                    16 min
                  </h5>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <h3 className="text-gray-900 text-xl font-medium leading-normal">
                  Snapshots: Uncover Event Magic in a Flash!
                </h3>
                <div className="justify-start items-center gap-2 inline-flex">
                  <img
                    className="w-6 h-6 object-cover"
                    src="	https://pagedone.io/asset/uploads/1710839327.png"
                    alt="Priya Patel"
                  />
                  <h5 className="text-gray-600 text-sm font-normal leading-snug">
                    Priya Patel
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-300 justify-start items-center gap-5 flex hover:border-indigo-600 transition-all duration-700 ease-in-out">
            <img
              className="rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1711017646.png"
              alt="Biz Bites image"
            />
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="justify-start items-start gap-2.5 inline-flex">
                <h5 className="text-gray-600 text-sm font-normal leading-snug">
                  Feb 8, 2024
                </h5>
                <div className="justify-start items-center gap-1 flex">
                  {/* SVG removed */}
                  <h5 className="text-gray-600 text-sm font-normal leading-snug">
                    2 min
                  </h5>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <h3 className="text-gray-900 text-xl font-medium leading-normal">
                  Biz Bites: Tiny Tips for Big Business Wins!
                </h3>
                <div className="justify-start items-center gap-2 inline-flex">
                  <img
                    className="w-6 h-6 object-cover"
                    src="	https://pagedone.io/asset/uploads/1710839327.png"
                    alt="Anant Doe image"
                  />
                  <h5 className="text-gray-600 text-sm font-normal leading-snug">
                    Anant Doe
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
