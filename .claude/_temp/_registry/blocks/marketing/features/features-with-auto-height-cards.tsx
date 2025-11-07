export default function FeaturesWithAutoHeightCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full flex-col justify-start items-start inline-flex">
          <div className="w-full flex-col justify-start items-center gap-3.5 flex lg:pb-12 pb-10">
            <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
              Essential Medical Website Features
            </h2>
            <p className="lg:max-w-4xl w-full text-center text-gray-500 text-base font-normal leading-relaxed">
              Essential Medical Website Features encompass tools and
              functionalities tailored to enhance patient care, streamline
              administrative tasks, and facilitate seamless communication
              between healthcare providers and patients.
            </p>
          </div>
          <div className="w-full justify-start items-start gap-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="w-full justify-start items-start gap-5 flex flex-col">
              <div className="w-full p-5 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-start items-start gap-3 inline-flex">
                <div className="pt-1 justify-start items-center gap-2.5 flex">
                  <div className="w-[22px] h-[22px] relative">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Appointment Scheduling
                  </h5>
                  <p className="text-gray-500 text-sm font-normal leading-snug">
                    Easily book, reschedule, and manage appointments online.
                  </p>
                </div>
              </div>
              <div className="w-full p-5 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-5 flex">
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="pt-1 justify-start items-center gap-2.5 flex">
                    <div className="w-[22px] h-[22px] justify-center items-center flex">
                      {/* SVG removed */}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Patient Portal
                    </h5>
                    <p className="text-gray-500 text-sm font-normal leading-snug">
                      Easily book, reschedule, and manage appointments online.
                    </p>
                  </div>
                </div>
                <img
                  className="w-full h-auto object-cover"
                  src="https://pagedone.io/asset/uploads/1720093899.png"
                  alt="Features Medical Website image"
                />
              </div>
            </div>
            <div className="w-full justify-start items-start gap-5 flex flex-col">
              <div className="w-full p-5 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-5 flex">
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="pt-1 justify-start items-center gap-2.5 flex">
                    <div className="w-[22px] h-[22px] relative">
                      {/* SVG removed */}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Telemedicine Integration
                    </h5>
                    <p className="text-gray-500 text-sm font-normal leading-snug">
                      Virtual consultations with healthcare professionals
                      through video calls.
                    </p>
                  </div>
                </div>
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  src="https://pagedone.io/asset/uploads/1720093910.png"
                  alt="Features Medical Website image"
                />
              </div>
              <div className="w-full p-5 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-start items-start gap-3 inline-flex">
                <div className="pt-1 justify-start items-center gap-2.5 flex">
                  <div className="w-[22px] h-[22px] relative">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Health Information Library
                  </h5>
                  <p className="text-gray-500 text-sm font-normal leading-snug">
                    Comprehensive resource with articles, guides, and FAQs on
                    various health topics.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full justify-start items-start gap-5 lg:flex hidden flex-col">
              <div className="w-full p-5 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-start items-start gap-2.5 inline-flex">
                <div className="pt-1 justify-start items-center gap-2.5 flex">
                  <div className="w-[22px] h-[22px] relative">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Provider Directory
                  </h5>
                  <p className="text-gray-500 text-sm font-normal leading-snug break-all">
                    Detailed profiles of doctors and specialists, with
                    qualifications, specialties, and patient reviews.
                  </p>
                </div>
              </div>
              <div className="w-full p-5 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-5 flex">
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="pt-1 justify-start items-center gap-2.5 flex">
                    <div className="w-[22px] h-[22px] relative">
                      {/* SVG removed */}
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                    <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                      Online Billing and Payments
                    </h5>
                    <p className="text-gray-500 text-sm font-normal leading-snug">
                      Conveniently manage bills and make payments through a
                      secure online system.
                    </p>
                  </div>
                </div>
                <img
                  className="w-full h-auto object-cover rounded-lg"
                  src="https://pagedone.io/asset/uploads/1720093920.png"
                  alt="Features Medical Website image"
                />
              </div>
            </div>
          </div>
          <div className="w-full justify-start items-start gap-5 lg:hidden grid lg:pt-0 pt-5 md:grid-cols-2 grid-cols-1">
            <div className="w-full p-5 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-start items-start gap-3 inline-flex">
              <div className="pt-1 justify-start items-center gap-2.5 flex">
                <div className="w-[22px] h-[22px] relative">
                  {/* SVG removed */}
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                  Provider Directory
                </h5>
                <p className="text-gray-500 text-sm font-normal leading-snug">
                  Detailed profiles of doctors and specialists, with
                  qualifications, specialties, and patient reviews.
                </p>
              </div>
            </div>
            <div className="w-full p-5 rounded-xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-start gap-3 inline-flex">
                <div className="pt-1 justify-start items-center gap-2.5 flex">
                  <div className="w-[22px] h-[22px] relative">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                  <h5 className="text-gray-900 text-lg font-medium leading-relaxed">
                    Online Billing and Payments
                  </h5>
                  <p className="text-gray-500 text-sm font-normal leading-snug">
                    Conveniently manage bills and make payments through a secure
                    online system.
                  </p>
                </div>
              </div>
              <img
                className="w-full h-auto object-cover rounded-lg"
                src="https://pagedone.io/asset/uploads/1720093920.png"
                alt="Features Medical Website image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
