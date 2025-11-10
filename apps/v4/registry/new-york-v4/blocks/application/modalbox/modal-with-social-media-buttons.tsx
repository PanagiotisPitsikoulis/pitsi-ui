export default function ModalWithSocialMediaButtons() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-34"
            data-modal-target="modalBox-34"
            data-modal-toggle="modalBox-34"
          >
            Login
          </button>
          <div
            id="modalBox-34"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="bg-white p-6">
                <div className="mb-4 flex w-full items-center justify-end">
                  <button
                    className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                    data-pd-overlay="#modalBox-34"
                    data-modal-target="modalBox-34"
                  ></button>
                </div>
                <h6 className="mb-1 text-center text-lg leading-8 font-bold text-gray-900">
                  Get Started
                </h6>
                <p className="mb-5 text-center text-xs font-normal text-gray-500">
                  You can access unlimited high resolution photo
                </p>
                <div className="mb-2 flex flex-col gap-3">
                  <button className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-gray-300 py-2.5 text-sm font-medium text-gray-900 transition-all duration-500 focus-within:bg-gray-100 focus-within:outline-0 hover:bg-gray-100">
                    Continue with Google
                  </button>
                  <button className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-gray-300 py-2.5 text-sm font-medium text-gray-900 transition-all duration-500 focus-within:bg-gray-100 focus-within:outline-0 hover:bg-gray-100">
                    Continue with Facebook
                  </button>
                  <button className="flex w-full items-center justify-center gap-2.5 rounded-lg border border-gray-300 py-2.5 text-sm font-medium text-gray-900 transition-all duration-500 focus-within:bg-gray-100 focus-within:outline-0 hover:bg-gray-100">
                    Continue with Email
                  </button>
                </div>
                <p className="text-center text-xs font-light text-gray-900">
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
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
