export default function LoginPageWithSplitForm() {
  return (
    <section>
      <div className="lg:flex xl:gap-28 lg:gap-16 gap-12 h-full">
        <div className="lg:w-3/5 grid relative">
          <img
            src="https://pagedone.io/asset/uploads/1702374726.png"
            alt="gradient background image"
            className="w-full h-full bg-cover bg-no-repeat absolute -z-10 object-cover"
          />
          <div className="p-11 bg-white shadow-xl rounded-r-3xl grid xl:m-28 m-12">
            <div>
              <img
                src="https://pagedone.io/asset/uploads/1702362108.png"
                alt="pagedone logo"
                className="mb-8 object-cover"
              />
              <h1 className="text-black font-manrope lg:text-5xl text-3xl font-bold leading-tight mb-4">
                Hey, Hello!
              </h1>
              <a
                href="javascript:;"
                className="text-indigo-600 text-xl font-normal leading-8"
              >
                Join The Waitlist For The Design System!
              </a>
              <p className="text-gray-400 text-lg font-normal leading-7 pt-6">
                We provide all the advantages that can simplify all your
                financial transactions without any further requirements.
              </p>
            </div>
            <div className="flex items-end">
              <div>
                <p className="text-gray-900 text-lg font-medium leading-7 mb-6">
                  Don’t have an account?
                </p>
                <button className="w-36	h-12 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-base font-semibold leading-6">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="2xl:w-2/5 w-auto flex items-center justify-center mx-10">
          <form className="lg:my-0 my-10">
            <h2 className="text-gray-900 font-manrope text-3xl lg:text-start text-center font-bold leading-10 mb-3">
              Sign In
            </h2>
            <p className="text-gray-500 text-base lg:text-start text-center font-medium leading-6 mb-11">
              Let’s get started with your 30 days free trail.
            </p>
            <input
              type="text"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Username"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-900 placeholder:text-gray-400 text-lg font-normal leading-7 rounded-full border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
              placeholder="Password"
            />
            <a href="javascript:;" className="flex justify-end mb-6">
              <span className="text-indigo-600 text-right text-base font-normal leading-6">
                Forgot Password?
              </span>
            </a>
            <button className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-full hover:bg-indigo-800 transition-all duration-700 bg-indigo-600 shadow-sm">
              Login
            </button>
            <div className="xl:my-11 lg:my-9 my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-200 after:mt-0.5 after:flex-1 after:border-t after:border-gray-200">
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
          </form>
        </div>
      </div>
    </section>
  );
}
