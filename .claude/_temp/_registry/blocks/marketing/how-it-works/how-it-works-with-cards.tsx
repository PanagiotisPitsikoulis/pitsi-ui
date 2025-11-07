export default function HowItWorksWithCards() {
  return (
    <section className="bg-gray-100">
      <div className="w-full flex-col justify-start items-center inline-flex relative">
        <div className="w-full pt-24 pb-40 bg-blue-500 flex-col justify-start items-center gap-3 flex">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <h2 className="w-full text-center text-white text-4xl font-bold font-manrope leading-normal mb-3">
              How It Works
            </h2>
            <p className="max-w-2xl mx-auto text-center text-gray-100 text-base font-normal leading-relaxed">
              A detailed breakdown of processes and mechanisms behind a system
              or product, simplifying complex concepts for easy understanding.
            </p>
          </div>
        </div>
        <div className="w-full max-w-7xl px-4 md:px-10 lg:px-5 mx-auto justify-center items-start gap-8 flex -translate-y-24 lg:flex-row flex-col lg:justify-between">
          <div className="w-full px-6 pt-6 pb-8 bg-white rounded-xl flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-[66px] h-[66px] rounded-2xl border border-gray-200 flex-col justify-center items-center gap-2.5 flex">
              <span className="text-center text-gray-900 text-3xl font-semibold font-manrope leading-normal">
                1
              </span>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                Hosting Setup
              </h4>
              <p className="text-center text-gray-400 text-base font-normal leading-relaxed">
                Register a domain name that represents your brand and choose a
                reliable web hosting service. Configure the hosting environment
                to support your website's technical requirements.
              </p>
            </div>
          </div>
          <div className="w-full px-6 pt-6 pb-8 bg-white rounded-xl flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-[66px] h-[66px] rounded-2xl border border-gray-200 flex-col justify-center items-center gap-2.5 flex">
              <span className="text-center text-gray-900 text-3xl font-semibold font-manrope leading-normal">
                2
              </span>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                {" "}
                Website Design
              </h4>
              <p className="text-center text-gray-400 text-base font-normal leading-relaxed">
                Plan the site’s architecture and design the layout. Create
                wireframes and mockups to visualize the user interface and user
                experience, ensuring alignment with your brand identity.
              </p>
            </div>
          </div>
          <div className="w-full px-6 pt-6 pb-8 bg-white rounded-xl flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-[66px] h-[66px] rounded-2xl border border-gray-200 flex-col justify-center items-center gap-2.5 flex">
              <span className="text-center text-gray-900 text-3xl font-semibold font-manrope leading-normal">
                3
              </span>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                Development
              </h4>
              <p className="text-center text-gray-400 text-base font-normal leading-relaxed">
                Convert the design into a functional website using HTML, CSS,
                JavaScript, and other relevant technologies. Ensure the site is
                responsive and optimized for various devices and browsers.
              </p>
            </div>
          </div>
          <div className="w-full px-6 pt-6 pb-8 bg-white rounded-xl flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-[66px] h-[66px] rounded-2xl border border-gray-200 flex-col justify-center items-center gap-2.5 flex">
              <span className="text-center text-gray-900 text-3xl font-semibold font-manrope leading-normal">
                4
              </span>
            </div>
            <div className="flex-col justify-start items-center gap-1 flex">
              <h4 className="text-center text-gray-900 text-xl font-semibold leading-8">
                Content Creation
              </h4>
              <p className="text-center text-gray-400 text-base font-normal leading-relaxed">
                Develop engaging and relevant content, including text, images,
                and multimedia. Integrate this content into the website,
                ensuring it is organized logically and is easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
