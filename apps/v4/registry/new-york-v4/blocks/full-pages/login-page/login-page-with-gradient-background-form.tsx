export default function LoginPageWithGradientBackgroundForm() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 pt-12 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-28 lg:grid-cols-2">
          <div className="mb-10 flex items-center lg:mb-0">
            <div className="text-center lg:text-left">
              <img
                src="https://pagedone.io/asset/uploads/1702373195.png"
                alt="pagedone logo"
                className="mx-auto mb-8 object-cover lg:ml-0"
              />
              <h1 className="font-manrope mb-4 text-3xl leading-tight font-bold text-white lg:text-6xl">
                Hey, Hello!
              </h1>
              <p className="mb-8 text-xl leading-8 font-normal text-white">
                Join The Waitlist For The Design System!
              </p>
              <h5 className="text-lg leading-7 font-normal text-indigo-300">
                We provide all the advantages that can simplify all your
                financial transactions without any further requirements{" "}
              </h5>
            </div>
          </div>
          <div className="rounded-t-3xl bg-white p-16">
            <h2 className="font-manrope mb-3 text-center text-3xl leading-10 font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="mb-8 text-center text-base leading-6 font-medium text-gray-500 lg:mb-16">
              Let’s get started with your 30 days free trail.
            </p>
            <form>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="default-search"
                  className="block h-12 w-full rounded-full border border-gray-300 bg-transparent px-4 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-sm placeholder:text-gray-400 focus:outline-none"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="default-search"
                  className="block h-12 w-full rounded-full border border-gray-300 bg-transparent px-4 text-lg leading-7 font-normal text-gray-900 placeholder-gray-400 shadow-sm placeholder:text-gray-400 focus:outline-none"
                  placeholder="Password"
                  required
                />
                <a
                  href="javascript:;"
                  className="flex justify-center pt-2 text-base leading-6 font-normal text-indigo-600"
                >
                  Forgot password?
                </a>
              </div>
              <button className="h-12 w-full rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800">
                Login
              </button>
              <div className="my-7 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200 lg:my-11">
                <span className="flex items-center justify-center px-6 text-lg leading-7 font-normal text-gray-400">
                  OR
                </span>
              </div>
              <div className="flex flex-col gap-6 md:flex-row">
                <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-50 text-base leading-6 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                  Google{" "}
                </button>
                <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-50 text-base leading-6 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                  Facebook{" "}
                </button>
              </div>
              <a
                href="javascript:;"
                className="mt-8 flex justify-center text-base leading-6 font-medium text-gray-900 lg:mt-16"
              >
                {" "}
                Don’t have an account?{" "}
                <span className="pl-3 font-semibold text-indigo-600">
                  {" "}
                  Sign Up
                </span>
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
