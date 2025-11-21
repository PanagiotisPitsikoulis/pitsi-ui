export default function HowItWorksWithCards() {
  return (
    <section className="bg-gray-100">
      <div className="relative inline-flex w-full flex-col items-center justify-start">
        <div className="bg-primary flex w-full flex-col items-center justify-start gap-3 pt-24 pb-40">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
            <h2 className="font-manrope mb-3 w-full text-center text-4xl leading-normal font-bold text-white">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-center text-base leading-relaxed font-normal text-gray-100">
              A detailed breakdown of processes and mechanisms behind a system
              or product, simplifying complex concepts for easy understanding.
            </p>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-7xl -translate-y-24 flex-col items-start justify-center gap-8 px-4 md:px-10 lg:flex-row lg:justify-between lg:px-5">
          <div className="inline-flex w-full flex-col items-center justify-start gap-6 rounded-xl bg-white px-6 pt-6 pb-8">
            <div className="flex h-[66px] w-[66px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-gray-200">
              <span className="font-manrope text-center text-3xl leading-normal font-semibold text-gray-900">
                1
              </span>
            </div>
            <div className="flex flex-col items-center justify-start gap-1">
              <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                Hosting Setup
              </h4>
              <p className="text-center text-base leading-relaxed font-normal text-gray-400">
                Register a domain name that represents your brand and choose a
                reliable web hosting service. Configure the hosting environment
                to support your website's technical requirements.
              </p>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-center justify-start gap-6 rounded-xl bg-white px-6 pt-6 pb-8">
            <div className="flex h-[66px] w-[66px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-gray-200">
              <span className="font-manrope text-center text-3xl leading-normal font-semibold text-gray-900">
                2
              </span>
            </div>
            <div className="flex flex-col items-center justify-start gap-1">
              <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                {" "}
                Website Design
              </h4>
              <p className="text-center text-base leading-relaxed font-normal text-gray-400">
                Plan the site’s architecture and design the layout. Create
                wireframes and mockups to visualize the user interface and user
                experience, ensuring alignment with your brand identity.
              </p>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-center justify-start gap-6 rounded-xl bg-white px-6 pt-6 pb-8">
            <div className="flex h-[66px] w-[66px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-gray-200">
              <span className="font-manrope text-center text-3xl leading-normal font-semibold text-gray-900">
                3
              </span>
            </div>
            <div className="flex flex-col items-center justify-start gap-1">
              <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                Development
              </h4>
              <p className="text-center text-base leading-relaxed font-normal text-gray-400">
                Convert the design into a functional website using HTML, CSS,
                JavaScript, and other relevant technologies. Ensure the site is
                responsive and optimized for various devices and browsers.
              </p>
            </div>
          </div>
          <div className="inline-flex w-full flex-col items-center justify-start gap-6 rounded-xl bg-white px-6 pt-6 pb-8">
            <div className="flex h-[66px] w-[66px] flex-col items-center justify-center gap-2.5 rounded-2xl border border-gray-200">
              <span className="font-manrope text-center text-3xl leading-normal font-semibold text-gray-900">
                4
              </span>
            </div>
            <div className="flex flex-col items-center justify-start gap-1">
              <h4 className="text-center text-xl leading-8 font-semibold text-gray-900">
                Content Creation
              </h4>
              <p className="text-center text-base leading-relaxed font-normal text-gray-400">
                Develop engaging and relevant content, including text, images,
                and multimedia. Integrate this content into the website,
                ensuring it is organized logically and is easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
