export default function CenteredFooterWithCta() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <a href="https://pagedone.io/" className="flex justify-center ">
            {/* SVG removed */}
          </a>
          <div className="py-8 text-center">
            <h3 className="font-manrope text-3xl text-gray-900 font-bold mb-4">
              Having revenue problem? We’ve got skills.
            </h3>
            <p className="text-gray-500">
              Joined over 400+ startups already growing with pagedone. what's
              holding you back?
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <a
              href="#"
              className="border border-gray-300 rounded-full shadow-md py-3 px-6 flex items-center gap-2 transition-all duration-500 text-sm text-gray-900 hover:bg-gray-100"
            >
              {/* SVG removed */}
              View demo
            </a>
            <a
              href="#"
              className="bg-indigo-600 rounded-full shadow-md py-3 px-6 flex items-center gap-2 transition-all duration-500  text-sm text-white hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col gap-7 lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500 ">
              ©<a href="https://pagedone.io/">pagedone</a> 2024, All rights
              reserved.
            </span>
            <ul className="flex items-center text-sm text-gray-500 gap-9">
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
  );
}
