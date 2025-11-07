export default function CtaPageWithMobileApplicationDownload() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse justify-between gap-32 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-12 lg:flex-row xl:p-24">
          <div className="relative w-full lg:w-2/6">
            <img
              src="https://pagedone.io/asset/uploads/1696241449.png"
              alt="CTA tailwind section"
              className="mx-auto -mb-12 rounded-t-3xl object-cover lg:mx-0 lg:-mb-12 xl:absolute xl:bottom-0 xl:-mb-24"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className="font-manrope mb-7 text-center text-5xl font-semibold text-white lg:text-left">
              Get ready to join pagedone{" "}
            </h2>
            <p className="mb-12 text-center text-lg leading-8 text-white lg:text-left">
              Download our app now from app stores &amp; play store and
              experience the ease of financing on your finger tips.
            </p>
            <div className="flex flex-col items-center justify-center gap-7 md:flex-row lg:justify-start">
              <a href="javascript:;" className="cursor-pointer">
                {/* SVG removed */}
              </a>
              <a href="javascript:;" className="cursor-pointer">
                {/* SVG removed */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
