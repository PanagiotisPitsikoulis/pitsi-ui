export default function FaqCardsWithBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 items-start justify-start gap-y-10 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-0">
          <div className="col-span-12 inline-flex w-full flex-col items-center justify-start gap-5 lg:col-span-5 lg:items-start lg:gap-10">
            <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start lg:gap-5">
              <span className="text-center text-base leading-relaxed font-medium text-indigo-600 lg:text-start">
                Most asked queries
              </span>
              <h2 className="font-manrope text-center text-5xl leading-tight font-semibold text-gray-900 lg:text-start">
                FAQ
              </h2>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500 lg:text-start">
                Our Frequently Asked Questions section is designed to provide
                quick and easy answers to common inquiries.{" "}
              </p>
            </div>
            <button className="flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out hover:bg-indigo-800">
              <span className="px-2 text-lg leading-8 font-semibold text-white">
                Contact us
              </span>
            </button>
          </div>
          <div className="col-span-12 inline-flex w-full flex-col items-start justify-start gap-8 lg:col-span-7">
            <div className="flex w-full flex-col items-start justify-start gap-3 rounded-xl bg-indigo-50 p-3.5 sm:p-6 md:p-8">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-700">
                How do I update my billing information?
              </h3>
              <p className="text-lg leading-relaxed font-normal text-gray-500">
                If you encounter any issues or need assistance while updating
                your billing information, please contact our customer support
                team for help.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-3 rounded-xl bg-indigo-50 p-3.5 sm:p-6 md:p-8">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-700">
                How can I contact customer support?
              </h3>
              <p className="text-lg leading-relaxed font-normal text-gray-500">
                Our customer support team is committed to assisting you with any
                questions or issues you may have.
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-3 rounded-xl bg-indigo-50 p-3.5 sm:p-6 md:p-8">
              <h3 className="font-manrope text-2xl leading-9 font-medium text-gray-700">
                How do I update my profile information?
              </h3>
              <p className="text-lg leading-relaxed font-normal text-gray-500">
                Keeping your profile information current ensures that your
                account details are accurate and up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
