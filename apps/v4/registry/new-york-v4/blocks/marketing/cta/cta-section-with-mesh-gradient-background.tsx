export default function CtaSectionWithMeshGradientBackground() {
  return (
    <section className="pt-12 sm:pt-24">
      <div className="mx-auto w-full max-w-7xl rounded-3xl bg-cover object-cover px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 p-7 sm:p-10 lg:flex-row lg:gap-40 xl:p-20">
          <div className="flex flex-col gap-3.5">
            <h2 className="font-manrope text-center text-4xl font-semibold text-white lg:text-left">
              Download Pagedone for Efficient Project Management!
            </h2>
            <p className="font-inter text-center text-sm leading-5 font-normal text-white lg:text-left">
              Ready to boost your productivity? Download Pagedone and streamline
              your project management process. From task organization to team
              communication,
            </p>
          </div>
          <div className="flex flex-col items-center gap-8 lg:items-start">
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1759489946.png"
                alt="profile"
              />
            </div>
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <button className="flex w-40 items-center justify-center rounded-xl bg-white px-5 py-2.5 text-base leading-7 font-semibold shadow-sm transition-all duration-500 hover:bg-gray-300">
                Get In Touch
              </button>
              <button className="flex w-36 items-center justify-center rounded-xl border border-white bg-transparent px-5 py-2.5 leading-5 font-medium text-white transition-all duration-500 hover:bg-white hover:text-black">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
