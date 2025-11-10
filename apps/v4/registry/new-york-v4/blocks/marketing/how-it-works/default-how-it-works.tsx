export default function DefaultHowItWorks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-center justify-start gap-10 lg:gap-12">
          <div className="flex w-full flex-col items-center justify-start gap-3">
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
              How It Works
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500">
              A detailed breakdown of processes and mechanisms behind a system
              or product, <br />
              simplifying complex concepts for easy understanding.
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row">
            <div className="inline-flex shrink grow basis-0 flex-col items-center justify-start gap-2.5">
              <div className="flex flex-col items-center justify-start gap-0.5 self-stretch">
                <h3 className="font-manrope self-stretch text-center text-4xl leading-normal font-extrabold text-indigo-600">
                  1
                </h3>
                <h4 className="self-stretch text-center text-xl leading-8 font-semibold text-gray-900">
                  Design and Planning
                </h4>
              </div>
              <p className="self-stretch text-center text-base leading-relaxed font-normal text-gray-400">
                Outline the website's purpose, target audience, and features.
                Create wireframes and design mockups to visualize the layout
                and...
              </p>
            </div>
            {/* SVG removed */}
            <div className="inline-flex shrink grow basis-0 flex-col items-center justify-start gap-2.5">
              <div className="flex flex-col items-center justify-start gap-0.5 self-stretch">
                <h3 className="font-manrope self-stretch text-center text-4xl leading-normal font-extrabold text-indigo-600">
                  2
                </h3>
                <h4 className="self-stretch text-center text-xl leading-8 font-semibold text-gray-900">
                  Development
                </h4>
              </div>
              <p className="self-stretch text-center text-base leading-relaxed font-normal text-gray-400">
                Convert the design into a functional website using HTML, CSS,
                and JavaScript. Ensure the site is responsive and works on
                various...
              </p>
            </div>
            {/* SVG removed */}
            <div className="inline-flex shrink grow basis-0 flex-col items-center justify-start gap-2.5">
              <div className="flex flex-col items-center justify-start gap-0.5 self-stretch">
                <h3 className="font-manrope self-stretch text-center text-4xl leading-normal font-extrabold text-indigo-600">
                  3
                </h3>
                <h4 className="self-stretch text-center text-xl leading-8 font-semibold text-gray-900">
                  Testing and Deployment
                </h4>
              </div>
              <p className="self-stretch text-center text-base leading-relaxed font-normal text-gray-400">
                Test the website for issues like broken links and bugs. After
                making necessary adjustments, deploy it to a web server and
                conduct...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
