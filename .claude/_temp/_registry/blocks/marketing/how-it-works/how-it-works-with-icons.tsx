export default function HowItWorksWithIcons() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3 flex">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              How It Works
            </h2>
            <p className="w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              A detailed breakdown of processes and mechanisms behind a system
              or product, <br />
              simplifying complex concepts for easy understanding.
            </p>
          </div>
          <div className="w-full justify-start items-center gap-4 flex md:flex-row flex-col">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                  1
                </h3>
                <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                  Design and Planning
                </h4>
              </div>
              <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                Outline the website's purpose, target audience, and features.
                Create wireframes and design mockups to visualize the layout
                and...
              </p>
            </div>
            {/* SVG removed */}
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                  2
                </h3>
                <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                  Development
                </h4>
              </div>
              <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                Convert the design into a functional website using HTML, CSS,
                and JavaScript. Ensure the site is responsive and works on
                various...
              </p>
            </div>
            {/* SVG removed */}
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-0.5 flex">
                <h3 className="self-stretch text-center text-indigo-600 text-4xl font-extrabold font-manrope leading-normal">
                  3
                </h3>
                <h4 className="self-stretch text-center text-gray-900 text-xl font-semibold leading-8">
                  Testing and Deployment
                </h4>
              </div>
              <p className="self-stretch text-center text-gray-400 text-base font-normal leading-relaxed">
                Test the website for issues like broken links and bugs. After
                making necessary adjustments, deploy it to a web server and
                conduct...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
