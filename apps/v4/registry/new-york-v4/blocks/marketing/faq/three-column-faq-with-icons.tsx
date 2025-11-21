export default function ThreeColumnFaqWithIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-3 lg:gap-5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
              Have any questions?
            </h2>
            <p className="text-center text-base leading-relaxed font-normal text-gray-500">
              This resource is designed to address the most recurring questions
              about a company’s services, products, policies, or processes.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-y-2 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3">
            <div className="lg:border-r-none inline-flex flex-col items-center justify-start gap-3 border-b border-gray-200 pb-2 md:border-r md:border-b-0 md:pr-8 md:pb-0">
              <div className="px-4 py-4 md:py-10">
                <div className="flex flex-col items-center justify-start gap-5">
                  {/* SVG removed */}
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                    General
                  </h5>
                </div>
                <p className="text-center text-sm leading-normal font-normal text-gray-500">
                  Sure, I can help you with that. Could you please provide more
                  context or specify what you need an answer.
                </p>
              </div>
            </div>
            <div className="lg:border-r-none inline-flex flex-col items-center justify-start gap-3 border-b border-gray-200 pb-2 md:border-b-0 md:px-8 md:pb-0 lg:border-r">
              <div className="px-4 py-4 md:py-10">
                <div className="flex flex-col items-center justify-start gap-5">
                  {/* SVG removed */}
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                    Talk &amp; Answer
                  </h5>
                </div>
                <p className="text-center text-sm leading-normal font-normal text-gray-500">
                  If you have a specific question or topic in mind, please let
                  me know, and I'll do my best to provide a thorough answer.
                </p>
              </div>
            </div>
            <div className="lg:border-r-none inline-flex flex-col items-center justify-start gap-3 border-b border-gray-200 pb-2 md:border-b-0 md:pr-8 md:pb-0 lg:pr-0 lg:pl-8">
              <div className="px-4 py-4 md:py-10">
                <div className="flex flex-col items-center justify-start gap-5">
                  {/* SVG removed */}
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                    Support
                  </h5>
                </div>
                <p className="text-center text-sm leading-normal font-normal text-gray-500">
                  What kind of support or assistance do you need? Please provide
                  some details so I can help you effectively.
                </p>
              </div>
            </div>
            <div className="lg:border-r-none inline-flex flex-col items-center justify-start gap-3 border-b border-gray-200 pb-2 md:border-b-0 md:border-l md:pb-0 md:pl-8 lg:border-r lg:border-l-0 lg:pr-8 lg:pl-0">
              <div className="px-4 py-4 md:py-10">
                <div className="flex flex-col items-center justify-start gap-5">
                  {/* SVG removed */}
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                    Our service
                  </h5>
                </div>
                <p className="text-center text-sm leading-normal font-normal text-gray-500">
                  Our service is designed to help you stay organized, informed,
                  and efficient. Whether you need assistance.
                </p>
              </div>
            </div>
            <div className="lg:border-r-none inline-flex flex-col items-center justify-start gap-3 border-b border-gray-200 pr-8 pb-2 pl-0 md:border-r md:border-b-0 md:pb-0 lg:pl-8">
              <div className="px-4 py-4 md:py-10">
                <div className="flex flex-col items-center justify-start gap-5">
                  {/* SVG removed */}
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                    Privacy/Policy
                  </h5>
                </div>
                <p className="text-center text-sm leading-normal font-normal text-gray-500">
                  We are committed to safeguarding your personal and
                  professional information. Your data is securely stored and
                  handled.
                </p>
              </div>
            </div>
            <div className="inline-flex flex-col items-center justify-start gap-3 border-gray-200 pb-2 md:pb-0 md:pl-8">
              <div className="px-4 py-4 md:py-10">
                <div className="flex flex-col items-center justify-start gap-5">
                  {/* SVG removed */}
                  <h5 className="text-center text-lg leading-relaxed font-medium text-gray-900">
                    Others
                  </h5>
                </div>
                <p className="text-center text-sm leading-normal font-normal text-gray-500">
                  To find your purchase history, log in and go to the account or
                  purchase history page. Look for an option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
