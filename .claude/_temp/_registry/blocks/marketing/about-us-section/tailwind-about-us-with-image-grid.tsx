export default function TailwindAboutUsWithImageGrid() {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-12 gap-9 inline-flex">
          <div className="w-full flex-col justify-start items-start gap-3 flex">
            <span className="w-full text-center text-gray-400 text-base font-normal leading-relaxed">
              About Us
            </span>
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Discover Our Story
            </h2>
          </div>
          <div className="w-full flex-col justify-start items-start gap-5 flex">
            <p className="text-center text-gray-500 text-base font-normal leading-relaxed">
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
          <div className="w-full justify-start items-start gap-8 grid md:grid-cols-2 grid-cols-1">
            <img
              className="w-full md:h-full h-auto object-cover rounded-xl"
              src="https://pagedone.io/asset/uploads/1717830207.png"
              alt="about Us iamge"
            />
            <img
              className="w-full md:h-full h-auto object-cover rounded-xl"
              src="https://pagedone.io/asset/uploads/1717830217.png"
              alt="about Us iamge"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
