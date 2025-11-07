export default function FaqSectionAsAListBlock() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h6 className="font-medium text-center text-gray-500 mb-5">
            Most asked questions
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem] ">
            Questions &amp; Answers
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:grid-cols-2 mb-20 max-w-md md:max-w-2xl lg:max-w-full max-lg:mx-auto">
          <div className="flex gap-1 w-full flex-col lg:flex-row lg:gap-7">
            <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-none">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4">
                How can I contact customer support?
              </h3>
              <p className="text-gray-600">
                To contact customer support, look for a "Contact us" or "Help"
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div className="flex gap-1 w-full flex-col lg:flex-row lg:gap-7">
            <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-none">
              {/* SVG removed */}
            </div>
            <div className="block ">
              <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4">
                How do I find my purchase history?
              </h3>
              <p className="text-gray-600">
                To find your purchase history, log in and go to the account or
                purchase history page. Look for a list of your past purchases or
                orders, and click on any item to see more details.
              </p>
            </div>
          </div>
          <div className="flex gap-1 w-full flex-col lg:flex-row lg:gap-7">
            <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-none">
              {/* SVG removed */}
            </div>
            <div className="block ">
              <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4">
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
          <div className="flex gap-1 w-full flex-col lg:flex-row lg:gap-7">
            <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-none">
              {/* SVG removed */}
            </div>
            <div className="block  ">
              <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4">
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
        <div className="py-3 px-7 bg-indigo-50 rounded-full text-lg text-center text-gray-600 w-fit mx-auto">
          Didn’t find the answer you are looking for ?
          <a href="#" className="text-indigo-600 font-semibold">
            {" "}
            CONTACT SUPPORT
          </a>
        </div>
      </div>
    </section>
  );
}
