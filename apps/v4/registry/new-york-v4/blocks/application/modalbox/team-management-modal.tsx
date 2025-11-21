export default function TeamManagementModal() {
  return (
    <section className="relative py-8 sm:p-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 lg:px-8 xl:px-14">
        <div className="relative flex w-full justify-center">
          <button
            className="modal-button cursor-pointer rounded-full bg-indigo-600 px-5 py-2.5 text-center text-xs font-semibold text-white shadow-xs transition-all duration-500 hover:bg-indigo-700"
            data-pd-overlay="#modalBox-15"
            data-modal-target="modalBox-15"
            data-modal-toggle="modalBox-15"
          >
            Members
          </button>
          <div
            id="modalBox-15"
            className="pd-overlay fixed top-0 left-0 z-[100000] h-full w-full overflow-x-hidden overflow-y-auto"
          >
            <div className="modal-open:opacity-100 modal-open:duration-500 relative top-1/2 m-5 -translate-y-1/2 opacity-1 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex items-start bg-white p-6">
                <div className="block w-full">
                  <div className="mb-1 flex items-center justify-between">
                    <h6 className="text-lg leading-8 font-bold text-gray-900">
                      Members
                    </h6>
                    <button
                      className="close-modal-button text-gray-500 transition-all duration-300 hover:text-gray-900"
                      data-pd-overlay="#modalBox-15"
                      data-modal-target="modalBox-15"
                    ></button>
                  </div>
                  <p className="mb-8 text-xs font-normal text-gray-500">
                    Manage the authorization for this workspace.
                  </p>
                  <div className="mb-3.5 flex items-center justify-between rounded-lg bg-gray-50 p-2.5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-md border border-gray-200 bg-white p-2.5"></div>
                      <div>
                        <p className="mb-0.5 text-base font-medium text-black">
                          Public Access
                        </p>
                        <span className="text-xs font-normal text-gray-500">
                          Publish and sharer link with anyone
                        </span>
                      </div>
                    </div>
                    <div className="relative w-max">
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input type="checkbox" className="peer sr-only" />
                        <div className="peer h-5 w-9 rounded-full bg-gray-200 transition-all duration-500 ease-in-out peer-checked:bg-indigo-600 peer-focus:ring-transparent peer-focus:outline-0 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white hover:bg-gray-300 hover:peer-checked:bg-indigo-700"></div>
                      </label>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center justify-between rounded-lg border border-gray-200 py-2.5 pr-3.5 pl-4">
                    <p className="text-sm font-normal text-gray-400">
                      pagedone.com/product/blocks
                    </p>
                  </div>
                  <form action="#" className="mb-3.5 flex items-end gap-3">
                    <div className="relative">
                      <label className="mb-2 flex items-center text-xs font-medium text-gray-600">
                        Team Members
                      </label>
                      <div className="relative text-gray-500 focus-within:text-gray-900">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                        <input
                          type="text"
                          id="default-search"
                          className="block w-full rounded-lg border border-gray-300 bg-transparent py-2 pr-4 pl-10 text-sm leading-relaxed font-normal text-gray-900 placeholder-gray-400 shadow-xs focus:outline-none"
                          placeholder="mail@pagedone.com"
                        />
                      </div>
                    </div>
                    <input
                      type="submit"
                      id="submit"
                      className="block w-max cursor-pointer rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-indigo-700"
                      defaultValue="Invite"
                      required
                    />
                  </form>
                  <div className="flex w-full flex-col gap-3.5 divide-y divide-gray-200 rounded-lg border border-gray-200 p-2.5">
                    <div className="flex w-full items-center gap-3">
                      <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                        AJ
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <div className="block">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Alex Johnson{" "}
                            <span className="text-gray-500">(You)</span>
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
                    <div className="flex w-full items-center gap-3 pt-3.5">
                      <div className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                        EP
                      </div>
                      <div className="flex w-full items-center justify-between">
                        <div className="block">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Emily Parker
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            emily1parker@gmail.com
                          </p>
                        </div>
                        <div className="dropdown relative inline-flex">
                          <button
                            data-target="dropdown-default"
                            className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full text-center text-xs font-semibold text-gray-500 shadow-xs transition-all duration-500 hover:text-indigo-700"
                          >
                            Can Edit
                          </button>
                          <div
                            id="dropdown-default"
                            className="dropdown-menu z- open absolute top-full z-10 mt-2 hidden w-max rounded-xl bg-white shadow-lg"
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
                    <div className="flex w-full items-center gap-3 pt-3.5">
                      <img
                        src="https://pagedone.io/asset/uploads/1720776938.png"
                        className="h-10 w-10 object-cover"
                      />
                      <div className="flex w-full items-center justify-between">
                        <div className="block">
                          <p className="mb-1 text-sm font-medium text-gray-900">
                            Michael Smith
                          </p>
                          <p className="text-xs font-normal text-gray-500">
                            michael.smith@gmail.com
                          </p>
                        </div>
                        <div className="dropdown relative inline-flex">
                          <button
                            data-target="dropdown-2"
                            className="dropdown-toggle inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full text-center text-xs font-semibold text-gray-500 shadow-xs transition-all duration-500 hover:text-indigo-700"
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
