export default function TailwindCtaSectionWithProfessionalGuidance() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-36">
          <div>
            <h2 className="text-4xl font-semibold font-manrope text-black text-center lg:text-left">
              Maximize Your Portfolio Growth with Professional Guidance
            </h2>
            <p className="mt-4 text-sm font-normal leading-5 text-gray-600 text-center lg:text-left font-inter">
              Ready to boost your productivity? Download Pagedone and streamline
              your project management process. From task organization to team
              communication,
            </p>
            <div className="pt-8 ">
              <button className="mx-auto lg:mx-0 w-36 py-2.5 px-5 flex items-center justify-center text-base font-semibold leading-7 text-white rounded-xl bg-indigo-600 font-inter transition-all duration-500 hover:bg-indigo-700">
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
  );
}
