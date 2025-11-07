export default function LoginWithSocialMediaButton() {
  return (
    <section>
      <div className="max-w-md mx-auto sm:max-w-xl lg:max-w-full max-lg:px-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 xl:gap-28 lg:pl-16 xl:pl-28">
          <div className="flex items-center justify-center xl:py-0 py-10 w-full ">
            <div className="w-full lg:max-w-lg">
              <img
                src="https://pagedone.io/asset/uploads/1702362108.png"
                alt="pagedone logo"
                className="lg:mb-11 mb-8 object-cover"
              />
              <img
                src="https://pagedone.io/asset/uploads/1702367338.png"
                alt="Login tailwind page"
                className="h-auto w-full lg:hidden mb-8 object-cover"
              />
              <h2 className="text-gray-900 text-2xl font-bold font-manrope leading-9 mb-3">
                Welcome Back
              </h2>
              <p className="text-gray-500 text-base font-medium leading-6 mb-6">
                Let’s get started with your 30 days free trail
              </p>
              <div className="flex md:flex-row flex-col gap-6 mb-5 w-full">
                <button className="w-full h-12 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 flex items-center justify-center text-indigo-600 text-base font-semibold leading-6">
                  Google{" "}
                </button>
                <button className="w-full h-12 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 flex items-center justify-center text-indigo-600 text-base font-semibold leading-6">
                  Facebook{" "}
                </button>
              </div>
              <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-100 after:mt-0.5 after:flex-1 after:border-t after:border-gray-100">
                <span className="text-gray-400 text-base font-normal leading-6 flex items-center justify-center px-6">
                  OR
                </span>
              </div>
              <form>
                <div className="relative mb-6">
                  <label className="flex  items-center mb-2 text-gray-600 text-base font-medium leading-6">
                    Email
                  </label>
                  <div className="relative text-gray-400 focus-within:text-gray-900">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full h-12 pr-5 pl-12 text-lg font-normal shadow-xs text-gray-900 placeholder:text-gray-400 leading-7 bg-transparent border border-gray-300 rounded-full focus:outline-none"
                      placeholder="harsh@pagedone.com"
                    />
                  </div>
                </div>
                <div className="relative mb-6">
                  <label className="flex items-center mb-2 text-gray-600 text-base font-medium leading-6">
                    Password
                  </label>
                  <div className="relative text-gray-400 focus-within:text-gray-900 mb-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full h-12 pr-5 pl-12 text-lg font-normal shadow-xs text-gray-900 placeholder:text-gray-400 leading-7 bg-transparent border border-gray-300 rounded-full focus:outline-none"
                      placeholder="XXXXXXXXX"
                    />
                  </div>
                  <a className="text-indigo-600 text-base font-normal leading-6 flex justify-end">
                    Forgot password?
                  </a>
                </div>
                <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 shadow-sm mb-6">
                  Login
                </button>
                <a className="flex justify-center text-gray-900 text-base font-medium leading-6">
                  {" "}
                  Don’t have an account?{" "}
                  <span className="text-indigo-600 font-semibold pl-3">
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
            className="h-full w-full max-lg:hidden object-cover"
          />
        </div>
      </div>
    </section>
  );
}
