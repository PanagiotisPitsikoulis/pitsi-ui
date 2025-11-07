export default function TailwindBlogsWithCardLayoutAndGrayscaleEffect() {
  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col md:justify-start justify-center items-center md:items-start gap-4 inline-flex mb-14">
          <div className="justify-start items-center gap-5 inline-flex">
            <div className="w-14 border border-indigo-700 md:block hidden" />
            <div className="text-gray-900 text-5xl font-bold font-manrope leading-tight md:text-start text-center">
              Our Extraordinary Blog
            </div>
          </div>
          <div className="text-gray-500 text-lg font-normal leading-7 md:text-start text-center">
            Building a Supportive Community and Accessing Resources for Success
          </div>
        </div>
        <div className="w-full justify-start items-start gap-8 grid md:grid-cols-2 grid-cols-1 mb-8">
          <div className="group w-full flex-col xl:justify-start justify-center items-center xl:items-start gap-8 inline-flex">
            <img
              className="group-hover:grayscale transition-all duration-700 ease-in-out md:w-auto w-full rounded-2xl lg:max-h-max max-h-60 object-cover"
              src="https://pagedone.io/asset/uploads/1711017190.png"
              alt="blog image"
            />
            <div className=" flex-col justify-start items-start gap-2 flex">
              <h5 className="text-gray-500 text-sm font-normal leading-snug">
                22 Jan 2024
              </h5>
              <h3 className="text-gray-900 text-lg font-semibold leading-7">
                Tech essentials: exploring the latest electronic gadgets
              </h3>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Discovering the must-have electronic devices and groundbreaking
                innovations in the tech world.
              </p>
            </div>
          </div>
          <div className="group w-full flex-col xl:justify-start justify-center items-center xl:items-start gap-8 inline-flex">
            <img
              className="group-hover:grayscale transition-all duration-700 ease-in-out md:w-auto w-full rounded-2xl lg:max-h-max max-h-60 object-cover"
              src="https://pagedone.io/asset/uploads/1711017200.png"
              alt="blog image"
            />
            <div className=" flex-col justify-start items-start gap-2 flex">
              <span className="text-gray-500 text-sm font-normal fleading-snug">
                25 Jan 2024
              </span>
              <h3 className="text-gray-900 text-lg font-semibold leading-7">
                Strategies and Tactics for Sustainable Success
              </h3>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                In summary, fintech is playing a transformative role in
                promoting access to financial services for underserved
                populations by leveraging technology.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8  md:justify-start md:items-start flex-col justify-center items-center">
          <div className="group w-full flex-col lg:justify-start lg:items-start justify-center gap-8 inline-flex ">
            <img
              className="group-hover:grayscale transition-all duration-700 ease-in-out md:w-full w-auto rounded-2xl lg:max-h-max max-h-60 object-cover"
              src="https://pagedone.io/asset/uploads/1711017228.png"
              alt="blog image"
            />
            <div className="flex-col justify-start items-start gap-2 flex">
              <span className="text-gray-500 text-sm font-normal leading-snug">
                28 Jan 2024
              </span>
              <h3 className="text-gray-900 text-lg font-semibold leading-7">
                Enhancing Team Productivity through
              </h3>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                This examination delves into how fintech companies are
                leveraging innovative.
              </p>
            </div>
          </div>
          <div className="group w-full flex-col lg:justify-start lg:items-start justify-center gap-8 inline-flex">
            <img
              className="group-hover:grayscale transition-all duration-700 ease-in-out md:w-full w-auto rounded-2xl lg:max-h-max max-h-60 object-cover"
              src="https://pagedone.io/asset/uploads/1711017241.png"
              alt="blog image"
            />
            <div className="flex-col justify-start items-start gap-2 flex">
              <span className="text-gray-500 text-sm font-normal leading-snug">
                02 Feb 2024
              </span>
              <h3 className="text-gray-900 text-lg font-semibold leading-7">
                Crafting a Morning Routine for Mood
              </h3>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Prioritizing hydration and nourishment is key to sustaining
                energy levels throughout the day.
              </p>
            </div>
          </div>
          <div className="group md:items-start items-center md:col-span-2 lg:col-span-1 lg:max-w-full md:max-w-md max-w-full md:mx-auto flex-col justify-center md:justify-start gap-8 inline-flex">
            <img
              className="group-hover:grayscale transition-all duration-700 ease-in-out md:w-full w-full rounded-2xl lg:max-h-max max-h-60 object-cover"
              src="https://pagedone.io/asset/uploads/1711017252.png"
              alt="blog image"
            />
            <div className="w-full flex-col justify-start items-start gap-2 flex">
              <span className="text-gray-500 text-sm font-normal leading-snug">
                10 Feb 2024
              </span>
              <h3 className="text-gray-900 text-lg font-semibold leading-7">
                Harnessing the Power of Sticky Notes
              </h3>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                These humble tools provide a tangible and tactile way to capture
                ideas, insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
