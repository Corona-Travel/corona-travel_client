import { Component, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenu, HiX, HiGlobe, HiUser } from "react-icons/hi";

type TopBarProps = {
  navigation?: Navigations;
  user?: null | UserInfo;
};

const TopBar = (props: TopBarProps) => {
  const {
    navigation = [
      { name: "Map", href: "/map", current: true },
      { name: "Quizes", href: "/quizes", current: false },
      { name: "Journeys", href: "/journeys", current: false },
    ],
    user = null,
  } = props;
  return (
    <Disclosure as="nav" className="bg-gray-200 bg-opacity-75">
      {({ open }) => (
        <>
          {/* wrapper for width */}
          <div className="max-w-7xl mx-auto px-2">
            {/* wrapper for flex */}
            <div className="relative flex items-center justify-between h-16">
              {/* Show burger for small screens */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {/* hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Icons */}
                <div className="flex-shrink-0 flex items-center">
                  {/* will be shown always */}
                  <HiGlobe className="block h-8 w-auto" />
                  {/* will be shown not on small screens */}
                  <span className="hidden sm:block px-3 w-auto text-gray-900">
                    Corona Travel
                  </span>
                </div>
                {/* Links that are shown on not small screens */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`
                            ${
                              item.current
                                ? "text-black"
                                : "text-gray-800 hover:bg-gray-300 hover:text-black"
                            }
                            px-3 py-2 rounded-md text-sm font-medium
                          `}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Show on the right */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user != null && (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="">
                        <span className="sr-only">Open user menu</span>
                        <HiUser
                          className="block h-8 w-auto"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              View Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } block px-4 py-2 text-sm text-gray-700`}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`
                      ${
                        item.current
                          ? "bg-gray-500 text-black"
                          : "text-gray-800 hover:bg-gray-600 hover:text-white"
                      } block px-3 py-2 rounded-md text-base font-medium`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default TopBar;
