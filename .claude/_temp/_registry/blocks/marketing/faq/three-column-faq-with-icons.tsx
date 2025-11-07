export default function ThreeColumnFaqWithIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center lg:gap-5 gap-3 flex">
            <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
              Have any questions?
            </h2>
            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
              This resource is designed to address the most recurring questions
              about a company’s services, products, policies, or processes.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start md:gap-y-8 gap-y-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="md:pb-0 pb-2 md:pr-8 flex-col justify-start items-center gap-3 inline-flex lg:border-r-none md:border-r md:border-b-0 border-b border-gray-200">
              <div className="px-4 md:py-10 py-4">
                <div className="flex-col justify-start items-center gap-5 flex">
                  {/* SVG removed */}
                  <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                    General
                  </h5>
                </div>
                <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                  Sure, I can help you with that. Could you please provide more
                  context or specify what you need an answer.
                </p>
              </div>
            </div>
            <div className="md:pb-0 pb-2 md:px-8 flex-col justify-start items-center gap-3 inline-flex lg:border-r-none lg:border-r md:border-b-0 border-b border-gray-200">
              <div className="px-4 md:py-10 py-4">
                <div className="flex-col justify-start items-center gap-5 flex">
                  {/* SVG removed */}
                  <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                    Talk &amp; Answer
                  </h5>
                </div>
                <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                  If you have a specific question or topic in mind, please let
                  me know, and I'll do my best to provide a thorough answer.
                </p>
              </div>
            </div>
            <div className="md:pb-0 pb-2 lg:pl-8 lg:pr-0 md:pr-8 flex-col justify-start items-center gap-3 inline-flex lg:border-r-none md:border-b-0 border-b border-gray-200">
              <div className="px-4 md:py-10 py-4">
                <div className="flex-col justify-start items-center gap-5 flex">
                  {/* SVG removed */}
                  <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                    Support
                  </h5>
                </div>
                <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                  What kind of support or assistance do you need? Please provide
                  some details so I can help you effectively.
                </p>
              </div>
            </div>
            <div className="md:pb-0 pb-2 lg:pr-8 lg:pl-0 md:pl-8 flex-col justify-start items-center gap-3 inline-flex md:border-b-0 border-b lg:border-r-none lg:border-r lg:border-l-0 md:border-l border-gray-200">
              <div className="px-4 md:py-10 py-4">
                <div className="flex-col justify-start items-center gap-5 flex">
                  {/* SVG removed */}
                  <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                    Our service
                  </h5>
                </div>
                <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                  Our service is designed to help you stay organized, informed,
                  and efficient. Whether you need assistance.
                </p>
              </div>
            </div>
            <div className="md:pb-0 pb-2 pr-8 lg:pl-8 pl-0 flex-col justify-start items-center gap-3 inline-flex lg:border-r-none md:border-r md:border-b-0 border-b border-gray-200">
              <div className="px-4 md:py-10 py-4">
                <div className="flex-col justify-start items-center gap-5 flex">
                  {/* SVG removed */}
                  <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                    Privacy/Policy
                  </h5>
                </div>
                <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                  We are committed to safeguarding your personal and
                  professional information. Your data is securely stored and
                  handled.
                </p>
              </div>
            </div>
            <div className="md:pb-0 pb-2 md:pl-8 flex-col justify-start items-center gap-3 inline-flex border-gray-200">
              <div className="px-4 md:py-10 py-4">
                <div className="flex-col justify-start items-center gap-5 flex">
                  {/* SVG removed */}
                  <h5 className="text-center text-gray-900 text-lg font-medium leading-relaxed">
                    Others
                  </h5>
                </div>
                <p className="text-center text-gray-500 text-sm font-normal leading-normal">
                  To find your purchase history, log in and go to the account or
                  purchase history page. Look for an option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
