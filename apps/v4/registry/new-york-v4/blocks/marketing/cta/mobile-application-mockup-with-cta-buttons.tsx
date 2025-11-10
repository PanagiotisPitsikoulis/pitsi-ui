export default function MobileApplicationMockupWithCtaButtons() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-indigo-600 p-8 xl:p-16">
          <h2 className="font-manrope mb-4 text-center text-4xl font-bold text-white">
            Download Pagedone{" "}
          </h2>
          <p className="mb-14 text-center text-lg text-white">
            Pagedone is available on iOS &amp; Android.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
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
  )
}
