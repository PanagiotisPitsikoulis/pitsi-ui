export default function TailwindCtaSectionWithProfessionalGuidance() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl rounded-3xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-36">
          <div>
            <h2 className="font-manrope text-center text-4xl font-semibold text-black lg:text-left">
              Maximize Your Portfolio Growth with Professional Guidance
            </h2>
            <p className="font-inter mt-4 text-center text-sm leading-5 font-normal text-gray-600 lg:text-left">
              Ready to boost your productivity? Download Pagedone and streamline
              your project management process. From task organization to team
              communication,
            </p>
            <div className="pt-8">
              <button className="font-inter mx-auto flex w-36 items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-base leading-7 font-semibold text-white transition-all duration-500 hover:bg-indigo-700 lg:mx-0">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://pagedone.io/asset/uploads/1759489321.png"
              alt="image"
              className="h-full w-full"
            />
            <div className="flex flex-col gap-6">
              <img
                src="https://pagedone.io/asset/uploads/1759489333.png"
                alt="image"
                className="h-full w-full"
              />
              <img
                src="https://pagedone.io/asset/uploads/1759489413.png"
                alt="image"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
