export default function TailwindFaqCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-8 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          <div className="col-span-12 inline-flex w-full flex-col items-center justify-start gap-6 lg:col-span-4 lg:items-start lg:gap-24">
            <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start lg:gap-8">
              <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 lg:text-start">
                FAQs
              </h2>
              <p className="text-center text-lg leading-relaxed font-normal text-gray-500 lg:text-start">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
            <button className="flex w-full items-center justify-center rounded-full bg-indigo-600 px-5 py-2.5 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800 sm:w-fit">
              <span className="px-2 py-px text-base leading-relaxed font-semibold text-white">
                Read More
              </span>
            </button>
          </div>
          <div className="col-span-12 grid w-full grid-cols-1 flex-col items-start justify-start gap-7 md:grid-cols-2 lg:col-span-8">
            <div className="inline-flex flex-col items-start justify-start gap-3 rounded-[10px] border border-gray-200 bg-white p-3 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out hover:border-indigo-600 md:p-5">
              <h4 className="text-xl leading-8 font-medium text-gray-900">
                How do I find my purchase history?
              </h4>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                To find your purchase history, log in and go to the account or
                purchase history page. Look for a list of your past purchases or
                orders, and click any item to see details.
              </p>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-3 rounded-[10px] border border-gray-200 bg-white p-3 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out hover:border-indigo-600 md:p-5">
              <h4 className="text-xl leading-8 font-medium text-gray-900">
                What is the payment process?
              </h4>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                The payment process involves selecting a payment method,
                entering your details, and confirming the transaction. Once
                completed, you will receive a confirmation.
              </p>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-3 rounded-[10px] border border-gray-200 bg-white p-3 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out hover:border-indigo-600 md:p-5">
              <h4 className="text-xl leading-8 font-medium text-gray-900">
                How can I contact support?
              </h4>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                To join a group or community, navigate to the "Groups" or
                "Communities" section on our website. Browse the available
                options and click on the group you are interested in.
              </p>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-3 rounded-[10px] border border-gray-200 bg-white p-3 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out hover:border-indigo-600 md:p-5">
              <h4 className="text-xl leading-8 font-medium text-gray-900">
                How do I change my email?
              </h4>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                To change your email address, go to account settings, select
                "Edit Profile," and update your email in the relevant section.
                Save your changes to apply.
              </p>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-3 rounded-[10px] border border-gray-200 bg-white p-3 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out hover:border-indigo-600 md:p-5">
              <h4 className="text-xl leading-8 font-medium text-gray-900">
                How can I reset my password?
              </h4>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                To reset your password, click the "Forgot Password" link on the
                login page and follow the instructions sent to your email for
                further guidance.
              </p>
            </div>
            <div className="inline-flex flex-col items-start justify-start gap-3 rounded-[10px] border border-gray-200 bg-white p-3 shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] transition-all duration-700 ease-in-out hover:border-indigo-600 md:p-5">
              <h4 className="text-xl leading-8 font-medium text-gray-900">
                Which is safe investment?
              </h4>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Safe investments typically include government bonds,
                high-quality corporate bonds, and savings accounts, offering
                lower risk and steady returns with volatility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
