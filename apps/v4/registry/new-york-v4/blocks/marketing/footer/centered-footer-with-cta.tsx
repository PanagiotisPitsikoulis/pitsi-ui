export default function CenteredFooterWithCta() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <a href="https://pagedone.io/" className="flex justify-center">
            {/* SVG removed */}
          </a>
          <div className="py-8 text-center">
            <h3 className="font-manrope mb-4 text-3xl font-bold text-gray-900">
              Having revenue problem? We’ve got skills.
            </h3>
            <p className="text-gray-500">
              Joined over 400+ startups already growing with pagedone. what's
              holding you back?
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm text-gray-900 shadow-md transition-all duration-500 hover:bg-gray-100"
            >
              {/* SVG removed */}
              View demo
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm text-white shadow-md transition-all duration-500 hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 py-7">
          <div className="flex flex-col items-center justify-center gap-7 lg:flex-row lg:justify-between">
            <span className="text-sm text-gray-500">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
            <ul className="flex items-center gap-9 text-sm text-gray-500">
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
