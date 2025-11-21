export default function TailwindContactFormWithInfoOverlay() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="font-manrope text-center text-4xl leading-[52px] font-bold text-black lg:text-left">
              Reach Out to Us
              <p className="font-inter text-center text-lg leading-8 font-normal text-gray-700 lg:text-left">
                Reach out to us for any questions or assistance you need. We're
                here to provide support and ensure you get the help you're
                looking for.
              </p>
            </h2>
          </div>
          <button className="font-inter mx-auto flex w-max flex-nowrap items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-center text-base leading-7 font-semibold whitespace-nowrap text-white shadow-sm transition-all duration-500 hover:bg-gray-800 lg:mx-0">
            Contact Us {/* SVG removed */}
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center rounded-3xl bg-violet-50 p-8">
            <div className="rounded-full bg-gradient-to-r from-violet-400 via-violet-100 to-violet-400 p-[1px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-50">
                {/* SVG removed */}
              </div>
            </div>
            <p className="mb-8 pt-5 text-center text-lg leading-7 font-normal text-gray-500">
              Send your project details to mail@pagedone.io, and we'll respond
              promptly to discuss how we can assist you.
            </p>
            <button className="font-inter mx-auto flex w-max flex-nowrap items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-center text-base leading-7 font-semibold whitespace-nowrap text-white shadow-sm transition-all duration-500 hover:bg-gray-800">
              Email US {/* SVG removed */}
            </button>
          </div>
          <div className="flex flex-col items-center rounded-3xl bg-emerald-50 p-8">
            <div className="rounded-full bg-gradient-to-r from-emerald-400 via-emerald-100 to-emerald-400 p-[1px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                {/* SVG removed */}
              </div>
            </div>
            <p className="mb-8 pt-5 text-center text-lg leading-7 font-normal text-gray-500">
              Give us a call at +00 00000 00000, and we'll be ready to discuss
              your needs and provide the support you require.
            </p>
            <button className="font-inter mx-auto flex w-max flex-nowrap items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-center text-base leading-7 font-semibold whitespace-nowrap text-white shadow-sm transition-all duration-500 hover:bg-gray-800">
              Call US{/* SVG removed */}
            </button>
          </div>
          <div className="flex flex-col items-center rounded-3xl bg-blue-50 p-8">
            <div className="rounded-full bg-gradient-to-r from-blue-400 via-blue-100 to-blue-400 p-[1px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                {/* SVG removed */}
              </div>
            </div>
            <p className="mb-8 pt-5 text-center text-lg leading-7 font-normal text-gray-500">
              Visit us at Alpha Plus, Rajkot - 360004, and we'll be happy to
              assist you with any inquiries or services you need.
            </p>
            <button className="font-inter mx-auto flex w-max flex-nowrap items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-center text-base leading-7 font-semibold whitespace-nowrap text-white shadow-sm transition-all duration-500 hover:bg-gray-800">
              Show Map{/* SVG removed */}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
