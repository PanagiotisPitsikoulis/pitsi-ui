export default function ContactInfoSectionWithOfficeLocations() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-10 font-bold text-gray-900">
          Connect With Us
        </h2>
        <p className="font-inter pt-3 text-center text-lg leading-8 font-normal text-gray-500">
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
          <h4 className="font-manrope mb-5 text-2xl font-bold text-gray-900">
            Contact Details
          </h4>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 px-8 py-5">
              <h5 className="font-inter flex items-center gap-3 text-xl leading-8 font-semibold text-gray-900">
                {/* SVG removed */}Hotline
              </h5>
              {/* SVG removed */}
              <a className="font-inter text-base leading-7 font-semibold text-indigo-600">
                +00 00000 00000
              </a>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 px-8 py-5">
              <h5 className="font-inter flex items-center gap-3 text-xl leading-8 font-semibold text-gray-900">
                {/* SVG removed */}Email
              </h5>
              {/* SVG removed */}
              <a className="font-inter text-base leading-7 font-semibold text-indigo-600">
                mail@pagedone.io
              </a>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 px-8 py-5">
              <h5 className="font-inter flex items-center gap-3 text-xl leading-8 font-semibold text-gray-900">
                {/* SVG removed */}Address
              </h5>
              {/* SVG removed */}
              <a className="font-inter text-base leading-7 font-semibold text-indigo-600">
                Alpha Plus, Rajkot
              </a>
            </div>
          </div>
        </div>
        <div className="pt-9">
          <h4 className="font-manrope mb-5 text-2xl font-bold text-gray-900">
            Find Our Offices
          </h4>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 px-8 py-5">
              <h5 className="font-inter text-xl leading-8 font-semibold text-gray-900">
                Rajkot, India
              </h5>
              {/* SVG removed */}
              <div>
                <a className="text-lg leading-7 font-normal text-gray-900">
                  123 Park Lane,
                  <br />
                  Rajkot, Gujarat 360001
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 px-8 py-5">
              <h5 className="font-inter text-xl leading-8 font-semibold text-gray-900">
                Ahmedabad, India
              </h5>
              {/* SVG removed */}
              <div>
                <a className="text-lg leading-7 font-normal text-gray-900">
                  456 Green Avenue, <br />
                  Ahmedabad, Gujarat 380001
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
