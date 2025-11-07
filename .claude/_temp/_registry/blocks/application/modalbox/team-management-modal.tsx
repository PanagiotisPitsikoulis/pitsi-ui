export default function TeamManagementModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 xl:px-14 relative">
        <div className="w-full relative flex justify-center">
          <button
            className="modal-button py-2.5 px-5 text-xs bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-15"
            data-modal-target="modalBox-15"
            data-modal-toggle="modalBox-15"
          >
            Members
          </button>
          <div
            id="modalBox-15"
            className="pd-overlay  w-full h-full fixed top-0 left-0 z-[100000] overflow-x-hidden overflow-y-auto"
          >
            <div className="opacity-1 ease-out sm:max-w-sm sm:w-full m-5 relative top-1/2 -translate-y-1/2 sm:mx-auto modal-open:opacity-100 transition-all modal-open:duration-500">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="flex items-center justify-between mb-1">
                    <h6 className="text-lg font-bold leading-8 text-gray-900 ">
                      Members
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-15"
                      data-modal-target="modalBox-15"
                    ></button>
                  </div>
                  <p className="text-xs font-normal text-gray-500 mb-8">
                    Manage the authorization for this workspace.
                  </p>
                  <div className="p-2.5 rounded-lg bg-gray-50 flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md p-2.5 border border-gray-200 bg-white"></div>
                      <div>
                        <p className="text-base font-medium text-black mb-0.5">
                          Public Access
                        </p>
                        <span className="text-xs font-normal text-gray-500">
                          Publish and sharer link with anyone
                        </span>
                      </div>
                    </div>
                    <div className="w-max relative">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700"></div>
                      </label>
                    </div>
                  </div>
                  <div className="py-2.5 pr-3.5 pl-4 rounded-lg border border-gray-200 flex items-center justify-between mb-5">
                    <p className="text-sm font-normal text-gray-400">
                      pagedone.com/product/blocks
                    </p>
                  </div>
                  <form action="#" className="flex items-end gap-3 mb-3.5">
                    <div className="relative">
                      <label className="flex  items-center mb-2 text-gray-600 text-xs font-medium">
                        Team Members
                      </label>
                      <div className="relative  text-gray-500 focus-within:text-gray-900 ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "></div>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full pr-4 pl-10 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none leading-relaxed"
                          placeholder="mail@pagedone.com"
                        />
                      </div>
                    </div>
                    <input
                      type="submit"
                      id="submit"
                      className="block w-max rounded-lg px-5 py-2.5 text-sm shadow-xs text-white font-medium bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
                      defaultValue="Invite"
                      required
                    />
                  </form>
                  <div className="flex flex-col w-full gap-3.5 p-2.5 rounded-lg border border-gray-200 divide-y divide-gray-200">
                    <div className="flex items-center w-full gap-3">
                      <div className="w-10 min-w-[40px] h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                        AJ
                      </div>
                      <div className="flex items-center w-full justify-between">
                        <div className="block">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Alex Johnson{" "}
                            <span className="text-gray-500">(You)</span>
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
                    <div className="flex items-center w-full gap-3 pt-3.5">
                      <div className="w-10 min-w-[40px] h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                        EP
                      </div>
                      <div className="flex items-center w-full justify-between">
                        <div className="block">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Emily Parker
                          </p>
                          <p className="text-xs font-normal text-gray-500 ">
                            emily1parker@gmail.com
                          </p>
                        </div>
                        <div className="dropdown relative inline-flex">
                          <button
                            data-target="dropdown-default"
                            className="dropdown-toggle inline-flex justify-center items-center gap-1.5  text-xs text-gray-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-indigo-700 "
                          >
                            Can Edit
                          </button>
                          <div
                            id="dropdown-default"
                            className="dropdown-menu rounded-xl z- shadow-lg bg-white absolute z-10 top-full w-max mt-2 open hidden"
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
                    <div className="flex items-center w-full gap-3 pt-3.5">
                      <img
                        src="https://pagedone.io/asset/uploads/1720776938.png"
                        className="w-10 h-10 object-cover"
                      />
                      <div className="flex items-center w-full justify-between">
                        <div className="block">
                          <p className="text-sm font-medium text-gray-900 mb-1">
                            Michael Smith
                          </p>
                          <p className="text-xs font-normal text-gray-500 ">
                            michael.smith@gmail.com
                          </p>
                        </div>
                        <div className="dropdown relative inline-flex">
                          <button
                            data-target="dropdown-2"
                            className="dropdown-toggle inline-flex justify-center items-center gap-1.5  text-xs text-gray-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:text-indigo-700 "
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
