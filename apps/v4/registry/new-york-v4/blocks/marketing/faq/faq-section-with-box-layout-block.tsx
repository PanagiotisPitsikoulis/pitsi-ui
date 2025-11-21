export default function FaqSectionWithBoxLayoutBlock() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h6 className="mb-5 text-center font-medium text-gray-500">
            Most asked questions
          </h6>
          <h2 className="font-manrope text-center text-4xl leading-[3.25rem] font-bold text-gray-900">
            Questions &amp; Answers
          </h2>
        </div>
        <div className="mx-auto grid max-w-lg grid-cols-1 rounded-2xl bg-white md:max-w-3xl md:grid-cols-2 lg:max-w-5xl lg:grid-cols-2 xl:max-w-full">
          <div className="group flex w-full flex-col gap-4 rounded-t-2xl border-r-0 border-b border-solid border-gray-200 p-5 transition-all duration-500 hover:bg-indigo-600 md:rounded-tl-2xl md:rounded-tr-none md:border-r lg:flex-row lg:gap-6 lg:p-10">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 group-hover:bg-white md:h-16 md:w-16">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope my-4 text-2xl font-medium text-gray-900 group-hover:text-white">
                How do I find my purchase history?
              </h3>
              <p className="leading-7 text-gray-500 group-hover:text-white">
                First log in and go to the account or purchase history page.
                Look for a list of your past purchases or orders, and click on
                any item to see more details.
              </p>
            </div>
          </div>
          <div className="group flex w-full flex-col gap-4 rounded-none border-b border-solid border-gray-200 p-5 transition-all duration-500 hover:bg-indigo-600 md:rounded-tr-2xl lg:flex-row lg:gap-6 lg:p-10">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 group-hover:bg-white md:h-16 md:w-16">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope my-4 text-2xl font-medium text-gray-900 group-hover:text-white">
                How do I change my privacy settings?
              </h3>
              <p className="leading-7 text-gray-500 group-hover:text-white">
                To change your privacy settings, log in and go to the settings
                or account page. Look for an option to "Privacy" or "Security"
                and follow the instructions.
              </p>
            </div>
          </div>
          <div className="group flex w-full flex-col gap-4 rounded-none border-r-0 border-b border-solid border-gray-200 p-5 transition-all duration-500 hover:bg-indigo-600 md:rounded-bl-2xl md:border-r md:border-b-0 lg:flex-row lg:gap-6 lg:p-10">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 group-hover:bg-white md:h-16 md:w-16">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope my-4 text-2xl font-medium text-gray-900 group-hover:text-white">
                How do I change my email address?
              </h3>
              <p className="leading-7 text-gray-500 group-hover:text-white">
                To change your email address, log in and go to the settings or
                account page. Look for an option to "Change email" or "Edit
                account information" and follow the prompts. Be sure to save
                your changes before exiting.
              </p>
            </div>
          </div>
          <div className="group flex w-full flex-col gap-4 rounded-br-2xl p-5 transition-all duration-500 hover:bg-indigo-600 lg:flex-row lg:gap-6 lg:rounded-br-2xl lg:p-10">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-indigo-600 group-hover:bg-white md:h-16 md:w-16">
              {/* SVG removed */}
            </div>
            <div className="block w-full">
              <h3 className="font-manrope my-4 text-2xl font-medium text-gray-900 group-hover:text-white">
                How do I update my profile information?
              </h3>
              <p className="leading-7 text-gray-500 group-hover:text-white">
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
  )
}
