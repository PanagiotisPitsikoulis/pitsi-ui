export default function BackgroundImageWithOverlayDescription() {
  return (
    <section>
      <div className="bg-norepeat bg-[url('https://pagedone.io/asset/uploads/1724839313.jpg')] bg-cover bg-center py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:gap-14">
            <div className="flex w-full flex-col items-center justify-start gap-4 lg:gap-8">
              <div className="flex w-full flex-col items-center justify-start gap-3">
                <span className="text-center text-lg leading-relaxed font-normal text-gray-200">
                  About Us
                </span>
                <h2 className="font-manrope w-full text-center text-5xl leading-tight font-bold text-white lg:max-w-3xl">
                  Masterpieces in Design The Art of Architecture
                </h2>
              </div>
              <p className="w-full text-center text-lg leading-relaxed font-normal text-white lg:max-w-4xl">
                The Art of Architecture. This section delves into iconic designs
                and innovative structures that define modern architecture.
                Discover how visionary architects blend creativity with
                functionality to create spaces that inspire and endure.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-3 lg:gap-10 xl:gap-14">
              <div className="inline-flex w-full flex-col items-center justify-start gap-4 lg:gap-6">
                <h2 className="font-manrope text-center text-5xl leading-tight font-bold text-white">
                  13M+
                </h2>
                <p className="text-center text-lg leading-relaxed font-normal text-gray-200">
                  We have reach more than 13 millions user in around the world
                </p>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start gap-4 lg:gap-6">
                <h2 className="font-manrope text-center text-5xl leading-tight font-bold text-white">
                  50M+
                </h2>
                <p className="text-center text-lg leading-relaxed font-normal text-gray-200">
                  Pagedone is one of most downloaded on google play store &amp;
                  apple store
                </p>
              </div>
              <div className="inline-flex w-full flex-col items-center justify-start gap-4 lg:gap-6">
                <h2 className="font-manrope text-center text-5xl leading-tight font-bold text-white">
                  98%
                </h2>
                <p className="text-center text-lg leading-relaxed font-normal text-gray-200">
                  Our user are satisfied using our services in their daily site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
