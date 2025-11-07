export default function AboutUsWithAlternateImage() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              About Us
            </h2>
            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
              As a Web Development Services We are Committed to Building Custom{" "}
              <br />
              Web Solutions that Drive Business Success.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-9 flex">
            <div className="w-full rounded-3xl justify-start items-center grid lg:grid-cols-2 grid-cols-1">
              <img
                className="w-full lg:h-full h-auto lg:rounded-l-3xl rounded-tl-3xl lg:rounded-tr-none rounded-tr-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1717760914.png"
                alt="about Us image"
              />
              <div className="h-full lg:rounded-r-3xl lg:rounded-b-none rounded-b-3xl pl-10 pr-8 py-8 bg-gray-100 flex-col justify-center items-start gap-5 inline-flex">
                <div className="flex-col justify-center items-start gap-5 flex">
                  <div className="flex-col justify-center items-start gap-2.5 flex">
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      OUR MISSION
                    </h6>
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      Empowering Financial Independence
                    </h4>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    At Financial Freedom Advisors, our mission is clear: to
                    empower individuals and families to achieve financial
                    independence. We are dedicated to providing personalized
                    guidance and comprehensive solutions that align with our
                    clients' unique goals and aspirations. Our focus is on
                    helping you build a solid foundation for your financial
                    future, enabling you to pursue your dreams with confidence.
                  </p>
                </div>
                <a className="py-2.5 rounded-full justify-center items-center flex hover:text-indigo-800 transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="w-full justify-start items-center lg:grid lg:grid-cols-2 grid-cols-1 flex lg:flex-col flex-col-reverse">
              <div className="h-full lg:rounded-l-3xl rounded-bl-3xl lg:rounded-tr-none lg:rounded-br-none rounded-br-3xl pl-8 pr-10 py-8 bg-gray-100 flex-col justify-center items-start gap-5 inline-flex">
                <div className="flex-col justify-center items-start gap-5 flex">
                  <div className="flex-col justify-center items-start gap-2.5 flex">
                    <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                      OUR VALUES
                    </h6>
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      Guiding Principles
                    </h4>
                  </div>
                  <p className="text-gray-500 text-base font-normal leading-relaxed">
                    Our values serve as the guiding principles that underpin
                    everything we do at Financial Freedom Advisors:
                  </p>
                  <ul className="list-disc pl-6 flex-col justify-center items-start gap-2.5 flex">
                    <li>
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
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
                      <h6 className="text-gray-900 text-base font-medium leading-relaxed">
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
                <a className="py-2.5 rounded-full justify-center items-center flex hover:text-indigo-800 transition-all duration-700 ease-in-out text-indigo-600 text-base font-semibold leading-relaxed">
                  READ MORE
                </a>
              </div>
              <img
                className="w-full lg:h-full h-auto lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-t-none rounded-t-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1717760927.png"
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
