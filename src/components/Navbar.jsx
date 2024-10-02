import { Disclosure, Menu, Transition } from "@headlessui/react"
import {IconMenu2, IconSun, IconMoon, IconX, IconWorld, IconFileCv} from "@tabler/icons-react"
import { Fragment, useEffect, useState, useMemo, useRef } from "react"

export function Navbar (){
    const [navigation, setNavigation] = useState([
      { name: "Sobre mi", href: "#SobreMi", current: true },
      { name: "Proyectos", href: "#Proyectos", current: false },
      { name: "Mi experiencia", href: "#Miexperiencia", current: false },
      { name: "Habilidades", href: "#Habilidades", current: false },
    ]);

    const handleClick = (name) => {
      setNavigation(navigation.map(item =>
        item.name === name ? { ...item, current: true } : { ...item, current: false }
      ));
    };
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ")
    }

    const cambiaTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"))
    }
    
    const [theme, setTheme] = useState(() => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark"
      }
      return "light"
    })

    useEffect(() => {
  
      if (theme == "dark") {
        document.querySelector("html").classList.add("dark")
      } else {
        document.querySelector("html").classList.remove("dark")
      }
    }, [theme])

    return (
        <Disclosure
        as="nav"
        className="fixed w-full z-10 top-0 bg-gradient-to-b dark:from-indigo-950 dark:to-black from-indigo-300 to-blue-200 backdrop-blur-2xl transition-colors"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <IconX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <IconMenu2 className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center right-7 ">
                    <img
                      className="h-10 w-auto shadow-2xl dark:bg-slate-900 bg-slate-100 rounded-full"
                      src="img/E.webp"
                      alt="Logo"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-blue-400 text-black dark:bg-blue-900 dark:text-white"
                              : "text-gray-950 hover:bg-blue-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
                            "rounded-md px-3 py-2 text-sm font-medium transition-colors bg-opacity-80 dark:bg-opacity-50"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => handleClick(item.name)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onClick={cambiaTheme}
                    />
                    <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500">
                      <div className="flex w-full h-7 justify-center items-center">
                        <IconSun
                          className="h-7 w-6 text-white"
                          aria-hidden="true"
                        />
                        <IconMoon
                          className="h-7 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </label>

                  {/* Profile dropdown */}
                  <Menu as="div" className="hidden relative ml-3 transition-colors">
                    <div>
                      <Menu.Button className="relative flex rounded-full p-1 text-sm text-blue-600 hover:text-blue-900 bg-gray-300 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500 dark:text-blue-400 dark:bg-black dark:border-gray-600 dark:focus:ring-blue-700 dark:hover:text-white">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Idioma</span>
                        <IconWorld className="h-6 w-6 rounded-full" />
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-colors">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <i className="font-bold font-2xl p-2">EN</i>{" "}
                              English
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <i className="font-bold font-2xl p-2">ES</i>{" "}
                              Español
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 w-full fixed bg-gradient-to-t">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-blue-300 text-black dark:bg-blue-900 dark:text-white' : 'text-gray-950 hover:bg-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
}