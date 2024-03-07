import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, UserIcon, SunIcon, MoonIcon} from '@heroicons/react/24/outline'
import { gsap } from "gsap";
import './App.css'

const navigation = [
  { name: 'Sobre mi', href: '#SobreMi', current: true },
  { name: 'Proyectos', href: '#', current: false },
  { name: 'Habilidadrs', href: '#', current: false },
  { name: 'Footee', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  const [theme, setTheme] = useState(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return "dark"
    }
    return "light"
  });

  useEffect(()=>{
    if (theme == "dark"){
      document.querySelector('html').classList.add('dark')
    }
    else{
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const cambiaTheme = () => {
    setTheme(prevTheme => prevTheme == "light" ? "dark" : "light" )
  }

  return (

    

    <>
      <Disclosure as="nav" className="sticky top-0 bg-gradient-to-b dark:from-indigo-950 dark:to-black from-slate-500 to-slate-300 ">
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
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center right-7">
                  <img
                    className="h-10 w-auto dark:bg-slate-900 bg-slate-200 rounded-full" src="img/E.png" alt="Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-400 text-black dark:bg-blue-950 dark:text-white' : 'text-gray-950 hover:bg-gray-500 hover:text-white dark:text-gray-300 dark:hover:bg-gray-700',
                          'rounded-md px-3 py-2 text-sm font-medium bg-opacity-50'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">               
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" onClick={cambiaTheme}/>
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-900 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500">
                    <div className="flex w-full h-7 justify-center items-center">
                      <SunIcon className="h-7 w-6 text-white" aria-hidden="true" />
                      <MoonIcon className="h-7 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </label>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-gray-400 p-1 hover:text-white bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <UserIcon className='h-6 w-6 rounded-full' aria-hidden="true"/>
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
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
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
    <section className='flex justify-center h-screen dark:bg-black bg-gray-100'>
      <div className='relative justify-center flex items-center flex-col h-1/2 w-1/2'>
        <img className='w-20 content-center rounded-full dark:bg-slate-900 bg-slate-200' src="img/E.png" alt="logo" />
        <h1 className='dark:text-gray-100 text-black text-3xl'>Elías Cordova</h1>
        <p className='dark:text-blue-300 text-blue-900 brillo'>Desarrollador de buenos proyectos</p>
        <div className='mt-5 rounded-lg shadow-2xl px-5 py-3 border border-gray-200 dark:border-gray-700'>
          <p className='dark:text-gray-100 text-black'>Tengo 24 años, soy un ingeniero en informatica, egresado en la universidad UNEXCA, 
          Me gusta los videojuegos de estrategia y el anime, soy muy curioso y empeze a programar a mediados de la universidad. 
          He trabajado en el front-end, me considero flexible enfocado en el diseño y funcionalidades, 
          adicionalmente poseo conocimientos básicos del back-end.</p>
        </div>
      </div>
    </section>
    <section className=''>
      
    </section>
    </>
  )
}

export default App
