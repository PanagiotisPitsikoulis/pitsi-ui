export default function FaqListWithImagePosition() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse justify-center gap-12 lg:flex-row lg:justify-between xl:gap-24">
          <div className="w-full max-lg:mx-auto max-lg:max-w-2xl lg:w-3/5">
            <div className="mb-16">
              <h2 className="font-manrope text-center text-4xl leading-[3.25rem] font-bold text-gray-900 lg:text-left">
                Frequently Asked Question
              </h2>
            </div>
            <div className="mb-20 block">
              <div className="mb-10 flex w-full gap-4 lg:mb-16 lg:gap-7">
                <div className="relative flex h-8 w-8 flex-none items-center justify-center rounded-full bg-indigo-600">
                  {/* SVG removed */}
                </div>
                <div className="w-full">
                  <h4 className="mb-3 text-xl font-medium text-gray-900">
                    How can I contact customer support?
                  </h4>
                  <p className="leading-6 text-gray-500">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div className="mb-10 flex w-full gap-4 lg:mb-16 lg:gap-7">
                <div className="relative flex h-8 w-8 flex-none items-center justify-center rounded-full bg-indigo-600">
                  {/* SVG removed */}
                </div>
                <div className="w-full">
                  <h4 className="mb-3 text-xl font-medium text-gray-900">
                    How can I reset my password?
                  </h4>
                  <p className="leading-6 text-gray-500">
                    Go to the login page and click on the "Forgot password"
                    link. Enter the email associated with your account, and you
                    will receive an email with instructions on how to reset your
                    password.
                  </p>
                </div>
              </div>
              <div className="flex w-full gap-4 lg:gap-7">
                <div className="relative flex h-8 w-8 flex-none items-center justify-center rounded-full bg-indigo-600">
                  {/* SVG removed */}
                </div>
                <div className="w-full">
                  <h4 className="mb-3 text-xl font-medium text-gray-900">
                    How do I change my privacy settings?
                  </h4>
                  <p className="leading-6 text-gray-500">
                    To change your privacy settings, log in and go to the
                    settings or account page. Look for an option to "Privacy" or
                    "Security" and follow the instructions.
                  </p>
                </div>
              </div>
            </div>
            <button className="flex max-w-md items-center justify-center rounded-full bg-indigo-600 px-8 py-4 text-center text-lg font-semibold text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 max-lg:mx-auto max-lg:w-full">
              View All FAQs
            </button>
          </div>
          <div className="w-full max-lg:mx-auto max-lg:max-w-xl lg:w-2/5">
            <img
              src="https://pagedone.io/asset/uploads/1696231532.png"
              alt="Faq tailwind section"
              className="mx-auto rounded-3xl object-cover max-lg:w-full lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
