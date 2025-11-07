export default function ModalWithSocialMediaButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-34"
            data-modal-target="modalBox-34"
            data-modal-toggle="modalBox-34"
          >
            Login
          </button>
          <div
            id="modalBox-34"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="bg-white p-6">
                <div className="flex items-center justify-end mb-4 w-full">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-34"
                    data-modal-target="modalBox-34"
                  ></button>
                </div>
                <h6 className="text-lg font-bold leading-8 text-gray-900 text-center mb-1">
                  Get Started
                </h6>
                <p className="text-xs font-normal text-gray-500 mb-5 text-center">
                  You can access unlimited high resolution photo
                </p>
                <div className="flex flex-col gap-3 mb-2">
                  <button className="flex items-center justify-center gap-2.5 w-full py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100 focus-within:bg-gray-100 focus-within:outline-0">
                    Continue with Google
                  </button>
                  <button className="flex items-center justify-center gap-2.5 w-full py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100 focus-within:bg-gray-100 focus-within:outline-0">
                    Continue with Facebook
                  </button>
                  <button className="flex items-center justify-center gap-2.5 w-full py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-900 transition-all duration-500 hover:bg-gray-100 focus-within:bg-gray-100 focus-within:outline-0">
                    Continue with Email
                  </button>
                </div>
                <p className="text-xs font-light text-gray-900 text-center">
                  Already have an account?{" "}
                  <a href="javascript:;" className="text-indigo-600">
                    {" "}
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            id="backdrop"
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
