export default function SectionHeaderWithCtaButtons() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="block">
            <h2 className="font-manrope mb-3 text-2xl leading-9 font-bold text-gray-900">
              last Tasks
            </h2>
            <p className="text-sm leading-6 font-normal text-gray-500">
              In my most recent task, I was engaged in creating detailed
              descriptions for a range of design components in project
            </p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="javascript:;"
                className="tab-active:bg-indigo-50 rounded-lg bg-gray-50 px-6 py-3 text-base font-medium text-indigo-600 transition-all duration-500 hover:bg-indigo-50 min-[470px]:px-7"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className="tab-active:bg-indigo-50 rounded-lg bg-gray-50 px-6 py-3 text-base font-medium text-indigo-600 transition-all duration-500 hover:bg-indigo-50 min-[470px]:px-7"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className="tab-active:bg-indigo-50 rounded-lg bg-gray-50 px-6 py-3 text-base font-medium text-indigo-600 transition-all duration-500 hover:bg-indigo-50 min-[470px]:px-7"
              >
                Contect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
