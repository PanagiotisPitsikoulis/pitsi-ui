export default function FaqCardsWithBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full justify-start items-start lg:gap-x-12 lg:gap-y-0 gap-y-10 grid lg:grid-cols-12 grid-cols-1">
          <div className="lg:col-span-5 col-span-12 w-full flex-col justify-start lg:items-start items-center lg:gap-10 gap-5 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center lg:gap-5 gap-3 flex">
              <span className="text-indigo-600 text-base font-medium leading-relaxed lg:text-start text-center">
                Most asked queries
              </span>
              <h2 className="text-gray-900 text-5xl font-semibold font-manrope leading-tight lg:text-start text-center">
                FAQ
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Our Frequently Asked Questions section is designed to provide
                quick and easy answers to common inquiries.{" "}
              </p>
            </div>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span className="px-2 text-white text-lg font-semibold leading-8">
                Contact us
              </span>
            </button>
          </div>
          <div className="lg:col-span-7 col-span-12 w-full flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-full md:p-8 sm:p-6 p-3.5 bg-indigo-50 rounded-xl flex-col justify-start items-start gap-3 flex">
              <h3 className="text-gray-700 text-2xl font-medium font-manrope leading-9">
                How do I update my billing information?
              </h3>
              <p className="text-gray-500 text-lg font-normal leading-relaxed">
                If you encounter any issues or need assistance while updating
                your billing information, please contact our customer support
                team for help.
              </p>
            </div>
            <div className="w-full md:p-8 sm:p-6 p-3.5 bg-indigo-50 rounded-xl flex-col justify-start items-start gap-3 flex">
              <h3 className="text-gray-700 text-2xl font-medium font-manrope leading-9">
                How can I contact customer support?
              </h3>
              <p className="text-gray-500 text-lg font-normal leading-relaxed">
                Our customer support team is committed to assisting you with any
                questions or issues you may have.
              </p>
            </div>
            <div className="w-full md:p-8 sm:p-6 p-3.5 bg-indigo-50 rounded-xl flex-col justify-start items-start gap-3 flex">
              <h3 className="text-gray-700 text-2xl font-medium font-manrope leading-9">
                How do I update my profile information?
              </h3>
              <p className="text-gray-500 text-lg font-normal leading-relaxed">
                Keeping your profile information current ensures that your
                account details are accurate and up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
