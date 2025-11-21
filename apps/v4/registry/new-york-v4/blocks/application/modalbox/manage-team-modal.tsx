export default function ManageTeamModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-4"
            data-modal-target="modalBox-4"
            data-modal-toggle="modalBox-4"
          >
            Collaborators
          </button>
          <div
            id="modalBox-4"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-[#111827] p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-white">
                      Teams
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-4"
                      data-modal-target="modalBox-4"
                    ></button>
                  </div>
                  <p className="mb-5 text-xs font-normal text-gray-500">
                    Manage who can access this workspace
                  </p>
                  <form action="#" className="mb-4 flex items-center gap-4">
                    <div className="relative text-gray-500 focus-within:text-gray-900">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full rounded-lg border border-gray-500 bg-transparent py-2.5 pr-3.5 pl-10 text-sm leading-relaxed font-normal text-white placeholder-gray-400 shadow-xs placeholder:text-gray-400 focus:outline-none"
                        placeholder="Search name or email"
                      />
                    </div>
                    <button className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-500 hover:bg-indigo-700">
                      Invite
                    </button>
                  </form>
                  <div className="flex w-full flex-col gap-4">
                    <div className="flex w-full items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1720776749.png"
                        className="object-cover"
                      />
                      <div className="flex w-full items-center justify-between">
                        <div className="block">
                          <p className="mb-1 text-sm font-medium text-white">
                            Alex Johnson
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            alex.johnson1@gmail.com
                          </p>
                        </div>
                        <p className="text-xs font-medium text-gray-500">
                          Owner
                        </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1720776764.png"
                        className="object-cover"
                      />
                      <div className="flex w-full items-center justify-between">
                        <div className="block">
                          <p className="mb-1 text-sm font-medium text-white">
                            Emily Parker
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            emily1parker@gmail.com
                          </p>
                        </div>
                        <div className="dropdown relative inline-flex">
                          <button
                            data-target="dropdown-default"
                            className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full text-center text-xs font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:text-indigo-700"
                          >
                            Can Edit
                          </button>
                          <div
                            id="dropdown-default"
                            className="dropdown-menu open absolute top-full z-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                            aria-labelledby="dropdown-default"
                          >
                            <ul className="py-2">
                              <li>
                                <a
                                  className="block px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100"
                                  href="javascript:;"
                                >
                                  can view
                                </a>
                              </li>
                              <li>
                                <a
                                  className="block px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100"
                                  href="javascript:;"
                                >
                                  can Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1720776780.png"
                        className="object-cover"
                      />
                      <div className="flex w-full items-center justify-between">
                        <div className="block">
                          <p className="mb-1 text-sm font-medium text-white">
                            Michael Smith
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            michael.smith@gmail.com
                          </p>
                        </div>
                        <div className="dropdown relative inline-flex">
                          <button
                            data-target="dropdown-2"
                            className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full text-center text-xs font-semibold text-indigo-600 shadow-xs transition-all duration-500 hover:text-indigo-700"
                          >
                            Can View
                          </button>
                          <div
                            id="dropdown-2"
                            className="dropdown-menu open absolute top-full mt-2 hidden w-max rounded-xl bg-white shadow-lg"
                            aria-labelledby="dropdown-2"
                          >
                            <ul className="py-2">
                              <li>
                                <a
                                  className="block px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100"
                                  href="javascript:;"
                                >
                                  can view
                                </a>
                              </li>
                              <li>
                                <a
                                  className="block px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100"
                                  href="javascript:;"
                                >
                                  can Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="backdrop"
            className="fixed top-0 left-0 z-[50] h-full w-full bg-black/50"
          ></div>
        </div>
      </div>
    </section>
  )
}
