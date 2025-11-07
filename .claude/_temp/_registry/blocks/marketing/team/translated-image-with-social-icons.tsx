export default function TranslatedImageWithSocialIcons() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <div className="lg:w-full w-96 mx-auto flex-col justify-start items-center gap-5 flex">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Welcome our talented team
            </h2>
            <p className="lg:max-w-4xl w-full text-center text-gray-500 text-lg font-normal leading-relaxed">
              We are thrilled to introduce the newest members of our team. Each
              pidual brings a wealth of experience, creativity, and passion to
              our organization.
            </p>
          </div>
          <div className="w-full lg:justify-start justify-center items-center gap-8 grid lg:grid-cols-3 grid-cols-1">
            <div className="group lg:w-full w-96 mx-auto flex-col lg:justify-start justify-center lg:items-start items-center inline-flex relative">
              <div className="bg-[#cdd3c5] justify-start items-start gap-2.5 inline-flex">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1722512819.png"
                  alt="Emma Davis image"
                />
              </div>
              <div className="w-full p-3 bg-white shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] justify-between items-center gap-11 inline-flex absolute bottom-0">
                <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                  <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                    Emma Davis
                  </h6>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Founder
                  </h6>
                </div>
                <a className="hover:scale-110 transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="group lg:w-full w-96 mx-auto flex-col justify-start items-start inline-flex relative">
              <div className="bg-[#cfd0d2] justify-start items-start gap-2.5 inline-flex">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1722512829.png"
                  alt="Ethan Parker image"
                />
              </div>
              <div className="w-full p-3 bg-white shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] justify-between items-center gap-11 inline-flex absolute bottom-0">
                <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                  <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                    Ethan Parker
                  </h6>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    Co-Founder
                  </h6>
                </div>
                <a className="hover:scale-110 transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
            <div className="group lg:w-full w-96 mx-auto flex-col justify-start items-start inline-flex relative">
              <div className="bg-gray-300 justify-start items-start gap-2.5 inline-flex">
                <img
                  className="object-cover"
                  src="https://pagedone.io/asset/uploads/1722512839.png"
                  alt="Metlinda Parker image"
                />
              </div>
              <div className="w-full p-3 bg-white shadow-[0px_15px_30px_-4px_rgba(16,_24,_40,_0.03)] justify-between items-center gap-11 inline-flex absolute bottom-0">
                <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                  <h6 className="text-gray-900 text-base font-medium leading-relaxed">
                    Metlinda Parker
                  </h6>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                    CEO
                  </h6>
                </div>
                <a className="hover:scale-110 transition-all duration-700 ease-in-out">
                  {/* SVG removed */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
