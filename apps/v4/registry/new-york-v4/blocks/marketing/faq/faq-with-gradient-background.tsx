export default function FaqWithGradientBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-2">
            <span className="text-center text-lg leading-relaxed font-medium text-indigo-600">
              FAQs
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-8 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <div className="flex w-full flex-col items-start justify-start rounded-md bg-gradient-to-tr from-orange-500 to-orange-300 p-2.5 sm:p-4">
                <h4 className="text-xl leading-8 font-medium text-white">
                  How can I reset my password?
                </h4>
              </div>
              <p className="px-2.5 text-base leading-relaxed font-normal text-gray-500 sm:px-4">
                Our customer support team is dedicated to providing you with the
                assistance you need, ensuring that your experience with us is as
                smooth and enjoyable as possible.
              </p>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <div className="flex w-full flex-col items-start justify-start rounded-md bg-gradient-to-tr from-orange-500 to-orange-300 p-2.5 sm:p-4">
                <h4 className="text-xl leading-8 font-medium text-white">
                  Which is safe investment
                </h4>
              </div>
              <p className="px-2.5 text-base leading-relaxed font-normal text-gray-500 sm:px-4">
                Safe investments are those known for their stability and lower
                risk. They generally offer lower but more predictable returns
                compared to higher-risk investments.
              </p>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <div className="flex w-full flex-col items-start justify-start rounded-md bg-gradient-to-tr from-orange-500 to-orange-300 p-2.5 sm:p-4">
                <h4 className="text-xl leading-8 font-medium text-white">
                  Which is better short term or long term
                </h4>
              </div>
              <p className="px-2.5 text-base leading-relaxed font-normal text-gray-500 sm:px-4">
                The choice between short-term and long-term investments depends
                on your financial goals, risk tolerance, and time horizon.
                Here’s a comparison to help you decide.
              </p>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <div className="flex w-full flex-col items-start justify-start rounded-md bg-gradient-to-tr from-orange-500 to-orange-300 p-2.5 sm:p-4">
                <h4 className="text-xl leading-8 font-medium text-white">
                  How many percent return in long term
                </h4>
              </div>
              <p className="px-2.5 text-base leading-relaxed font-normal text-gray-500 sm:px-4">
                Long-term investments typically offer the potential for higher
                returns compared to short-term investments, though actual
                returns can vary based on the asset class and market conditions.
              </p>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <div className="flex w-full flex-col items-start justify-start rounded-md bg-gradient-to-tr from-orange-500 to-orange-300 p-2.5 sm:p-4">
                <h4 className="text-xl leading-8 font-medium text-white">
                  How many percent return in short term
                </h4>
              </div>
              <p className="px-2.5 text-base leading-relaxed font-normal text-gray-500 sm:px-4">
                Short-term investments generally offer lower returns compared to
                long-term investments due to their lower risk and shorter
                duration. The returns can vary based.
              </p>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <div className="flex w-full flex-col items-start justify-start rounded-md bg-gradient-to-tr from-orange-500 to-orange-300 p-2.5 sm:p-4">
                <h4 className="text-xl leading-8 font-medium text-white">
                  How do I delete my account?
                </h4>
              </div>
              <p className="px-2.5 text-base leading-relaxed font-normal text-gray-500 sm:px-4">
                If you encounter difficulties or cannot find the option to
                delete your account, contact customer support for assistance.
                receive a confirmation email or message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
