import { Fragment, useEffect, useState, useMemo} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { IconMenu2, IconSun, IconMoon, IconX, IconWorld, IconFileCv,IconBrandBulma, IconBrandGithub, IconBrandReact,IconBrandJavascript,IconBrandHtml5,IconBrandSass,IconBrandCss3,IconBrandVite,IconBrandWordpress,IconBrandLaravel,IconBrandTailwind,IconBrandMysql} from '@tabler/icons-react';
import gsap  from "gsap";
import './App.css'
import { ProyectCard } from './components/ProyectCard';


const navigation = [
  { name: 'Sobre mi', href: '#SobreMi', current: true },
  { name: 'Proyectos', href: '#Proyectos', current: false },
  { name: 'Mi experiencia', href: '#Miexperiencia', current: false },
  { name: 'Footer', href: '#Footer', current: false },
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
      <div className='fixed h-full w-full object-cover'>
        <img className='fixed h-full w-full opacity-30 dark:opacity-100 transition-all duration-500' src="img/pxfuel.jpg" alt="" />
        <div className='absolute z-10 h-full w-full bg-slate-50 dark:bg-black opacity-50'></div>
      </div>
      <Disclosure as="nav" className="sticky z-10 top-0 bg-gradient-to-b dark:from-indigo-950 dark:to-black from-indigo-500 to-blue-200 backdrop-blur-2xl transition-colors">
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
                          item.current ? 'bg-blue-400 text-black dark:bg-blue-900 dark:text-white' : 'text-gray-950 hover:bg-blue-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700',
                          'rounded-md px-3 py-2 text-sm font-medium transition-colors bg-opacity-80 dark:bg-opacity-50'
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
                      <IconSun className="h-7 w-6 text-white" aria-hidden="true" />
                      <IconMoon className="h-7 w-6 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </label>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 transition-colors">
                  <div>
                    <Menu.Button className="relative flex rounded-full p-1 text-sm text-blue-600 hover:text-blue-900 bg-gray-300 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500 dark:text-blue-400 dark:bg-black dark:border-gray-600 dark:focus:ring-blue-700 dark:hover:text-white">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Idioma</span>
                      <IconWorld className='h-6 w-6 rounded-full'/>
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
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            <i className='font-bold font-2xl p-2'>EN</i> English
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                           <i className='font-bold font-2xl p-2'>ES</i> Español
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
    <section className='flex justify-center py-6 my-4' id='SobreMi'>
      <div className='relative justify-center flex items-center flex-col h-1/2 lg:w-1/2 w-2/3'>
        <img className='w-20 content-center rounded-full ' src="img/Elias.jpg" alt="persona" />
        <h1 className='dark:text-gray-100 text-black text-3xl'>Elías Cordova</h1>
        <p className='dark:text-blue-300 text-blue-900 brillo'>Front-end Developer</p>
          <div className='mt-5 rounded-lg shadow-lg dark:bg-gray-950 bg-gray-100 px-5 py-3 border border-gray-300 dark:border-gray-800 dark:shadow-gray-800'>
            <p className='p-3 text-black dark:text-gray-100'>Soy un ingeniero en informática apasionado por la programación y la tecnología. 
            Con 24 años de edad, mi trayectoria académica me llevó a graduarme en la Universidad UNEXCA. 
            Durante mi tiempo en la universidad, descubrí mi amor por los videojuegos de estrategia y el anime, lo que me inspiró a explorar el mundo de la programación.</p>
            <div className='pt-5'>
            <a href="/docs/curriculum.pdf">
              <button className='flex justify-center items-center border rounded-lg p-2 border-indigo-300 bg-blue-200 hover:bg-blue-400 dark:border-indigo-700 dark:bg-blue-900 dark:text-gray-300 dark:hover:bg-blue-700 transition hover:scale-105'>
                <IconFileCv /> Descargar Curriculum
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className='flex justify-center py-6 my-4 flex-col items-center' id='Proyectos'>
      <h3 className='text-blue-800 text-3xl dark:text-blue-200 brillo hover:'>Proyectos</h3>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-2xl jusitify-around mx-auto px-5' >
        <ProyectCard titulo="Katherine boean" imagen="img/Katherineboan.jpg" link="https://katherineboean.com" 
          descripcion="Este proyecto fue desarrollado en base a las especificaciones proporcionadas por el cliente. Creé una landing page para promocionar su servicio, asegurándome de incluir información relevante y un diseño optimizado." >
          <IconBrandWordpress className='text-blue-800 dark:text-current' />
          <IconBrandSass className='text-blue-800 dark:text-current' />
          <IconBrandBulma className='text-blue-800 dark:text-current' />
          <IconBrandLaravel className='text-blue-800 dark:text-current'/>
        </ProyectCard>
        <ProyectCard titulo="OnceOnce Inmobiliaria" imagen="img/Onceonceinmobiliaria.jpg" link="https://onceonceinmobiliaria.com" 
          descripcion="Este proyecto fue durante mi experiencia en Movidagrafica.co, colaboré en el desarrollo de un sitio web para una agencia inmobiliaria." >
          <IconBrandWordpress className='text-blue-800 dark:text-current' />
          <IconBrandSass className='text-blue-800 dark:text-current' />
          <IconBrandBulma className='text-blue-800 dark:text-current' />
          <IconBrandLaravel className='text-blue-800 dark:text-current'/>
        </ProyectCard>
        <ProyectCard titulo="Proyecto 3" imagen="img/fondoazul.gif" link="" 
          descripcion="Este proyecto es una demostración de una página web estática desarrollada como molde para uso personal." >
        </ProyectCard>
      </div>
    </section>
    <section id='Miexperiencia' className='flex justify-center py-6 my-4 flex-col items-center'>
      <h4 className='text-blue-800 text-3xl dark:text-blue-200 brillo'>Mi experiencia</h4>
      <div className='w-full flex justify-around items-center relative'>
        <div className='relative'>
          <p className='text-black dark:text-white'>Mi primera experiencia trabajando como desarrollador web fue </p>
        </div>
        <div className='relative col-span-2 space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent xl:before:mx-auto xl:before:translate-x-0'>
          <article className='is-active group relative flex w-full items-center justify-between md:w-2/4 xl:w-full xl:justify-normal xl:even:flex-row-reverse xl:even:text-right'>
            <i className='flex h-5 w-5 shrink-0 items-center justify-center rounded-full shadow bg-blue-500 xl:order-1 xl:group-odd:-translate-x-1/2 xl:group-even:translate-x-1/2'></i>
            <div className='flex flex-col relative w-[calc(100%-4rem)] h-full p-4 py-4 shadow-lg border bg-slate-300 border-gray-300 dark:bg-slate-900 dark:border-gray-800 dark:shadow-gray-800 dark:text-white rounded-lg backdrop-blur-lg transition hover:scale-105'>
              <h5>Movidagrafica</h5>
              <p>FrontEnd Developer</p>
              <span>2023</span>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section id='Habilidades'>
    </section>
    <footer id='Footer' className='relative flex justify-center bg-gradient-to-t py-3 dark:from-indigo-950 dark:to-black from-indigo-500 to-blue-200 dark:text-gray-100'>
      <span>Copyright &copy; 2024 - Elias Cordova</span>
    </footer>
    </>
  )
}

export default App
