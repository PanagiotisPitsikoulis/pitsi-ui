export default function FeaturesWithTheAppMockup() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8">
          <div className="flex w-full flex-col items-center justify-start gap-5">
            <h2 className="font-manrope text-center text-3xl leading-normal font-semibold text-black">
              One Platform, Countless Benefits Save Time
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-3xl">
              we eliminate the need to juggle multiple applications, saving you
              valuable time and reducing complexity. Whether you're managing
              projects
            </p>
          </div>
          <div className="flex w-full flex-col-reverse items-center justify-start gap-8 lg:flex-row lg:gap-10 xl:gap-16">
            <div className="grid w-full grid-cols-1 flex-col items-start justify-center gap-6 md:grid-cols-2 lg:gap-8">
              <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-4">
                <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-cyan-50 px-[15px] pt-[14.56px] pb-[15.44px] transition-all duration-700 ease-in-out group-hover:bg-cyan-100">
                  <div className="relative flex h-[30px] w-[30px] flex-col items-start justify-start">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Easy Payment
                  </h5>
                  <p className="text-sm leading-normal font-normal text-gray-400">
                    Easy Payment solution, designed to streamline transactions
                    and enhance convenience. Whether you're a business owner.
                  </p>
                </div>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-4">
                <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-cyan-50 px-[15px] pt-[14.56px] pb-[15.44px] transition-all duration-700 ease-in-out group-hover:bg-cyan-100">
                  <div className="relative flex h-[30px] w-[30px] flex-col items-start justify-start">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Safe Transaction
                  </h5>
                  <p className="text-sm leading-normal font-normal text-gray-400">
                    Our robust security measures protect your sensitive
                    information and prevent unauthorized access.
                  </p>
                </div>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-4">
                <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-cyan-50 px-[15px] pt-[14.56px] pb-[15.44px] transition-all duration-700 ease-in-out group-hover:bg-cyan-100">
                  <div className="relative flex h-[30px] w-[30px] flex-col items-start justify-start">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Fast Customer Service{" "}
                  </h5>
                  <p className="text-sm leading-normal font-normal text-gray-400">
                    Our team is committed to resolving your inquiries promptly,
                    ensuring minimal wait times and maximum satisfaction.
                  </p>
                </div>
              </div>
              <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-4">
                <div className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-cyan-50 px-[15px] pt-[14.56px] pb-[15.44px] transition-all duration-700 ease-in-out group-hover:bg-cyan-100">
                  <div className="relative flex h-[30px] w-[30px] flex-col items-start justify-start">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-1.5">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Quick Transaction
                  </h5>
                  <p className="text-sm leading-normal font-normal text-gray-400">
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
  )
}
