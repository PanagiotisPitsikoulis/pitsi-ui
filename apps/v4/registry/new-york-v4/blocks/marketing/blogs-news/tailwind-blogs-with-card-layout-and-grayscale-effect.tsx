export default function TailwindBlogsWithCardLayoutAndGrayscaleEffect() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 inline-flex w-full flex-col items-center justify-center gap-4 md:items-start md:justify-start">
          <div className="inline-flex items-center justify-start gap-5">
            <div className="hidden w-14 border border-indigo-700 md:block" />
            <div className="font-manrope text-center text-5xl leading-tight font-bold text-gray-900 md:text-start">
              Our Extraordinary Blog
            </div>
          </div>
          <div className="text-center text-lg leading-7 font-normal text-gray-500 md:text-start">
            Building a Supportive Community and Accessing Resources for Success
          </div>
        </div>
        <div className="mb-8 grid w-full grid-cols-1 items-start justify-start gap-8 md:grid-cols-2">
          <div className="group inline-flex w-full flex-col items-center justify-center gap-8 xl:items-start xl:justify-start">
            <img
              className="max-h-60 w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:grayscale md:w-auto lg:max-h-max"
              src="https://pagedone.io/asset/uploads/1711017190.png"
              alt="blog image"
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <h5 className="text-sm leading-snug font-normal text-gray-500">
                22 Jan 2024
              </h5>
              <h3 className="text-lg leading-7 font-semibold text-gray-900">
                Tech essentials: exploring the latest electronic gadgets
              </h3>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Discovering the must-have electronic devices and groundbreaking
                innovations in the tech world.
              </p>
            </div>
          </div>
          <div className="group inline-flex w-full flex-col items-center justify-center gap-8 xl:items-start xl:justify-start">
            <img
              className="max-h-60 w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:grayscale md:w-auto lg:max-h-max"
              src="https://pagedone.io/asset/uploads/1711017200.png"
              alt="blog image"
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="fleading-snug text-sm font-normal text-gray-500">
                25 Jan 2024
              </span>
              <h3 className="text-lg leading-7 font-semibold text-gray-900">
                Strategies and Tactics for Sustainable Success
              </h3>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                In summary, fintech is playing a transformative role in
                promoting access to financial services for underserved
                populations by leveraging technology.
              </p>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 flex-col items-center justify-center gap-8 md:grid-cols-2 md:items-start md:justify-start lg:grid-cols-3">
          <div className="group inline-flex w-full flex-col justify-center gap-8 lg:items-start lg:justify-start">
            <img
              className="max-h-60 w-auto rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:grayscale md:w-full lg:max-h-max"
              src="https://pagedone.io/asset/uploads/1711017228.png"
              alt="blog image"
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="text-sm leading-snug font-normal text-gray-500">
                28 Jan 2024
              </span>
              <h3 className="text-lg leading-7 font-semibold text-gray-900">
                Enhancing Team Productivity through
              </h3>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                This examination delves into how fintech companies are
                leveraging innovative.
              </p>
            </div>
          </div>
          <div className="group inline-flex w-full flex-col justify-center gap-8 lg:items-start lg:justify-start">
            <img
              className="max-h-60 w-auto rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:grayscale md:w-full lg:max-h-max"
              src="https://pagedone.io/asset/uploads/1711017241.png"
              alt="blog image"
            />
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="text-sm leading-snug font-normal text-gray-500">
                02 Feb 2024
              </span>
              <h3 className="text-lg leading-7 font-semibold text-gray-900">
                Crafting a Morning Routine for Mood
              </h3>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Prioritizing hydration and nourishment is key to sustaining
                energy levels throughout the day.
              </p>
            </div>
          </div>
          <div className="group inline-flex max-w-full flex-col items-center justify-center gap-8 md:col-span-2 md:mx-auto md:max-w-md md:items-start md:justify-start lg:col-span-1 lg:max-w-full">
            <img
              className="max-h-60 w-full rounded-2xl object-cover transition-all duration-700 ease-in-out group-hover:grayscale md:w-full lg:max-h-max"
              src="https://pagedone.io/asset/uploads/1711017252.png"
              alt="blog image"
            />
            <div className="flex w-full flex-col items-start justify-start gap-2">
              <span className="text-sm leading-snug font-normal text-gray-500">
                10 Feb 2024
              </span>
              <h3 className="text-lg leading-7 font-semibold text-gray-900">
                Harnessing the Power of Sticky Notes
              </h3>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                These humble tools provide a tangible and tactile way to capture
                ideas, insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
