export default function TwoColumnWithIconBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start md:items-start items-center gap-2 flex">
            <span className="text-indigo-600 text-base font-medium leading-relaxed md:text-start text-center">
              HOW TO GET STARTED
            </span>
            <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal md:text-start text-center">
              Frequently asked questions{" "}
            </h2>
          </div>
          <div className="w-full flex-col justify-start items-start gap-y-8 lg:gap-x-14 md:gap-x-10 gap-x-0 grid md:grid-cols-2 grid-cols-1">
            <div className="w-full h-full group flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="p-5 bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl justify-start items-start gap-1 inline-flex">
                  {/* SVG removed */}
                </div>
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  Information Be Added to an Invoice?
                </h3>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Yes, additional information can be added to an invoice to meet
                specific needs or preferences. This may include extra details
                such as purchase order numbers.
              </p>
            </div>
            <div className="w-full h-full group flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="p-5 bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-2xl justify-start items-start gap-1 inline-flex">
                  {/* SVG removed */}
                </div>
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  If you need any adjustments or additional?
                </h3>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                If you require modifications or further information on any topic
                or service, do not hesitate to reach out. Our team is ready to
                assist with personalized adjustments or provide.
              </p>
            </div>
            <div className="w-full h-full group flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="p-5 bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl justify-start items-start gap-1 inline-flex">
                  {/* SVG removed */}
                </div>
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  How can I reset my password?
                </h3>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                If you do not receive the reset email or encounter issues,
                please contact customer support for further assistance. Provide
                the email address associated with your account.
              </p>
            </div>
            <div className="w-full h-full group flex-col justify-start items-start gap-4 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="p-5 bg-indigo-600 group-hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-2xl justify-start items-start gap-1 inline-flex">
                  {/* SVG removed */}
                </div>
                <h3 className="text-gray-900 text-2xl font-semibold font-manrope leading-9">
                  How do I change my email address?
                </h3>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Access your account on the website or application where you wish
                to update your email address.Go to the settings or profile
                section of your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
