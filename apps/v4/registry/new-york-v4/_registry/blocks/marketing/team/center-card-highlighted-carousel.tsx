export default function CenterCardHighlightedCarousel() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Welcome our talented team
            </h2>
            <p className="w-full text-center text-lg leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
              We are thrilled to introduce the newest members of our team. Each
              individual brings a wealth of experience, creativity, and passion
              to our organization.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            <div className="bg-norepeat inline-flex h-96 w-full flex-col items-center justify-end bg-cover bg-center py-5 lg:h-[280px]">
              <div className="flex flex-col items-center justify-start">
                <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                  Benjamin Evans
                </h5>
                <span className="text-center text-sm leading-normal font-normal text-gray-50">
                  Co-Founder
                </span>
              </div>
            </div>
            <div className="bg-norepeat inline-flex h-96 w-full flex-col items-center justify-end bg-cover bg-center py-5 lg:h-[280px]">
              <div className="flex flex-col items-center justify-start">
                <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                  Mia Thompson
                </h5>
                <span className="text-center text-sm leading-normal font-normal text-gray-50">
                  Founder
                </span>
              </div>
            </div>
            <div className="bg-norepeat inline-flex h-96 w-full flex-col items-center justify-end bg-cover bg-center py-5 lg:h-[280px]">
              <div className="flex flex-col items-center justify-start">
                <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                  Harshita Patel
                </h5>
                <span className="text-center text-sm leading-normal font-normal text-gray-50">
                  CEO
                </span>
              </div>
            </div>
            <div className="bg-norepeat inline-flex h-96 w-full flex-col items-center justify-end bg-cover bg-center py-5 lg:h-[280px]">
              <div className="flex flex-col items-center justify-start">
                <h5 className="text-center text-lg leading-relaxed font-medium text-white">
                  Amelia Clark
                </h5>
                <span className="text-center text-sm leading-normal font-normal text-gray-50">
                  HR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
