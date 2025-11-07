export default function FaqWithGradientBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-2 flex">
            <span className="text-center text-indigo-600 text-lg font-medium leading-relaxed">
              FAQs
            </span>
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently asked questions
            </h2>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <div className="w-full sm:p-4 p-2.5 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-md flex-col justify-start items-start flex">
                <h4 className="text-white text-xl font-medium leading-8">
                  How can I reset my password?
                </h4>
              </div>
              <p className="sm:px-4 px-2.5 text-gray-500 text-base font-normal leading-relaxed">
                Our customer support team is dedicated to providing you with the
                assistance you need, ensuring that your experience with us is as
                smooth and enjoyable as possible.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <div className="w-full sm:p-4 p-2.5 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-md flex-col justify-start items-start flex">
                <h4 className="text-white text-xl font-medium leading-8">
                  Which is safe investment
                </h4>
              </div>
              <p className="sm:px-4 px-2.5 text-gray-500 text-base font-normal leading-relaxed">
                Safe investments are those known for their stability and lower
                risk. They generally offer lower but more predictable returns
                compared to higher-risk investments.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <div className="w-full sm:p-4 p-2.5 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-md flex-col justify-start items-start flex">
                <h4 className="text-white text-xl font-medium leading-8">
                  Which is better short term or long term
                </h4>
              </div>
              <p className="sm:px-4 px-2.5 text-gray-500 text-base font-normal leading-relaxed">
                The choice between short-term and long-term investments depends
                on your financial goals, risk tolerance, and time horizon.
                Here’s a comparison to help you decide.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <div className="w-full sm:p-4 p-2.5 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-md flex-col justify-start items-start flex">
                <h4 className="text-white text-xl font-medium leading-8">
                  How many percent return in long term
                </h4>
              </div>
              <p className="sm:px-4 px-2.5 text-gray-500 text-base font-normal leading-relaxed">
                Long-term investments typically offer the potential for higher
                returns compared to short-term investments, though actual
                returns can vary based on the asset class and market conditions.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <div className="w-full sm:p-4 p-2.5 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-md flex-col justify-start items-start flex">
                <h4 className="text-white text-xl font-medium leading-8">
                  How many percent return in short term
                </h4>
              </div>
              <p className="sm:px-4 px-2.5 text-gray-500 text-base font-normal leading-relaxed">
                Short-term investments generally offer lower returns compared to
                long-term investments due to their lower risk and shorter
                duration. The returns can vary based.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <div className="w-full sm:p-4 p-2.5 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-md flex-col justify-start items-start flex">
                <h4 className="text-white text-xl font-medium leading-8">
                  How do I delete my account?
                </h4>
              </div>
              <p className="sm:px-4 px-2.5 text-gray-500 text-base font-normal leading-relaxed">
                If you encounter difficulties or cannot find the option to
                delete your account, contact customer support for assistance.
                receive a confirmation email or message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
