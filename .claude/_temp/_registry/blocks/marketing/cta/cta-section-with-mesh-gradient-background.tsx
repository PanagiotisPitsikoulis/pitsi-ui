export default function CtaSectionWithMeshGradientBackground() {
  return (
    <section className="pt-12 sm:pt-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 rounded-3xl bg-cover object-cover">
        <div className="p-7 sm:p-10 xl:p-20 flex items-center lg:flex-row flex-col gap-8 lg:gap-40">
          <div className="flex flex-col gap-3.5">
            <h2 className="text-4xl font-semibold font-manrope text-white text-center lg:text-left">
              Download Pagedone for Efficient Project Management!
            </h2>
            <p className="text-sm font-normal leading-5 text-white font-inter text-center lg:text-left">
              Ready to boost your productivity? Download Pagedone and streamline
              your project management process. From task organization to team
              communication,
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center lg:items-start">
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1759489946.png"
                alt="profile"
              />
            </div>
            <div className="flex items-center sm:flex-row flex-col gap-5">
              <button className="px-5 py-2.5 w-40 flex items-center justify-center bg-white shadow-sm rounded-xl transition-all duration-500 hover:bg-gray-300 text-base font-semibold leading-7">
                Get In Touch
              </button>
              <button className="px-5 py-2.5 w-36 flex items-center justify-center text-white border border-white  bg-transparent rounded-xl transition-all duration-500 font-medium leading-5 hover:bg-white hover:text-black ">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
