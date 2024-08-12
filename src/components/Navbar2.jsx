import {IconMenu2, IconSun, IconMoon, IconX, IconWorld, IconFileCv} from "@tabler/icons-react"

export function Navbar2(){

    const navigation = [
        { name: "Sobre mi", href: "#SobreMi", current: true },
        { name: "Proyectos", href: "#Proyectos", current: false },
        { name: "Mi experiencia", href: "#Miexperiencia", current: false },
        { name: "Footer", href: "#Footer", current: false },
    ]
    const cambiaTheme = () => {
        setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"))
    }

    return (
        <nav className="sticky z-10 top-0 bg-gradient-to-b dark:from-indigo-950 dark:to-black from-indigo-300 to-blue-200 backdrop-blur-2xl transition-colors">
            <div></div>
            <div>
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
                    >
                        {item.name}
                    </a>
                ))}
            </div>
            <div>
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
                </label></div>
            <div></div>
        </nav>
    )
}