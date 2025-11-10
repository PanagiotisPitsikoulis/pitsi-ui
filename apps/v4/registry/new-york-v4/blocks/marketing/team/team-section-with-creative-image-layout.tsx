export default function TeamSectionWithCreativeImageLayout() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:mt-20 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h2 className="font-manrope mb-7 text-center text-5xl leading-[4rem] font-bold text-gray-900 lg:text-left">
              Our leading, strong &amp; creative team
            </h2>
            <p className="mb-16 text-center text-lg text-gray-500 lg:text-left">
              These people work on making our product best.
            </p>
            <button className="mx-auto block w-60 cursor-pointer rounded-full bg-indigo-600 px-8 py-3 text-center text-base font-semibold text-white transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
              Join our team
            </button>
          </div>
          <div className="mt-16 w-full max-lg:max-w-2xl md:mt-40 lg:mt-0 lg:w-1/2">
            <div className="grid grid-cols-1 gap-8 min-[450px]:grid-cols-2 md:grid-cols-3">
              <img
                src="https://pagedone.io/asset/uploads/1696238644.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:mr-0 md:mt-20"
              />
              <img
                src="https://pagedone.io/asset/uploads/1696238665.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:ml-0 md:mx-auto"
              />
              <img
                src="https://pagedone.io/asset/uploads/1696238684.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:mr-0 md:mt-20 md:ml-0"
              />
              <img
                src="https://pagedone.io/asset/uploads/1696238702.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:ml-0 md:mr-0 md:ml-auto"
              />
              <img
                src="https://pagedone.io/asset/uploads/1696238720.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:mr-0 md:mx-auto md:-mt-20"
              />
              <img
                src="https://pagedone.io/asset/uploads/1696238737.png"
                alt="Team tailwind section"
                className="mx-auto h-56 w-44 rounded-2xl object-cover min-[450px]:ml-0 md:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
