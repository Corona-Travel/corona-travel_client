import { Component, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiMenu, HiX, HiGlobe, HiUser } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/router";

import { ModeSwitcher } from "components";

type TopBarProps = {
  navigation?: Navigations;
  user?: null | UserInfo;
  href?: any;
  as?: any;
};

const TopBar = (props: TopBarProps) => {
  const {
    navigation = [
      { name: "Map", href: "/map" },
      { name: "Quizes", href: "/quizes" },
      { name: "Journeys", href: "/journeys" },
    ],
    user = null,
  } = props;

  const { asPath } = useRouter();

  const navigationWithCurrent: NavigationsWithCurrent = [];

  for (let nav of navigation) {
    // let navWithCur: NavigationWithCurrent = {"name": nav.name, "href": nav.href, "current": nav.current}
    navigationWithCurrent.push({
      // name: nav["name"],
      // href: nav["href"],
      ...nav,
      current: asPath === nav["href"],
    });
  }

  return (
    <Disclosure as="nav" className="bg-gray-200 dark:bg-gray-800 bg-opacity-75">
      {({ open }) => (
        <>
          {/* wrapper for width */}
          <div className="max-w-7xl mx-auto px-2">
            {/* wrapper for flex */}
            <div className="relative flex items-center justify-between h-16">
              {/* Show burger for small screens */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX
                      className="fill-current text-black dark:text-white block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <HiMenu
                      className="fill-current text-black dark:text-white block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                {/* Icons */}
                <Link href="/">
                  <div className={`
                    ${asPath === "/" ? "bg-gray-300 dark:bg-gray-700" : "" }
                    flex-shrink-0 flex items-center hover:bg-gray-300 dark:hover:bg-gray-700 rounded cursor-pointer
                  `}>
                    {/* will be shown always */}
                    <HiGlobe className="fill-current text-black dark:text-white block h-8 w-auto" />
                    {/* will be shown not on small screens */}
                    <div className="hidden sm:block px-3 w-auto text-gray-900 dark:text-gray-100">
                      Corona Travel
                    </div>
                  </div>
                </Link>
                {/* Links that are shown on NOT small screens */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigationWithCurrent.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <div
                          className={`
                            ${
                              item.current
                              ? "text-black dark:text-white bg-gray-300 dark:bg-gray-700"
                              : "text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white"
                            }
                            px-3 py-2 rounded-md text-sm font-medium cursor-pointer
                          `}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* Show on the right */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ModeSwitcher />
                {/* Profile dropdown */}
                {user != null && (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="">
                        <span className="sr-only">Open user menu</span>
                        <HiUser
                          className="fill-current text-black dark:text-white block h-8 w-auto"
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-600 ring-1 ring-black dark:ring-gray-600 ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`${
                                active ? "bg-gray-100 dark:bg-gray-900" : ""
                              } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
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
                                active ? "bg-gray-100 dark:bg-gray-900" : ""
                              } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
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
                                active ? "bg-gray-100 dark:bg-gray-900" : ""
                              } block px-4 py-2 text-sm text-gray-700 dark:text-gray-300`}
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

          {/* mobile only buttons */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationWithCurrent.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`
                      ${
                        item.current
                          ? "bg-gray-500 text-black dark:text-white"
                          : "text-gray-800 dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-400 hover:text-white dark:hover:text-white"
                      } block pl-3 pr-4 py-2 rounded-md text-base font-medium`}
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
