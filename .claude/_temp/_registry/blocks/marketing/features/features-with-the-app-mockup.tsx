export default function FeaturesWithTheAppMockup() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-5 flex">
            <h2 className="text-center text-black text-3xl font-semibold font-manrope leading-normal">
              One Platform, Countless Benefits Save Time
            </h2>
            <p className="lg:max-w-3xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              we eliminate the need to juggle multiple applications, saving you
              valuable time and reducing complexity. Whether you're managing
              projects
            </p>
          </div>
          <div className="w-full justify-start items-center xl:gap-16 lg:gap-10 gap-8 flex lg:flex-row flex-col-reverse">
            <div className="w-full flex-col justify-center items-start lg:gap-8 gap-6 grid md:grid-cols-2 grid-cols-1">
              <div className="w-full h-full group flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[60px] h-[60px] px-[15px] pt-[14.56px] pb-[15.44px] bg-cyan-50 group-hover:bg-cyan-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center inline-flex">
                  <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Easy Payment
                  </h5>
                  <p className="text-gray-400 text-sm font-normal leading-normal">
                    Easy Payment solution, designed to streamline transactions
                    and enhance convenience. Whether you're a business owner.
                  </p>
                </div>
              </div>
              <div className="w-full h-full group flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[60px] h-[60px] px-[15px] pt-[14.56px] pb-[15.44px] bg-cyan-50 group-hover:bg-cyan-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center inline-flex">
                  <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Safe Transaction
                  </h5>
                  <p className="text-gray-400 text-sm font-normal leading-normal">
                    Our robust security measures protect your sensitive
                    information and prevent unauthorized access.
                  </p>
                </div>
              </div>
              <div className="w-full h-full group flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[60px] h-[60px] px-[15px] pt-[14.56px] pb-[15.44px] bg-cyan-50 group-hover:bg-cyan-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center inline-flex">
                  <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Fast Customer Service{" "}
                  </h5>
                  <p className="text-gray-400 text-sm font-normal leading-normal">
                    Our team is committed to resolving your inquiries promptly,
                    ensuring minimal wait times and maximum satisfaction.
                  </p>
                </div>
              </div>
              <div className="w-full h-full group flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[60px] h-[60px] px-[15px] pt-[14.56px] pb-[15.44px] bg-cyan-50 group-hover:bg-cyan-100 transition-all duration-700 ease-in-out rounded-lg justify-center items-center inline-flex">
                  <div className="w-[30px] h-[30px] relative flex-col justify-start items-start flex">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 flex">
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Quick Transaction
                  </h5>
                  <p className="text-gray-400 text-sm font-normal leading-normal">
                    Whether you’re sending or receiving funds, our intuitive
                    system processes payments in real-time, minimizing delays.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://pagedone.io/asset/uploads/1720517354.png"
              alt="Feature Mobile Mockup image"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
