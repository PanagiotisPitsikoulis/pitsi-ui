export default function TwoColumnWithIconBackground() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-2 md:items-start">
            <span className="text-center text-base leading-relaxed font-medium text-indigo-600 md:text-start">
              HOW TO GET STARTED
            </span>
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900 md:text-start">
              Frequently asked questions{" "}
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-x-0 gap-y-8 md:grid-cols-2 md:gap-x-10 lg:gap-x-14">
            <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex items-start justify-start gap-1 rounded-xl bg-indigo-600 p-5 transition-all duration-700 ease-in-out group-hover:bg-indigo-800">
                  {/* SVG removed */}
                </div>
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                  Information Be Added to an Invoice?
                </h3>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Yes, additional information can be added to an invoice to meet
                specific needs or preferences. This may include extra details
                such as purchase order numbers.
              </p>
            </div>
            <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex items-start justify-start gap-1 rounded-2xl bg-indigo-600 p-5 transition-all duration-700 ease-in-out group-hover:bg-indigo-800">
                  {/* SVG removed */}
                </div>
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                  If you need any adjustments or additional?
                </h3>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                If you require modifications or further information on any topic
                or service, do not hesitate to reach out. Our team is ready to
                assist with personalized adjustments or provide.
              </p>
            </div>
            <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex items-start justify-start gap-1 rounded-xl bg-indigo-600 p-5 transition-all duration-700 ease-in-out group-hover:bg-indigo-800">
                  {/* SVG removed */}
                </div>
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                  How can I reset my password?
                </h3>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                If you do not receive the reset email or encounter issues,
                please contact customer support for further assistance. Provide
                the email address associated with your account.
              </p>
            </div>
            <div className="group inline-flex h-full w-full flex-col items-start justify-start gap-4">
              <div className="flex flex-col items-start justify-start gap-6">
                <div className="inline-flex items-start justify-start gap-1 rounded-2xl bg-indigo-600 p-5 transition-all duration-700 ease-in-out group-hover:bg-indigo-800">
                  {/* SVG removed */}
                </div>
                <h3 className="font-manrope text-2xl leading-9 font-semibold text-gray-900">
                  How do I change my email address?
                </h3>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Access your account on the website or application where you wish
                to update your email address.Go to the settings or profile
                section of your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
