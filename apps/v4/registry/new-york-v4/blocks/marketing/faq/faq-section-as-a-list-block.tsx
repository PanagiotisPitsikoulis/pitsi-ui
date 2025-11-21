export default function FaqSectionAsAListBlock() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h6 className="mb-5 text-center font-medium text-gray-500">
            Most asked questions
          </h6>
          <h2 className="font-manrope text-center text-4xl leading-[3.25rem] font-bold text-gray-900">
            Questions &amp; Answers
          </h2>
        </div>
        <div className="mb-20 grid max-w-md grid-cols-1 gap-8 max-lg:mx-auto md:max-w-2xl md:grid-cols-2 lg:max-w-full lg:grid-cols-2">
          <div className="flex w-full flex-col gap-1 lg:flex-row lg:gap-7">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 md:h-16 md:w-16">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope my-4 text-2xl font-medium text-gray-900">
                How can I contact customer support?
              </h3>
              <p className="text-gray-600">
                To contact customer support, look for a "Contact us" or "Help"
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-1 lg:flex-row lg:gap-7">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 md:h-16 md:w-16">
              {/* SVG removed */}
            </div>
            <div className="block">
              <h3 className="font-manrope my-4 text-2xl font-medium text-gray-900">
                How do I find my purchase history?
              </h3>
              <p className="text-gray-600">
                To find your purchase history, log in and go to the account or
                purchase history page. Look for a list of your past purchases or
                orders, and click on any item to see more details.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-1 lg:flex-row lg:gap-7">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 md:h-16 md:w-16">
              {/* SVG removed */}
            </div>
            <div className="block">
              <h3 className="font-manrope my-4 text-2xl font-medium text-gray-900">
                How do I update my billing information?
              </h3>
              <p className="text-gray-600">
                To update your billing information, log in and go to the billing
                or payment page. Look for an option to "Update payment method"
                or "Edit billing information" and follow the prompts. Be sure to
                save your changes before exiting.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-1 lg:flex-row lg:gap-7">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 md:h-16 md:w-16">
              {/* SVG removed */}
            </div>
            <div className="block">
              <h3 className="font-manrope my-4 text-2xl font-medium text-gray-900">
                How do I upload a file or document?
              </h3>
              <p className="text-gray-600">
                To upload a file or document, look for a button or link that
                says "Upload" or "Add file." Click on the button or link and
                follow the prompts to select the file from your computer or
                device. Be sure to check the file size and format requirements
                before uploading.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto w-fit rounded-full bg-indigo-50 px-7 py-3 text-center text-lg text-gray-600">
          Didn’t find the answer you are looking for ?
          <a href="#" className="font-semibold text-indigo-600">
            {" "}
            CONTACT SUPPORT
          </a>
        </div>
      </div>
    </section>
  )
}
