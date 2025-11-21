export default function AboutCardsWithImages() {
  return (
    <section className="bg-green-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-8">
          <div className="grid w-full grid-cols-1 items-center justify-start gap-4 lg:grid-cols-3 lg:gap-8">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
              Senior Manager of
              <span className="text-green-600">Business </span> Development
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-700 lg:text-start">
              This position focuses on identifying and pursuing new business
              opportunities, forming strategic partnerships, and developing
              initiatives that align with the company’s objectives.
            </p>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-700 lg:text-start">
              The role involves a blend of strategic planning, market analysis,
              relationship building, and team leadership to ensure successful
              business development and revenue generation.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-center justify-start gap-y-8 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
            <img
              className="col-span-12 h-auto w-full rounded-xl object-cover lg:col-span-4"
              src="https://pagedone.io/asset/uploads/1724842000.png"
              alt="About Us image"
            />
            <img
              className="col-span-12 h-auto w-full rounded-xl object-cover lg:col-span-8"
              src="https://pagedone.io/asset/uploads/1724842018.png"
              alt="About Us image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
