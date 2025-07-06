import {IconMenu2, IconSun, IconMoon, IconX, IconWorld, IconFileCv} from "@tabler/icons-react"
import { Fragment, useEffect, useState, useMemo, useRef } from "react"

export function Navbar(){

    const [navigation, setNavigation] = useState([
      { name: "Sobre mi", href: "#SobreMi", current: true },
      { name: "Proyectos", href: "#Proyectos", current: false },
      { name: "Mi experiencia", href: "#Miexperiencia", current: false },
      { name: "Habilidades", href: "#Habilidades", current: false },
    ]);

    const [Open, setOpen] = useState(false);

    const handleClick = (name) => {
      setNavigation(navigation.map(item =>
        item.name === name ? { ...item, current: true } : { ...item, current: false }
      ));
    };

    function classNames(...classes) {
      return classes.filter(Boolean).join(" ")
    };

    const [theme, setTheme] = useState(('dark'));

    const cambiaTheme = () => {
      setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"))
    };

    useEffect(() => {
  
        if (theme == "dark") {
          document.querySelector("html").classList.add("dark")
        } else {
          document.querySelector("html").classList.remove("dark")
        }
      }, [theme])

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.getAttribute("id")
              setNavigation((nav) =>
                nav.map((item) =>
                  item.href === `#${sectionId}`
                    ? { ...item, current: true }
                    : { ...item, current: false }
                )
              )
            }
          })
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5, // se considera visible al 50%
        }
      )

      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => observer.observe(section))

      return () => {
        sections.forEach((section) => observer.unobserve(section))
      }
    }, [])

    return (
      <nav className="fixed w-full z-10 top-0 bg-gradient-to-b dark:from-indigo-950 dark:to-black from-indigo-300 to-blue-200 transition-colors duration-300" >
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex px-2 h-16 items-center justify-between">
            <button className="relative flex items-center sm:hidden rounded-md p-2 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset cursor-pointer" 
            onClick={() => setOpen(!Open)}>
              {Open ? (
                <IconX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                <IconMenu2 className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center right-7 ">
                <img
                  className="h-10 w-10 dark:bg-slate-900 bg-slate-100 rounded-full"
                  src="img/E.webp"
                  alt="Logo"
                  loading="lazy"
                />
              </div>
              <div className={classNames(
                  "flex flex-col absolute px-4 py-3 bg-gradient-to-t dark:from-indigo-950 dark:to-black from-indigo-300 to-blue-200 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 sm:ml-6 sm:relative sm:p-0 sm:bg-none transition-colors duration-300",
                  Open ? "top-full left-0 w-full shadow-md z-10" : "hidden sm:flex"
                )
              }>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-blue-400 text-black dark:bg-blue-900 dark:text-white"
                        : "text-gray-950 hover:bg-blue-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
                      "rounded-md px-2 py-2 text-sm font-medium transition-colors duration-300 bg-opacity-80 dark:bg-opacity-50"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => handleClick(item.name)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onClick={cambiaTheme}
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500">
                  <div className="flex w-full h-7 justify-center items-center">
                    <IconSun className="h-7 w-6 text-white" aria-hidden="true" />
                    <IconMoon className="h-7 w-6 text-white" aria-hidden="true" />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </nav>
    )
}