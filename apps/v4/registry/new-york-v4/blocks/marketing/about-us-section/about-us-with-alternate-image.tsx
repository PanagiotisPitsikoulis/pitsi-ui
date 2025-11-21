export default function AboutUsWithAlternateImage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              About Us
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500">
              As a Web Development Services We are Committed to Building Custom{" "}
              <br />
              Web Solutions that Drive Business Success.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-9">
            <div className="grid w-full grid-cols-1 items-center justify-start rounded-3xl lg:grid-cols-2">
              <img
                className="h-auto w-full rounded-tl-3xl rounded-tr-3xl object-cover lg:h-full lg:rounded-l-3xl lg:rounded-tr-none"
                src="https://pagedone.io/asset/uploads/1717760914.png"
                alt="about Us image"
              />
              <div className="inline-flex h-full flex-col items-start justify-center gap-5 rounded-b-3xl bg-gray-100 py-8 pr-8 pl-10 lg:rounded-r-3xl lg:rounded-b-none">
                <div className="flex flex-col items-start justify-center gap-5">
                  <div className="flex flex-col items-start justify-center gap-2.5">
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      OUR MISSION
                    </h6>
                    <h4 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      Empowering Financial Independence
                    </h4>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    At Financial Freedom Advisors, our mission is clear: to
                    empower individuals and families to achieve financial
                    independence. We are dedicated to providing personalized
                    guidance and comprehensive solutions that align with our
                    clients' unique goals and aspirations. Our focus is on
                    helping you build a solid foundation for your financial
                    future, enabling you to pursue your dreams with confidence.
                  </p>
                </div>
                <a className="flex items-center justify-center rounded-full py-2.5 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out hover:text-indigo-800">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="flex w-full grid-cols-1 flex-col-reverse items-center justify-start lg:grid lg:grid-cols-2 lg:flex-col">
              <div className="inline-flex h-full flex-col items-start justify-center gap-5 rounded-br-3xl rounded-bl-3xl bg-gray-100 py-8 pr-10 pl-8 lg:rounded-l-3xl lg:rounded-tr-none lg:rounded-br-none">
                <div className="flex flex-col items-start justify-center gap-5">
                  <div className="flex flex-col items-start justify-center gap-2.5">
                    <h6 className="text-base leading-relaxed font-normal text-gray-500">
                      OUR VALUES
                    </h6>
                    <h4 className="font-manrope text-2xl leading-9 font-bold text-gray-900">
                      Guiding Principles
                    </h4>
                  </div>
                  <p className="text-base leading-relaxed font-normal text-gray-500">
                    Our values serve as the guiding principles that underpin
                    everything we do at Financial Freedom Advisors:
                  </p>
                  <ul className="flex list-disc flex-col items-start justify-center gap-2.5 pl-6">
                    <li>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Integrity:
                        <span className="font-normal">
                          {" "}
                          We uphold the highest standards of honesty,
                          transparency, and ethical conduct in all our
                          interactions.
                        </span>
                      </h6>
                    </li>
                    <li>
                      <h6 className="text-base leading-relaxed font-medium text-gray-900">
                        Client-Centric Approach:
                        <span className="font-normal">
                          Our clients' needs and goals are at the forefront of
                          everything we do. We are committed to delivering
                          tailored solutions that prioritize their best
                          interests.
                        </span>
                      </h6>
                    </li>
                  </ul>
                </div>
                <a className="flex items-center justify-center rounded-full py-2.5 text-base leading-relaxed font-semibold text-indigo-600 transition-all duration-700 ease-in-out hover:text-indigo-800">
                  READ MORE
                </a>
              </div>
              <img
                className="h-auto w-full rounded-t-3xl object-cover lg:h-full lg:rounded-t-none lg:rounded-tr-3xl lg:rounded-br-3xl"
                src="https://pagedone.io/asset/uploads/1717760927.png"
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
