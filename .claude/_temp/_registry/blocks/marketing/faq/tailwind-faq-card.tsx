export default function TailwindFaqCard() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-start lg:gap-x-10 lg:gap-y-0 gap-y-8 grid lg:grid-cols-12 grid-cols-1">
          <div className="lg:col-span-4 col-span-12 w-full flex-col justify-start lg:items-start items-center lg:gap-24 gap-6 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-8 gap-3 flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                FAQs
              </h2>
              <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                Trusted in more than 100 countries and 5 million customers.
              </p>
            </div>
            <button className="sm:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                Read More
              </span>
            </button>
          </div>
          <div className="lg:col-span-8 col-span-12 w-full flex-col justify-start items-start gap-7 grid md:grid-cols-2 grid-cols-1">
            <div className="md:p-5 p-3 bg-white rounded-[10px] shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <h4 className="text-gray-900 text-xl font-medium leading-8">
                How do I find my purchase history?
              </h4>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                To find your purchase history, log in and go to the account or
                purchase history page. Look for a list of your past purchases or
                orders, and click any item to see details.
              </p>
            </div>
            <div className="md:p-5 p-3 bg-white rounded-[10px] shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <h4 className="text-gray-900 text-xl font-medium leading-8">
                What is the payment process?
              </h4>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                The payment process involves selecting a payment method,
                entering your details, and confirming the transaction. Once
                completed, you will receive a confirmation.
              </p>
            </div>
            <div className="md:p-5 p-3 bg-white rounded-[10px] shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <h4 className="text-gray-900 text-xl font-medium leading-8">
                How can I contact support?
              </h4>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                To join a group or community, navigate to the "Groups" or
                "Communities" section on our website. Browse the available
                options and click on the group you are interested in.
              </p>
            </div>
            <div className="md:p-5 p-3 bg-white rounded-[10px] shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <h4 className="text-gray-900 text-xl font-medium leading-8">
                How do I change my email?
              </h4>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                To change your email address, go to account settings, select
                "Edit Profile," and update your email in the relevant section.
                Save your changes to apply.
              </p>
            </div>
            <div className="md:p-5 p-3 bg-white rounded-[10px] shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <h4 className="text-gray-900 text-xl font-medium leading-8">
                How can I reset my password?
              </h4>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                To reset your password, click the "Forgot Password" link on the
                login page and follow the instructions sent to your email for
                further guidance.
              </p>
            </div>
            <div className="md:p-5 p-3 bg-white rounded-[10px] shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <h4 className="text-gray-900 text-xl font-medium leading-8">
                Which is safe investment?
              </h4>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Safe investments typically include government bonds,
                high-quality corporate bonds, and savings accounts, offering
                lower risk and steady returns with volatility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
