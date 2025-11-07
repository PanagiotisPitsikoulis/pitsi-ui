export default function SectionHeaderWithCtaButtons() {
  return (
    <section className="py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-0">
          <div className="block">
            <h2 className="font-manrope font-bold text-2xl leading-9 text-gray-900 mb-3">
              last Tasks
            </h2>
            <p className="font-normal text-sm leading-6 text-gray-500">
              In my most recent task, I was engaged in creating detailed
              descriptions for a range of design components in project
            </p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="javascript:;"
                className="rounded-lg bg-gray-50 text-indigo-600 py-3 px-6 min-[470px]:px-7 font-medium text-base transition-all duration-500 hover:bg-indigo-50 tab-active:bg-indigo-50"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className="rounded-lg bg-gray-50 text-indigo-600 py-3 px-6 min-[470px]:px-7 font-medium text-base transition-all duration-500 hover:bg-indigo-50 tab-active:bg-indigo-50"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className="rounded-lg bg-gray-50 text-indigo-600 py-3 px-6 min-[470px]:px-7 font-medium text-base transition-all duration-500 hover:bg-indigo-50 tab-active:bg-indigo-50"
              >
                Contect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
