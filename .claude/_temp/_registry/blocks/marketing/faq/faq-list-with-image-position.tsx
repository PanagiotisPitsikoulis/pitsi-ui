export default function FaqListWithImagePosition() {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse justify-center  gap-12  xl:gap-24 lg:flex-row lg:justify-between ">
          <div className="w-full max-lg:max-w-2xl max-lg:mx-auto lg:w-3/5">
            <div className="mb-16">
              <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem] lg:text-left">
                Frequently Asked Question
              </h2>
            </div>
            <div className="block mb-20">
              <div className="flex gap-4 w-full mb-10 lg:mb-16 lg:gap-7">
                <div className="relative w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-none">
                  {/* SVG removed */}
                </div>
                <div className="w-full">
                  <h4 className="mb-3 text-xl font-medium text-gray-900">
                    How can I contact customer support?
                  </h4>
                  <p className="text-gray-500 leading-6">
                    To contact customer support, look for a "Contact us" or
                    "Help" button or link on the website or platform. You may be
                    able to email, call, or chat with customer support for
                    assistance.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 w-full mb-10 lg:mb-16 lg:gap-7">
                <div className="relative w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-none">
                  {/* SVG removed */}
                </div>
                <div className="w-full">
                  <h4 className="mb-3 text-xl font-medium text-gray-900">
                    How can I reset my password?
                  </h4>
                  <p className="text-gray-500 leading-6">
                    Go to the login page and click on the "Forgot password"
                    link. Enter the email associated with your account, and you
                    will receive an email with instructions on how to reset your
                    password.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 w-full lg:gap-7">
                <div className="relative w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-none">
                  {/* SVG removed */}
                </div>
                <div className="w-full">
                  <h4 className="mb-3 text-xl font-medium text-gray-900">
                    How do I change my privacy settings?
                  </h4>
                  <p className="text-gray-500 leading-6">
                    To change your privacy settings, log in and go to the
                    settings or account page. Look for an option to "Privacy" or
                    "Security" and follow the instructions.
                  </p>
                </div>
              </div>
            </div>
            <button className="py-4 px-8 max-w-md max-lg:w-full flex items-center justify-center  text-center max-lg:mx-auto bg-indigo-600 shadow-sm rounded-full text-lg text-white font-semibold transition-all duration-500 hover:bg-indigo-700">
              View All FAQs
            </button>
          </div>
          <div className="w-full lg:w-2/5 max-lg:max-w-xl max-lg:mx-auto">
            <img
              src="https://pagedone.io/asset/uploads/1696231532.png"
              alt="Faq tailwind section"
              className="mx-auto lg:mx-0 max-lg:w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
