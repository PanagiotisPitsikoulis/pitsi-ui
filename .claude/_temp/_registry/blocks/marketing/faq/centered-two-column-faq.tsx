export default function CenteredTwoColumnFaq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-14 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-5 flex">
            <h2 className="text-center text-black text-4xl font-bold font-manrope leading-normal">
              What can we help you find?
            </h2>
            <p className="lg:max-w-3xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              Our Frequently Asked Questions section is designed to provide
              quick and easy answers to common inquiries. Whether you're looking
              for information on our services.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <h3 className="text-center text-gray-900 text-2xl font-medium font-manrope leading-9">
                How can I contact customer support?
              </h3>
              <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                To contact customer support, look for a "Contact us" or "Help"
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <h3 className="text-center text-gray-900 text-2xl font-medium font-manrope leading-9">
                How do I find my purchase history?
              </h3>
              <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                To find your purchase history, log in and go to the account or
                purchase history page. Look for a list of your past purchases or
                orders, and click on any item to see more details.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <h3 className="text-center text-gray-900 text-2xl font-medium font-manrope leading-9">
                How do I update my billing information?
              </h3>
              <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
                To update your billing information, log in and go to the billing
                or payment page. Look for an option to "Update payment method"
                or "Edit billing information" and follow the prompts.
              </p>
            </div>
            <div className="w-full flex-col justify-start items-center gap-3 inline-flex">
              <h3 className="text-center text-gray-900 text-2xl font-medium font-manrope leading-9">
                How do I upload a file or document?
              </h3>
              <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
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
  );
}
