export default function TailwindContactFormWithInfoOverlay() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-black text-4xl font-bold leading-[52px] font-manrope text-center lg:text-left">
              Reach Out to Us
              <p className="font-inter text-gray-700 text-lg font-normal leading-8 text-center lg:text-left">
                Reach out to us for any questions or assistance you need. We're
                here to provide support and ensure you get the help you're
                looking for.
              </p>
            </h2>
          </div>
          <button className="mx-auto lg:mx-0 w-max text-center bg-gray-900 py-2.5 px-5 text-white font-inter text-base font-semibold leading-7 rounded-full shadow-sm flex items-center flex-nowrap whitespace-nowrap gap-2 transition-all duration-500 hover:bg-gray-800">
            Contact Us {/* SVG removed */}
          </button>
        </div>
        <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-3xl p-8 bg-violet-50 flex flex-col items-center">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-violet-400 via-violet-100 to-violet-400 ">
              <div className="bg-violet-50 h-14 w-14 flex justify-center items-center rounded-full">
                {/* SVG removed */}
              </div>
            </div>
            <p className="text-gray-500 text-lg font-normal leading-7 pt-5 text-center mb-8">
              Send your project details to mail@pagedone.io, and we'll respond
              promptly to discuss how we can assist you.
            </p>
            <button className="transition-all duration-500 hover:bg-gray-800 mx-auto w-max text-center bg-gray-900 py-2.5 px-5 text-white font-inter text-base font-semibold leading-7 rounded-full shadow-sm flex items-center flex-nowrap whitespace-nowrap gap-2">
              Email US {/* SVG removed */}
            </button>
          </div>
          <div className="rounded-3xl p-8 bg-emerald-50 flex flex-col items-center">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-emerald-400 via-emerald-100 to-emerald-400 ">
              <div className="bg-emerald-50 h-14 w-14 flex justify-center items-center rounded-full">
                {/* SVG removed */}
              </div>
            </div>
            <p className="text-gray-500 text-lg font-normal leading-7 pt-5 text-center mb-8">
              Give us a call at +00 00000 00000, and we'll be ready to discuss
              your needs and provide the support you require.
            </p>
            <button className="transition-all duration-500 hover:bg-gray-800 mx-auto w-max text-center bg-gray-900 py-2.5 px-5 text-white font-inter text-base font-semibold leading-7 rounded-full shadow-sm flex items-center flex-nowrap whitespace-nowrap gap-2">
              Call US{/* SVG removed */}
            </button>
          </div>
          <div className="rounded-3xl p-8 bg-blue-50 flex flex-col items-center">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-400 via-blue-100 to-blue-400 ">
              <div className="bg-blue-50 h-14 w-14 flex justify-center items-center rounded-full">
                {/* SVG removed */}
              </div>
            </div>
            <p className="text-gray-500 text-lg font-normal leading-7 pt-5 text-center mb-8">
              Visit us at Alpha Plus, Rajkot - 360004, and we'll be happy to
              assist you with any inquiries or services you need.
            </p>
            <button className="transition-all duration-500 hover:bg-gray-800 mx-auto w-max text-center bg-gray-900 py-2.5 px-5 text-white font-inter text-base font-semibold leading-7 rounded-full shadow-sm flex items-center flex-nowrap whitespace-nowrap gap-2">
              Show Map{/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
