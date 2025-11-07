export default function CtaSectionForUniqueSeoSolutions() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 rounded-2xl bg-indigo-600">
        <div className="p-6 sm:p-10 lg:p-20">
          <div className="grid lg:grid-cols-12 gap-20">
            <img
              src="https://pagedone.io/asset/uploads/1759490202.png"
              alt="img"
              className="order-2 lg:order-1 col-span-full lg:col-span-4 lg:h-full lg:w-full mx-auto"
            />
            <div className="col-span-full lg:col-span-8 my-auto order-1 lg:order-2">
              <h2 className="font-manrope text-4xl text-white text-center lg:text-start font-bold mb-3">
                Elevate Your Success with Unique
              </h2>
              <p className="mb-6 text-base font-normal leading-5 text-white font-inter text-center lg:text-start">
                Elevate your business to new heights with our custom creative
                solutions. We specialize in delivering innovative approaches
                that help
              </p>
              <ul className="flex items-center justify-center lg:justify-start gap-8 mb-11 flex-col md:flex-row">
                <li className="flex items-center gap-3 text-white">
                  {/* SVG removed */}
                  24*7 chat support of any time
                </li>
                <li className="flex items-center gap-3 text-white">
                  {/* SVG removed */}
                  Library of our specualist team
                </li>
              </ul>
              <div className="md:flex-row gap-5 flex-col flex items-center justify-center lg:justify-start">
                <a
                  href="#"
                  className="bg-white shadow-sm rounded-full font-semibold text-indigo-600 block py-3.5 px-7 transition-all duration-500 hover:bg-gray-200"
                >
                  Download app
                </a>
                <a
                  href="#"
                  className="border border-gray-300 shadow-sm rounded-full font-semibold text-white block py-3.5 px-7 transition-all duration-500 hover:bg-white hover:text-indigo-600"
                >
                  View demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
