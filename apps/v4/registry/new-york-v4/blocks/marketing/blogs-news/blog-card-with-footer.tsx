export default function BlogCardWithFooter() {
  return (
    <div className="py-24">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="font-manrope text-center text-4xl leading-snug font-bold text-indigo-600">
          Latest Projects
        </h2>
        <p className="mx-auto mt-3 mb-12 max-w-5xl px-6 text-center text-lg font-normal text-gray-500">
          This blog highlights a series of recent endeavors, providing insights
          into the design, development, and execution of each project. From
          residential renovations and commercial builds to landscape
        </p>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-8 lg:max-w-full lg:grid-cols-2">
          <div className="rounded-2xl bg-gray-50 px-6 py-5">
            <h3 className="font-manrope text-3xl leading-snug font-semibold text-gray-900">
              Learn about color theory, the impact of lighting.
            </h3>
            <p className="pt-4 pb-6 text-base font-normal text-gray-500">
              Whether you're looking to refresh a single room or revamp your
              entire house, this guide will help you make informed choices that
              reflect your personal style and enhance your living environment.
            </p>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1722664595.png"
                  alt="auther image"
                  className="rounded-full object-cover"
                />
                <span className="text-base font-medium text-gray-900">
                  Emily Johnson
                </span>
              </div>
              <p className="text-base font-medium text-indigo-600">
                Mar 26, 2024
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 px-6 py-5">
            <h3 className="font-manrope text-3xl leading-snug font-semibold text-gray-900">
              Journey to create your dream kitchen with this ultimate guide.
            </h3>
            <p className="pt-4 pb-6 text-base font-normal text-gray-500">
              Explore the latest trends, innovative layouts, and stylish
              finishes that will elevate your kitchen space. Whether you prefer
              a modern, rustic, or classic look.
            </p>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1722664609.png"
                  alt="auther image"
                  className="rounded-full object-cover"
                />
                <span className="text-base font-medium text-gray-900">
                  Benjamin Evans
                </span>
              </div>
              <p className="text-base font-medium text-indigo-600">
                Mar 30, 2024
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 px-6 py-5">
            <h3 className="font-manrope text-3xl leading-snug font-semibold text-gray-900">
              Comprehensive guide to fixing common plumbing problems.
            </h3>
            <p className="pt-4 pb-6 text-base font-normal text-gray-500">
              this guide provides step-by-step instructions and practical tips
              for addressing a wide range of plumbing issues. Learn how to
              identify the root cause of problems.
            </p>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1722664639.png"
                  alt="auther image"
                  className="rounded-full object-cover"
                />
                <span className="text-base font-medium text-gray-900">
                  James Miller
                </span>
              </div>
              <p className="text-base font-medium text-indigo-600">
                Mar 18, 2024
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-gray-50 px-6 py-5">
            <h3 className="font-manrope text-3xl leading-snug font-semibold text-gray-900">
              This guide offers practical and effective ways to transform
            </h3>
            <p className="pt-4 pb-6 text-base font-normal text-gray-500">
              Explore energy-efficient appliances, water-saving fixtures, and
              renewable energy options like solar panels. Learn about
              sustainable materials for home renovations.
            </p>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1722664661.png"
                  alt="auther image"
                  className="rounded-full object-cover"
                />
                <span className="text-base font-medium text-gray-900">
                  Emma Davis
                </span>
              </div>
              <p className="text-base font-medium text-indigo-600">
                Mar 20, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
