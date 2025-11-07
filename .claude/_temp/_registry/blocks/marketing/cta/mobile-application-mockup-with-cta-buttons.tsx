export default function MobileApplicationMockupWithCtaButtons() {
  return (
    <section className="py-16 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-2xl p-8 xl:p-16">
          <h2 className="font-manrope text-4xl text-white text-center font-bold mb-4">
            Download Pagedone{" "}
          </h2>
          <p className="text-lg text-white text-center mb-14">
            Pagedone is available on iOS &amp; Android.
          </p>
          <div className=" md:flex-row gap-4  flex-col flex items-center justify-center">
            <a
              href="javascript:;"
              className="cursor-pointer transition-all duration-500 hover:scale-105"
            >
              {/* SVG removed */}
            </a>
            <a
              href="javascript:;"
              className="cursor-pointer transition-all duration-500 hover:scale-105"
            >
              {/* SVG removed */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
