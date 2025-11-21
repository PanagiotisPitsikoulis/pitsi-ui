export default function ThreeColumnFaqCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start gap-10 lg:gap-16">
          <div className="flex w-full flex-col items-center justify-start gap-3.5">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Frequently Asked Question
            </h2>
            <p className="text-center text-lg leading-relaxed font-normal text-gray-500">
              Your go-to for common queries and quick answers.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 flex-col items-start justify-start gap-7 md:grid-cols-2 lg:grid-cols-3">
            <div className="group inline-flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-x-2 border-t-2 border-b-2 border-indigo-600 border-x-transparent border-t-transparent bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-2 hover:border-indigo-500">
              <div className="inline-flex items-center justify-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  {/* SVG removed */}
                </div>
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  How to create an account?{" "}
                </h4>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                To create an account, visit our sign-up page, enter your
                details, and follow the prompts to complete the registration
                process.
              </p>
            </div>
            <div className="group inline-flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-x-2 border-t-2 border-b-2 border-indigo-600 border-x-transparent border-t-transparent bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-2 hover:border-indigo-500">
              <div className="inline-flex items-center justify-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  {/* SVG removed */}
                </div>
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Have any trust issue?
                </h4>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                If you have trust issues or concerns, contact our support team,
                and we’ll assist you promptly to address any questions or
                doubts.
              </p>
            </div>
            <div className="group inline-flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-x-2 border-t-2 border-b-2 border-indigo-600 border-x-transparent border-t-transparent bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-2 hover:border-indigo-500">
              <div className="inline-flex items-center justify-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  {/* SVG removed */}
                </div>
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  How do I delete my account?
                </h4>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                To change your email address, go to account settings, select
                "Edit Profile," and update your email information.
              </p>
            </div>
            <div className="group inline-flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-x-2 border-t-2 border-b-2 border-indigo-600 border-x-transparent border-t-transparent bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-2 hover:border-indigo-500">
              <div className="inline-flex items-center justify-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  {/* SVG removed */}
                </div>
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  What is the payment process?
                </h4>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                The payment process involves selecting a payment method,
                entering your details, and confirming the transaction.
              </p>
            </div>
            <div className="group inline-flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-x-2 border-t-2 border-b-2 border-indigo-600 border-x-transparent border-t-transparent bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-2 hover:border-indigo-500">
              <div className="inline-flex items-center justify-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  {/* SVG removed */}
                </div>
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  How can I reset my password?
                </h4>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                To reset your password, click the "Forgot Password" link on the
                login page and follow the instructions sent to your email.
              </p>
            </div>
            <div className="group inline-flex w-full flex-col items-start justify-start gap-3 rounded-[10px] border-x-2 border-t-2 border-b-2 border-indigo-600 border-x-transparent border-t-transparent bg-gray-50 p-5 transition-all duration-700 ease-in-out hover:border-2 hover:border-indigo-500">
              <div className="inline-flex items-center justify-start gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  {/* SVG removed */}
                </div>
                <h4 className="text-xl leading-8 font-medium text-gray-900 transition-all duration-700 ease-in-out group-hover:text-indigo-600">
                  Need Help?{" "}
                </h4>
              </div>
              <p className="text-base leading-relaxed font-normal text-gray-500">
                Let us know how we can assist! We're here to ensure you get the
                help and support you need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
