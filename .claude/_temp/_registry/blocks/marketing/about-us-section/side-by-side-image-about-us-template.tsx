export default function SideBySideImageAboutUsTemplate() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start gap-7 inline-flex">
          <div className="w-full justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-start lg:gap-8 gap-6 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h5 className="text-orange-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                  Discover Our Vision
                </h5>
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  We Make Life Easier With Smart, Effective Solutions
                </h2>
              </div>
              <img
                className="w-full h-auto rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1724138640.png"
                alt="About Us image"
              />
            </div>
            <div className="w-full flex-col justify-start items-start lg:gap-11 gap-6 inline-flex">
              <img
                className="w-full h-auto rounded-3xl object-cover"
                src="https://pagedone.io/asset/uploads/1724138653.png"
                alt="About Us image"
              />
              <div className="w-full justify-end items-center gap-5 grid sm:grid-cols-3 grid-cols-1">
                <div className="w-full h-full p-3 bg-gray-100 rounded-2xl flex-col justify-start items-center gap-0.5 inline-flex">
                  <h3 className="text-center text-orange-500 text-3xl font-bold font-manrope leading-normal">
                    94%
                  </h3>
                  <h6 className="text-center text-orange-500 text-base font-normal leading-relaxed">
                    Happy Clients
                  </h6>
                </div>
                <div className="w-full h-full p-3 bg-gray-100 rounded-2xl flex-col justify-start items-center gap-0.5 inline-flex">
                  <h3 className="text-center text-orange-500 text-3xl font-bold font-manrope leading-normal">
                    20
                  </h3>
                  <h6 className="text-center text-orange-500 text-base font-normal leading-relaxed">
                    Year of Experience
                  </h6>
                </div>
                <div className="w-full h-full p-3 bg-gray-100 rounded-2xl flex-col justify-start items-center gap-0.5 inline-flex">
                  <h3 className="text-center text-orange-500 text-3xl font-bold font-manrope leading-normal">
                    10k+
                  </h3>
                  <h6 className="text-center text-orange-500 text-base font-normal leading-relaxed">
                    Completed Project
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-base font-normal leading-relaxed">
            Our smart and effective solutions simplify everyday life for our
            customers, offering convenience and efficiency in every interaction.
            We are dedicated to delivering innovations that make a real
            difference, enhancing the overall customer experience and
            satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}
