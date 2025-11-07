export default function CtaSectionForUniqueSeoSolutions() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl rounded-2xl bg-indigo-600 px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 lg:p-20">
          <div className="grid gap-20 lg:grid-cols-12">
            <img
              src="https://pagedone.io/asset/uploads/1759490202.png"
              alt="img"
              className="order-2 col-span-full mx-auto lg:order-1 lg:col-span-4 lg:h-full lg:w-full"
            />
            <div className="order-1 col-span-full my-auto lg:order-2 lg:col-span-8">
              <h2 className="font-manrope mb-3 text-center text-4xl font-bold text-white lg:text-start">
                Elevate Your Success with Unique
              </h2>
              <p className="font-inter mb-6 text-center text-base leading-5 font-normal text-white lg:text-start">
                Elevate your business to new heights with our custom creative
                solutions. We specialize in delivering innovative approaches
                that help
              </p>
              <ul className="mb-11 flex flex-col items-center justify-center gap-8 md:flex-row lg:justify-start">
                <li className="flex items-center gap-3 text-white">
                  {/* SVG removed */}
                  24*7 chat support of any time
                </li>
                <li className="flex items-center gap-3 text-white">
                  {/* SVG removed */}
                  Library of our specualist team
                </li>
              </ul>
              <div className="flex flex-col items-center justify-center gap-5 md:flex-row lg:justify-start">
                <a
                  href="#"
                  className="block rounded-full bg-white px-7 py-3.5 font-semibold text-indigo-600 shadow-sm transition-all duration-500 hover:bg-gray-200"
                >
                  Download app
                </a>
                <a
                  href="#"
                  className="block rounded-full border border-gray-300 px-7 py-3.5 font-semibold text-white shadow-sm transition-all duration-500 hover:bg-white hover:text-indigo-600"
                >
                  View demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
