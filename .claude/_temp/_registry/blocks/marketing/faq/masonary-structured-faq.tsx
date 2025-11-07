export default function MasonaryStructuredFaq() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-16 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3.5 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently Asked Question
            </h2>
            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              Trusted in more than 100 countries and 5 million customers.
            </p>
          </div>
          <div className="w-full justify-start items-start gap-7 lg:grid grid-cols-3 inline-flex flex-col">
            <div className="w-full justify-start items-start gap-7 flex lg:flex-col md:flex-row flex-col">
              <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-l border-r-2 border-t border-b-2 border-gray-500 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 flex">
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  How to create an account?{" "}
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  To create an account, find the "Sign up" or "Create account"
                  button, fill out the registration form with your personal
                  information, and click "Create account" or "Sign up." Verify
                  your email address if needed, and then log in to start using
                  the platform.
                </p>
              </div>
              <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-l border-r-2 border-t border-b-2 border-gray-500 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 flex">
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  How do I update my billing information?
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed break-all">
                  To update your billing information, log in and go to the
                  billing or payment page. Look for an option to "Update payment
                  method" or "Edit billing information" and follow the prompts.
                </p>
              </div>
            </div>
            <div className="w-full justify-start items-start gap-7 flex lg:flex-col md:flex-row flex-col">
              <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-l border-r-2 border-t border-b-2 border-gray-500 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 flex">
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  How do I find my purchase history?
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  To find your purchase history, log in and go to the account or
                  purchase history page. Look for a list of your past purchases
                  or orders, and click on any item to see more details.
                </p>
              </div>
              <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-l border-r-2 border-t border-b-2 border-gray-500 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 flex">
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  How can I contact customer support?
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  ou can contact customer support by using the live chat feature
                  on our website, visiting our Help Center, or submitting a
                  support ticket through your account portal. Our team is ready
                  to assist you with any inquiries.
                </p>
              </div>
            </div>
            <div className="w-full justify-start items-start gap-7 flex lg:flex-col md:flex-row flex-col">
              <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-l border-r-2 border-t border-b-2 border-gray-500 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 flex">
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  How do I join a group or community?
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  To join a group or community, navigate to the "Groups" or
                  "Communities" section on our website. Browse through the
                  available options and click on the group you are interested
                  in. Then, follow the instructions to request membership or
                  join directly. You may need to wait for approval from a group
                  administrator.
                </p>
              </div>
              <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-l border-r-2 border-t border-b-2 border-gray-500 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 flex">
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  How do I change my email address?
                </h4>
                <p className="text-gray-500 text-base font-normal leading-relaxed">
                  To change your email address, go to your account settings,
                  select "Edit Profile," and update your email information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
