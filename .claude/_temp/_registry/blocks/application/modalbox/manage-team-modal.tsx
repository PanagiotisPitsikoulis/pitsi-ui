export default function ManageTeamModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-4"
            data-modal-target="modalBox-4"
            data-modal-toggle="modalBox-4"
          >
            Collaborators
          </button>
          <div
            id="modalBox-4"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-[#111827] p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-white ">
                      Teams
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-4"
                      data-modal-target="modalBox-4"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-5">
                    Manage who can access this workspace
                  </p>
                  <form action="#" className="flex items-center gap-4 mb-4">
                    <div className="relative  text-gray-500 focus-within:text-gray-900 ">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                      <input
                        type="text"
                        id="default-search"
                        className="block w-full pr-3.5 pl-10 py-2.5 text-sm font-normal shadow-xs placeholder:text-gray-400 text-white bg-transparent border border-gray-500 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                        placeholder="Search name or email"
                      />
                    </div>
                    <button className="py-2.5 px-5 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 transition-all duration-500">
                      Invite
                    </button>
                  </form>
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex items-center w-full gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1720776749.png"
                        className="object-cover"
                      />
                      <div className="flex items-center w-full justify-between">
                        <div className="block">
                          <p className="text-sm font-medium text-white mb-1">
                            Alex Johnson
                          </p>
                          <p className="text-xs font-normal text-gray-500 ">
                            alex.johnson1@gmail.com
                          </p>
                        </div>
                        <p className="text-xs font-medium text-gray-500">
                          Owner
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center w-full gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1720776764.png"
                        className="object-cover"
                      />
                      <div className="flex items-center w-full justify-between">
                        <div className="block">
                          <p className="text-sm font-medium text-white mb-1">
                            Emily Parker
                          </p>
                          <p className="text-xs font-normal text-gray-500 ">
                            emily1parker@gmail.com
                          </p>
                        </div>
                        <div className="dropdown relative inline-flex">
                          <button
                            data-target="dropdown-default"
                            className="dropdown-toggle inline-flex justify-center items-center gap-1.5  text-xs text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-indigo-700 "
                          >
                            Can Edit
                          </button>
                          <div
                            id="dropdown-default"
                            className="dropdown-menu rounded-xl z-10 shadow-lg bg-white absolute top-full w-max mt-2 open hidden"
                            aria-labelledby="dropdown-default"
                          >
                            <ul className="py-2">
                              <li>
                                <a
                                  className="block px-3 text-xs py-2 hover:bg-gray-100 text-gray-900 font-medium"
                                  href="javascript:;"
                                >
                                  can view
                                </a>
                              </li>
                              <li>
                                <a
                                  className="block px-3 text-xs py-2 hover:bg-gray-100 text-gray-900 font-medium"
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
                    <div className="flex items-center w-full gap-3">
                      <img
                        src="https://pagedone.io/asset/uploads/1720776780.png"
                        className="object-cover"
                      />
                      <div className="flex items-center w-full justify-between">
                        <div className="block">
                          <p className="text-sm font-medium text-white mb-1">
                            Michael Smith
                          </p>
                          <p className="text-xs font-normal text-gray-500 ">
                            michael.smith@gmail.com
                          </p>
                        </div>
                        <div className="dropdown relative inline-flex">
                          <button
                            data-target="dropdown-2"
                            className="dropdown-toggle inline-flex justify-center items-center gap-1.5  text-xs text-indigo-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-indigo-700 "
                          >
                            Can View
                          </button>
                          <div
                            id="dropdown-2"
                            className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full w-max mt-2 open hidden"
                            aria-labelledby="dropdown-2"
                          >
                            <ul className="py-2">
                              <li>
                                <a
                                  className="block px-3 text-xs py-2 hover:bg-gray-100 text-gray-900 font-medium"
                                  href="javascript:;"
                                >
                                  can view
                                </a>
                              </li>
                              <li>
                                <a
                                  className="block px-3 text-xs py-2 hover:bg-gray-100 text-gray-900 font-medium"
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
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-[50]"
          ></div>
        </div>
      </div>
    </section>
  );
}
