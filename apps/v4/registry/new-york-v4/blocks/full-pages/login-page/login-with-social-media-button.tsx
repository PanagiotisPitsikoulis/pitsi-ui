export default function LoginWithSocialMediaButton() {
  return (
    <section>
      <div className="mx-auto max-w-md max-lg:px-6 sm:max-w-xl lg:max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 lg:pl-16 xl:gap-28 xl:pl-28">
          <div className="flex w-full items-center justify-center py-10 xl:py-0">
            <div className="w-full lg:max-w-lg">
              <img
                src="https://pagedone.io/asset/uploads/1702362108.png"
                alt="pagedone logo"
                className="mb-8 object-cover lg:mb-11"
              />
              <img
                src="https://pagedone.io/asset/uploads/1702367338.png"
                alt="Login tailwind page"
                className="mb-8 h-auto w-full object-cover lg:hidden"
              />
              <h2 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
                Welcome Back
              </h2>
              <p className="mb-6 text-base leading-6 font-medium text-gray-500">
                Let’s get started with your 30 days free trail
              </p>
              <div className="mb-5 flex w-full flex-col gap-6 md:flex-row">
                <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-50 text-base leading-6 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                  Google{" "}
                </button>
                <button className="flex h-12 w-full items-center justify-center rounded-full bg-indigo-50 text-base leading-6 font-semibold text-indigo-600 transition-all duration-700 hover:bg-indigo-100">
                  Facebook{" "}
                </button>
              </div>
              <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-100 after:mt-0.5 after:flex-1 after:border-t after:border-gray-100">
                <span className="flex items-center justify-center px-6 text-base leading-6 font-normal text-gray-400">
                  OR
                </span>
              </div>
              <form>
                <div className="relative mb-6">
                  <label className="mb-2 flex items-center text-base leading-6 font-medium text-gray-600">
                    Email
                  </label>
                  <div className="relative text-gray-400 focus-within:text-gray-900">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block h-12 w-full rounded-full border border-gray-300 bg-transparent pr-5 pl-12 text-lg leading-7 font-normal text-gray-900 shadow-xs placeholder:text-gray-400 focus:outline-none"
                      placeholder="harsh@pagedone.com"
                    />
                  </div>
                </div>
                <div className="relative mb-6">
                  <label className="mb-2 flex items-center text-base leading-6 font-medium text-gray-600">
                    Password
                  </label>
                  <div className="relative mb-2 text-gray-400 focus-within:text-gray-900">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block h-12 w-full rounded-full border border-gray-300 bg-transparent pr-5 pl-12 text-lg leading-7 font-normal text-gray-900 shadow-xs placeholder:text-gray-400 focus:outline-none"
                      placeholder="XXXXXXXXX"
                    />
                  </div>
                  <a className="flex justify-end text-base leading-6 font-normal text-indigo-600">
                    Forgot password?
                  </a>
                </div>
                <button className="mb-6 h-12 w-full rounded-full bg-indigo-600 text-base leading-6 font-semibold text-white shadow-sm transition-all duration-700 hover:bg-indigo-800">
                  Login
                </button>
                <a className="flex justify-center text-base leading-6 font-medium text-gray-900">
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
          <img
            src="https://pagedone.io/asset/uploads/1702367338.png"
            alt="Login tailwind page"
            className="h-full w-full object-cover max-lg:hidden"
          />
        </div>
      </div>
    </section>
  )
}
