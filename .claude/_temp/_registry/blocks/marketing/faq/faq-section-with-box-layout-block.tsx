export default function FaqSectionWithBoxLayoutBlock() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h6 className="font-medium text-center text-gray-500 mb-5">
            Most asked questions
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem] ">
            Questions &amp; Answers
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 bg-white rounded-2xl max-w-lg mx-auto md:max-w-3xl lg:max-w-5xl xl:max-w-full">
          <div className=" group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none border-b border-r-0 md:border-r border-solid border-gray-200 lg:p-10 lg:flex-row lg:gap-6 hover:bg-indigo-600">
            <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-none group-hover:bg-white">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4 group-hover:text-white">
                How do I find my purchase history?
              </h3>
              <p className="text-gray-500 leading-7 group-hover:text-white">
                First log in and go to the account or purchase history page.
                Look for a list of your past purchases or orders, and click on
                any item to see more details.
              </p>
            </div>
          </div>
          <div className="group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-none md:rounded-tr-2xl border-b border-solid border-gray-200  lg:p-10 lg:flex-row lg:gap-6 hover:bg-indigo-600">
            <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-none group-hover:bg-white">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4 group-hover:text-white">
                How do I change my privacy settings?
              </h3>
              <p className="text-gray-500 leading-7 group-hover:text-white">
                To change your privacy settings, log in and go to the settings
                or account page. Look for an option to "Privacy" or "Security"
                and follow the instructions.
              </p>
            </div>
          </div>
          <div className="group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-none md:rounded-bl-2xl border-r-0 md:border-r border-b md:border-b-0 border-solid border-gray-200 lg:p-10 lg:flex-row lg:gap-6 hover:bg-indigo-600">
            <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-none group-hover:bg-white">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4 group-hover:text-white">
                How do I change my email address?
              </h3>
              <p className="text-gray-500 leading-7 group-hover:text-white">
                To change your email address, log in and go to the settings or
                account page. Look for an option to "Change email" or "Edit
                account information" and follow the prompts. Be sure to save
                your changes before exiting.
              </p>
            </div>
          </div>
          <div className="group flex gap-4 w-full flex-col p-5 transition-all duration-500 rounded-br-2xl lg:rounded-br-2xl lg:p-10 lg:flex-row lg:gap-6 hover:bg-indigo-600">
            <div className="relative w-10 md:w-16 h-10 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center flex-none group-hover:bg-white">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope font-medium text-2xl text-gray-900 my-4 group-hover:text-white">
                How do I update my profile information?
              </h3>
              <p className="text-gray-500 leading-7 group-hover:text-white">
                To update your profile information, log in and go to the profile
                or account page. Look for an option to "Edit profile" or "Update
                information" and follow the prompts. Be sure to save your
                changes before exiting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
