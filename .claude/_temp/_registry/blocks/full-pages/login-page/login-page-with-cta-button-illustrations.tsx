export default function LoginPageWithCtaButtonIllustrations() {
  return (
    <section className="lg:pt-0 pt-10">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="flex items-center justify-center lg:mb-0 mb-14">
          <div>
            <img
              src="https://pagedone.io/asset/uploads/1702362108.png"
              alt="pagedone logo"
              className="mx-auto lg:mb-11 mb-7 object-cover"
            />
            <h2 className="text-gray-900 text-center text-2xl font-bold font-manrope leading-9 mb-3">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-center text-base font-medium leading-6">
              Let’s get started with your 30 days free trail
            </p>
            <div className="my-11">
              <button className="w-full h-12 mb-5 border border-gray-300 hover:bg-gray-100 transition-all duration-700 rounded-full shadow-xs text-gray-900 text-base font-semibold leading-6 flex items-center justify-center">
                Sign in with Google{" "}
              </button>
              <button className="w-full h-12 mb-5 border border-gray-300 hover:bg-gray-100 transition-all duration-700 rounded-full shadow-xs text-gray-900 text-base font-semibold leading-6 flex items-center justify-center">
                Sign in with Facebook{" "}
              </button>
              <button className="w-full h-12 mb-5 border border-gray-300 hover:bg-gray-100 transition-all duration-700 rounded-full shadow-xs text-gray-900 text-base font-semibold leading-6 flex items-center justify-center">
                Sign in with Facebook{" "}
              </button>
              <button className="w-full h-12 border border-gray-300 hover:bg-gray-100 transition-all duration-700 rounded-full shadow-xs text-gray-900 text-base font-semibold leading-6 flex items-center justify-center">
                Sign in with Email{" "}
              </button>
            </div>
            <h6 className="text-gray-900 text-center text-base font-medium leading-6">
              Don’t have an account?{" "}
              <a
                href="javascript:;"
                className="pl-2 text-indigo-600 text-base font-semibold leading-6"
              >
                Sign Up
              </a>
            </h6>
          </div>
        </div>
        <img
          src="https://pagedone.io/asset/uploads/1702373643.png"
          alt="curve design image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
