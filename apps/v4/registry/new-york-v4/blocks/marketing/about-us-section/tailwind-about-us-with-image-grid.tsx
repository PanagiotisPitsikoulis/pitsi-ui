export default function TailwindAboutUsWithImageGrid() {
  return (
    <section className="relative py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="inline-flex w-full flex-col items-start justify-start gap-9 lg:gap-12">
          <div className="flex w-full flex-col items-start justify-start gap-3">
            <span className="w-full text-center text-base leading-relaxed font-normal text-gray-400">
              About Us
            </span>
            <h2 className="font-manrope w-full text-center text-4xl leading-normal font-bold text-gray-900">
              Discover Our Story
            </h2>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-5">
            <p className="text-center text-base leading-relaxed font-normal text-gray-500">
              Welcome to Nature's Bliss Retreats, where tranquility meets
              adventure. Established in 2010, our mission is to provide
              immersive experiences that rejuvenate the mind, body, and soul.
              Nestled amidst nature's embrace, our retreats offer a sanctuary
              for relaxation and exploration. Whether you seek solace in serene
              landscapes or crave the thrill of outdoor activities, our diverse
              range of offerings caters to every traveler. With a commitment to
              sustainability and mindful living, we strive to create
              unforgettable moments that foster connection with both oneself and
              the natural world. Join us on a journey of discovery and find your
              bliss amidst the beauty of nature.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-8 md:grid-cols-2">
            <img
              className="h-auto w-full rounded-xl object-cover md:h-full"
              src="https://pagedone.io/asset/uploads/1717830207.png"
              alt="about Us iamge"
            />
            <img
              className="h-auto w-full rounded-xl object-cover md:h-full"
              src="https://pagedone.io/asset/uploads/1717830217.png"
              alt="about Us iamge"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
