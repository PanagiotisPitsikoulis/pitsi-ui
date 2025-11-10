export default function FeaturesWithAutoHeightCards() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="inline-flex w-full flex-col items-start justify-start">
          <div className="flex w-full flex-col items-center justify-start gap-3.5 pb-10 lg:pb-12">
            <h2 className="font-manrope text-center text-4xl leading-normal font-bold text-gray-900">
              Essential Medical Website Features
            </h2>
            <p className="w-full text-center text-base leading-relaxed font-normal text-gray-500 lg:max-w-4xl">
              Essential Medical Website Features encompass tools and
              functionalities tailored to enhance patient care, streamline
              administrative tasks, and facilitate seamless communication
              between healthcare providers and patients.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <div className="inline-flex w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
                <div className="flex items-center justify-start gap-2.5 pt-1">
                  <div className="relative h-[22px] w-[22px]">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1.5">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Appointment Scheduling
                  </h5>
                  <p className="text-sm leading-snug font-normal text-gray-500">
                    Easily book, reschedule, and manage appointments online.
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
                <div className="inline-flex items-start justify-start gap-3">
                  <div className="flex items-center justify-start gap-2.5 pt-1">
                    <div className="flex h-[22px] w-[22px] items-center justify-center">
                      {/* SVG removed */}
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start gap-1.5">
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Patient Portal
                    </h5>
                    <p className="text-sm leading-snug font-normal text-gray-500">
                      Easily book, reschedule, and manage appointments online.
                    </p>
                  </div>
                </div>
                <img
                  className="h-auto w-full object-cover"
                  src="https://pagedone.io/asset/uploads/1720093899.png"
                  alt="Features Medical Website image"
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-5">
              <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
                <div className="inline-flex items-start justify-start gap-3">
                  <div className="flex items-center justify-start gap-2.5 pt-1">
                    <div className="relative h-[22px] w-[22px]">
                      {/* SVG removed */}
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start gap-1.5">
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Telemedicine Integration
                    </h5>
                    <p className="text-sm leading-snug font-normal text-gray-500">
                      Virtual consultations with healthcare professionals
                      through video calls.
                    </p>
                  </div>
                </div>
                <img
                  className="h-auto w-full rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1720093910.png"
                  alt="Features Medical Website image"
                />
              </div>
              <div className="inline-flex w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
                <div className="flex items-center justify-start gap-2.5 pt-1">
                  <div className="relative h-[22px] w-[22px]">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1.5">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Health Information Library
                  </h5>
                  <p className="text-sm leading-snug font-normal text-gray-500">
                    Comprehensive resource with articles, guides, and FAQs on
                    various health topics.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden w-full flex-col items-start justify-start gap-5 lg:flex">
              <div className="inline-flex w-full items-start justify-start gap-2.5 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
                <div className="flex items-center justify-start gap-2.5 pt-1">
                  <div className="relative h-[22px] w-[22px]">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1.5">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Provider Directory
                  </h5>
                  <p className="text-sm leading-snug font-normal break-all text-gray-500">
                    Detailed profiles of doctors and specialists, with
                    qualifications, specialties, and patient reviews.
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
                <div className="inline-flex items-start justify-start gap-3">
                  <div className="flex items-center justify-start gap-2.5 pt-1">
                    <div className="relative h-[22px] w-[22px]">
                      {/* SVG removed */}
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start justify-start gap-1.5">
                    <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                      Online Billing and Payments
                    </h5>
                    <p className="text-sm leading-snug font-normal text-gray-500">
                      Conveniently manage bills and make payments through a
                      secure online system.
                    </p>
                  </div>
                </div>
                <img
                  className="h-auto w-full rounded-lg object-cover"
                  src="https://pagedone.io/asset/uploads/1720093920.png"
                  alt="Features Medical Website image"
                />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-start gap-5 pt-5 md:grid-cols-2 lg:hidden lg:pt-0">
            <div className="inline-flex w-full items-start justify-start gap-3 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="flex items-center justify-start gap-2.5 pt-1">
                <div className="relative h-[22px] w-[22px]">
                  {/* SVG removed */}
                </div>
              </div>
              <div className="inline-flex flex-col items-start justify-start gap-1.5">
                <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                  Provider Directory
                </h5>
                <p className="text-sm leading-snug font-normal text-gray-500">
                  Detailed profiles of doctors and specialists, with
                  qualifications, specialties, and patient reviews.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-5 rounded-xl border border-gray-200 p-5 transition-all duration-700 ease-in-out hover:border-indigo-600">
              <div className="inline-flex items-start justify-start gap-3">
                <div className="flex items-center justify-start gap-2.5 pt-1">
                  <div className="relative h-[22px] w-[22px]">
                    {/* SVG removed */}
                  </div>
                </div>
                <div className="inline-flex flex-col items-start justify-start gap-1.5">
                  <h5 className="text-lg leading-relaxed font-medium text-gray-900">
                    Online Billing and Payments
                  </h5>
                  <p className="text-sm leading-snug font-normal text-gray-500">
                    Conveniently manage bills and make payments through a secure
                    online system.
                  </p>
                </div>
              </div>
              <img
                className="h-auto w-full rounded-lg object-cover"
                src="https://pagedone.io/asset/uploads/1720093920.png"
                alt="Features Medical Website image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
