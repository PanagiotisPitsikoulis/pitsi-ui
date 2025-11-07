export default function ThreeColumnFaqCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start lg:gap-16 gap-10 inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3.5 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Frequently Asked Question
            </h2>
            <p className="text-center text-gray-500 text-lg font-normal leading-relaxed">
              Your go-to for common queries and quick answers.
            </p>
          </div>
          <div className="w-full flex-col justify-start items-start gap-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-b-2 border-x-2 border-x-transparent border-t-2 border-t-transparent border-indigo-600 hover:border-2 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  {/* SVG removed */}
                </div>
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  How to create an account?{" "}
                </h4>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                To create an account, visit our sign-up page, enter your
                details, and follow the prompts to complete the registration
                process.
              </p>
            </div>
            <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-b-2 border-x-2 border-x-transparent border-t-2 border-t-transparent border-indigo-600 hover:border-2 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  {/* SVG removed */}
                </div>
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  Have any trust issue?
                </h4>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                If you have trust issues or concerns, contact our support team,
                and we’ll assist you promptly to address any questions or
                doubts.
              </p>
            </div>
            <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-b-2 border-x-2 border-x-transparent border-t-2 border-t-transparent border-indigo-600 hover:border-2 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  {/* SVG removed */}
                </div>
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  How do I delete my account?
                </h4>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                To change your email address, go to account settings, select
                "Edit Profile," and update your email information.
              </p>
            </div>
            <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-b-2 border-x-2 border-x-transparent border-t-2 border-t-transparent border-indigo-600 hover:border-2 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  {/* SVG removed */}
                </div>
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  What is the payment process?
                </h4>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                The payment process involves selecting a payment method,
                entering your details, and confirming the transaction.
              </p>
            </div>
            <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-b-2 border-x-2 border-x-transparent border-t-2 border-t-transparent border-indigo-600 hover:border-2 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  {/* SVG removed */}
                </div>
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  How can I reset my password?
                </h4>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                To reset your password, click the "Forgot Password" link on the
                login page and follow the instructions sent to your email.
              </p>
            </div>
            <div className="w-full group p-5 bg-gray-50 rounded-[10px] border-b-2 border-x-2 border-x-transparent border-t-2 border-t-transparent border-indigo-600 hover:border-2 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-center gap-2 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  {/* SVG removed */}
                </div>
                <h4 className="text-gray-900 group-hover:text-indigo-600 transition-all duration-700 ease-in-out text-xl font-medium leading-8">
                  Need Help?{" "}
                </h4>
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed">
                Let us know how we can assist! We're here to ensure you get the
                help and support you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
