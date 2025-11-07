export default function LoginPageWithGradientBackgroundForm() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-indigo-400 lg:pt-24 pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-28">
          <div className="flex items-center lg:mb-0 mb-10">
            <div className="lg:text-left text-center">
              <img
                src="https://pagedone.io/asset/uploads/1702373195.png"
                alt="pagedone logo"
                className="mb-8 lg:ml-0 mx-auto object-cover"
              />
              <h1 className="text-white font-manrope lg:text-6xl text-3xl font-bold leading-tight mb-4">
                Hey, Hello!
              </h1>
              <p className="text-white text-xl font-normal leading-8 mb-8">
                Join The Waitlist For The Design System!
              </p>
              <h5 className="text-indigo-300 text-lg font-normal leading-7">
                We provide all the advantages that can simplify all your
                financial transactions without any further requirements{" "}
              </h5>
            </div>
          </div>
          <div className="rounded-t-3xl bg-white p-16">
            <h2 className="text-gray-900 text-center font-manrope text-3xl font-bold leading-10 mb-3">
              Welcome Back
            </h2>
            <p className="text-center text-gray-500 text-base font-medium leading-6 lg:mb-16 mb-8">
              Let’s get started with your 30 days free trail.
            </p>
            <form>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="default-search"
                  className="block w-full h-12 px-4 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 bg-transparent border border-gray-300 shadow-sm rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="Username"
                  required
                />
              </div>
              <div className="relative mb-6">
                <input
                  type="text"
                  id="default-search"
                  className="block w-full h-12 px-4 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 bg-transparent border border-gray-300 shadow-sm rounded-full placeholder-gray-400 focus:outline-none "
                  placeholder="Password"
                  required
                />
                <a
                  href="javascript:;"
                  className="text-indigo-600 text-base font-normal leading-6 flex justify-center pt-2"
                >
                  Forgot password?
                </a>
              </div>
              <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 shadow-sm">
                Login
              </button>
              <div className="lg:my-11 my-7 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200">
                <span className="flex items-center justify-center text-gray-400 text-lg font-normal leading-7 px-6">
                  OR
                </span>
              </div>
              <div className="flex md:flex-row flex-col gap-6">
                <button className="w-full h-12 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 flex items-center justify-center text-indigo-600 text-base font-semibold leading-6">
                  Google{" "}
                </button>
                <button className="w-full h-12 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 flex items-center justify-center text-indigo-600 text-base font-semibold leading-6">
                  Facebook{" "}
                </button>
              </div>
              <a
                href="javascript:;"
                className="flex justify-center text-gray-900 text-base font-medium leading-6 lg:mt-16 mt-8"
              >
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
      </div>
    </section>
  );
}
