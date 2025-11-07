export default function ContactInfoSectionWithOfficeLocations() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-gray-900 text-4xl font-bold leading-10 font-manrope text-center">
          Connect With Us
        </h2>
        <p className="font-inter text-gray-500 text-lg font-normal leading-8 pt-3 text-center">
          our dedicated team is ready to support you.
        </p>
        <div className="pt-14">
          <img
            src="https://pagedone.io/asset/uploads/1759222820.png"
            alt="image"
            className="w-full"
          />
        </div>
        <div className="pt-9">
          <h4 className="text-gray-900 text-2xl font-bold font-manrope mb-5">
            Contact Details
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="px-8 py-5 flex flex-col gap-3 border border-gray-200 rounded-2xl">
              <h5 className="flex items-center gap-3 font-inter text-xl font-semibold leading-8 text-gray-900">
                {/* SVG removed */}Hotline
              </h5>
              {/* SVG removed */}
              <a className="font-inter text-base font-semibold leading-7 text-indigo-600">
                +00 00000 00000
              </a>
            </div>
            <div className="px-8 py-5 flex flex-col gap-3 border border-gray-200 rounded-2xl">
              <h5 className="flex items-center gap-3 font-inter text-xl font-semibold leading-8 text-gray-900">
                {/* SVG removed */}Email
              </h5>
              {/* SVG removed */}
              <a className="font-inter text-base font-semibold leading-7 text-indigo-600">
                mail@pagedone.io
              </a>
            </div>
            <div className="px-8 py-5 flex flex-col gap-3 border border-gray-200 rounded-2xl">
              <h5 className="flex items-center gap-3 font-inter text-xl font-semibold leading-8 text-gray-900">
                {/* SVG removed */}Address
              </h5>
              {/* SVG removed */}
              <a className="font-inter text-base font-semibold leading-7 text-indigo-600">
                Alpha Plus, Rajkot
              </a>
            </div>
          </div>
        </div>
        <div className="pt-9">
          <h4 className="text-gray-900 text-2xl font-bold font-manrope mb-5">
            Find Our Offices
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="px-8 py-5 flex flex-col gap-3 border border-gray-200 rounded-2xl">
              <h5 className="font-inter text-xl font-semibold leading-8 text-gray-900">
                Rajkot, India
              </h5>
              {/* SVG removed */}
              <div>
                <a className="text-gray-900 text-lg font-normal leading-7">
                  123 Park Lane,
                  <br />
                  Rajkot, Gujarat 360001
                </a>
              </div>
            </div>
            <div className="px-8 py-5 flex flex-col gap-3 border border-gray-200 rounded-2xl">
              <h5 className="font-inter text-xl font-semibold leading-8 text-gray-900">
                Ahmedabad, India
              </h5>
              {/* SVG removed */}
              <div>
                <a className="text-gray-900 text-lg font-normal leading-7">
                  456 Green Avenue, <br />
                  Ahmedabad, Gujarat 380001
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
