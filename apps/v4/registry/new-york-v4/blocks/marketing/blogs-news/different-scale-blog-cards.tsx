export default function DifferentScaleBlogCards() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-gray-900">
          Our Prestigious Blog
        </h2>
        <p className="mt-3 mb-12 text-center text-base font-normal text-gray-500">
          Discover in-depth insights and expert analysis on our prestigious
          blog.
        </p>
        <div className="mx-auto grid max-w-lg grid-cols-10 gap-8 md:max-w-full">
          <div className="col-span-full rounded-3xl bg-gray-50 md:col-span-10 lg:col-span-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663795.png"
              alt="blog-image"
              className="h-auto w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 pt-6">
              <span className="text-base font-medium text-gray-600">
                May 27, 2024
              </span>
              <h5 className="font-manrope mt-5 mb-2 text-2xl leading-9 font-bold text-gray-900">
                From Startup to Success: Essential Strategies for Scaling Your
                Business
              </h5>
              <p className="text-lg font-normal text-gray-500">
                Focuses on growth strategies, funding options, team building,
                and operational scaling tips for emerging businesses.
              </p>
            </div>
          </div>
          <div className="col-span-full rounded-3xl bg-gray-50 md:col-span-5 lg:col-span-4">
            <img
              src="https://pagedone.io/asset/uploads/1722663808.png"
              alt="blog-image"
              className="h-auto w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 pt-6">
              <span className="text-base font-medium text-gray-600">
                June 8, 2024
              </span>
              <h5 className="font-manrope mt-5 mb-2 text-2xl leading-9 font-bold text-gray-900">
                Content Marketing Strategies for Engagement and Conversion
              </h5>
              <p className="text-lg font-normal text-gray-500">
                Learn effective content marketing strategies to boost engagement
                and drive conversions.
              </p>
            </div>
          </div>
          <div className="col-span-full rounded-3xl bg-gray-50 md:col-span-5 lg:col-span-4">
            <img
              src="https://pagedone.io/asset/uploads/1722663821.png"
              alt="blog-image"
              className="h-auto w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 pt-6">
              <span className="text-base font-medium text-gray-600">
                June 12, 2024
              </span>
              <h5 className="font-manrope mt-5 mb-2 text-2xl leading-9 font-bold text-gray-900">
                Responsive Design for Device Accessibility and Usability
              </h5>
              <p className="text-lg font-normal text-gray-500">
                Implement responsive design to ensure accessibility and
                usability across devices.
              </p>
            </div>
          </div>
          <div className="col-span-full rounded-3xl bg-gray-50 md:col-span-10 lg:col-span-6">
            <img
              src="https://pagedone.io/asset/uploads/1722663845.png"
              alt="blog-image"
              className="h-auto w-full rounded-t-3xl object-cover"
            />
            <div className="p-5 pt-6">
              <span className="text-base font-medium text-gray-600">
                June 30, 2024
              </span>
              <h5 className="font-manrope mt-5 mb-2 text-2xl leading-9 font-bold text-gray-900">
                Mobile App Development Strategies: From Concept to Launch in the
                App Store
              </h5>
              <p className="text-lg font-normal text-gray-500">
                Discover effective mobile app development strategies from
                concept to App Store launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
