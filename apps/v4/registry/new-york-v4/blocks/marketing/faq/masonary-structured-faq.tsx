export default function MasonaryStructuredFaq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-3.5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Frequently Asked Question
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Trusted in more than 100 countries and 5 million customers.
            </p>
          </div>
          <div className="inline-flex w-full grid-cols-3 flex-col items-start justify-start gap-7 lg:grid">
            <div className="flex w-full flex-col items-start justify-start gap-7 md:flex-row lg:flex-col">
              <div className="group flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-t border-r-2 border-b-2 border-l border-gray-500 bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-indigo-500">
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  How to create an account?{" "}
                </h4>
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  To create an account, find the "Sign up" or "Create account"
                  button, fill out the registration form with your personal
                  information, and click "Create account" or "Sign up." Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
              <div className="group flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-t border-r-2 border-b-2 border-l border-gray-500 bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-indigo-500">
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  How do I update my billing information?
                </h4>
                <p className="text-base leading-relaxed font-normal break-all text-gray-500">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-7 md:flex-row lg:flex-col">
              <div className="group flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-t border-r-2 border-b-2 border-l border-gray-500 bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-indigo-500">
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  How do I find my purchase history?
                </h4>
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  To find your purchase history, log in and go to the account or
                  purchase history page. Look for a list of your past purchases
                  or orders, and click on any item to see more details.
                </p>
              </div>
              <div className="group flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-t border-r-2 border-b-2 border-l border-gray-500 bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-indigo-500">
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  How can I contact customer support?
                </h4>
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  ou can contact customer support by using the live chat feature
                  on our website, visiting our Help Center, or submitting a
                  support ticket through your account portal. Our team is ready
                  to assist you with any inquiries.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-7 md:flex-row lg:flex-col">
              <div className="group flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-t border-r-2 border-b-2 border-l border-gray-500 bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-indigo-500">
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  How do I join a group or community?
                </h4>
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  To join a group or community, navigate to the "Groups" or
                  "Communities" section on our website. Browse through the
                  available options and click on the group you are interested
                  in. Then, follow the instructions to request membership or
                  join directly. You may need to wait for approval from a group
                  administrator.
                </p>
              </div>
              <div className="group flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-t border-r-2 border-b-2 border-l border-gray-500 bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-indigo-500">
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  How do I change my email address?
                </h4>
                <p className="text-base leading-relaxed font-normal text-gray-500">
                  To change your email address, go to your account settings,
                  select "Edit Profile," and update your email information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
