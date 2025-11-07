export default function AboutCardsWithImages() {
  return (
    <section className="py-24 bg-green-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-full justify-start items-center lg:gap-8 gap-4 grid lg:grid-cols-3 grid-cols-1">
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Senior Manager of
              <span className="text-green-600">Business </span> Development
            </h2>
            <p className="text-gray-700 text-lg font-normal leading-relaxed lg:text-start text-center">
              This position focuses on identifying and pursuing new business
              opportunities, forming strategic partnerships, and developing
              initiatives that align with the company’s objectives.
            </p>
            <p className="text-gray-700 text-lg font-normal leading-relaxed lg:text-start text-center">
              The role involves a blend of strategic planning, market analysis,
              relationship building, and team leadership to ensure successful
              business development and revenue generation.
            </p>
          </div>
          <div className="w-full justify-start items-center lg:gap-x-8 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
            <img
              className="lg:col-span-4 col-span-12 w-full h-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1724842000.png"
              alt="About Us image"
            />
            <img
              className="lg:col-span-8 col-span-12 w-full h-auto rounded-xl object-cover"
              src="https://pagedone.io/asset/uploads/1724842018.png"
              alt="About Us image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
