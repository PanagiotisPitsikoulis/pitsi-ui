export default function CenteredTwoColumnFaq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-14">
          <div className="flex w-full flex-col items-center justify-start gap-5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-black">
              What can we help you find?
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-3xl">
              Our Frequently Asked Questions section is designed to provide
              quick and easy answers to common inquiries. Whether you're looking
              for information on our services.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-8 lg:grid-cols-2">
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <h3 className="font-manrope text-center text-2xl leading-9 font-medium text-gray-900">
                How can I contact customer support?
              </h3>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                To contact customer support, look for a "Contact us" or "Help"
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <h3 className="font-manrope text-center text-2xl leading-9 font-medium text-gray-900">
                How do I find my purchase history?
              </h3>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                To find your purchase history, log in and go to the account or
                purchase history page. Look for a list of your past purchases or
                orders, and click on any item to see more details.
              </p>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <h3 className="font-manrope text-center text-2xl leading-9 font-medium text-gray-900">
                How do I update my billing information?
              </h3>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                To update your billing information, log in and go to the billing
                or payment page. Look for an option to "Update payment method"
                or "Edit billing information" and follow the prompts.
              </p>
            </div>
            <div className="inline-flex w-full flex-col items-center justify-start gap-3">
              <h3 className="font-manrope text-center text-2xl leading-9 font-medium text-gray-900">
                How do I upload a file or document?
              </h3>
              <p className="text-center text-base leading-relaxed font-normal text-gray-500">
                To upload a file or document, look for a button or link that
                says "Upload" or "Add file." Click on the button or link and
                follow the prompts to select the file from your computer or
                device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
