export default function BackgroundImageWithOverlayDescription() {
  return (
    <section>
      <div className="bg-[url('https://pagedone.io/asset/uploads/1724839313.jpg')] bg-center bg-norepeat bg-cover py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full flex-col justify-center items-center lg:gap-14 gap-10 inline-flex">
            <div className="w-full flex-col justify-start items-center lg:gap-8 gap-4 flex">
              <div className="w-full flex-col justify-start items-center gap-3 flex">
                <span className="text-center text-gray-200 text-lg font-normal leading-relaxed">
                  About Us
                </span>
                <h2 className="lg:max-w-3xl w-full text-center text-white text-5xl font-bold font-manrope leading-tight">
                  Masterpieces in Design The Art of Architecture
                </h2>
              </div>
              <p className="lg:max-w-4xl w-full text-center text-white text-lg font-normal leading-relaxed">
                The Art of Architecture. This section delves into iconic designs
                and innovative structures that define modern architecture.
                Discover how visionary architects blend creativity with
                functionality to create spaces that inspire and endure.
              </p>
            </div>
            <div className="w-full justify-start items-start xl:gap-14 lg:gap-10 gap-8 grid lg:grid-cols-3 grid-cols-1">
              <div className="w-full flex-col justify-start items-center lg:gap-6 gap-4 inline-flex">
                <h2 className="text-center text-white text-5xl font-bold font-manrope leading-tight">
                  13M+
                </h2>
                <p className="text-center text-gray-200 text-lg font-normal leading-relaxed">
                  We have reach more than 13 millions user in around the world
                </p>
              </div>
              <div className="w-full flex-col justify-start items-center lg:gap-6 gap-4 inline-flex">
                <h2 className="text-center text-white text-5xl font-bold font-manrope leading-tight">
                  50M+
                </h2>
                <p className="text-center text-gray-200 text-lg font-normal leading-relaxed">
                  Pagedone is one of most downloaded on google play store &amp;
                  apple store
                </p>
              </div>
              <div className="w-full flex-col justify-start items-center lg:gap-6 gap-4 inline-flex">
                <h2 className="text-center text-white text-5xl font-bold font-manrope leading-tight">
                  98%
                </h2>
                <p className="text-center text-gray-200 text-lg font-normal leading-relaxed">
                  Our user are satisfied using our services in their daily site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
